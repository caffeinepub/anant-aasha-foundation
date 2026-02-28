import React from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface AashaCoinsPageProps {
  onNavigate: (page: Page) => void;
}

const REWARDS = [
  { name: 'Notebook Set', points: 100, icon: '📓', category: 'Stationery' },
  { name: 'Pencil Box', points: 50, icon: '✏️', category: 'Stationery' },
  { name: 'Story Books (Set of 3)', points: 200, icon: '📚', category: 'Books' },
  { name: 'Science Kit', points: 500, icon: '🔬', category: 'Learning' },
  { name: 'Art Supplies', points: 150, icon: '🎨', category: 'Creative' },
  { name: 'School Bag', points: 300, icon: '🎒', category: 'Essentials' },
  { name: 'Calculator', points: 250, icon: '🔢', category: 'Learning' },
  { name: 'Dictionary', points: 175, icon: '📖', category: 'Books' },
];

export default function AashaCoinsPage({ onNavigate }: AashaCoinsPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-500/10 via-background to-orange-500/10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <img
                  src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png"
                  alt="Aasha Points"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-primary font-bold text-lg">Aasha Points</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Earn & <span className="text-primary">Redeem</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Aasha Points reward children for learning milestones, environmental actions,
                and community participation — redeemable for educational supplies.
              </p>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <ImageWithDisclaimer
                src="/assets/generated/children-celebrating-success.dim_800x600.jpg"
                alt="Children celebrating success"
                containerClassName="rounded-2xl shadow-2xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            How Aasha Points Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Learn</h3>
              <p className="text-muted-foreground text-sm">
                Complete lessons, quizzes, and activities in the Visual Notebook and
                Guardian Game to earn points.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Earn Points</h3>
              <p className="text-muted-foreground text-sm">
                Accumulate Aasha Points for every milestone — from finishing a chapter
                to planting a tree.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Redeem</h3>
              <p className="text-muted-foreground text-sm">
                Exchange your points for educational supplies, books, and learning
                materials from our catalog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Monetary Note */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6 text-center">
            <p className="text-yellow-800 dark:text-yellow-200 font-medium">
              ⭐ Aasha Points are non-monetary reward points. They cannot be exchanged for cash
              and are only redeemable for educational supplies and learning materials.
            </p>
          </div>
        </div>
      </section>

      {/* Reward Catalog */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Redemption Catalog
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {REWARDS.map((reward) => (
              <div key={reward.name} className="bg-card rounded-2xl p-6 shadow text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{reward.icon}</div>
                <h3 className="font-bold text-card-foreground mb-1 text-sm">{reward.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{reward.category}</p>
                <div className="flex items-center justify-center gap-1">
                  <img
                    src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png"
                    alt="points"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="font-bold text-primary text-sm">{reward.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning Opportunities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Ways to Earn Points</h2>
              <div className="space-y-4">
                {[
                  { action: 'Complete a Visual Notebook chapter', points: '+10 pts', icon: '📖' },
                  { action: 'Win a Guardian Game battle', points: '+25 pts', icon: '⚔️' },
                  { action: 'Plant and tag a tree', points: '+50 pts', icon: '🌳' },
                  { action: 'Monthly tree check-in', points: '+10 pts', icon: '📍' },
                  { action: 'Perfect attendance (monthly)', points: '+30 pts', icon: '✅' },
                  { action: 'Help a classmate', points: '+15 pts', icon: '🤝' },
                ].map((item) => (
                  <div key={item.action} className="flex items-center justify-between bg-card rounded-xl p-4 shadow">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-card-foreground text-sm">{item.action}</span>
                    </div>
                    <span className="font-bold text-primary text-sm">{item.points}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/children-outdoor-reading.dim_800x600.jpg"
                alt="Children outdoor reading"
                containerClassName="rounded-2xl shadow-xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
