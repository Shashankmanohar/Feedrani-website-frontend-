import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "../components/ProductLayout";
import { useState } from "react";
import { submitInquiry } from "../lib/api";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
    product: "General / Dealer Inquiry",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Please fill in your Name and Phone number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await submitInquiry({
        name: formData.name,
        phone: formData.phone,
        location: formData.location,
        message: formData.message,
        product: formData.product,
        type: "Contact Page Form",
      });

      if (res && res.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          location: "",
          message: "",
          product: "General / Dealer Inquiry",
        });
      } else {
        setErrorMsg(res?.message || "Failed to submit. Please try again.");
      }
    } catch {
      setErrorMsg("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-36 lg:pt-44 pb-24">
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
                  href="https://wa.me/917544000912?text=Hello%20FeedRani%2C%20I%20would%20like%20to%20inquire%20about%20your%20feed%20products."
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

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white">
                      ✓
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-emerald-900">Thank You! Inquiry Received</h3>
                    <p className="mt-2 text-sm text-emerald-700">
                      Your details have been registered in our Admin system. Our sales representative will contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 rounded-xl bg-[#327411] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#285e0e] transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {errorMsg && (
                      <div className="rounded-xl bg-rose-50 border border-rose-200 p-4 text-xs font-semibold text-rose-700">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Sharma"
                          className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700">District / Location *</label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Muzaffarpur, Bihar"
                          className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700">Inquiry Type / Feed Product</label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20 bg-white"
                        >
                          <option value="General / Dealer Inquiry">General / Dealer Dealership</option>
                          <option value="Cattle Feed (Milch Cattle)">Cattle Feed (High Fat/SNF)</option>
                          <option value="Poultry Feed (Broiler/Layer)">Poultry Feed</option>
                          <option value="Aqua & Fish Feed">Aqua &amp; Fish Feed</option>
                          <option value="Goat & Swine Feed">Goat &amp; Swine Feed</option>
                          <option value="Mineral Mixture & Supplements">Mineral Mixture &amp; Supplements</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700">Message / Requirement Details</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your requirement or questions here (e.g. 50 bags required per month)..."
                        className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-[#327411] py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#285e0e] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

