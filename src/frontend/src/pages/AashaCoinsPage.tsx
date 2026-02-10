import { Card, CardContent } from '@/components/ui/card';
import { Gift, Trophy, Star, BookOpen, Palette } from 'lucide-react';

export function AashaCoinsPage() {
  const rewards = [
    { name: 'School supplies and stationery', points: 100, icon: BookOpen },
    { name: 'Educational books', points: 150, icon: BookOpen },
    { name: 'Art and craft materials', points: 200, icon: Palette },
    { name: 'Sports equipment', points: 250, icon: Trophy },
    { name: 'Educational toys and games', points: 300, icon: Gift },
    { name: 'Special field trip opportunities', points: 500, icon: Star },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Large Image */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/store-rewards.dim_800x500.png"
            alt="Aasha Points Rewards"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-amber-100 mb-6 border-4 border-amber-200">
              <img 
                src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png" 
                alt="Aasha Points" 
                className="h-12 w-12"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aasha Points</h1>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              A digital reward point system that motivates children to excel in learning and environmental activities while teaching the value of effort and responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Image and Text Content Block */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="/assets/generated/child-with-books.dim_400x400.jpg"
                  alt="Child with educational books"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-4">
                  <Gift className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-900">Reward Philosophy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Earning Through Learning & Service
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Aasha Points are non-monetary reward points that can only be redeemed for educational and developmental resources. We believe in rewarding effort with tools that further a child's growth and learning. This ensures that every point earned contributes to their educational journey.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  These points are not currency and have no cash value. They represent achievement, effort, and commitment to learning and environmental stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redemption Catalog */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Redemption Catalog</h2>

            <Card className="border-2 bg-white">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {rewards.map((reward, index) => {
                    const Icon = reward.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-100 hover:border-amber-200 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-amber-600" />
                          </div>
                          <span className="font-medium text-slate-900">{reward.name}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
                          <img 
                            src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png" 
                            alt="Points" 
                            className="h-5 w-5"
                          />
                          <span className="font-bold text-amber-900">{reward.points}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Info Section - How to Earn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How to Earn Aasha Points</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 bg-blue-50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Educational Activities</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Complete interactive lessons and Visual Notebook chapters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Win Guardian Game battles by answering quiz questions correctly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Participate in educational activities and assessments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 bg-green-50">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Gift className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Environmental Service</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Participate in verified Eco-Seva and Jal-Seva activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Maintain your adopted tree for 6 months with regular updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Submit monthly progress photos with geo-tagging</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Aasha Points Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
                  <Star className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Benefits</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Aasha Points Work
                </h2>
                <ul className="space-y-4 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">✓</span>
                    <span>Motivates children to excel in learning and environmental contributions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">✓</span>
                    <span>Teaches the value of effort, responsibility, and delayed gratification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">✓</span>
                    <span>Ensures rewards support educational growth and development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">✓</span>
                    <span>Creates a positive reinforcement cycle for learning and service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">✓</span>
                    <span>Non-monetary system focused purely on educational value</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="border-2 overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <img 
                      src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png" 
                      alt="Aasha Points" 
                      className="h-32 w-32"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Digital Reward Points</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Aasha Points are tracked digitally as non-monetary rewards, teaching children about achievement tracking and goal-setting in a safe, educational context focused on learning outcomes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
