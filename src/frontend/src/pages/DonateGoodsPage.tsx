import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Package, Laptop, BookOpen, Gamepad2, Backpack, Copy, Check, Heart, Gift } from 'lucide-react';
import { toast } from 'sonner';

export function DonateGoodsPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    items: '',
  });

  const foundationAddress = `Anant Aasha Foundation
Kasara 406, Haibatpur, Bisrakh
Gautam Buddha Nagar, Uttar Pradesh
PIN: 201306
Phone: +91 74285 70178`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(foundationAddress);
    setCopied(true);
    toast.success('Address copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you soon to arrange pickup.');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      pincode: '',
      items: '',
    });
  };

  const categories = [
    { icon: Laptop, label: 'Laptops & Tablets', labelHi: 'लैपटॉप और टैबलेट' },
    { icon: BookOpen, label: 'Books & Stationery', labelHi: 'किताबें और स्टेशनरी' },
    { icon: Gamepad2, label: 'Educational Toys', labelHi: 'शैक्षिक खिलौने' },
    { icon: Backpack, label: 'School Bags & Uniforms', labelHi: 'स्कूल बैग और यूनिफॉर्म' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Large Image */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/children-celebrating-success.dim_800x600.jpg"
            alt="Donate goods to children"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
              <Package className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">Priority: Goods Donation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate Goods</h1>
            <p className="text-xl text-slate-600 mb-6">सामान दान करें</p>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Your donated goods directly support children's education and development. Every item makes a meaningful difference in a child's learning journey.
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
                  src="/assets/generated/children-community-service.dim_800x600.jpg"
                  alt="Children benefiting from donations"
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
                  <Heart className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Impact of Your Donation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Transforming Lives Through Giving
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  देने के माध्यम से जीवन बदलना
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  When you donate educational materials, laptops, books, or school supplies, you're not just giving items—you're opening doors to opportunity. Your donations enable children from underprivileged backgrounds to access quality education and develop skills that will shape their futures.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  जब आप शैक्षिक सामग्री, लैपटॉप, किताबें या स्कूल की आपूर्ति दान करते हैं, तो आप केवल वस्तुएं नहीं दे रहे हैं—आप अवसर के दरवाजे खोल रहे हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Categories */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Priority Donation Categories</h2>
            <p className="text-xl text-center text-slate-600 mb-12">प्राथमिकता दान श्रेणियां</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{category.label}</h3>
                        <p className="text-sm text-slate-600">{category.labelHi}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Donation Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Pickup Address</Label>
                    <Textarea
                      id="address"
                      placeholder="Full address with landmark"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="City name"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        placeholder="XXXXXX"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="items">Items to Donate</Label>
                    <Textarea
                      id="items"
                      placeholder="Describe items (e.g., 2 laptops, 10 books, school bags)"
                      value={formData.items}
                      onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Submit Donation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Info Section - Courier Option */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Send via Courier</h3>
                    <p className="text-slate-600 mb-2">कुरियर द्वारा भेजें</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 mb-4">
                  <h4 className="font-bold text-lg mb-3">Anant Aasha Foundation</h4>
                  <div className="text-slate-700 space-y-1 mb-4">
                    <p>Kasara 406, Haibatpur, Bisrakh</p>
                    <p>Gautam Buddha Nagar, Uttar Pradesh</p>
                    <p>PIN: 201306</p>
                    <p className="pt-2">Phone: +91 74285 70178</p>
                  </div>
                </div>

                <Button
                  onClick={handleCopyAddress}
                  variant="outline"
                  className="w-full border-2 border-blue-200 hover:bg-blue-100"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Address Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" /> Copy Address
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Visual Content - Community Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-4">
                  <Gift className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Community Stories</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Your Donations Create Ripples
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  आपके दान लहरें पैदा करते हैं
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Every donated item creates a ripple effect in the community. A single laptop enables multiple children to access digital learning. Books pass from hand to hand, spreading knowledge. School supplies remove barriers to education, allowing children to focus on learning rather than worrying about basic materials.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  प्रत्येक दान की गई वस्तु समुदाय में एक लहर प्रभाव पैदा करती है। एक लैपटॉप कई बच्चों को डिजिटल शिक्षा तक पहुंचने में सक्षम बनाता है।
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/assets/generated/modern-indian-classroom.dim_800x600.jpg"
                  alt="Community impact of donations"
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
