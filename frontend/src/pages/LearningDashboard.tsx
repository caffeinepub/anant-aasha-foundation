import React, { useState } from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface LearningDashboardProps {
  onNavigate: (page: Page) => void;
}

const SUBJECTS = [
  { id: 'math', name: 'Mathematics', icon: '🔢', progress: 65 },
  { id: 'science', name: 'Science', icon: '🔬', progress: 45 },
  { id: 'hindi', name: 'Hindi', icon: '📝', progress: 80 },
  { id: 'english', name: 'English', icon: '📖', progress: 55 },
  { id: 'social', name: 'Social Studies', icon: '🌍', progress: 30 },
];

export default function LearningDashboard({ onNavigate }: LearningDashboardProps) {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Learning Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your progress and continue your learning journey
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-card rounded-2xl p-4 shadow text-center">
                <div className="flex items-center gap-2 mb-1">
                  <img
                    src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png"
                    alt="points"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="font-bold text-primary text-xl">250</span>
                </div>
                <div className="text-xs text-muted-foreground">Aasha Points</div>
              </div>
              <div className="bg-card rounded-2xl p-4 shadow text-center">
                <div className="font-bold text-primary text-xl mb-1">12</div>
                <div className="text-xs text-muted-foreground">Day Streak 🔥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBJECTS.map((subject) => (
              <div
                key={subject.id}
                className={`bg-card rounded-2xl p-6 shadow cursor-pointer hover:shadow-lg transition-all ${
                  activeSubject === subject.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setActiveSubject(activeSubject === subject.id ? null : subject.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{subject.icon}</span>
                  <h3 className="font-bold text-card-foreground">{subject.name}</h3>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-bold text-foreground">{subject.progress}%</span>
                  </div>
                  <div className="bg-muted rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => onNavigate('visual-notebook')}
            >
              <ImageWithDisclaimer
                src="/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg"
                alt="Visual Notebook"
                containerClassName="h-40"
              />
              <div className="p-5">
                <h3 className="font-bold text-card-foreground mb-2">Visual Notebook</h3>
                <p className="text-muted-foreground text-sm">
                  Interactive flashcards and slide decks
                </p>
              </div>
            </div>
            <div
              className="bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => onNavigate('guardian-game')}
            >
              <ImageWithDisclaimer
                src="/assets/generated/modern-indian-classroom.dim_800x600.jpg"
                alt="Guardian Game"
                containerClassName="h-40"
              />
              <div className="p-5">
                <h3 className="font-bold text-card-foreground mb-2">Guardian Game</h3>
                <p className="text-muted-foreground text-sm">
                  Battle bosses with quiz questions
                </p>
              </div>
            </div>
            <div
              className="bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => onNavigate('aasha-coins')}
            >
              <ImageWithDisclaimer
                src="/assets/generated/children-celebrating-success.dim_800x600.jpg"
                alt="Aasha Points"
                containerClassName="h-40"
              />
              <div className="p-5">
                <h3 className="font-bold text-card-foreground mb-2">Aasha Points</h3>
                <p className="text-muted-foreground text-sm">
                  Redeem your earned points
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'Completed Math Chapter 3', time: '2 hours ago', points: '+10', icon: '📐' },
              { action: 'Won Guardian Game battle', time: '1 day ago', points: '+25', icon: '⚔️' },
              { action: 'Tagged tree #42', time: '2 days ago', points: '+50', icon: '🌳' },
              { action: 'Completed Science flashcards', time: '3 days ago', points: '+10', icon: '🔬' },
            ].map((activity, i) => (
              <div key={i} className="bg-card rounded-xl p-4 shadow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{activity.icon}</span>
                  <div>
                    <div className="font-medium text-card-foreground">{activity.action}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
                <span className="font-bold text-primary text-sm">{activity.points} pts</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
