import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface SlideDeck {
    id: bigint;
    title: string;
    subject: string;
    slides: Array<string>;
    language: Language;
    summary: string;
    classLevel: bigint;
}
export type Time = bigint;
export interface LogicExplanation {
    id: bigint;
    concept: string;
    language: Language;
    whyInsights: string;
    stepByStepExplanation: string;
}
export interface VisualNotebookChapter {
    id: bigint;
    logicExplanations: Array<LogicExplanation>;
    title: string;
    subject: string;
    contentLanguage: Language;
    slideDeck: SlideDeck;
    extractionId: bigint;
    approvalStatus: ApprovalStatus;
    infographics: Array<Infographic>;
    creationTime: Time;
    classLevel: bigint;
    flashcards: Array<Flashcard>;
    uploadedBy: string;
    chapterType: ChapterType;
}
export interface Infographic {
    id: bigint;
    title: string;
    description: string;
    flowDiagram: string;
    interactiveElements: Array<string>;
}
export interface Flashcard {
    id: bigint;
    front: string;
    exampleSentence: string;
    back: string;
    imageUrl?: string;
}
export interface School {
    name: string;
    schoolId: bigint;
}
export interface Question {
    correctAnswer: string;
    questionText: string;
    questionId: bigint;
    options: Array<string>;
}
export interface OCRExtraction {
    _id: bigint;
    documentType: OCRDocumentType;
    _percentage_textbook: number;
    content: string;
    _textbook_parts: bigint;
    validationResults: string;
    fileName: string;
    _total_text_parts: bigint;
    classId: bigint;
    schoolId: bigint;
    subjectId: bigint;
    relevance: string;
    pdfId?: ExternalBlob;
    uploadTime: Time;
    _extracted_Questions: string;
}
export interface UserProfile {
    coinBalance: bigint;
    name: string;
    role: string;
    classId?: bigint;
    schoolId?: bigint;
}
export interface Student {
    id: bigint;
    term2Marks: bigint;
    name: string;
    classId: bigint;
    schoolId: bigint;
    attendance: bigint;
    rollNumber: string;
    term1Marks: bigint;
}
export enum ApprovalStatus {
    pending = "pending",
    approved = "approved",
    rejected = "rejected"
}
export enum ChapterType {
    math = "math",
    science = "science"
}
export enum Language {
    hindi = "hindi",
    hinglish = "hinglish",
    english = "english"
}
export enum OCRDocumentType {
    assignment = "assignment",
    textbook = "textbook",
    worksheet = "worksheet"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addClass(name: string, classId: bigint, schoolId: bigint, latitude: number, longitude: number): Promise<void>;
    addSchool(schoolId: bigint, name: string, latitude: number, longitude: number): Promise<void>;
    addSchoolWithExactNameLookup(schoolId: bigint, name: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteOCRData(docId: bigint): Promise<void>;
    deleteVisualNotebookChapter(chapterId: bigint): Promise<void>;
    getAcademicPerformance(year: bigint, classId: bigint): Promise<Array<[bigint, bigint]>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getChaptersByClassAndSubject(classLevel: bigint, subject: string): Promise<Array<VisualNotebookChapter>>;
    getCumulativeAverage(year: bigint, term: bigint, classId: bigint): Promise<bigint>;
    getOCRExtractionByClass(_classId: bigint): Promise<Array<OCRExtraction>>;
    getOCRExtractionBySubject(_subjectId: bigint): Promise<Array<OCRExtraction>>;
    getOCRExtractionStats(): Promise<bigint>;
    getPublicDashboardData(year: bigint, classId: bigint): Promise<Array<[bigint, bigint]>>;
    getQuestions(questionId: bigint): Promise<Array<Question> | null>;
    getRandomQuestions(questionId: bigint, count: bigint): Promise<Array<Question> | null>;
    getSchoolByExactName(name: string): Promise<School | null>;
    getStudentData(studentPrincipal: Principal): Promise<Student | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getVisualNotebookChapter(chapterId: bigint): Promise<VisualNotebookChapter | null>;
    getVisualNotebookChapters(): Promise<Array<VisualNotebookChapter>>;
    getVisualNotebookChaptersByExtractedId(extractionId: bigint): Promise<Array<VisualNotebookChapter>>;
    isCallerAdmin(): Promise<boolean>;
    registerStudentWithSchoolName(student: Student, studentPrincipal: Principal, schoolName: string): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    saveOCRExtraction(data: OCRExtraction): Promise<void>;
    saveQuestions(question: Question, questionId: bigint): Promise<void>;
    saveVisualNotebookChapter(notebook: VisualNotebookChapter): Promise<void>;
    setVisualNotebookApprovalStatus(chapterId: bigint, status: ApprovalStatus): Promise<void>;
    submitVisualNotebookChapter(id: bigint, title: string, subject: string, classLevel: bigint, flashcards: Array<Flashcard>, slideDeck: SlideDeck, infographics: Array<Infographic>, logicExplanations: Array<LogicExplanation>, uploadedBy: string, contentLanguage: Language, extractionId: bigint, chapterType: ChapterType, approvalStatus: ApprovalStatus): Promise<bigint>;
    updateUserCoinBalance(user: Principal, newBalance: bigint): Promise<void>;
}
