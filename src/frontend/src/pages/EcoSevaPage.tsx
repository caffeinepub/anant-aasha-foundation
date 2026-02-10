import { Card, CardContent } from '@/components/ui/card';
import { Sprout, MapPin, Calendar, CheckCircle2, Shield, Droplets, TreePine, Camera } from 'lucide-react';

export function EcoSevaPage() {
  return (
    <div className="w-full">
      {/* Hero Section with Large Image */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/children-planting-tree.dim_600x400.jpg"
            alt="Children planting trees"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
              <TreePine className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">Environmental Stewardship</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Eco-Seva & Jal-Seva</h1>
            <p className="text-xl text-slate-600 mb-6">पर्यावरण सेवा और जल सेवा</p>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Teaching children environmental responsibility through hands-on tree adoption, water conservation, and verified eco-activities.
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
                  src="/assets/generated/children-eco-activities.dim_800x500.jpg"
                  alt="Children engaged in eco activities"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
                  <Sprout className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nurturing Nature, Nurturing Future
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  प्रकृति का पोषण, भविष्य का पोषण
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Eco-Seva and Jal-Seva programs teach children the importance of environmental conservation through direct action. By adopting trees, caring for birds, and participating in water conservation activities, children develop a deep connection with nature and understand their role in protecting our planet.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  इको-सेवा और जल-सेवा कार्यक्रम बच्चों को प्रत्यक्ष कार्रवाई के माध्यम से पर्यावरण संरक्षण के महत्व को सिखाते हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adopt a Sapling Program */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="mb-12 border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Sprout className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Adopt a Sapling</h2>
                    <p className="text-slate-600">पौधा गोद लें</p>
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Each child receives a sapling to plant and care for in their community. This hands-on experience teaches responsibility, patience, and the importance of environmental conservation.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  प्रत्येक बच्चे को अपने समुदाय में रोपने और देखभाल करने के लिए एक पौधा मिलता है।
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <Sprout className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Adopt a Sapling</h3>
                  <p className="text-center text-slate-700">
                    Each child receives a sapling to plant and care for in their community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Geo-Tag Location</h3>
                  <p className="text-center text-slate-700">
                    The planted tree is geo-tagged for tracking and accountability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">6-Month Care</h3>
                  <p className="text-center text-slate-700">
                    Children commit to caring for the tree for 6 months.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Month Responsibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">The 6-Month Responsibility</h2>
                <p className="text-lg text-slate-600 mb-2 text-center">6 महीने की जिम्मेदारी</p>
                <p className="text-lg text-slate-700 leading-relaxed mb-6 text-center">
                  Each child who adopts a tree commits to a 6-month care period. This teaches patience, responsibility, and the importance of nurturing life.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Weekly watering and care</h3>
                      <p className="text-slate-600">Regular maintenance to ensure healthy growth, teaching children the importance of consistent care and dedication.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Monthly photo updates</h3>
                      <p className="text-slate-600">Document the tree's growth journey with geo-tagged photos, creating a visual record of environmental impact.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Growth measurement tracking</h3>
                      <p className="text-slate-600">Monitor and record the tree's development, teaching children observation skills and scientific thinking.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Protection from animals</h3>
                      <p className="text-slate-600">Ensure the sapling is safe and secure, teaching children problem-solving and protective care.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Info Section - Jal-Seva */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
                  <Droplets className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Water Conservation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Jal-Seva: Caring for Birds & Water
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  जल-सेवा: पक्षियों और पानी की देखभाल
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Jal-Seva teaches children about water conservation and compassion for wildlife. Students place water bowls for birds, especially during hot summer months, and document their efforts with geo-tagged photos.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  जल-सेवा बच्चों को जल संरक्षण और वन्यजीवों के प्रति करुणा के बारे में सिखाती है।
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Each verified act of kindness earns Aasha Coins, reinforcing positive environmental behavior and teaching children that small actions can make a big difference.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="border-2 overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-cyan-200 flex items-center justify-center">
                    <Droplets className="h-32 w-32 text-blue-600" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Verification System</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Students upload geo-tagged photos of their environmental activities. Our verification system ensures authenticity and rewards genuine efforts with Aasha Coins.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Visual Content - Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Environmental Impact</h2>
            <p className="text-xl text-center text-slate-600 mb-12">पर्यावरणीय प्रभाव</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 text-center">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <TreePine className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                  <h3 className="font-bold text-lg mb-2">Trees Planted</h3>
                  <p className="text-slate-600">पेड़ लगाए गए</p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Droplets className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
                  <h3 className="font-bold text-lg mb-2">Birds Fed</h3>
                  <p className="text-slate-600">पक्षियों को खिलाया</p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">3000+</div>
                  <h3 className="font-bold text-lg mb-2">Verified Activities</h3>
                  <p className="text-slate-600">सत्यापित गतिविधियाँ</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
