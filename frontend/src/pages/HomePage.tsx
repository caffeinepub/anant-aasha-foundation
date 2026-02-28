import React, { useState } from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img
                  src="/assets/generated/anant-aasha-logo-cylindrical-transparent.dim_200x200.png"
                  alt="Anant Aasha Foundation Logo"
                  className="w-20 h-20 object-contain"
                />
                <div className="flex flex-col gap-1">
                  <img
                    src="/assets/generated/ngo-certification-badge-transparent.dim_150x50.png"
                    alt="12A Certified"
                    className="h-6 object-contain"
                  />
                  <img
                    src="/assets/generated/ngo-certification-badge-transparent.dim_150x50.png"
                    alt="80G Certified"
                    className="h-6 object-contain"
                  />
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Anant Aasha
                <span className="text-primary block">Foundation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Empowering underprivileged children through education, environmental stewardship,
                and community development across India.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('donate-money')}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Donate Now
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <ImageWithDisclaimer
                src="/assets/generated/indian-children-classroom.dim_800x600.jpg"
                alt="Children in classroom"
                containerClassName="rounded-2xl shadow-2xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Our Programs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover how we're making a difference through our key initiatives
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Eco-Seva Card */}
            <div
              className={`bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-200 ${hoveredCard === 'eco' ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCard('eco')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onNavigate('eco-seva')}
            >
              <ImageWithDisclaimer
                src="/assets/generated/children-eco-activities.dim_800x500.jpg"
                alt="Eco-Seva Program"
                containerClassName="h-48"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/assets/generated/eco-seva-icon-transparent.dim_128x128.png"
                    alt="Eco-Seva"
                    className="w-8 h-8 object-contain"
                  />
                  <h3 className="text-xl font-bold text-card-foreground">Eco-Seva</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Tree adoption, geo-tagging, and environmental stewardship programs for children.
                </p>
              </div>
            </div>

            {/* Safe Learning Card */}
            <div
              className={`bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-200 ${hoveredCard === 'learning' ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCard('learning')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onNavigate('safe-learning')}
            >
              <ImageWithDisclaimer
                src="/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg"
                alt="Safe Learning Program"
                containerClassName="h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">Safe Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Digital classrooms, visual notebooks, and interactive learning tools for every child.
                </p>
              </div>
            </div>

            {/* Aasha Points Card */}
            <div
              className={`bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-200 ${hoveredCard === 'aasha' ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCard('aasha')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onNavigate('aasha-coins')}
            >
              <ImageWithDisclaimer
                src="/assets/generated/children-celebrating-success.dim_800x600.jpg"
                alt="Aasha Points Program"
                containerClassName="h-48"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png"
                    alt="Aasha Points"
                    className="w-8 h-8 object-contain"
                  />
                  <h3 className="text-xl font-bold text-card-foreground">Aasha Points</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Reward system encouraging learning milestones and community participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/children-helping-studies.dim_600x400.jpg"
                alt="Children helping each other study"
                containerClassName="rounded-2xl shadow-xl aspect-video"
                className="rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Anant Aasha Foundation is dedicated to breaking the cycle of poverty through
                education and empowerment. We believe every child deserves access to quality
                education, regardless of their socioeconomic background.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Through our integrated programs — Safe Learning, Eco-Seva, and community
                empowerment — we create lasting change in the lives of underprivileged children
                across India.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-card rounded-xl p-6 text-center shadow">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground text-sm">Children Supported</div>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">Schools Reached</div>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow">
                  <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground text-sm">Trees Planted</div>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground text-sm">Communities</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/modern-indian-classroom.dim_800x600.jpg"
                alt="Modern Indian classroom"
                containerClassName="rounded-2xl shadow-xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cycle */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">How We Work</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our integrated approach creates a virtuous cycle of empowerment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Identify', desc: 'Find underprivileged children in need', icon: '🔍' },
              { step: '02', title: 'Educate', desc: 'Provide quality digital education tools', icon: '📚' },
              { step: '03', title: 'Empower', desc: 'Build skills and confidence', icon: '💪' },
              { step: '04', title: 'Sustain', desc: 'Create lasting community change', icon: '🌱' },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-2xl p-6 shadow text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-xs font-bold text-primary mb-2">{item.step}</div>
                <h3 className="font-bold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Image */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Join Our Community</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Whether you're a donor, volunteer, teacher, or supporter — there's a place for
                you in the Anant Aasha family. Together, we can create a brighter future for
                India's children.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('donate-goods')}
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Donate Goods
                </button>
                <button
                  onClick={() => onNavigate('empowerment')}
                  className="border border-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/10 transition-colors"
                >
                  Empowerment Programs
                </button>
              </div>
            </div>
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/children-community-service.dim_800x600.jpg"
                alt="Children community service"
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
