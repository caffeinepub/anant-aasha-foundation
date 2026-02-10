import { Card, CardContent } from '@/components/ui/card';
import { Building2, Calendar, CheckCircle2, MapPin, Phone, Heart, Users, Target } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/indian-children-studying.dim_800x600.jpg"
            alt="Anant Aasha Foundation - About Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <Building2 className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Section 8 Registered NGO</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-slate-600 mb-6">हमारे बारे में</p>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Anant Aasha Foundation is a registered non-profit organization dedicated to empowering underprivileged children through education, environmental stewardship, and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Image and Text Content Block - Our Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="/assets/generated/children-outdoor-reading.dim_800x600.jpg"
                  alt="Children learning together"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                  <Heart className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Our Journey</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  From Vision to Reality
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  दृष्टि से वास्तविकता तक
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Founded in May 2024, Anant Aasha Foundation emerged from a deep commitment to address the educational and environmental challenges faced by children in rural and semi-urban India. Our founders recognized that traditional approaches were not enough—children needed a holistic model that combined safe digital learning, environmental responsibility, and character development.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  मई 2024 में स्थापित, अनंत आशा फाउंडेशन ग्रामीण और अर्ध-शहरी भारत में बच्चों द्वारा सामना की जाने वाली शैक्षिक और पर्यावरणीय चुनौतियों को संबोधित करने की गहरी प्रतिबद्धता से उभरा।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Official Registration</h2>

            <Card className="mb-8 border-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Anant Aasha Foundation <span className="text-lg font-normal text-slate-600">(अनंत आशा फाउंडेशन)</span>
                    </h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-2">CIN:</h4>
                    <p className="text-slate-700 font-mono">U88900UP2024NPL202148</p>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Date of Incorporation:
                    </h4>
                    <p className="text-slate-700">
                      May 3, 2024 <span className="text-slate-600">(3 मई, 2024)</span>
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Company Status:
                    </h4>
                    <p className="text-slate-700">
                      Active <span className="text-slate-600">(सक्रिय)</span>
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-2">Class of Company:</h4>
                    <p className="text-slate-700">
                      Private (Non-Profit/Section 8){' '}
                      <span className="text-slate-600">(प्राइवेट (गैर-लाभकारी/धारा 8))</span>
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Registered Address:
                    </h4>
                    <address className="text-slate-700 not-italic">
                      Kasara 406, Haibatpur, Bisrakh<br />
                      Gautam Buddha Nagar, Uttar Pradesh<br />
                      PIN: 201306
                    </address>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Contact:
                    </h4>
                    <a href="tel:+917428570178" className="text-primary hover:underline text-lg">
                      +91 74285 70178
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-4">
                  <Target className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-900">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Empowering Through Education
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  शिक्षा के माध्यम से सशक्तिकरण
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Anant Aasha Foundation is dedicated to empowering underprivileged children through a holistic approach that combines safe digital education, environmental responsibility, and values of compassion.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  अनंत आशा फाउंडेशन एक समग्र दृष्टिकोण के माध्यम से वंचित बच्चों को सशक्त बनाने के लिए समर्पित है जो सुरक्षित डिजिटल शिक्षा, पर्यावरणीय जिम्मेदारी और करुणा के मूल्यों को जोड़ता है।
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Through our Learn, Earn & Sustain model, we provide controlled digital learning environments, reward environmental service activities, and foster a generation of responsible, educated, and compassionate citizens.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg"
                  alt="Children engaged in digital learning"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Info Section - Our Values */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Core Values</h2>
            <p className="text-xl text-center text-slate-600 mb-12">हमारे मूल मूल्य</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
                  <p className="text-slate-600 mb-2">समावेशिता</p>
                  <p className="text-slate-700">
                    Every child deserves equal access to quality education and opportunities, regardless of their background.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Compassion</h3>
                  <p className="text-slate-600 mb-2">करुणा</p>
                  <p className="text-slate-700">
                    We teach children to care for each other, their community, and the environment with empathy and kindness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Responsibility</h3>
                  <p className="text-slate-600 mb-2">जिम्मेदारी</p>
                  <p className="text-slate-700">
                    We instill a sense of responsibility towards learning, the environment, and society in every child.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Visual Content - Impact Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Making a Difference</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Creating Lasting Impact
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  स्थायी प्रभाव बनाना
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Since our inception, we have touched the lives of hundreds of children across Uttar Pradesh. Our integrated approach ensures that children not only gain academic knowledge but also develop environmental consciousness and strong moral values.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  हमारी स्थापना के बाद से, हमने उत्तर प्रदेश भर में सैकड़ों बच्चों के जीवन को छुआ है। हमारा एकीकृत दृष्टिकोण सुनिश्चित करता है कि बच्चे न केवल शैक्षणिक ज्ञान प्राप्त करें बल्कि पर्यावरण चेतना और मजबूत नैतिक मूल्य भी विकसित करें।
                </p>
              </div>
              <div>
                <img
                  src="/assets/generated/children-environmental-care.dim_800x600.jpg"
                  alt="Children engaged in eco activities"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
