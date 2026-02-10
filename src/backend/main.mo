import Nat "mo:core/Nat";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Int "mo:core/Int";
import List "mo:core/List";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinStorage "blob-storage/Mixin";
import AccessControl "authorization/access-control";
import Storage "blob-storage/Storage";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  include MixinStorage();

  let dashboardData = Map.empty<Nat, Nat>();
  let dashboardDataMap = Map.empty<Nat, [Nat]>();
  let attendanceData = Map.empty<Nat, Nat>();
  let classData = Map.empty<Nat, Nat>();
  let schools = Map.empty<Int, DashboardEntry>();
  let visualNotebookData = Map.empty<Nat, VisualNotebookChapter>();
  var visualNotebookCounter = 0;
  let ocrExtractionDB = Map.empty<Nat, OCRExtraction>();
  let extractedQuestionsDB = Map.empty<Nat, List.List<Question>>();
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let classRegistry = Map.empty<Nat, ClassInfo>();
  let schoolRegistry = Map.empty<Nat, SchoolInfo>();
  let studentRegistry = Map.empty<Principal, Student>();
  let exactSchoolNameRegistry = Map.empty<Text, School>();

  var academicPerformance : AcademicPerformance = {
    totalStudents = 0;
    avgTerm1Marks = 0;
    avgTerm2Marks = 0;
    avgAttendance = 0;
  };

  module SchoolData {
    public func compare(a : SchoolData, b : SchoolData) : Order {
      if (a.year < b.year) { #less } else if (a.year > b.year) {
        #greater;
      } else if (a.classId < b.classId) {
        #less;
      } else if (a.classId > b.classId) {
        #greater;
      } else if (a.term1DataMap.size() < b.term1DataMap.size()) {
        #less;
      } else if (a.term1DataMap.size() > b.term1DataMap.size()) {
        #greater;
      } else if (a.term2DataMap.size() < b.term2DataMap.size()) {
        #less;
      } else if (a.term2DataMap.size() > b.term2DataMap.size()) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  type SchoolData = {
    year : Int;
    classId : Nat;
    term1DataMap : [(Nat, Nat)];
    term2DataMap : [(Nat, Nat)];
    classDataMap : [(Nat, Nat)];
  };

  type Order = {
    #less;
    #equal;
    #greater;
  };

  let schoolsData = List.empty<SchoolData>();

  func roundValueToNat(value : Float) : Nat {
    let roundedValue = Int.abs(value.toInt());
    if (roundedValue < 0) {
      0;
    } else {
      roundedValue;
    };
  };

  func roundToInt(value : Float) : Int {
    value.toInt();
  };

  var studentCounter = 0;
  var classCounter = 0;

  public type UserProfile = {
    name : Text;
    role : Text;
    schoolId : ?Nat;
    classId : ?Nat;
    coinBalance : Nat;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  type GeoLocation = {
    latitude : Float;
    longitude : Float;
  };

  type SchoolInfo = {
    schoolId : Nat;
    name : Text;
    location : GeoLocation;
  };

  type ClassInfo = {
    className : Text;
    classId : Nat;
    schoolId : Nat;
    location : GeoLocation;
  };

  type Student = {
    id : Nat;
    name : Text;
    rollNumber : Text;
    classId : Nat;
    attendance : Nat;
    term1Marks : Nat;
    term2Marks : Nat;
    schoolId : Nat;
  };

  type AcademicPerformance = {
    totalStudents : Nat;
    avgTerm1Marks : Nat;
    avgTerm2Marks : Nat;
    avgAttendance : Nat;
  };

  type MarksData = {
    year : Nat;
    term : Nat;
    average : Nat;
  };

  type AttendanceData = {
    year : Nat;
    percentage : Nat;
    className : Text;
  };

  type StudentProgress = {
    name : Text;
    rollNumber : Nat;
    attendanceData : [AttendanceData];
    marksData : [MarksData];
  };

  type SchoolStats = {
    cumulativeTerm1Marks : Nat;
    cumulativeTerm2Marks : Nat;
    cumulativeAttendance : Nat;
    totalStudents : Nat;
    location : GeoLocation;
  };

  type FloatingPointDashboard = {
    performance : AcademicPerformance;
    students : [Student];
    year : Nat;
    classes : [ClassInfo];
    dashboardStats : [YearClassStats];
    classDataMap : [(Nat, Nat)];
    term1DataMap : [(Nat, Nat)];
    term2DataMap : [(Nat, Nat)];
  };

  type CumulativeTrends = {
    year : Nat;
    term : Nat;
    average : Nat;
  };

  type YearClassStats = {
    year : Nat;
    term : Nat;
    average : Nat;
  };

  type CumulativeStats = {
    year : Nat;
    term1Average : Nat;
    term2Average : Nat;
    attendanceAverage : Nat;
    className : Text;
  };

  type DashboardEntry = {
    performance : AcademicPerformance;
    students : [Student];
    year : Nat;
    classes : [ClassInfo];
    dashboardStats : [YearClassStats];
    classDataMap : [(Nat, Nat)];
    term1DataMap : [(Nat, Nat)];
    term2DataMap : [(Nat, Nat)];
  };

  type AggregatedData = {
    schoolStats : [SchoolStats];
    cumulativeTrends : [CumulativeTrends];
    classTrends : [YearClassStats];
    classStats : [CumulativeStats];
    schools : [FloatingPointDashboard];
  };

  type School = {
    schoolId : Nat;
    name : Text;
  };

  func isTeacherOrAdmin(caller : Principal) : Bool {
    if (AccessControl.isAdmin(accessControlState, caller)) { true } else {
      switch (userProfiles.get(caller)) {
        case (null) { false };
        case (?profile) {
          profile.role == "teacher";
        };
      };
    };
  };

  func hasAccessToSchool(caller : Principal, schoolId : Nat) : Bool {
    if (AccessControl.isAdmin(accessControlState, caller)) {
      return true;
    };

    switch (userProfiles.get(caller)) {
      case (null) { false };
      case (?profile) {
        switch (profile.schoolId) {
          case (null) { false };
          case (?userSchoolId) {
            userSchoolId == schoolId;
          };
        };
      };
    };
  };

  func hasAccessToClass(caller : Principal, classId : Nat) : Bool {
    if (AccessControl.isAdmin(accessControlState, caller)) {
      return true;
    };

    switch (userProfiles.get(caller)) {
      case (null) { false };
      case (?profile) {
        switch (profile.classId) {
          case (null) {
            if (profile.role == "teacher") {
              switch (classRegistry.get(classId)) {
                case (null) { false };
                case (?classInfo) {
                  switch (profile.schoolId) {
                    case (null) { false };
                    case (?userSchoolId) {
                      userSchoolId == classInfo.schoolId;
                    };
                  };
                };
              };
            } else {
              false;
            };
          };
          case (?userClassId) {
            userClassId == classId;
          };
        };
      };
    };
  };

  func schoolExists(schoolId : Nat) : Bool {
    switch (schoolRegistry.get(schoolId)) {
      case (null) { false };
      case (?_) { true };
    };
  };

  func classExists(classId : Nat) : Bool {
    switch (classRegistry.get(classId)) {
      case (null) { false };
      case (?_) { true };
    };
  };

  func calculateCumulativeAverage(year : Int, term : Int, classId : Nat) : Nat {
    let matchingData = schoolsData.filter(
      func(d) {
        d.year == year and d.classId == classId
      }
    );

    if (matchingData.isEmpty()) { return 0 };

    let cumulativeList = List.empty<Float>();

    for (d in matchingData.values()) {
      let termMap = if (term == 1) { d.term1DataMap } else { d.term2DataMap };

      let valuesList = List.empty<Nat>();
      for (entry in termMap.values()) {
        valuesList.add(entry.1);
      };

      let classValues = valuesList.toArray();
      if (classValues.size() == 0) { return 0 };
      let sumValues = classValues.foldLeft(0, Nat.add);
      cumulativeList.add((sumValues / classValues.size()).toFloat());
    };

    let cumulative = cumulativeList.toArray();
    if (cumulative.size() == 0) { return 0 };
    let totalSum = cumulative.foldLeft(0.0, Float.add);
    let average = totalSum / cumulative.size().toFloat();
    average.toInt().toNat();
  };

  type OCRExtraction = {
    _id : Nat;
    fileName : Text;
    schoolId : Nat;
    classId : Nat;
    subjectId : Nat;
    uploadTime : Time.Time;
    pdfId : ?Storage.ExternalBlob;
    relevance : Text;
    content : Text;
    _extracted_Questions : Text;
    _total_text_parts : Int;
    _textbook_parts : Int;
    _percentage_textbook : Float;
    validationResults : Text;
    documentType : OCRDocumentType;
  };

  type Question = {
    questionId : Nat;
    questionText : Text;
    correctAnswer : Text;
    options : [Text];
  };

  type OCRDocumentType = {
    #textbook;
    #assignment;
    #worksheet;
  };

  public query ({ caller }) func getOCRExtractionByClass(_classId : Nat) : async [OCRExtraction] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view OCR extractions");
    };

    if (not hasAccessToClass(caller, _classId)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    let results = List.empty<OCRExtraction>();
    for (extraction in ocrExtractionDB.values()) {
      if (extraction.classId == _classId) {
        results.add(extraction);
      };
    };
    results.toArray();
  };

  public query ({ caller }) func getOCRExtractionBySubject(_subjectId : Nat) : async [OCRExtraction] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view OCR extractions");
    };

    let results = List.empty<OCRExtraction>();
    for (extraction in ocrExtractionDB.values()) {
      if (extraction.subjectId == _subjectId and hasAccessToClass(caller, extraction.classId)) {
        results.add(extraction);
      };
    };
    results.toArray();
  };

  public shared ({ caller }) func saveOCRExtraction(data : OCRExtraction) : async () {
    if (not isTeacherOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Only teachers and admins can save OCR extractions");
    };

    if (not schoolExists(data.schoolId)) {
      Runtime.trap("Invalid schoolId: School does not exist");
    };

    if (not classExists(data.classId)) {
      Runtime.trap("Invalid classId: Class does not exist");
    };

    if (not hasAccessToSchool(caller, data.schoolId)) {
      Runtime.trap("Unauthorized: You don't have access to this school");
    };

    if (not hasAccessToClass(caller, data.classId)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    switch (classRegistry.get(data.classId)) {
      case (null) {
        Runtime.trap("Invalid classId: Class not found");
      };
      case (?classInfo) {
        if (classInfo.schoolId != data.schoolId) {
          Runtime.trap("Class does not belong to the specified school");
        };
      };
    };

    ocrExtractionDB.add(data._id, data);
  };

  public shared ({ caller }) func saveQuestions(question : Question, questionId : Nat) : async () {
    if (not isTeacherOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Only teachers and admins can save OCR questions");
    };

    switch (ocrExtractionDB.get(questionId)) {
      case (null) {
        Runtime.trap("Invalid questionId: OCR extraction not found");
      };
      case (?extraction) {
        if (not hasAccessToSchool(caller, extraction.schoolId)) {
          Runtime.trap("Unauthorized: You don't have access to this school");
        };
        if (not hasAccessToClass(caller, extraction.classId)) {
          Runtime.trap("Unauthorized: You don't have access to this class");
        };
      };
    };

    let questionsList = switch (extractedQuestionsDB.get(questionId)) {
      case (null) {
        let newList = List.empty<Question>();
        extractedQuestionsDB.add(questionId, newList);
        newList;
      };
      case (?existingList) { existingList };
    };
    questionsList.add(question);
  };

  public query ({ caller }) func getQuestions(questionId : Nat) : async ?[Question] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view questions");
    };

    switch (ocrExtractionDB.get(questionId)) {
      case (null) {
        Runtime.trap("Invalid questionId: OCR extraction not found");
      };
      case (?extraction) {
        if (not hasAccessToClass(caller, extraction.classId)) {
          Runtime.trap("Unauthorized: You don't have access to this class");
        };
      };
    };

    switch (extractedQuestionsDB.get(questionId)) {
      case (null) { null };
      case (?questionsList) {
        ?questionsList.toArray();
      };
    };
  };

  public query ({ caller }) func getOCRExtractionStats() : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view OCR extraction statistics");
    };
    ocrExtractionDB.size();
  };

  public shared ({ caller }) func getRandomQuestions(questionId : Nat, count : Nat) : async ?[Question] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access question data");
    };

    switch (ocrExtractionDB.get(questionId)) {
      case (null) {
        Runtime.trap("Invalid questionId: OCR extraction not found");
      };
      case (?extraction) {
        if (not hasAccessToClass(caller, extraction.classId)) {
          Runtime.trap("Unauthorized: You don't have access to this class");
        };
      };
    };

    switch (extractedQuestionsDB.get(questionId)) {
      case (null) { null };
      case (?questionsList) {
        let totalQuestions = questionsList.size();
        if (totalQuestions <= count) {
          return ?questionsList.toArray();
        };
        let randomQuestions = questionsList.sliceToArray(0, count);
        ?randomQuestions;
      };
    };
  };

  public shared ({ caller }) func deleteOCRData(docId : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete OCR data");
    };
    ocrExtractionDB.remove(docId);
    extractedQuestionsDB.remove(docId);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile or admin access required");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };

    // Validate schoolId exists if provided
    switch (profile.schoolId) {
      case (null) {};
      case (?schoolId) {
        if (not schoolExists(schoolId)) {
          Runtime.trap("Invalid schoolId: School does not exist");
        };
      };
    };

    // Validate classId exists and belongs to school if provided
    switch (profile.classId) {
      case (null) {};
      case (?classId) {
        if (not classExists(classId)) {
          Runtime.trap("Invalid classId: Class does not exist");
        };

        switch (profile.schoolId) {
          case (null) {
            Runtime.trap("Cannot assign class without school");
          };
          case (?schoolId) {
            switch (classRegistry.get(classId)) {
              case (null) {
                Runtime.trap("Invalid classId: Class not found");
              };
              case (?classInfo) {
                if (classInfo.schoolId != schoolId) {
                  Runtime.trap("Class does not belong to the specified school");
                };
              };
            };
          };
        };
      };
    };

    // Get existing profile to preserve coin balance and check permissions
    let existingProfile = userProfiles.get(caller);

    // Preserve coin balance - users cannot modify their own balance
    let finalCoinBalance = switch (existingProfile) {
      case (null) { 0 };
      case (?existing) { existing.coinBalance };
    };

    // Check if user is trying to change school/class assignment
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      switch (existingProfile) {
        case (null) {
          // New profile - only allow if teacher/admin or student role
          if (profile.role != "student" and profile.role != "teacher") {
            Runtime.trap("Unauthorized: Invalid role assignment");
          };
        };
        case (?existing) {
          // Existing profile - check for unauthorized changes

          // Users cannot change their own role
          if (existing.role != profile.role) {
            Runtime.trap("Unauthorized: Cannot change your own role");
          };

          // Students cannot change school/class
          if (profile.role == "student") {
            switch (existing.schoolId, profile.schoolId) {
              case (?existingSchoolId, ?newSchoolId) {
                if (existingSchoolId != newSchoolId) {
                  Runtime.trap("Unauthorized: Students cannot change school assignment");
                };
              };
              case (_, _) {};
            };

            switch (existing.classId, profile.classId) {
              case (?existingClassId, ?newClassId) {
                if (existingClassId != newClassId) {
                  Runtime.trap("Unauthorized: Students cannot change class assignment");
                };
              };
              case (_, _) {};
            };
          };

          // Teachers can only change to schools/classes they have access to
          if (profile.role == "teacher") {
            switch (profile.schoolId) {
              case (null) {};
              case (?newSchoolId) {
                if (not hasAccessToSchool(caller, newSchoolId)) {
                  Runtime.trap("Unauthorized: You don't have access to this school");
                };
              };
            };

            switch (profile.classId) {
              case (null) {};
              case (?newClassId) {
                if (not hasAccessToClass(caller, newClassId)) {
                  Runtime.trap("Unauthorized: You don't have access to this class");
                };
              };
            };
          };
        };
      };
    };

    let finalProfile : UserProfile = {
      name = profile.name;
      role = profile.role;
      schoolId = profile.schoolId;
      classId = profile.classId;
      coinBalance = finalCoinBalance;
    };

    userProfiles.add(caller, finalProfile);
  };

  public shared ({ caller }) func updateUserCoinBalance(user : Principal, newBalance : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can update coin balances");
    };

    switch (userProfiles.get(user)) {
      case (null) {
        Runtime.trap("User profile not found");
      };
      case (?profile) {
        let updatedProfile : UserProfile = {
          profile with coinBalance = newBalance;
        };
        userProfiles.add(user, updatedProfile);
      };
    };
  };

  public shared ({ caller }) func addSchool(schoolId : Nat, name : Text, latitude : Float, longitude : Float) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can add schools");
    };

    let schoolInfo : SchoolInfo = {
      schoolId;
      name;
      location = {
        latitude;
        longitude;
      };
    };

    schoolRegistry.add(schoolId, schoolInfo);
  };

  public shared ({ caller }) func addClass(name : Text, classId : Nat, schoolId : Nat, latitude : Float, longitude : Float) : async () {
    if (not isTeacherOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Only teachers and admins can add classes");
    };

    if (not schoolExists(schoolId)) {
      Runtime.trap("Invalid schoolId: School does not exist");
    };

    if (not hasAccessToSchool(caller, schoolId)) {
      Runtime.trap("Unauthorized: You don't have access to this school");
    };

    let classInfo : ClassInfo = {
      className = name;
      classId;
      schoolId;
      location = {
        latitude;
        longitude;
      };
    };

    classRegistry.add(classId, classInfo);
  };

  public query ({ caller }) func getPublicDashboardData(year : Int, classId : Nat) : async [(Nat, Nat)] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view dashboard data");
    };

    if (not hasAccessToClass(caller, classId)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    // Filter dashboard data by year and classId
    let filteredData = List.empty<(Nat, Nat)>();
    for ((key, value) in dashboardData.entries()) {
      // In a real implementation, you would filter by year and classId
      // This is a placeholder that returns all data for the authorized class
      filteredData.add((key, value));
    };
    filteredData.toArray();
  };

  public query ({ caller }) func getAcademicPerformance(year : Int, classId : Nat) : async [(Nat, Nat)] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view academic performance");
    };

    if (not hasAccessToClass(caller, classId)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    // Filter academic performance data by year and classId
    let filteredData = List.empty<(Nat, Nat)>();
    for ((key, value) in dashboardData.entries()) {
      // In a real implementation, you would filter by year and classId
      // This is a placeholder that returns all data for the authorized class
      filteredData.add((key, value));
    };
    filteredData.toArray();
  };

  public query ({ caller }) func getStudentData(studentPrincipal : Principal) : async ?Student {
    if (caller != studentPrincipal and not isTeacherOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Can only view your own student data or teacher/admin access required");
    };

    switch (studentRegistry.get(studentPrincipal)) {
      case (null) { null };
      case (?studentData) {
        // Verify caller has access to this student's class
        if (caller != studentPrincipal) {
          if (not hasAccessToClass(caller, studentData.classId)) {
            Runtime.trap("Unauthorized: You don't have access to this student's class");
          };
        };
        ?studentData;
      };
    };
  };

  public shared ({ caller }) func registerStudent(student : Student, studentPrincipal : Principal) : async () {
    if (not isTeacherOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Only teachers and admins can register students");
    };

    if (not schoolExists(student.schoolId)) {
      Runtime.trap("Invalid schoolId: School does not exist");
    };

    if (not classExists(student.classId)) {
      Runtime.trap("Invalid classId: Class does not exist");
    };

    if (not hasAccessToSchool(caller, student.schoolId)) {
      Runtime.trap("Unauthorized: You don't have access to this school");
    };

    if (not hasAccessToClass(caller, student.classId)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    switch (classRegistry.get(student.classId)) {
      case (null) {
        Runtime.trap("Invalid classId: Class not found");
      };
      case (?classInfo) {
        if (classInfo.schoolId != student.schoolId) {
          Runtime.trap("Class does not belong to the specified school");
        };
      };
    };

    studentRegistry.add(studentPrincipal, student);
  };

  public query ({ caller }) func getCumulativeAverage(year : Int, term : Int, classId : Nat) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view statistics");
    };

    if (not hasAccessToClass(caller, classId)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    calculateCumulativeAverage(year, term, classId);
  };

  public type ApprovalStatus = {
    #pending;
    #approved;
    #rejected;
  };

  type Flashcard = {
    id : Nat;
    front : Text;
    back : Text;
    imageUrl : ?Text;
    exampleSentence : Text;
  };

  type SlideDeck = {
    id : Nat;
    title : Text;
    slides : [Text];
    summary : Text;
    subject : Text;
    classLevel : Nat;
    language : Language;
  };

  type Infographic = {
    id : Nat;
    title : Text;
    description : Text;
    flowDiagram : Text;
    interactiveElements : [Text];
  };

  type LogicExplanation = {
    id : Nat;
    concept : Text;
    stepByStepExplanation : Text;
    whyInsights : Text;
    language : Language;
  };

  type Language = {
    #english;
    #hindi;
    #hinglish;
  };

  public type VisualNotebookChapter = {
    id : Nat;
    title : Text;
    subject : Text;
    classLevel : Nat;
    flashcards : [Flashcard];
    slideDeck : SlideDeck;
    infographics : [Infographic];
    logicExplanations : [LogicExplanation];
    approvalStatus : ApprovalStatus;
    uploadedBy : Text;
    contentLanguage : Language;
    creationTime : Time.Time;
    extractionId : Nat;
    chapterType : ChapterType;
  };

  type ChapterType = {
    #science;
    #math;
  };

  type GameCharacter = {
    id : Text;
    name : Text;
    health : Nat;
    position : Position;
    imageUrl : ?Text;
  };

  type Enemy = {
    id : Text;
    name : Text;
    health : Nat;
    position : Position;
    typeOfEnemy : EnemyType;
    imageUrl : ?Text;
  };

  type EnemyType = {
    #boss;
    #miniBoss;
    #regular;
  };

  type Position = {
    x : Int;
    y : Int;
  };

  type QuizQuestion = {
    questionId : Nat;
    text : Text;
    options : [Text];
    correctAnswer : Text;
    difficulty : Difficulty;
  };

  type Difficulty = {
    #easy;
    #medium;
    #hard;
  };

  module Position {
    public func compare(a : Position, b : Position) : Order {
      if (a.x < b.x) {
        #less;
      } else if (a.x > b.x) {
        #greater;
      } else if (a.y < b.y) {
        #less;
      } else if (a.y > b.y) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  module GameCharacter {
    public func compare(a : GameCharacter, b : GameCharacter) : Order {
      Text.compare(a.id, b.id);
    };
  };

  module Enemy {
    public func compare(a : Enemy, b : Enemy) : Order {
      if (a.position.x < b.position.x) {
        #less;
      } else if (a.position.x > b.position.x) {
        #greater;
      } else if (a.position.y < b.position.y) {
        #less;
      } else if (a.position.y > b.position.y) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  public query ({ caller }) func getVisualNotebookChapters() : async [VisualNotebookChapter] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Authenticated users can access notebook chapters");
    };

    let chaptersList = List.empty<VisualNotebookChapter>();
    for (chapter in visualNotebookData.values()) {
      if (hasAccessToClass(caller, chapter.classLevel)) {
        chaptersList.add(chapter);
      };
    };
    chaptersList.toArray();
  };

  public query ({ caller }) func getVisualNotebookChapter(chapterId : Nat) : async ?VisualNotebookChapter {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access visual notebooks");
    };

    switch (visualNotebookData.get(chapterId)) {
      case (null) { null };
      case (?chapter) {
        if (not hasAccessToClass(caller, chapter.classLevel)) {
          Runtime.trap("Unauthorized: You don't have access to this class");
        };
        ?chapter;
      };
    };
  };

  public shared ({ caller }) func saveVisualNotebookChapter(notebook : VisualNotebookChapter) : async () {
    if (not isTeacherOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Only teachers and admins can save visual notebooks");
    };

    if (not hasAccessToClass(caller, notebook.classLevel)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    switch (ocrExtractionDB.get(notebook.extractionId)) {
      case (null) {
        Runtime.trap("Invalid extractionId: OCR extraction not found");
      };
      case (?extraction) {
        if (not hasAccessToSchool(caller, extraction.schoolId)) {
          Runtime.trap("Unauthorized: You don't have access to the school of this OCR extraction");
        };
        if (not hasAccessToClass(caller, extraction.classId)) {
          Runtime.trap("Unauthorized: You don't have access to the class of this OCR extraction");
        };
        if (extraction.classId != notebook.classLevel) {
          Runtime.trap("Class level mismatch: Visual notebook class doesn't match OCR extraction class");
        };
      };
    };

    let updatedNotebook : VisualNotebookChapter = {
      notebook with approvalStatus = #pending;
    };
    visualNotebookData.add(notebook.id, updatedNotebook);
  };

  public shared ({ caller }) func setVisualNotebookApprovalStatus(chapterId : Nat, status : ApprovalStatus) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can approve visual notebooks");
    };

    switch (visualNotebookData.get(chapterId)) {
      case (null) {
        Runtime.trap("Visual Notebook Chapter not found");
      };
      case (?existingData) {
        let updatedData = {
          existingData with approvalStatus = status;
        };
        visualNotebookData.add(chapterId, updatedData);
      };
    };
  };

  public shared ({ caller }) func deleteVisualNotebookChapter(chapterId : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete visual notebook chapters");
    };

    visualNotebookData.remove(chapterId);
  };

  public query ({ caller }) func getChaptersByClassAndSubject(classLevel : Nat, subject : Text) : async [VisualNotebookChapter] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access visual notebooks");
    };

    if (not hasAccessToClass(caller, classLevel)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    let chaptersList = List.empty<VisualNotebookChapter>();
    for (chapter in visualNotebookData.values()) {
      if (chapter.classLevel == classLevel and chapter.subject == subject) {
        chaptersList.add(chapter);
      };
    };
    chaptersList.toArray();
  };

  func convertFinalStringsToText(array : [Text]) : [Text] {
    let finalTexts = List.empty<Text>();
    for (element in array.values()) {
      if (not element.isEmpty()) {
        finalTexts.add(element);
      };
    };
    if (finalTexts.isEmpty()) {
      ["Default Text"];
    } else {
      finalTexts.toArray();
    };
  };

  func getNextVisualNotebookId() : Nat {
    visualNotebookCounter += 1;
    visualNotebookCounter;
  };

  public shared ({ caller }) func submitVisualNotebookChapter(
    id : Nat,
    title : Text,
    subject : Text,
    classLevel : Nat,
    flashcards : [Flashcard],
    slideDeck : SlideDeck,
    infographics : [Infographic],
    logicExplanations : [LogicExplanation],
    uploadedBy : Text,
    contentLanguage : Language,
    extractionId : Nat,
    chapterType : ChapterType,
    approvalStatus : ApprovalStatus,
  ) : async Nat {
    if (not isTeacherOrAdmin(caller)) {
      Runtime.trap("Unauthorized: Only teachers and admins can submit visual notebook chapters");
    };

    if (not hasAccessToClass(caller, classLevel)) {
      Runtime.trap("Unauthorized: You don't have access to this class");
    };

    switch (ocrExtractionDB.get(extractionId)) {
      case (null) {
        Runtime.trap("Invalid extractionId: OCR extraction not found");
      };
      case (?extraction) {
        if (not hasAccessToSchool(caller, extraction.schoolId)) {
          Runtime.trap("Unauthorized: You don't have access to the school of this OCR extraction");
        };
        if (not hasAccessToClass(caller, extraction.classId)) {
          Runtime.trap("Unauthorized: You don't have access to the class of this OCR extraction");
        };
        if (extraction.classId != classLevel) {
          Runtime.trap("Class level mismatch: Visual notebook class doesn't match OCR extraction class");
        };
      };
    };

    let newId = getNextVisualNotebookId();
    let newChapter : VisualNotebookChapter = {
      id = id;
      title;
      subject;
      classLevel;
      flashcards;
      slideDeck;
      infographics;
      logicExplanations;
      approvalStatus;
      uploadedBy;
      contentLanguage;
      creationTime = Time.now();
      extractionId;
      chapterType;
    };

    visualNotebookData.add(newId, newChapter);
    newId;
  };

  public query ({ caller }) func getVisualNotebookChaptersByExtractedId(extractionId : Nat) : async [VisualNotebookChapter] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access visual notebooks");
    };

    switch (ocrExtractionDB.get(extractionId)) {
      case (null) {
        Runtime.trap("OCR extraction not found");
      };
      case (?extraction) {
        if (not hasAccessToClass(caller, extraction.classId)) {
          Runtime.trap("Unauthorized: You don't have access to this class");
        };
      };
    };

    let chaptersList = List.empty<VisualNotebookChapter>();
    for (chapter in visualNotebookData.values()) {
      if (chapter.extractionId == extractionId) {
        chaptersList.add(chapter);
      };
    };
    chaptersList.toArray();
  };

  // Exact school name management/backed for frontend search-by-name
  public shared ({ caller }) func addSchoolWithExactNameLookup(schoolId : Nat, name : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can add schools");
    };

    let school : School = {
      schoolId;
      name;
    };

    exactSchoolNameRegistry.add(name, school);
  };

  // Fetch school by name (for autocomplete service)
  public query ({ caller }) func getSchoolByExactName(name : Text) : async ?School {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view school information");
    };

    exactSchoolNameRegistry.get(name);
  };
};
