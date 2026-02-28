import React from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface SafeLearningPageProps {
  onNavigate: (page: Page) => void;
}

export default function SafeLearningPage({ onNavigate }: SafeLearningPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Safe <span className="text-primary">Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Providing every child with access to quality digital education in a safe,
                nurturing environment — because learning should never be a privilege.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('learning-dashboard')}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Learning
                </button>
                <button
                  onClick={() => onNavigate('visual-notebook')}
                  className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
                >
                  Visual Notebook
                </button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <ImageWithDisclaimer
                src="/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg"
                alt="Children digital learning"
                containerClassName="rounded-2xl shadow-2xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Program Overview</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our Safe Learning program combines technology with compassionate teaching
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Digital Tools</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Interactive visual notebooks, flashcards, and slide decks designed for
                underprivileged children.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Gamified Learning</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Guardian Game makes learning fun — children battle academic bosses by
                answering quiz questions correctly.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Aasha Points</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Children earn Aasha Points for learning milestones, redeemable for
                educational rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/children-digital-learning.dim_700x400.jpg"
                alt="Children learning digitally"
                containerClassName="rounded-2xl shadow-xl aspect-video"
                className="rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Safe Learning?</h2>
              <ul className="space-y-4">
                {[
                  'Bilingual content in Hindi and English for better comprehension',
                  'Visual learning materials designed for low-literacy environments',
                  'Teacher dashboard for easy content management and student tracking',
                  'Offline-capable tools for areas with limited internet access',
                  'Age-appropriate, curriculum-aligned content',
                  'Safe, ad-free digital environment for children',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Learning Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <ImageWithDisclaimer
                src="/assets/generated/modern-indian-classroom.dim_800x600.jpg"
                alt="Modern classroom"
                containerClassName="h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Visual Notebook</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Interactive flashcards, slide decks, and infographics created from
                  teacher-uploaded content using AI-powered OCR extraction.
                </p>
                <button
                  onClick={() => onNavigate('visual-notebook')}
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  Explore Visual Notebook →
                </button>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <ImageWithDisclaimer
                src="/assets/generated/indian-children-classroom.dim_800x600.jpg"
                alt="Indian children in classroom"
                containerClassName="h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Guardian Game</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A 2D fighting game where students battle academic bosses by answering
                  quiz questions — making learning an adventure.
                </p>
                <button
                  onClick={() => onNavigate('guardian-game')}
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  Play Guardian Game →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <ImageWithDisclaimer
            src="/assets/generated/child-with-books.dim_400x400.jpg"
            alt="Child with books"
            containerClassName="w-48 h-48 rounded-full mx-auto mb-8 shadow-xl"
            className="rounded-full object-cover"
          />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Every Child Deserves to Learn
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Support our Safe Learning program and help us bring quality education to
            thousands more children across India.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('donate-money')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Support Safe Learning
            </button>
            <button
              onClick={() => onNavigate('teacher-dashboard')}
              className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
            >
              Teacher Portal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
