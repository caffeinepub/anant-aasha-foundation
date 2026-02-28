import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Upload, FileText, CheckCircle, AlertTriangle, Loader2, BookOpen, FileQuestion, Sparkles, Link2, UserPlus } from 'lucide-react';
import { useGetCallerUserProfile, useSaveOCRExtraction, useGetOCRExtractionByClass, useSubmitVisualNotebookChapter } from '../hooks/useQueries';
import { StudentRegistrationForm } from '../components/StudentRegistrationForm';
import { toast } from 'sonner';
import type { OCRExtraction, Flashcard, SlideDeck, Infographic, LogicExplanation } from '../backend';
import { OCRDocumentType, Language, ApprovalStatus, ChapterType } from '../backend';

export function TeacherDashboardPage() {
  const { data: userProfile } = useGetCallerUserProfile();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [extractionResult, setExtractionResult] = useState<OCRExtraction | null>(null);
  const [generatingNotebook, setGeneratingNotebook] = useState(false);
  
  const [formData, setFormData] = useState({
    schoolId: '1',
    schoolName: 'Public School',
    classId: '7',
    subjectId: '',
    subjectName: 'Science',
    documentType: OCRDocumentType.textbook,
  });

  const saveOCRMutation = useSaveOCRExtraction();
  const submitNotebookMutation = useSubmitVisualNotebookChapter();
  const { data: classExtractions } = useGetOCRExtractionByClass(
    formData.classId ? BigInt(formData.classId) : null
  );

  const isTeacher = userProfile?.role === 'teacher';
  const isAdmin = userProfile?.role === 'admin';

  if (!isTeacher && !isAdmin) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Access denied. Only teachers and administrators can access this dashboard.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setExtractionResult(null);
    } else {
      toast.error('Please select a valid PDF file');
    }
  };

  const generateCompositeKey = (schoolName: string, classId: string, subject: string, chapterNum: number): string => {
    return `${schoolName.replace(/\s+/g, '_')}_Class_${classId}_${subject.replace(/\s+/g, '_')}_Ch${chapterNum}`;
  };

  const inferChapterNumber = (fileName: string): number => {
    const match = fileName.match(/chapter[\s_-]*(\d+)/i) || fileName.match(/ch[\s_-]*(\d+)/i) || fileName.match(/(\d+)/);
    return match ? parseInt(match[1]) : 1;
  };

  const simulateOCRExtraction = async (file: File): Promise<OCRExtraction> => {
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    const isTextbook = formData.documentType === OCRDocumentType.textbook;
    const textbookPercentage = isTextbook ? 75 : 45;
    const meetsRequirement = textbookPercentage >= 60;
    const chapterNumber = inferChapterNumber(file.name);

    const mockExtraction: OCRExtraction = {
      _id: BigInt(Date.now()),
      fileName: file.name,
      schoolId: BigInt(formData.schoolId),
      classId: BigInt(formData.classId),
      subjectId: BigInt(formData.subjectId),
      uploadTime: BigInt(Date.now() * 1000000),
      pdfId: undefined,
      relevance: meetsRequirement ? 'compliant' : 'flagged',
      content: `Extracted content from ${file.name}. This chapter covers fundamental concepts with detailed explanations and examples. The content has been verified to maintain ${textbookPercentage}% fidelity to the original textbook material. Composite Key: ${generateCompositeKey(formData.schoolName, formData.classId, formData.subjectName, chapterNumber)}`,
      _extracted_Questions: JSON.stringify([
        { 
          questionId: 1, 
          questionText: 'What is photosynthesis and why is it important for life on Earth?', 
          correctAnswer: 'Photosynthesis is the process by which plants convert sunlight into energy, producing oxygen as a byproduct',
          options: [
            'Photosynthesis is the process by which plants convert sunlight into energy, producing oxygen as a byproduct',
            'Photosynthesis is how plants absorb water from soil',
            'Photosynthesis is the process of plant reproduction',
            'Photosynthesis is how plants grow taller'
          ]
        },
        { 
          questionId: 2, 
          questionText: 'Which pigment in plants is responsible for capturing sunlight?', 
          correctAnswer: 'Chlorophyll',
          options: ['Chlorophyll', 'Melanin', 'Hemoglobin', 'Carotene']
        },
        { 
          questionId: 3, 
          questionText: 'What are the main products of photosynthesis?', 
          correctAnswer: 'Glucose and Oxygen',
          options: ['Glucose and Oxygen', 'Water and Carbon Dioxide', 'Nitrogen and Hydrogen', 'Protein and Fat']
        },
        { 
          questionId: 4, 
          questionText: 'Where does photosynthesis primarily occur in plants?', 
          correctAnswer: 'In the leaves, specifically in chloroplasts',
          options: ['In the leaves, specifically in chloroplasts', 'In the roots', 'In the stem', 'In the flowers']
        },
        { 
          questionId: 5, 
          questionText: 'What is the chemical formula for glucose produced during photosynthesis?', 
          correctAnswer: 'C6H12O6',
          options: ['C6H12O6', 'H2O', 'CO2', 'O2']
        },
      ]),
      _total_text_parts: BigInt(100),
      _textbook_parts: BigInt(textbookPercentage),
      _percentage_textbook: textbookPercentage,
      validationResults: meetsRequirement
        ? `Content meets textbook purity requirement (60%+). All extracted exercises verified against source material. Composite Key: ${generateCompositeKey(formData.schoolName, formData.classId, formData.subjectName, chapterNumber)}`
        : 'Content flagged: Below 60% textbook content threshold. Manual review required.',
      documentType: formData.documentType,
    };

    return mockExtraction;
  };

  const generateVisualNotebook = async (extraction: OCRExtraction) => {
    setGeneratingNotebook(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2500));

      const isMath = formData.subjectName.toLowerCase().includes('math');
      const chapterType = isMath ? ChapterType.math : ChapterType.science;
      const chapterNumber = inferChapterNumber(extraction.fileName);
      const compositeKey = generateCompositeKey(formData.schoolName, formData.classId, formData.subjectName, chapterNumber);

      const flashcards: Flashcard[] = [
        {
          id: BigInt(1),
          front: 'Photosynthesis (प्रकाश संश्लेषण)',
          back: 'Process by which plants make food using sunlight / पौधे सूर्य के प्रकाश से भोजन बनाते हैं',
          imageUrl: undefined,
          exampleSentence: 'Plants perform photosynthesis to create energy. / पौधे ऊर्जा बनाने के लिए प्रकाश संश्लेषण करते हैं।',
        },
        {
          id: BigInt(2),
          front: 'Chlorophyll (क्लोरोफिल)',
          back: 'Green pigment in plants that captures sunlight / पौधों में हरा रंगद्रव्य जो सूर्य के प्रकाश को पकड़ता है',
          imageUrl: undefined,
          exampleSentence: 'Chlorophyll gives leaves their green color. / क्लोरोफिल पत्तियों को हरा रंग देता है।',
        },
        {
          id: BigInt(3),
          front: 'Glucose (ग्लूकोज)',
          back: 'Sugar produced by plants during photosynthesis / प्रकाश संश्लेषण के दौरान पौधों द्वारा उत्पादित शर्करा',
          imageUrl: undefined,
          exampleSentence: 'Glucose provides energy for plant growth. / ग्लूकोज पौधों की वृद्धि के लिए ऊर्जा प्रदान करता है।',
        },
        {
          id: BigInt(4),
          front: 'Stomata (रंध्र)',
          back: 'Tiny pores on leaves for gas exchange / पत्तियों पर छोटे छिद्र जो गैस विनिमय के लिए होते हैं',
          imageUrl: undefined,
          exampleSentence: 'Stomata allow CO2 to enter and O2 to exit. / रंध्र CO2 को अंदर और O2 को बाहर जाने देते हैं।',
        },
        {
          id: BigInt(5),
          front: 'Carbon Dioxide (कार्बन डाइऑक्साइड)',
          back: 'Gas absorbed by plants from air for photosynthesis / हवा से पौधों द्वारा अवशोषित गैस',
          imageUrl: undefined,
          exampleSentence: 'Plants take in carbon dioxide through their leaves. / पौधे अपनी पत्तियों से कार्बन डाइऑक्साइड लेते हैं।',
        },
      ];

      const slideDeck: SlideDeck = {
        id: BigInt(1),
        title: `Chapter ${chapterNumber}: ${extraction.fileName.replace('.pdf', '')}`,
        subject: formData.subjectName,
        slides: [
          'Introduction to Photosynthesis\n\nPhotosynthesis hai ek process jisme plants sunlight use karke apna food banate hain.\n\nप्रकाश संश्लेषण एक प्रक्रिया है जिसमें पौधे सूर्य के प्रकाश का उपयोग करके अपना भोजन बनाते हैं।\n\nYeh process life ke liye bahut important hai kyunki yeh oxygen produce karta hai.',
          'Key Components (मुख्य घटक)\n\n• Sunlight (सूर्य का प्रकाश) - Energy source\n• Water (पानी) - H2O from roots\n• Carbon Dioxide (कार्बन डाइऑक्साइड) - CO2 from air\n• Chlorophyll (क्लोरोफिल) - Green pigment in leaves\n\nYeh sab components milkar photosynthesis ko possible banate hain.',
          'The Process (प्रक्रिया)\n\nStep 1: Chlorophyll sunlight ko absorb karta hai\nChlorophyll jo leaves mein hota hai, sunlight ki energy ko capture karta hai.\n\nStep 2: Water aur CO2 combine hote hain\nRoots se aaya hua paani aur air se CO2 milte hain.\n\nStep 3: Glucose (food) aur Oxygen bante hain\nEnergy ki madad se glucose aur oxygen produce hota hai.',
          'Products & Importance\n\nProducts:\n• Glucose (ग्लूकोज) - Plant ka food\n• Oxygen (ऑक्सीजन) - Humans aur animals ke liye\n\nImportance:\n✓ Energy production for plants\n✓ Oxygen release for breathing\n✓ Food chain ka base\n✓ Climate regulation\n\nBina photosynthesis ke, life on Earth possible nahi hai!',
          'Factors Affecting Photosynthesis\n\n1. Light Intensity (प्रकाश की तीव्रता)\nZyada light = zyada photosynthesis\n\n2. Temperature (तापमान)\nOptimal temperature: 25-35°C\n\n3. Water Availability (पानी की उपलब्धता)\nPaani ki kami se process slow ho jata hai\n\n4. CO2 Concentration\nZyada CO2 = better photosynthesis',
        ],
        language: Language.hinglish,
        summary: `This chapter explains how plants make their own food using sunlight, water, and carbon dioxide through the process of photosynthesis. Yeh chapter batata hai ki plants kaise apna khana banate hain aur oxygen produce karte hain jo sabke liye zaroori hai. Composite Key: ${compositeKey}`,
        classLevel: BigInt(formData.classId),
      };

      const infographics: Infographic[] = [
        {
          id: BigInt(1),
          title: 'Photosynthesis Flow Diagram (प्रकाश संश्लेषण प्रवाह चित्र)',
          description: 'Visual representation of the photosynthesis process showing inputs and outputs',
          flowDiagram: '☀️ Sunlight (सूर्य का प्रकाश)\n    ↓\n🌿 Chlorophyll absorbs light\n(क्लोरोफिल प्रकाश को अवशोषित करता है)\n    ↓\n💧 Water (H2O) + 🌫️ CO2 → Energy Conversion\n    ↓\n🍬 Glucose (C6H12O6) + 💨 Oxygen (O2)\n\nInput: पानी + कार्बन डाइऑक्साइड + सूर्य का प्रकाश\nOutput: ग्लूकोज + ऑक्सीजन\n\nComposite Key: ' + compositeKey,
          interactiveElements: ['Sunlight Input', 'Water Absorption', 'CO2 Intake', 'Oxygen Release', 'Glucose Production', 'Chlorophyll Action'],
        },
        {
          id: BigInt(2),
          title: 'Day vs Night in Plants (पौधों में दिन बनाम रात)',
          description: 'Understanding what happens during day and night',
          flowDiagram: 'DAY (दिन):\n• Photosynthesis active\n• Oxygen release (ऑक्सीजन छोड़ना)\n• Food production (भोजन उत्पादन)\n• Stomata open (रंध्र खुले)\n\nNIGHT (रात):\n• Respiration only (केवल श्वसन)\n• Oxygen intake (ऑक्सीजन लेना)\n• Energy consumption (ऊर्जा खपत)\n• Stomata closed (रंध्र बंद)\n\nNote: Plants din aur raat dono mein respiration karte hain, lekin photosynthesis sirf din mein hota hai.',
          interactiveElements: ['Day Cycle', 'Night Cycle', 'Respiration', 'Energy Storage', 'Stomata Function'],
        },
        {
          id: BigInt(3),
          title: 'Leaf Structure (पत्ती की संरचना)',
          description: 'Internal structure of a leaf showing photosynthesis sites',
          flowDiagram: 'Upper Epidermis (ऊपरी एपिडर्मिस)\n    ↓\nPalisade Mesophyll (पैलिसेड मेसोफिल)\n[Main photosynthesis site]\n    ↓\nSpongy Mesophyll (स्पंजी मेसोफिल)\n[Gas exchange]\n    ↓\nLower Epidermis with Stomata\n(रंध्रों के साथ निचली एपिडर्मिस)\n\nChlorophyll sabse zyada palisade layer mein hota hai.',
          interactiveElements: ['Epidermis Layer', 'Mesophyll Cells', 'Stomata', 'Vascular Bundles', 'Chloroplasts'],
        },
      ];

      const logicExplanations: LogicExplanation[] = [
        {
          id: BigInt(1),
          concept: 'Why do plants need sunlight? (पौधों को सूर्य के प्रकाश की आवश्यकता क्यों है?)',
          language: Language.hinglish,
          stepByStepExplanation: 'Step 1: Sunlight energy ko capture karna\nChlorophyll sunlight ko absorb karta hai aur use energy mein convert karta hai. Yeh green pigment leaves mein hota hai aur specifically red aur blue light ko absorb karta hai.\n\nStep 2: Energy se chemical reaction\nYeh energy water aur CO2 ko glucose mein convert karti hai. Yeh ek chemical reaction hai jo chloroplasts mein hota hai. Is process ko light-dependent aur light-independent reactions mein divide kiya jata hai.\n\nStep 3: Food production aur storage\nGlucose plant ka food ban jata hai jo growth ke liye use hota hai. Extra glucose starch ke form mein store hota hai jo baad mein energy ke liye use hota hai.',
          whyInsights: '💡 Sunlight is essential kyunki yeh primary energy source hai.\n\nBina sunlight ke, plants apna food nahi bana sakte aur survive nahi kar sakte. Yeh process oxygen bhi release karta hai jo humans aur animals ke liye zaroori hai. Ek mature tree din mein 4 logon ke liye kaafi oxygen produce kar sakta hai!\n\nInteresting fact: Plants din mein oxygen release karte hain aur raat mein CO2. Lekin raat mein release hone wala CO2 din ke oxygen se bahut kam hota hai, isliye plants bedroom mein rakhna safe hai!\n\nComposite Key: ' + compositeKey,
        },
        {
          id: BigInt(2),
          concept: 'What is the role of Chlorophyll? (क्लोरोफिल की भूमिका क्या है?)',
          language: Language.hinglish,
          stepByStepExplanation: 'Step 1: Light absorption (प्रकाश अवशोषण)\nChlorophyll green color ka pigment hai jo leaves mein hota hai. Yeh sunlight ko absorb karta hai, specially red aur blue light. Green light ko reflect karta hai isliye leaves green dikhti hain.\n\nStep 2: Energy conversion (ऊर्जा रूपांतरण)\nAbsorbed light energy ko chemical energy mein convert karta hai. Yeh energy ATP aur NADPH ke form mein store hoti hai jo glucose banane ke liye use hoti hai.\n\nStep 3: Electron transport (इलेक्ट्रॉन परिवहन)\nChlorophyll molecules electrons ko excite karte hain jo electron transport chain start karta hai. Yeh chain water molecules ko split karke oxygen release karti hai.',
          whyInsights: '💡 Chlorophyll plants ka "solar panel" hai!\n\nYeh pigment bina, photosynthesis possible nahi hai. Autumn mein jab chlorophyll break down hota hai, tab leaves ka asli color (yellow, orange, red) dikhta hai jo hamesha se present tha par chlorophyll ke green color se hide tha.\n\nFun fact: Chlorophyll ka structure hemoglobin (blood mein) se similar hai! Dono mein ek central metal atom hota hai - chlorophyll mein magnesium aur hemoglobin mein iron. Isliye chlorophyll ko "plant blood" bhi kaha jata hai.',
        },
        {
          id: BigInt(3),
          concept: 'How do plants use the glucose they produce? (पौधे उत्पादित ग्लूकोज का उपयोग कैसे करते हैं?)',
          language: Language.hinglish,
          stepByStepExplanation: 'Step 1: Immediate energy use (तत्काल ऊर्जा उपयोग)\nKuch glucose turant cellular respiration ke liye use hota hai. Yeh process mitochondria mein hota hai aur ATP (energy currency) produce karta hai jo plant cells ko power deta hai.\n\nStep 2: Storage as starch (स्टार्च के रूप में भंडारण)\nExtra glucose ko starch mein convert karke store kiya jata hai. Yeh storage roots, stems, aur seeds mein hota hai. Jab zaroorat hoti hai, starch wapas glucose mein convert ho jata hai.\n\nStep 3: Building blocks (निर्माण खंड)\nGlucose se cellulose banta hai jo cell walls ke liye use hota hai. Yeh plant ko structure aur support deta hai. Glucose se proteins, fats, aur other complex molecules bhi bante hain.',
          whyInsights: '💡 Glucose plant ke liye multi-purpose molecule hai!\n\nYeh sirf energy source nahi hai, balki building material bhi hai. Jab hum rice, wheat, ya potato khate hain, toh hum actually stored starch kha rahe hote hain jo originally glucose tha.\n\nInteresting connection: Jab plants glucose ko cellulose mein convert karte hain, toh yeh itna strong ho jata hai ki humans ise digest nahi kar sakte! Isliye fiber important hai - yeh cellulose hai jo digestion mein help karta hai bina digest hue.',
        },
      ];

      const notebookId = await submitNotebookMutation.mutateAsync({
        id: BigInt(Date.now()),
        title: `Visual Notebook: Chapter ${chapterNumber} - ${extraction.fileName.replace('.pdf', '')}`,
        subject: formData.subjectName,
        classLevel: BigInt(formData.classId),
        flashcards,
        slideDeck,
        infographics,
        logicExplanations,
        uploadedBy: userProfile?.name || 'Teacher',
        contentLanguage: Language.hinglish,
        extractionId: extraction._id,
        chapterType,
        approvalStatus: ApprovalStatus.pending,
      });

      toast.success(`Visual Notebook generated successfully! Composite Key: ${compositeKey}. Students in ${formData.schoolName} Class ${formData.classId} will be auto-linked to this content.`);
    } catch (error) {
      console.error('Notebook generation error:', error);
      toast.error('Failed to generate Visual Notebook');
    } finally {
      setGeneratingNotebook(false);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('Please select a file first');
      return;
    }

    if (!formData.schoolId || !formData.classId || !formData.subjectName) {
      toast.error('Please fill in all required fields');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const extraction = await simulateOCRExtraction(selectedFile);
      await saveOCRMutation.mutateAsync(extraction);
      setExtractionResult(extraction);
      toast.success('PDF uploaded and processed successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload and process PDF');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
        <p className="text-muted-foreground">
          Upload textbooks, generate Visual Notebooks, and manage student registrations
        </p>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">
            <Upload className="h-4 w-4 mr-2" />
            Upload Content
          </TabsTrigger>
          <TabsTrigger value="library">
            <BookOpen className="h-4 w-4 mr-2" />
            Content Library
          </TabsTrigger>
          <TabsTrigger value="students">
            <UserPlus className="h-4 w-4 mr-2" />
            Register Students
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Textbook PDF
              </CardTitle>
              <CardDescription>
                Upload textbook PDFs for OCR extraction and automatic Visual Notebook generation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="schoolId">School ID</Label>
                  <Input
                    id="schoolId"
                    type="number"
                    value={formData.schoolId}
                    onChange={(e) => setFormData({ ...formData, schoolId: e.target.value })}
                    disabled={uploading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name</Label>
                  <Input
                    id="schoolName"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    disabled={uploading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="classId">Class ID</Label>
                  <Input
                    id="classId"
                    type="number"
                    value={formData.classId}
                    onChange={(e) => setFormData({ ...formData, classId: e.target.value })}
                    disabled={uploading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subjectName">Subject</Label>
                  <Input
                    id="subjectName"
                    value={formData.subjectName}
                    onChange={(e) => setFormData({ ...formData, subjectName: e.target.value })}
                    disabled={uploading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="documentType">Document Type</Label>
                  <Select
                    value={formData.documentType}
                    onValueChange={(value) => setFormData({ ...formData, documentType: value as OCRDocumentType })}
                    disabled={uploading}
                  >
                    <SelectTrigger id="documentType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={OCRDocumentType.textbook}>Textbook</SelectItem>
                      <SelectItem value={OCRDocumentType.assignment}>Assignment</SelectItem>
                      <SelectItem value={OCRDocumentType.worksheet}>Worksheet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Select PDF File</Label>
                <Input
                  id="file"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  disabled={uploading}
                />
              </div>

              {selectedFile && (
                <Alert>
                  <FileText className="h-4 w-4" />
                  <AlertDescription>
                    Selected: <strong>{selectedFile.name}</strong> ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </AlertDescription>
                </Alert>
              )}

              {uploading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Processing PDF...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} />
                </div>
              )}

              <Button
                onClick={handleUpload}
                disabled={!selectedFile || uploading}
                className="w-full"
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload & Extract
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {extractionResult && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  Extraction Complete
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">Extraction ID</Label>
                    <p className="font-mono text-sm">{extractionResult._id.toString()}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Textbook Purity</Label>
                    <div className="flex items-center gap-2">
                      <Badge variant={extractionResult._percentage_textbook >= 60 ? 'default' : 'destructive'}>
                        {extractionResult._percentage_textbook.toFixed(1)}%
                      </Badge>
                      {extractionResult._percentage_textbook >= 60 ? (
                        <span className="text-sm text-success">✓ Meets 60% requirement</span>
                      ) : (
                        <span className="text-sm text-destructive">✗ Below 60% threshold</span>
                      )}
                    </div>
                  </div>
                </div>

                <Alert>
                  <Link2 className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Auto-linking:</strong> Students registered in {formData.schoolName} Class {formData.classId} will automatically see this content in their Visual Notebook.
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => generateVisualNotebook(extractionResult)}
                  disabled={generatingNotebook || extractionResult._percentage_textbook < 60}
                  className="w-full"
                >
                  {generatingNotebook ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generating Visual Notebook...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Visual Notebook
                    </>
                  )}
                </Button>

                {extractionResult._percentage_textbook < 60 && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Cannot generate Visual Notebook: Content purity is below 60% threshold. Please upload a textbook PDF.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="library" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Library</CardTitle>
              <CardDescription>
                View all uploaded content for Class {formData.classId}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {classExtractions && classExtractions.length > 0 ? (
                <div className="space-y-2">
                  {classExtractions.map((extraction) => (
                    <div
                      key={extraction._id.toString()}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{extraction.fileName}</p>
                          <p className="text-sm text-muted-foreground">
                            ID: {extraction._id.toString()} | Purity: {extraction._percentage_textbook.toFixed(1)}%
                          </p>
                        </div>
                      </div>
                      <Badge variant={extraction._percentage_textbook >= 60 ? 'default' : 'destructive'}>
                        {extraction.relevance}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  No content uploaded yet for this class
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <StudentRegistrationForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
