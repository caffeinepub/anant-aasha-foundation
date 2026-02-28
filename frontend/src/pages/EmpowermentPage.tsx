import React from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface EmpowermentPageProps {
  onNavigate: (page: Page) => void;
}

export default function EmpowermentPage({ onNavigate }: EmpowermentPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Empowering <span className="text-primary">Every Child</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Building confidence, skills, and opportunities for underprivileged children
                through our holistic empowerment programs.
              </p>
              <button
                onClick={() => onNavigate('donate-money')}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Support Empowerment
              </button>
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

      {/* Four Pillars */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Four Pillars of Empowerment
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our holistic approach addresses every dimension of a child's development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '📚',
                title: 'Education',
                desc: 'Quality digital learning tools, visual notebooks, and gamified education that makes learning engaging and effective.',
                img: '/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg',
                imgAlt: 'Children digital learning',
              },
              {
                icon: '🌱',
                title: 'Environment',
                desc: 'Tree adoption, water conservation, and eco-awareness programs that build environmental responsibility.',
                img: '/assets/generated/children-planting-tree.dim_600x400.jpg',
                imgAlt: 'Children planting trees',
              },
              {
                icon: '🤝',
                title: 'Community',
                desc: 'Building strong community bonds through shared activities, service projects, and collaborative learning.',
                img: '/assets/generated/children-community-service.dim_800x600.jpg',
                imgAlt: 'Children community service',
              },
              {
                icon: '💪',
                title: 'Skills',
                desc: 'Practical life skills, digital literacy, and vocational training that prepare children for the future.',
                img: '/assets/generated/children-arts-crafts.dim_800x600.jpg',
                imgAlt: 'Children arts and crafts',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-card rounded-2xl overflow-hidden shadow-lg">
                <ImageWithDisclaimer
                  src={pillar.img}
                  alt={pillar.imgAlt}
                  containerClassName="h-48"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{pillar.icon}</span>
                    <h3 className="text-xl font-bold text-card-foreground">{pillar.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/children-outdoor-reading.dim_800x600.jpg"
                alt="Children outdoor reading"
                containerClassName="rounded-2xl shadow-xl aspect-video"
                className="rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Holistic Approach</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                True empowerment goes beyond academics. Our programs address the whole child —
                their emotional wellbeing, social skills, environmental awareness, and
                practical capabilities.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                By integrating education, environment, community, and skills development,
                we create well-rounded individuals who are prepared to contribute positively
                to society.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-xs text-muted-foreground">Children Empowered</div>
                </div>
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4</div>
                  <div className="text-xs text-muted-foreground">Core Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Future-Ready Children
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <ImageWithDisclaimer
                src="/assets/generated/indian-children-studying.dim_800x600.jpg"
                alt="Indian children studying"
                containerClassName="h-48"
              />
              <div className="p-6">
                <h3 className="font-bold text-card-foreground mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Children in our program show measurable improvement in academic performance
                  and confidence.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <ImageWithDisclaimer
                src="/assets/generated/children-environmental-care.dim_800x600.jpg"
                alt="Environmental care"
                containerClassName="h-48"
              />
              <div className="p-6">
                <h3 className="font-bold text-card-foreground mb-2">Environmental Leaders</h3>
                <p className="text-muted-foreground text-sm">
                  Young eco-warriors who understand and act on environmental challenges
                  in their communities.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <ImageWithDisclaimer
                src="/assets/generated/children-helping-studies.dim_600x400.jpg"
                alt="Children helping with studies"
                containerClassName="h-48"
              />
              <div className="p-6">
                <h3 className="font-bold text-card-foreground mb-2">Community Contributors</h3>
                <p className="text-muted-foreground text-sm">
                  Children who give back to their communities, creating a virtuous cycle
                  of empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Be Part of the Change
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your support helps us empower more children to reach their full potential.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('donate-money')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Donate Now
            </button>
            <button
              onClick={() => onNavigate('donate-goods')}
              className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
            >
              Donate Goods
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
