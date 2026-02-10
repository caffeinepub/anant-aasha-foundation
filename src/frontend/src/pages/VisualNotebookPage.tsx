import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen, FileText, Image, Lightbulb, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import { useGetCallerUserProfile, useGetChaptersByClassAndSubject } from '../hooks/useQueries';
import type { VisualNotebookChapter, Flashcard } from '../backend';

export function VisualNotebookPage() {
  const { data: userProfile } = useGetCallerUserProfile();
  const [selectedSubject, setSelectedSubject] = useState<string>('Mathematics');
  const [selectedChapter, setSelectedChapter] = useState<VisualNotebookChapter | null>(null);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showFlashcardBack, setShowFlashcardBack] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const classLevel = userProfile?.classId || BigInt(5);
  const { data: chapters = [], isLoading } = useGetChaptersByClassAndSubject(classLevel, selectedSubject);

  const approvedChapters = chapters.filter(ch => ch.approvalStatus === 'approved');

  const subjects = ['Mathematics', 'Science', 'Social Studies', 'English', 'Hindi'];

  if (!userProfile || userProfile.role !== 'student') {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Visual Notebook is available for students only. Please log in with a student account.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const handleFlashcardFlip = () => {
    setShowFlashcardBack(!showFlashcardBack);
  };

  const handleNextFlashcard = () => {
    if (selectedChapter && currentFlashcardIndex < selectedChapter.flashcards.length - 1) {
      setCurrentFlashcardIndex(currentFlashcardIndex + 1);
      setShowFlashcardBack(false);
    }
  };

  const handlePrevFlashcard = () => {
    if (currentFlashcardIndex > 0) {
      setCurrentFlashcardIndex(currentFlashcardIndex - 1);
      setShowFlashcardBack(false);
    }
  };

  const handleNextSlide = () => {
    if (selectedChapter && currentSlideIndex < selectedChapter.slideDeck.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <BookOpen className="h-10 w-10 text-primary" />
            Visual Notebook
          </h1>
          <p className="text-gray-600">Interactive bilingual learning materials from your textbooks</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subjects</CardTitle>
                <CardDescription>Class {classLevel.toString()}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {subjects.map((subject) => (
                  <Button
                    key={subject}
                    variant={selectedSubject === subject ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => {
                      setSelectedSubject(subject);
                      setSelectedChapter(null);
                    }}
                  >
                    {subject}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {approvedChapters.length > 0 && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-lg">Chapters</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64">
                    <div className="space-y-2">
                      {approvedChapters.map((chapter) => (
                        <Button
                          key={chapter.id.toString()}
                          variant={selectedChapter?.id === chapter.id ? 'secondary' : 'ghost'}
                          className="w-full justify-start text-left"
                          onClick={() => {
                            setSelectedChapter(chapter);
                            setCurrentFlashcardIndex(0);
                            setCurrentSlideIndex(0);
                            setShowFlashcardBack(false);
                          }}
                        >
                          <div className="truncate">{chapter.title}</div>
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-3">
            {isLoading ? (
              <Card>
                <CardContent className="py-16 text-center">
                  <p className="text-gray-600">Loading chapters...</p>
                </CardContent>
              </Card>
            ) : !selectedChapter ? (
              <Card>
                <CardContent className="py-16 text-center">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Select a chapter to start learning</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {approvedChapters.length === 0
                      ? 'No chapters available for this subject yet'
                      : 'Choose from the chapters list on the left'}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Tabs defaultValue="flashcards" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="flashcards" className="flex items-center gap-2">
                    <Image className="h-4 w-4" />
                    Flashcards
                  </TabsTrigger>
                  <TabsTrigger value="slides" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Slides
                  </TabsTrigger>
                  <TabsTrigger value="infographics" className="flex items-center gap-2">
                    <Image className="h-4 w-4" />
                    Infographics
                  </TabsTrigger>
                  <TabsTrigger value="logic" className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Logic
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="flashcards">
                  <Card>
                    <CardHeader>
                      <CardTitle>{selectedChapter.title} - Flashcards</CardTitle>
                      <CardDescription>
                        Card {currentFlashcardIndex + 1} of {selectedChapter.flashcards.length}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedChapter.flashcards.length > 0 ? (
                        <div className="space-y-4">
                          <div
                            onClick={handleFlashcardFlip}
                            className="relative h-80 cursor-pointer perspective-1000"
                          >
                            <div
                              className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                                showFlashcardBack ? 'rotate-y-180' : ''
                              }`}
                            >
                              <div className="absolute w-full h-full backface-hidden">
                                <Card className="h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
                                  <CardContent className="flex flex-col items-center justify-center h-full p-8">
                                    <p className="text-3xl font-bold text-center mb-4">
                                      {selectedChapter.flashcards[currentFlashcardIndex].front}
                                    </p>
                                    <p className="text-sm opacity-80">Click to flip</p>
                                  </CardContent>
                                </Card>
                              </div>
                              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                                <Card className="h-full bg-gradient-to-br from-green-500 to-teal-600 text-white border-0">
                                  <CardContent className="flex flex-col items-center justify-center h-full p-8">
                                    <p className="text-2xl font-bold text-center mb-4">
                                      {selectedChapter.flashcards[currentFlashcardIndex].back}
                                    </p>
                                    <p className="text-sm italic opacity-90 text-center">
                                      {selectedChapter.flashcards[currentFlashcardIndex].exampleSentence}
                                    </p>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <Button
                              variant="outline"
                              onClick={handlePrevFlashcard}
                              disabled={currentFlashcardIndex === 0}
                            >
                              <ChevronLeft className="h-4 w-4 mr-2" />
                              Previous
                            </Button>
                            <Badge variant="secondary">
                              {currentFlashcardIndex + 1} / {selectedChapter.flashcards.length}
                            </Badge>
                            <Button
                              variant="outline"
                              onClick={handleNextFlashcard}
                              disabled={currentFlashcardIndex === selectedChapter.flashcards.length - 1}
                            >
                              Next
                              <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-center text-gray-600 py-8">No flashcards available</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="slides">
                  <Card>
                    <CardHeader>
                      <CardTitle>{selectedChapter.slideDeck.title}</CardTitle>
                      <CardDescription>
                        Slide {currentSlideIndex + 1} of {selectedChapter.slideDeck.slides.length}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedChapter.slideDeck.slides.length > 0 ? (
                        <div className="space-y-4">
                          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 min-h-96 flex items-center justify-center">
                            <div className="text-center max-w-3xl">
                              <p className="text-xl leading-relaxed whitespace-pre-wrap">
                                {selectedChapter.slideDeck.slides[currentSlideIndex]}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <Button
                              variant="outline"
                              onClick={handlePrevSlide}
                              disabled={currentSlideIndex === 0}
                            >
                              <ChevronLeft className="h-4 w-4 mr-2" />
                              Previous
                            </Button>
                            <Badge variant="secondary">
                              {currentSlideIndex + 1} / {selectedChapter.slideDeck.slides.length}
                            </Badge>
                            <Button
                              variant="outline"
                              onClick={handleNextSlide}
                              disabled={currentSlideIndex === selectedChapter.slideDeck.slides.length - 1}
                            >
                              Next
                              <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>

                          <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="pt-6">
                              <p className="text-sm text-gray-700">
                                <strong>Summary:</strong> {selectedChapter.slideDeck.summary}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      ) : (
                        <p className="text-center text-gray-600 py-8">No slides available</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="infographics">
                  <Card>
                    <CardHeader>
                      <CardTitle>Interactive Infographics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {selectedChapter.infographics.length > 0 ? (
                        <div className="space-y-6">
                          {selectedChapter.infographics.map((infographic) => (
                            <Card key={infographic.id.toString()} className="border-2">
                              <CardHeader>
                                <CardTitle className="text-lg">{infographic.title}</CardTitle>
                                <CardDescription>{infographic.description}</CardDescription>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6 min-h-64">
                                  <p className="text-gray-700 whitespace-pre-wrap">{infographic.flowDiagram}</p>
                                </div>
                                {infographic.interactiveElements.length > 0 && (
                                  <div className="space-y-2">
                                    <p className="font-semibold text-sm text-gray-700">Interactive Elements:</p>
                                    <div className="flex flex-wrap gap-2">
                                      {infographic.interactiveElements.map((element, idx) => (
                                        <Badge key={idx} variant="secondary">
                                          {element}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-gray-600 py-8">No infographics available</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="logic">
                  <Card>
                    <CardHeader>
                      <CardTitle>Logic Explanations</CardTitle>
                      <CardDescription>Step-by-step understanding in Hinglish</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {selectedChapter.logicExplanations.length > 0 ? (
                        <div className="space-y-6">
                          {selectedChapter.logicExplanations.map((logic) => (
                            <Card key={logic.id.toString()} className="border-2 border-amber-200 bg-amber-50">
                              <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                  <Lightbulb className="h-5 w-5 text-amber-600" />
                                  {logic.concept}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div>
                                  <p className="font-semibold text-sm text-gray-700 mb-2">Step-by-Step:</p>
                                  <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                                    {logic.stepByStepExplanation}
                                  </p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-amber-200">
                                  <p className="font-semibold text-sm text-amber-900 mb-2">💡 Why Insights:</p>
                                  <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                                    {logic.whyInsights}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-gray-600 py-8">No logic explanations available</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
