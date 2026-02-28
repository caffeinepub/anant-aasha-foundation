import React, { useState } from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface DonateGoodsPageProps {
  onNavigate: (page: Page) => void;
}

const CATEGORIES = [
  { id: 'books', label: 'Books & Stationery', icon: '📚', priority: 'High' },
  { id: 'clothes', label: 'Clothes & Uniforms', icon: '👕', priority: 'High' },
  { id: 'electronics', label: 'Electronics & Devices', icon: '💻', priority: 'Medium' },
  { id: 'food', label: 'Food & Nutrition', icon: '🍱', priority: 'High' },
  { id: 'sports', label: 'Sports Equipment', icon: '⚽', priority: 'Low' },
  { id: 'art', label: 'Art & Craft Supplies', icon: '🎨', priority: 'Medium' },
];

export default function DonateGoodsPage({ onNavigate }: DonateGoodsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    description: '',
    courier: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500/10 via-background to-yellow-500/10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Donate <span className="text-primary">Goods</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Your unused items can transform a child's life. Books, clothes, electronics —
                every donation makes a difference.
              </p>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <ImageWithDisclaimer
                src="/assets/generated/children-community-service.dim_800x600.jpg"
                alt="Community service"
                containerClassName="rounded-2xl shadow-2xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Donate Goods?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Many families cannot afford basic educational supplies. A set of books or a
                school uniform can be the difference between a child attending school or
                staying home.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your donated goods go directly to children in need, carefully sorted and
                distributed by our volunteers to ensure maximum impact.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">📦</div>
                  <div className="text-xs text-muted-foreground">Items Donated</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">👶</div>
                  <div className="text-xs text-muted-foreground">Children Helped</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">🏘️</div>
                  <div className="text-xs text-muted-foreground">Communities</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/children-helping-studies.dim_600x400.jpg"
                alt="Children helping with studies"
                containerClassName="rounded-2xl shadow-xl aspect-video"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Priority Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            What We Need Most
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Select a category to donate
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`bg-card rounded-2xl p-6 shadow text-center transition-all ${
                  selectedCategory === cat.id
                    ? 'ring-2 ring-primary scale-105'
                    : 'hover:shadow-lg'
                }`}
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-card-foreground mb-2">{cat.label}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    cat.priority === 'High'
                      ? 'bg-red-100 text-red-700'
                      : cat.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {cat.priority} Priority
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Schedule a Donation
          </h2>
          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your donation request has been received. Our team will contact you within
                24 hours to arrange pickup or drop-off.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', address: '', description: '', courier: false }); }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Donate More
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-border rounded-xl px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-border rounded-xl px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border border-border rounded-xl px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description of Items
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border border-border rounded-xl px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Describe the items you wish to donate"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="courier"
                  checked={formData.courier}
                  onChange={(e) => setFormData({ ...formData, courier: e.target.checked })}
                  className="w-4 h-4 accent-primary"
                />
                <label htmlFor="courier" className="text-sm text-muted-foreground">
                  I prefer to send via courier (we'll provide address)
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Submit Donation Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <ImageWithDisclaimer
                src="/assets/generated/children-arts-crafts.dim_800x600.jpg"
                alt="Children arts and crafts"
                containerClassName="rounded-2xl shadow-xl aspect-video"
                className="rounded-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-6">Community Impact</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Every item donated creates ripples of positive change. A donated book
                might inspire a future doctor. A school uniform might give a child the
                confidence to attend class every day.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Together, we're building a community where no child is left behind due
                to lack of basic resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
