import React from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/generated/anant-aasha-logo-circular-transparent.dim_200x200.png"
              alt="Anant Aasha Foundation"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">Anant Aasha Foundation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A registered NGO dedicated to transforming lives through education, environmental
            stewardship, and community empowerment across India.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Journey</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Anant Aasha Foundation was born from a simple yet powerful belief: every child
                in India deserves access to quality education and a dignified life. Founded with
                a vision to bridge the gap between privilege and opportunity, we have been
                working tirelessly to create lasting change.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our name — "Anant Aasha" — means "Infinite Hope" in Hindi. This reflects our
                unwavering commitment to the children and communities we serve, no matter the
                challenges we face.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From humble beginnings, we have grown into a recognized organization with
                programs spanning education, environment, and empowerment — touching hundreds
                of lives across multiple states.
              </p>
            </div>
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/indian-children-studying.dim_800x600.jpg"
                alt="Indian children studying"
                containerClassName="rounded-2xl shadow-xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Official Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow">
              <h3 className="text-xl font-bold text-card-foreground mb-6 flex items-center gap-2">
                <span className="text-2xl">📋</span> Legal Status
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Organization Type</span>
                  <span className="font-medium text-card-foreground">NGO / Trust</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Registration</span>
                  <span className="font-medium text-card-foreground">12A Certified</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Tax Exemption</span>
                  <span className="font-medium text-card-foreground">80G Approved</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">NGO Darpan</span>
                  <span className="font-medium text-card-foreground">Registered</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow">
              <h3 className="text-xl font-bold text-card-foreground mb-6 flex items-center gap-2">
                <span className="text-2xl">🏛️</span> Organization Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="font-medium text-card-foreground">2024</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium text-card-foreground">India</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">Focus Area</span>
                  <span className="font-medium text-card-foreground">Education & Environment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Beneficiaries</span>
                  <span className="font-medium text-card-foreground">Children (6–18 yrs)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate('legal-info')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              View Full Legal Information
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ImageWithDisclaimer
                src="/assets/generated/children-outdoor-reading.dim_800x600.jpg"
                alt="Children reading outdoors"
                containerClassName="rounded-2xl shadow-xl aspect-video mb-6"
                className="rounded-2xl"
              />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower underprivileged children through quality education, environmental
                awareness, and community development — creating a generation of confident,
                capable, and compassionate individuals.
              </p>
            </div>
            <div>
              <ImageWithDisclaimer
                src="/assets/generated/children-planting-tree.dim_600x400.jpg"
                alt="Children planting trees"
                containerClassName="rounded-2xl shadow-xl aspect-video mb-6"
                className="rounded-2xl"
              />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A future where every child in India, regardless of their background, has access
                to dignified education, a clean environment, and the tools to build a better
                tomorrow for themselves and their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '❤️', title: 'Compassion', desc: 'We lead with empathy and care for every child we serve.' },
              { icon: '🌟', title: 'Excellence', desc: 'We strive for the highest quality in all our programs.' },
              { icon: '🤝', title: 'Community', desc: 'We build strong partnerships with local communities.' },
              { icon: '🌱', title: 'Sustainability', desc: 'We create programs that have lasting, generational impact.' },
              { icon: '🔍', title: 'Transparency', desc: 'We maintain full accountability to our donors and beneficiaries.' },
              { icon: '💡', title: 'Innovation', desc: 'We use technology and creativity to solve complex problems.' },
            ].map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 shadow text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Impact Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Every number in our impact report represents a real child whose life has been
                touched by our programs. From the first child who learned to read using our
                digital tools, to the community that planted its hundredth tree — each story
                is a testament to what's possible when we work together.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our holistic approach ensures that children don't just receive education —
                they receive the confidence, skills, and support network to thrive.
              </p>
            </div>
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/children-arts-crafts.dim_800x600.jpg"
                alt="Children doing arts and crafts"
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
