import React, { useState } from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface EcoSevaPageProps {
  onNavigate: (page: Page) => void;
}

export default function EcoSevaPage({ onNavigate }: EcoSevaPageProps) {
  const [activeTab, setActiveTab] = useState<'eco' | 'jal'>('eco');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500/10 via-background to-blue-500/10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <img
                  src="/assets/generated/eco-seva-icon-transparent.dim_128x128.png"
                  alt="Eco-Seva"
                  className="w-12 h-12 object-contain"
                />
                <span className="text-primary font-bold text-lg">Eco-Seva & Jal-Seva</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Nurturing <span className="text-green-600">Nature</span>,
                <br />
                Saving <span className="text-blue-600">Water</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Our environmental programs teach children to be stewards of the earth —
                planting trees, conserving water, and building a sustainable future.
              </p>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <ImageWithDisclaimer
                src="/assets/generated/children-environmental-care.dim_800x600.jpg"
                alt="Children environmental care"
                containerClassName="rounded-2xl shadow-2xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('eco')}
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'eco'
                  ? 'bg-green-600 text-white'
                  : 'border border-green-600 text-green-600 hover:bg-green-50'
              }`}
            >
              🌳 Eco-Seva
            </button>
            <button
              onClick={() => setActiveTab('jal')}
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'jal'
                  ? 'bg-blue-600 text-white'
                  : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              💧 Jal-Seva
            </button>
          </div>
        </div>
      </section>

      {/* Eco-Seva Content */}
      {activeTab === 'eco' && (
        <>
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Tree Adoption Program</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Each child in our program adopts a tree and becomes its guardian for 6 months.
                    Using our geo-tagging system, children track their tree's growth and health,
                    learning responsibility and environmental stewardship.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The program instills a deep connection with nature while teaching children
                    about ecosystems, climate change, and the importance of green cover.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">1000+</div>
                      <div className="text-sm text-muted-foreground">Trees Planted</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">6 mo</div>
                      <div className="text-sm text-muted-foreground">Responsibility Period</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <ImageWithDisclaimer
                    src="/assets/generated/children-planting-tree.dim_600x400.jpg"
                    alt="Children planting trees"
                    containerClassName="rounded-2xl shadow-xl aspect-video"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Geo-Tagging System
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card rounded-2xl p-6 shadow text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Tag Your Tree</h3>
                  <p className="text-muted-foreground text-sm">
                    Each tree is geo-tagged with GPS coordinates, creating a digital record
                    of its location and growth.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Track Growth</h3>
                  <p className="text-muted-foreground text-sm">
                    Children log monthly updates on their tree's height, health, and
                    surrounding environment.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Earn Points</h3>
                  <p className="text-muted-foreground text-sm">
                    Consistent care and updates earn Aasha Points, rewarding environmental
                    responsibility.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <ImageWithDisclaimer
                    src="/assets/generated/children-eco-activities.dim_800x500.jpg"
                    alt="Children eco activities"
                    containerClassName="rounded-2xl shadow-xl aspect-video"
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    6-Month Responsibility
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The 6-month commitment is designed to build lasting habits. Children learn
                    that environmental stewardship is not a one-time act but a continuous
                    responsibility.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Monthly tree health check-ins',
                      'Watering and care schedules',
                      'Photo documentation of growth',
                      'Community sharing of progress',
                      'Certificate of completion',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-green-600 font-bold">🌱</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Jal-Seva Content */}
      {activeTab === 'jal' && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-foreground mb-6">Water Conservation</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Jal-Seva (Water Service) teaches children about the critical importance of
                  water conservation in India. Through hands-on activities and community
                  projects, children become water warriors.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From rainwater harvesting to reducing water waste, our program equips
                  children with practical skills to address water scarcity in their communities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">💧</div>
                    <div className="text-sm text-muted-foreground">Water Warriors</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">🏘️</div>
                    <div className="text-sm text-muted-foreground">Communities Served</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <ImageWithDisclaimer
                  src="/assets/generated/children-environmental-care.dim_800x600.jpg"
                  alt="Children environmental care"
                  containerClassName="rounded-2xl shadow-xl aspect-video"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 bg-green-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Plant a Seed of Change
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Support our Eco-Seva program and help us create a generation of
            environmental stewards.
          </p>
          <button
            onClick={() => onNavigate('donate-money')}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Support Eco-Seva
          </button>
        </div>
      </section>
    </div>
  );
}
