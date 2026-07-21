import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "../components/ProductLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#002144] via-[#003822] to-[#327411] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="max-w-2xl relative z-10">
              <span className="inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md">
                Get In Touch With Us
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Contact FeedRani &amp; Dealer Support
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                Have questions about our livestock feed formulations, bulk delivery schedules, or dealership opportunities? Connect with our dedicated sales and customer support team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards + Form */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-12">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#327411]/10 text-xl text-[#327411]">
                    📞
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us Directly</span>
                    <h3 className="text-lg font-bold text-[#002144]">+91 7544000912</h3>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500">Available Monday – Saturday, 9:00 AM – 7:00 PM IST.</p>
                <a
                  href="tel:+917544000912"
                  className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#327411] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#285e0e] transition-all"
                >
                  Call Now
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#25D366]/10 text-xl text-[#25D366]">
                    💬
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Sales Support</span>
                    <h3 className="text-lg font-bold text-[#002144]">Instant Chat</h3>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500">Quick inquiries about feed stock, bag prices, and dealer terms.</p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20FeedRani%2C%20I%20would%20like%20to%20inquire%20about%20your%20feed%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#20ba5a] transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-amber-500/10 text-xl text-amber-500">
                    📍
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Head Office</span>
                    <h3 className="text-base font-bold text-[#002144]">Khajekalan, Patna City, Bihar 800008</h3>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500">FeedRani Feeds &amp; Nutrition Private Limited</p>
              </div>
            </div>

            {/* Contact & Dealer Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 md:p-12 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Send Message</span>
                <h2 className="mt-1 text-3xl font-extrabold text-[#002144]">Contact &amp; Dealer Inquiry</h2>
                <p className="mt-2 text-xs text-slate-500">Fill in the details below and our sales representative will get back to you.</p>

                <form className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700">District / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muzaffarpur, Bihar"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700">Message / Requirement Details</label>
                    <textarea
                      rows={4}
                      placeholder="Write your requirement or questions here..."
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#327411] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#285e0e] transition-all"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
