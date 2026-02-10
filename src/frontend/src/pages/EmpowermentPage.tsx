import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Sparkles, Target, Award, Lightbulb } from 'lucide-react';

export function EmpowermentPage() {
  return (
    <div className="w-full">
      {/* Hero Section with Large Image */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/children-celebrating-success.dim_800x600.jpg"
            alt="Children empowerment through education"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-purple-100 mb-6 border-4 border-purple-200">
              <Heart className="h-10 w-10 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowerment</h1>
            <p className="text-xl text-slate-600 mb-6">सशक्तिकरण</p>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Empowering children with knowledge, skills, and values to become confident, responsible, and compassionate individuals who can shape their own futures.
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
                  src="/assets/generated/indian-children-studying.dim_800x600.jpg"
                  alt="Empowered children learning"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Our Vision</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Building Confident Leaders
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  आत्मविश्वासी नेताओं का निर्माण
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  True empowerment goes beyond academic knowledge. At Anant Aasha Foundation, we focus on holistic development—nurturing not just the mind, but also the heart and character of every child. We believe that when children are empowered with the right tools, values, and opportunities, they can overcome any obstacle.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  सच्चा सशक्तिकरण शैक्षणिक ज्ञान से परे है। अनंत आशा फाउंडेशन में, हम समग्र विकास पर ध्यान केंद्रित करते हैं—न केवल मन, बल्कि हर बच्चे के दिल और चरित्र का पोषण करते हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars of Empowerment */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Four Pillars of Empowerment</h2>
            <p className="text-xl text-center text-slate-600 mb-12">सशक्तिकरण के चार स्तंभ</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-blue-600" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">Educational Empowerment</h3>
                  <p className="text-slate-600 mb-3">शैक्षिक सशक्तिकरण</p>
                  <p className="text-slate-700 leading-relaxed">
                    Providing access to quality education and digital literacy skills that prepare children for future opportunities. Through safe digital learning environments, interactive content, and personalized support, we ensure every child can reach their academic potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Sparkles className="h-24 w-24 text-green-600" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">Skill Development</h3>
                  <p className="text-slate-600 mb-3">कौशल विकास</p>
                  <p className="text-slate-700 leading-relaxed">
                    Building practical skills through hands-on activities, environmental projects, and collaborative learning experiences. Children develop critical thinking, problem-solving, and teamwork skills that are essential for success in the modern world.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <Heart className="h-24 w-24 text-purple-600" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">Values & Character</h3>
                  <p className="text-slate-600 mb-3">मूल्य और चरित्र</p>
                  <p className="text-slate-700 leading-relaxed">
                    Instilling values of compassion, responsibility, and environmental stewardship through meaningful activities. We teach children to care for others, respect nature, and act with integrity in all aspects of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <Users className="h-24 w-24 text-amber-600" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">Community Building</h3>
                  <p className="text-slate-600 mb-3">समुदाय निर्माण</p>
                  <p className="text-slate-700 leading-relaxed">
                    Creating a supportive community where children learn teamwork, leadership, and social responsibility. Through group activities and collaborative projects, children develop strong social bonds and learn the importance of working together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Info Section - Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                  <Lightbulb className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Holistic Approach</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Integrated Learning Model
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  एकीकृत शिक्षण मॉडल
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  We believe that true empowerment comes from a holistic approach that addresses education, skills, values, and community. Through our integrated programs, we help children discover their potential and develop the confidence to pursue their dreams.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  हम मानते हैं कि सच्चा सशक्तिकरण एक समग्र दृष्टिकोण से आता है जो शिक्षा, कौशल, मूल्यों और समुदाय को संबोधित करता है।
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg"
                  alt="Integrated learning approach"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Empowerment in Action</h2>
            <p className="text-xl text-center text-slate-600 mb-12">कार्रवाई में सशक्तिकरण</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
                  <p className="text-slate-600 mb-2">शैक्षणिक उत्कृष्टता</p>
                  <p className="text-slate-700">
                    Children show improved academic performance through our safe digital learning programs and interactive educational tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Environmental Awareness</h3>
                  <p className="text-slate-600 mb-2">पर्यावरण जागरूकता</p>
                  <p className="text-slate-700">
                    Students develop deep environmental consciousness through hands-on Eco-Seva and Jal-Seva activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Leadership Skills</h3>
                  <p className="text-slate-600 mb-2">नेतृत्व कौशल</p>
                  <p className="text-slate-700">
                    Children emerge as confident leaders in their communities, inspiring others through their actions and values.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Visual Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-4">
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-900">Future Ready</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Preparing for Tomorrow
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  कल के लिए तैयारी
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Our empowerment programs prepare children for the challenges and opportunities of the future. By combining digital literacy, environmental awareness, and strong values, we ensure that every child has the tools they need to succeed in an ever-changing world.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  हमारे सशक्तिकरण कार्यक्रम बच्चों को भविष्य की चुनौतियों और अवसरों के लिए तैयार करते हैं।
                </p>
              </div>
              <div>
                <img
                  src="/assets/generated/children-arts-crafts.dim_800x600.jpg"
                  alt="Children prepared for the future"
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
