import React, { useState } from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface VisualNotebookPageProps {
  onNavigate: (page: Page) => void;
}

type ViewMode = 'subjects' | 'flashcards' | 'slides' | 'infographic' | 'logic';

const SUBJECTS = [
  { id: 'math', name: 'Mathematics', icon: '🔢', chapters: 5 },
  { id: 'science', name: 'Science', icon: '🔬', chapters: 4 },
  { id: 'hindi', name: 'Hindi', icon: '📝', chapters: 6 },
  { id: 'english', name: 'English', icon: '📖', chapters: 5 },
];

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    front: 'Photosynthesis',
    back: 'The process by which plants use sunlight, water, and CO₂ to produce food and oxygen.',
    example: 'Paudhe suraj ki roshni se khana banate hain.',
  },
  {
    id: 2,
    front: 'Osmosis',
    back: 'Movement of water molecules through a semi-permeable membrane from low to high concentration.',
    example: 'Jaise namak paani mein ghulta hai.',
  },
  {
    id: 3,
    front: 'Mitosis',
    back: 'Cell division that results in two identical daughter cells with the same number of chromosomes.',
    example: 'Ek cell do cells mein bant jaata hai.',
  },
];

const SAMPLE_SLIDES = [
  {
    id: 1,
    title: 'Introduction to Fractions',
    content: 'A fraction represents a part of a whole. It has a numerator (top) and denominator (bottom).',
  },
  {
    id: 2,
    title: 'Types of Fractions',
    content:
      'Proper fractions: numerator < denominator. Improper fractions: numerator > denominator. Mixed numbers: whole + fraction.',
  },
  {
    id: 3,
    title: 'Adding Fractions',
    content:
      'To add fractions with the same denominator, simply add the numerators. For different denominators, find the LCM first.',
  },
];

const SUBJECT_IMAGES: Record<string, string> = {
  math: '/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg',
  science: '/assets/generated/modern-indian-classroom.dim_800x600.jpg',
  hindi: '/assets/generated/indian-children-studying.dim_800x600.jpg',
  english: '/assets/generated/children-outdoor-reading.dim_800x600.jpg',
};

export function VisualNotebookPage({ onNavigate }: VisualNotebookPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('subjects');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setViewMode('flashcards');
    setCurrentFlashcard(0);
    setIsFlipped(false);
  };

  const card = SAMPLE_FLASHCARDS[currentFlashcard];
  const slide = SAMPLE_SLIDES[currentSlide];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            {viewMode !== 'subjects' && (
              <button
                onClick={() => setViewMode('subjects')}
                className="text-primary hover:underline text-sm flex items-center gap-1"
              >
                ← Back to Subjects
              </button>
            )}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Visual Notebook
          </h1>
          <p className="text-muted-foreground">
            Interactive learning materials in Hinglish — designed for you
          </p>
        </div>
      </section>

      {/* Subjects View */}
      {viewMode === 'subjects' && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Choose a Subject</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SUBJECTS.map((subject) => (
                <div
                  key={subject.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => handleSubjectSelect(subject.id)}
                >
                  <ImageWithDisclaimer
                    src={SUBJECT_IMAGES[subject.id]}
                    alt={subject.name}
                    containerClassName="h-48"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{subject.icon}</span>
                      <h3 className="text-xl font-bold text-card-foreground">{subject.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {subject.chapters} chapters available
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Flashcards View */}
      {viewMode === 'flashcards' && (
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Mode Tabs */}
            <div className="flex gap-2 mb-8 justify-center flex-wrap">
              {(['flashcards', 'slides', 'infographic', 'logic'] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    viewMode === mode
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {mode === 'flashcards' ? '🃏 Flashcards' : mode === 'slides' ? '📊 Slides' : mode === 'infographic' ? '📈 Infographic' : '💡 Logic'}
                </button>
              ))}
            </div>

            {/* Flashcard */}
            <div
              className="bg-card rounded-2xl shadow-xl p-8 min-h-64 flex flex-col items-center justify-center cursor-pointer select-none mb-6"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wide">
                {isFlipped ? 'Answer' : 'Question'} — tap to flip
              </div>
              <h3 className="text-2xl font-bold text-card-foreground text-center mb-4">
                {isFlipped ? card.back : card.front}
              </h3>
              {isFlipped && (
                <p className="text-muted-foreground text-sm italic text-center">
                  Example: {card.example}
                </p>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => { setCurrentFlashcard(Math.max(0, currentFlashcard - 1)); setIsFlipped(false); }}
                disabled={currentFlashcard === 0}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground disabled:opacity-40 hover:bg-muted/80 transition-colors"
              >
                ← Previous
              </button>
              <span className="text-muted-foreground text-sm">
                {currentFlashcard + 1} / {SAMPLE_FLASHCARDS.length}
              </span>
              <button
                onClick={() => { setCurrentFlashcard(Math.min(SAMPLE_FLASHCARDS.length - 1, currentFlashcard + 1)); setIsFlipped(false); }}
                disabled={currentFlashcard === SAMPLE_FLASHCARDS.length - 1}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground disabled:opacity-40 hover:bg-muted/80 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Slides View */}
      {viewMode === 'slides' && (
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Mode Tabs */}
            <div className="flex gap-2 mb-8 justify-center flex-wrap">
              {(['flashcards', 'slides', 'infographic', 'logic'] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    viewMode === mode
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {mode === 'flashcards' ? '🃏 Flashcards' : mode === 'slides' ? '📊 Slides' : mode === 'infographic' ? '📈 Infographic' : '💡 Logic'}
                </button>
              ))}
            </div>

            {/* Slide */}
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden mb-6">
              <ImageWithDisclaimer
                src="/assets/generated/slide-template.dim_1024x768.png"
                alt="Slide background"
                containerClassName="h-48"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">{slide.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{slide.content}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground disabled:opacity-40 hover:bg-muted/80 transition-colors"
              >
                ← Previous
              </button>
              <span className="text-muted-foreground text-sm">
                {currentSlide + 1} / {SAMPLE_SLIDES.length}
              </span>
              <button
                onClick={() => setCurrentSlide(Math.min(SAMPLE_SLIDES.length - 1, currentSlide + 1))}
                disabled={currentSlide === SAMPLE_SLIDES.length - 1}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground disabled:opacity-40 hover:bg-muted/80 transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Infographic View */}
      {viewMode === 'infographic' && (
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Mode Tabs */}
            <div className="flex gap-2 mb-8 justify-center flex-wrap">
              {(['flashcards', 'slides', 'infographic', 'logic'] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    viewMode === mode
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {mode === 'flashcards' ? '🃏 Flashcards' : mode === 'slides' ? '📊 Slides' : mode === 'infographic' ? '📈 Infographic' : '💡 Logic'}
                </button>
              ))}
            </div>
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
              <ImageWithDisclaimer
                src="/assets/generated/infographic-template-educational.dim_800x600.png"
                alt="Educational infographic"
                containerClassName="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  Visual Learning Map
                </h3>
                <p className="text-muted-foreground text-sm">
                  This infographic shows the key concepts and their relationships in a
                  visual format, making it easier to understand and remember.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Logic View */}
      {viewMode === 'logic' && (
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Mode Tabs */}
            <div className="flex gap-2 mb-8 justify-center flex-wrap">
              {(['flashcards', 'slides', 'infographic', 'logic'] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    viewMode === mode
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {mode === 'flashcards' ? '🃏 Flashcards' : mode === 'slides' ? '📊 Slides' : mode === 'infographic' ? '📈 Infographic' : '💡 Logic'}
                </button>
              ))}
            </div>
            <div className="bg-card rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                💡 Why Does Photosynthesis Happen?
              </h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Plants need energy to grow', desc: 'Just like we need food, plants need energy too. But they cannot eat like us.' },
                  { step: '2', title: 'Sunlight is free energy', desc: 'The sun provides unlimited energy. Plants evolved to capture this energy using chlorophyll.' },
                  { step: '3', title: 'CO₂ + Water = Food', desc: 'Using sunlight, plants combine carbon dioxide from air and water from soil to make glucose (sugar).' },
                  { step: '4', title: 'Oxygen is a bonus!', desc: 'As a byproduct, plants release oxygen — which is what we breathe. Plants keep us alive!' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-card-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
