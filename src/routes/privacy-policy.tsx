import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "../components/ProductLayout";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
                Legal &amp; Governance
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-lg">
                At FeedRani Feeds &amp; Nutrition Private Limited, we are committed to safeguarding the privacy and personal data of our farmers, dealers, distributors, and site visitors.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-slate-200">
                <span>🗓️ Last Updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="mx-auto max-w-[1000px] px-6 lg:px-8 mt-12 space-y-10">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-12 shadow-sm space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#002144]">1. Information We Collect</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us, our livestock feed products (Cattle, Poultry, Aqua, Goat &amp; Swine feeds), or applying for dealership opportunities.
              </p>
              <ul className="mt-4 list-disc pl-6 text-sm text-slate-600 space-y-2">
                <li><strong className="text-slate-900">Personal Details:</strong> Full Name, Phone / WhatsApp Number, Email Address.</li>
                <li><strong className="text-slate-900">Location Data:</strong> District, State, and Pincode for logistics and dealership coverage.</li>
                <li><strong className="text-slate-900">Requirement Details:</strong> Farm size, feed order requirements, or business inquiry details.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">2. How We Use Your Information</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We process your personal information for purposes based on legitimate business interests, fulfilling contracts with you, compliance with legal obligations, and your consent:
              </p>
              <ul className="mt-4 list-disc pl-6 text-sm text-slate-600 space-y-2">
                <li>To respond to user inquiries and offer customer support.</li>
                <li>To evaluate dealer and dealership distribution applications across Bihar and Eastern India.</li>
                <li>To process product orders and arrange bulk feed dispatch.</li>
                <li>To communicate promotional offers, scientific nutrition tips, or order updates via SMS/WhatsApp.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">3. Data Protection &amp; Security</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We implement robust organizational and technical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored on secure databases with encrypted transit protocols.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">4. Data Sharing &amp; Third Parties</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                FeedRani does <strong>NOT</strong> sell, trade, or rent your personal information to third parties. We may share information only with authorized logistics partners and regional sales representatives strictly to deliver your feed orders.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">5. Your Privacy Rights</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your information from our database. To exercise these rights, please contact our support team.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-extrabold text-[#002144]">6. Contact Us Regarding Privacy</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                If you have questions or comments about this Privacy Policy, please reach out to us at:
              </p>
              <div className="mt-4 rounded-2xl bg-slate-50 p-6 border border-slate-200/60 text-xs text-slate-700 space-y-1.5">
                <p className="font-bold text-[#002144] text-sm">FeedRani Feeds &amp; Nutrition Private Limited</p>
                <p>📍 Khajekalan, Patna City, Bihar 800008</p>
                <p>📞 Phone: +91 7544000912</p>
                <p>✉️ Email: contact@feedrani.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
