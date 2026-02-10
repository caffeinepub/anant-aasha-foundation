import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Users, BookOpen, Shield, CheckCircle2, GraduationCap } from 'lucide-react';

export function SafeLearningPage() {
  return (
    <div className="w-full">
      {/* Hero Section with Large Image */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-blue-50 to-slate-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/children-digital-learning-enhanced.dim_800x600.jpg"
            alt="Safe Digital Learning"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Controlled Digital Environment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Safe Learning</h1>
            <p className="text-xl text-slate-600 mb-6">सुरक्षित शिक्षा</p>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Empowering children with digital literacy in a safe, supervised environment where learning meets technology responsibly.
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
                  src="/assets/generated/modern-indian-classroom.dim_800x600.jpg"
                  alt="Digital learning dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
                  <BookOpen className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Our Approach</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Bridging the Digital Divide Safely
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  डिजिटल विभाजन को सुरक्षित रूप से पाटना
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  In today's digital world, access to technology is essential for education. However, unrestricted internet access poses significant risks to children. Our Safe Learning initiative bridges this gap by providing controlled digital learning environments.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  आज की डिजिटल दुनिया में, शिक्षा के लिए प्रौद्योगिकी तक पहुंच आवश्यक है। हालांकि, अप्रतिबंधित इंटरनेट एक्सेस बच्चों के लिए महत्वपूर्ण जोखिम पैदा करता है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
                <p className="text-lg text-slate-600 mb-4">कार्यक्रम अवलोकन</p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Each session is conducted under the supervision of trained teachers who guide children through curated educational content. We use advanced content filtering to ensure children only access age-appropriate, educational material. Our platform combines interactive lessons, visual learning tools, and gamified experiences to make education engaging and effective.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  प्रत्येक सत्र प्रशिक्षित शिक्षकों की देखरेख में आयोजित किया जाता है जो बच्चों को क्यूरेटेड शैक्षिक सामग्री के माध्यम से मार्गदर्शन करते हैं।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Main Benefits
            </h2>
            <p className="text-xl text-center text-slate-600 mb-12">मुख्य लाभ</p>

            <div className="space-y-4">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Access to quality educational resources</h3>
                    <p className="text-slate-600">Curated content aligned with school curriculum, including interactive lessons, visual notebooks, and educational games that make learning engaging and effective.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Safe introduction to technology</h3>
                    <p className="text-slate-600">Filtered and monitored internet access ensures children explore digital learning without exposure to harmful content or online risks.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Interactive learning experiences</h3>
                    <p className="text-slate-600">Engaging digital content, visual flashcards, slide decks, and educational games that transform traditional learning into exciting adventures.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Parental peace of mind</h3>
                    <p className="text-slate-600">Supervised sessions with trained educators mean parents can trust that their children are learning safely and productively.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Future-ready digital skills</h3>
                    <p className="text-slate-600">Preparing children for the digital age with essential computer literacy, online safety awareness, and responsible technology use.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Info Section - Feature Highlights */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Feature Highlights</h2>
            <p className="text-xl text-center text-slate-600 mb-12">मुख्य विशेषताएं</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Shield className="h-24 w-24 text-blue-600" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2">Controlled Environment</h3>
                  <p className="text-slate-600 mb-2">नियंत्रित वातावरण</p>
                  <p className="text-slate-700">
                    Safe, filtered internet access ensuring children are protected from harmful content. Every website and resource is pre-approved and monitored in real-time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Users className="h-24 w-24 text-green-600" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2">Teacher-Guided</h3>
                  <p className="text-slate-600 mb-2">शिक्षक-निर्देशित</p>
                  <p className="text-slate-700">
                    Every digital session is supervised by trained educators who guide learning, answer questions, and ensure productive use of technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <Monitor className="h-24 w-24 text-purple-600" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2">Digital Literacy</h3>
                  <p className="text-slate-600 mb-2">डिजिटल साक्षरता</p>
                  <p className="text-slate-700">
                    Teaching children responsible technology use, online safety awareness, and essential digital skills for the modern world.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-amber-600" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-2">Curriculum Aligned</h3>
                  <p className="text-slate-600 mb-2">पाठ्यक्रम संरेखित</p>
                  <p className="text-slate-700">
                    Digital content aligned with school curriculum for enhanced learning, ensuring students reinforce classroom lessons through technology.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Visual Content - Learning Tools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-4">
                  <GraduationCap className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-900">Interactive Tools</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Engaging Learning Experience
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  आकर्षक सीखने का अनुभव
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Our platform features Visual Notebooks with interactive flashcards, slide decks, and infographics that make complex concepts easy to understand. Students can also play the Guardian Game, where they battle academic bosses by answering quiz questions correctly.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  हमारा प्लेटफ़ॉर्म इंटरैक्टिव फ्लैशकार्ड, स्लाइड डेक और इन्फोग्राफिक्स के साथ विज़ुअल नोटबुक प्रदान करता है जो जटिल अवधारणाओं को समझने में आसान बनाते हैं।
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/assets/generated/indian-children-studying.dim_800x600.jpg"
                  alt="Children using digital learning tools"
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
