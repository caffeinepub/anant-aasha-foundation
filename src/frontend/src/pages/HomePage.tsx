import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Leaf, Droplets, Award, Heart, RefreshCw, BookOpen, Users, TreePine } from 'lucide-react';

type Page = 'home' | 'about' | 'safe-learning' | 'eco-seva' | 'aasha-coins' | 'empowerment' | 'donate-goods' | 'donate-money';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section with Large Banner Image */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-amber-50 via-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/indian-children-studying.dim_800x600.jpg"
            alt="Anant Aasha Foundation - Empowering Children"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200">
                <Heart className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-900">Section 8 Registered NGO</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
                <Award className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-900">12A & 80G Registered</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Growing Children Through
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="text-amber-600">Safe Learning</span>,
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="text-green-600">Nature Care</span> &
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="text-blue-600">Compassion</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl">
              Empowering underprivileged children with safe digital education, environmental responsibility, and values of compassion through our Learn, Earn & Sustain model.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate('donate-goods')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Donate Goods <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('about')}
                className="border-2 border-slate-300 hover:bg-slate-100 text-slate-900 font-semibold text-lg px-8 py-6 rounded-full"
              >
                Join as Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => onNavigate('eco-seva')}
              className="flex items-center gap-4 p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors border-2 border-green-100 hover:border-green-200"
            >
              <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center">
                <Leaf className="h-7 w-7 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg text-slate-900">Eco-Seva</h3>
                <p className="text-sm text-slate-600">Environmental Service</p>
              </div>
            </button>

            <button
              onClick={() => onNavigate('eco-seva')}
              className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors border-2 border-blue-100 hover:border-blue-200"
            >
              <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center">
                <Droplets className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg text-slate-900">Jal-Seva</h3>
                <p className="text-sm text-slate-600">Water Conservation</p>
              </div>
            </button>

            <button
              onClick={() => onNavigate('aasha-coins')}
              className="flex items-center gap-4 p-6 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors border-2 border-amber-100 hover:border-amber-200"
            >
              <div className="h-14 w-14 rounded-full bg-amber-100 flex items-center justify-center">
                <img 
                  src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png" 
                  alt="Aasha Points" 
                  className="h-7 w-7"
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg text-slate-900">Aasha Points</h3>
                <p className="text-sm text-slate-600">Reward System</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Image and Text Content Block - Our Story */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
                  <Heart className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Building Hope Through Education
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Anant Aasha Foundation was born from a simple belief: every child deserves access to quality education and a safe environment to learn and grow. In rural and semi-urban India, children face barriers that prevent them from reaching their full potential—lack of digital resources, unsafe internet access, and limited environmental awareness.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We bridge these gaps through our integrated approach—combining safe digital learning, environmental stewardship, and a reward system that motivates children to excel while teaching them the value of responsibility and compassion.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/assets/generated/modern-indian-classroom.dim_800x600.jpg"
                  alt="Indian children learning in classroom"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
              <RefreshCw className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Learn, Earn & Sustain Cycle
            </h2>
          </div>

          <p className="text-center text-lg text-slate-700 max-w-4xl mx-auto mb-12">
            A holistic approach that empowers children to learn responsibly, earn through meaningful contributions, and sustain our environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl font-bold text-blue-600">01</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Learn</h3>
              <p className="text-center text-slate-700">
                Access quality education through safe, controlled digital learning environments guided by trained teachers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl font-bold text-green-600">02</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Earn</h3>
              <p className="text-center text-slate-700">
                Earn Aasha Points by completing lessons and verified environmental service activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
              <div className="h-16 w-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl font-bold text-amber-600">03</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Sustain</h3>
              <p className="text-center text-slate-700">
                Redeem points for educational resources while learning environmental responsibility and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Info Section - How We Work */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How We Create Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-12">
              <Card className="border-2 overflow-hidden">
                <img
                  src="/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg"
                  alt="Children engaged in digital learning"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold">Safe Digital Education</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    We provide controlled access to digital learning resources, ensuring children learn technology safely under teacher supervision. Every session is curated, monitored, and aligned with educational goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 overflow-hidden">
                <img
                  src="/assets/generated/children-environmental-care.dim_800x600.jpg"
                  alt="Children caring for environment"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TreePine className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold">Environmental Stewardship</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Through Eco-Seva and Jal-Seva programs, children adopt trees, care for birds, and learn environmental responsibility. Each action is verified and rewarded with Aasha Points.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 overflow-hidden">
                <img
                  src="/assets/generated/children-community-service.dim_800x600.jpg"
                  alt="Children helping each other with studies"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-bold">Community & Values</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    We foster a supportive community where children learn teamwork, compassion, and leadership. Our programs instill values that last a lifetime.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 overflow-hidden">
                <img
                  src="/assets/generated/children-celebrating-success.dim_800x600.jpg"
                  alt="Children celebrating educational success"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png" 
                      alt="Aasha Points" 
                      className="h-6 w-6"
                    />
                    <h3 className="text-xl font-bold">Reward System</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Aasha Points motivate children to excel in learning and environmental activities. Points can be redeemed for educational supplies, books, and field trips.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section with Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-slate-600">Trees Planted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">5000+</div>
                <div className="text-slate-600">Points Earned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-slate-600">Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Mission</h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Your support can transform lives. Whether through donations, volunteering, or spreading awareness, every contribution makes a difference in a child's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('donate-goods')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-6 rounded-full"
              >
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('about')}
                className="border-2 border-slate-300 hover:bg-slate-100 text-slate-900 font-semibold text-lg px-8 py-6 rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
