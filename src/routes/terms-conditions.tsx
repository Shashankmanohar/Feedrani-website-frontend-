import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "../components/ProductLayout";

export const Route = createFileRoute("/terms-conditions")({
  component: TermsConditionsPage,
});

function TermsConditionsPage() {
  const lastUpdated = "July 22, 2026";

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-36 lg:pt-44 pb-24">
        {/* Hero Banner */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#002144] via-[#003822] to-[#327411] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="max-w-3xl relative z-10">
              <span className="inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md">
                Legal Framework
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Terms &amp; Conditions
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                Please read these terms and conditions carefully before using the FeedRani website, placing orders, or engaging in dealer partnerships.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-slate-200">
                <span>🗓️ Effective Date: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="mx-auto max-w-[1000px] px-6 lg:px-8 mt-12 space-y-10">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-12 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#002144]">1. Acceptance of Terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                By accessing and using this website, submitting inquiry forms, or purchasing FeedRani livestock feed products, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use our services.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">2. Product Specifications &amp; Quality Assurances</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                FeedRani manufactures high-performance animal feed (Cattle, Poultry, Aqua, Goat &amp; Swine) formulated to strict scientific standards. While we ensure highest Feed Conversion Ratios (FCR) and nutritional consistency, actual animal growth and yields depend on farm management, water quality, and housing conditions.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">3. Dealer &amp; Distributor Terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Dealership approvals are granted based on regional market viability and credit evaluation. Authorized dealers must adhere to recommended storage guidelines (cool, dry environment) to maintain feed quality and preventing moisture degradation.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">4. Intellectual Property</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                All content, product branding, logos, scientific formulation charts, and images on this website are the intellectual property of <strong>FeedRani Feeds &amp; Nutrition Private Limited</strong>. Reproduction or misuse without written permission is strictly prohibited.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">5. Limitation of Liability</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                FeedRani shall not be held liable for any indirect, incidental, or consequential damages resulting from proper or improper feed storage, external environmental contamination on customer premises, or unapproved feed mixing.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">6. Governing Law &amp; Jurisdiction</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">7. Contact &amp; Grievance Support</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                For legal inquiries or grievances regarding our terms, please contact:
              </p>
              <div className="mt-4 rounded-2xl bg-slate-50 p-6 border border-slate-200/60 text-xs text-slate-700 space-y-1.5">
                <p className="font-bold text-[#002144] text-sm">FeedRani Legal &amp; Compliance Team</p>
                <p>📍 Khajekalan, Patna City, Bihar 800008</p>
                <p>📞 Customer Support: +91 7544000912</p>
                <p>✉️ Email: legal@feedrani.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
