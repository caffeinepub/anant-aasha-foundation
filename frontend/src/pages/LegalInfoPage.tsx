import { FileText, Award, MapPin, Calendar, Hash, Building2, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4 py-3 border-b border-slate-100 last:border-0">
      <dt className="sm:col-span-2 text-sm font-semibold text-slate-600 uppercase tracking-wide">{label}</dt>
      <dd className="sm:col-span-3 text-sm text-slate-800 font-medium">{value}</dd>
    </div>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h2>
    </div>
  );
}

export function LegalInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 text-amber-300 text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Legal & Compliance Information
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Legal Information
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Official registration details, tax exemption certificates, and compliance documents for Anant Aasha Foundation.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-10">

        {/* 12A Registration */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <SectionHeader icon={Shield} title="12A Registration" />
          <dl>
            <InfoRow label="Registration Status" value="Registered under Section 12A of the Income Tax Act, 1961" />
            <InfoRow label="Organization" value="ANNANTH AASHA FOUNDATION" />
            <InfoRow label="PAN" value="ABACA6413D" />
          </dl>
        </div>

        {/* 80G Provisional Approval */}
        <div className="bg-white rounded-2xl shadow-sm border border-amber-200 p-6 md:p-8">
          <div className="flex items-start gap-3 mb-6">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex-shrink-0 mt-0.5">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">80G Provisional Approval</h2>
              <p className="text-sm text-slate-500 mt-0.5">FORM NO. 10AC — Order for Provisional Approval</p>
              <p className="text-xs text-slate-400">(See rule 17A/11AA)</p>
            </div>
          </div>

          {/* Organization Details */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">Organization Details</h3>
            <dl>
              <InfoRow label="1. PAN" value="ABACA6413D" />
              <InfoRow label="2. Name" value="ANNANTH AASHA FOUNDATION" />
              <InfoRow label="2a. Nature of Activities" value="Charitable" />
            </dl>
          </div>

          <Separator className="my-5" />

          {/* Address */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="h-4 w-4 text-amber-600" />
              <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest">2b. Address</h3>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700 space-y-1.5">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4">
                <span className="sm:col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Flat/Door/Building Plot</span>
                <span className="sm:col-span-3 font-medium">144</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4">
                <span className="sm:col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Name of Premises/Building/Village</span>
                <span className="sm:col-span-3 font-medium">Haibatpur</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4">
                <span className="sm:col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Road/Street/Post Office</span>
                <span className="sm:col-span-3 font-medium">I.A. Surajpur S.O</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4">
                <span className="sm:col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Area/Locality</span>
                <span className="sm:col-span-3 font-medium">Bisrakh Jalalpur</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4">
                <span className="sm:col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Town/City/District</span>
                <span className="sm:col-span-3 font-medium">GAUTAM BUDDHA NAGAR</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4">
                <span className="sm:col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">State</span>
                <span className="sm:col-span-3 font-medium">Uttar Pradesh</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4">
                <span className="sm:col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Country</span>
                <span className="sm:col-span-3 font-medium">INDIA</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-4">
                <span className="sm:col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Pin Code/Zip Code</span>
                <span className="sm:col-span-3 font-medium">201306</span>
              </div>
            </div>
          </div>

          <Separator className="my-5" />

          {/* Reference Numbers */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Hash className="h-4 w-4 text-amber-600" />
              <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Reference Numbers</h3>
            </div>
            <dl>
              <InfoRow label="3. Document Identification Number" value="ABACA6413DF2026101" />
              <InfoRow label="4. Application Number" value="240576860150126" />
              <InfoRow label="5. Unique Registration Number" value="ABACA6413DF20261" />
            </dl>
          </div>

          <Separator className="my-5" />

          {/* Approval Details */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-4 w-4 text-amber-600" />
              <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest">Approval Details</h3>
            </div>
            <dl>
              <InfoRow
                label="6. Section/Sub-section/Clause"
                value="80G – Sub-clause (A) of clause (iv) of first proviso to sub-section (5) of section 80G"
              />
              <InfoRow label="7. Date of Provisional Approval" value="22-01-2026" />
              <InfoRow label="8. Assessment Years" value="From AY 2026-27 to AY 2028-2029" />
            </dl>
          </div>

          <Separator className="my-5" />

          {/* Order for Provisional Approval */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-4">9. Order for Provisional Approval</h3>
            <div className="space-y-4">
              <div className="flex gap-3 bg-slate-50 rounded-xl p-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">a</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  After considering the application of the applicant and the material available on record, the applicant is hereby granted provisional approval with effect from the assessment year mentioned at serial no 8 above subject to the conditions mentioned in row number 10.
                </p>
              </div>
              <div className="flex gap-3 bg-slate-50 rounded-xl p-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">b</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The taxability, or otherwise, of the income of the applicant would be separately considered as per the provisions of the Income Tax Act, 1961.
                </p>
              </div>
              <div className="flex gap-3 bg-slate-50 rounded-xl p-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">c</span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  This order is liable to be withdrawn by the prescribed authority if it is subsequently found that the activities of the applicant are not genuine or if they are not carried out in accordance with all or any of the conditions subject to which it is granted, if it is found that the applicant has obtained the provisional approval by fraud or misrepresentation of facts or it is found that the assessee has violated any condition prescribed in the Income Tax Act, 1961.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-5" />

          {/* Conditions */}
          <div>
            <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">10. Conditions</h3>
            <p className="text-sm text-slate-600 bg-slate-50 rounded-xl p-4">
              The approval is granted subject to the following conditions as prescribed under the Income Tax Act, 1961.
            </p>
          </div>
        </div>

        {/* NGO Darpan */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <SectionHeader icon={Building2} title="NGO Darpan Registration" />
          <dl>
            <InfoRow label="NGO Darpan ID" value="UP/2024/0416559" />
            <InfoRow label="State" value="Uttar Pradesh" />
            <InfoRow label="Registration Year" value="2024" />
          </dl>
        </div>

        {/* Donor Note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Tax Benefits for Donors</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Donations made to Anant Aasha Foundation are eligible for tax deduction under Section 80G of the Income Tax Act, 1961. 
                The foundation holds provisional approval under 80G (Unique Registration Number: <strong>ABACA6413DF20261</strong>), 
                valid from AY 2026-27 to AY 2028-2029. Donors may claim deductions as per applicable provisions. 
                Please retain your donation receipt for tax filing purposes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
