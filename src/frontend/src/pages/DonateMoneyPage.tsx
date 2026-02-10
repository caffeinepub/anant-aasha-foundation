import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IndianRupee, Heart, Users, Leaf } from 'lucide-react';

export function DonateMoneyPage() {
  return (
    <div className="w-full">
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-purple-100 mb-4">
                <IndianRupee className="h-10 w-10 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate Money</h1>
              <p className="text-xl text-slate-600 mb-6">धन दान करें</p>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Your financial support helps us expand our programs and reach more children in need.
              </p>
            </div>

            <Card className="border-2 mb-8">
              <CardContent className="p-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                <p className="text-lg text-slate-600 mb-6">
                  We are setting up secure payment options for monetary donations. Please check back soon or contact us directly.
                </p>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Support Education</h3>
                  <p className="text-sm text-slate-600">Help provide digital learning resources</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Fund Eco-Seva</h3>
                  <p className="text-sm text-slate-600">Support environmental initiatives</p>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-amber-50 to-orange-50">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">General Support</h3>
                  <p className="text-sm text-slate-600">Help us grow and reach more children</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
