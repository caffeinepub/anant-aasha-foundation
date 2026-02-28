import React from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface DonateMoneyPageProps {
  onNavigate: (page: Page) => void;
}

export default function DonateMoneyPage({ onNavigate }: DonateMoneyPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Donate <span className="text-primary">Money</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Your financial contribution directly funds education, environmental programs,
            and community development for underprivileged children across India.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full font-semibold">
            <span>✅</span> 80G Tax Exemption Available
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-12 shadow-lg">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Online Donations Coming Soon</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We're setting up our secure online payment system. In the meantime, you can
              reach out to us directly to make a donation.
            </p>
            <div className="bg-muted/50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
              <h3 className="font-bold text-foreground mb-4">Contact Us to Donate</h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <div className="flex items-center gap-3">
                  <span>📧</span>
                  <span>anantaashafoundation@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Where Your Money Goes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Education',
                desc: 'Digital tools, visual notebooks, and learning materials for children.',
                img: '/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg',
                imgAlt: 'Children digital learning',
              },
              {
                icon: '🌱',
                title: 'Environment',
                desc: 'Tree planting, geo-tagging equipment, and eco-awareness programs.',
                img: '/assets/generated/children-planting-tree.dim_600x400.jpg',
                imgAlt: 'Children planting trees',
              },
              {
                icon: '🤝',
                title: 'Community',
                desc: 'Community centers, volunteer training, and outreach programs.',
                img: '/assets/generated/children-community-service.dim_800x600.jpg',
                imgAlt: 'Community service',
              },
            ].map((cat) => (
              <div key={cat.title} className="bg-card rounded-2xl overflow-hidden shadow-lg">
                <ImageWithDisclaimer
                  src={cat.img}
                  alt={cat.imgAlt}
                  containerClassName="h-48"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <h3 className="text-xl font-bold text-card-foreground">{cat.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefit Note */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Tax Benefits for Donors</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Anant Aasha Foundation is registered under Section 80G of the Income Tax Act.
              Donations made to us are eligible for tax deduction, making your contribution
              even more impactful.
            </p>
            <button
              onClick={() => onNavigate('legal-info')}
              className="text-primary font-semibold hover:underline"
            >
              View 80G Certificate Details →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
