import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "../../components/ProductLayout";
import { submitInquiry } from "../../lib/api";

export const Route = createFileRoute("/products/poultry-feed")({
  component: PoultryFeedPage,
});

function PoultryFeedPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({ name: "", phone: "", location: "", qty: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const benefits = [
    {
      title: "Optimal FCR & Fast Weight Gain",
      desc: "Engineered with digestible amino acids to maximize body weight gains while significantly lowering feed consumption costs per kg of meat.",
      icon: "⚡",
    },
    {
      title: "Enhanced Immune Resistance & Lower Mortality",
      desc: "Fortified with gut-modulating prebiotics, organic trace minerals, and essential vitamins to minimize flock disease vulnerability.",
      icon: "🛡️",
    },
    {
      title: "Strong Eggshells & Peak Layer Yields",
      desc: "Balanced bioavailability of bio-calcium and phosphorus maintains peak laying percentage (>92%) and minimizes cracked eggs.",
      icon: "🥚",
    },
    {
      title: "Uniform Flock Growth & Feathering",
      desc: "Consistent particle sizing and uniform nutrient distribution prevent feed segregation, ensuring equal growth across the entire flock.",
      icon: "✨",
    },
  ];

  const layerFeeds = [
    {
      title: "Layer Grower Concentrate 35%",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2100 kcal/kg" },
        { label: "Crude Protein (min.)", value: "28.00%" },
        { label: "Crude Fibre (max.)", value: "15.00%" },
        { label: "Calcium", value: "1.5%" },
      ],
    },
    {
      title: "Layer Concentrate 35%",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2100 kcal/kg" },
        { label: "Crude Protein (min.)", value: "30.00%" },
        { label: "Crude Fibre (max.)", value: "3.00%" },
        { label: "Calcium", value: "5.00%" },
      ],
    },
    {
      title: "Layer Grower",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2650 kcal/kg" },
        { label: "Crude Protein (min.)", value: "19.00%" },
        { label: "Crude Fibre (max.)", value: "4.00%" },
        { label: "Calcium", value: "0.90%" },
      ],
    },
    {
      title: "Layer Starter",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2750 kcal/kg" },
        { label: "Crude Protein (min.)", value: "22.00%" },
        { label: "Crude Fibre (max.)", value: "3.80%" },
        { label: "Calcium", value: "1.00%" },
      ],
    },
  ];

  const broilerFeeds = [
    {
      title: "Broiler Pre-Starter",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2950 kcal/kg" },
        { label: "Crude Protein (min.)", value: "23.00%" },
        { label: "Crude Fibre (max.)", value: "2.75%" },
        { label: "Calcium", value: "1.00%" },
      ],
    },
    {
      title: "Broiler Starter",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "3050 kcal/kg" },
        { label: "Crude Protein (min.)", value: "21.50%" },
        { label: "Crude Fibre (max.)", value: "2.75%" },
        { label: "Calcium", value: "1.00%" },
      ],
    },
    {
      title: "Broiler Finisher",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "3150 kcal/kg" },
        { label: "Crude Protein (min.)", value: "19.50%" },
        { label: "Crude Fibre (max.)", value: "2.75%" },
        { label: "Calcium", value: "0.90%" },
      ],
    },
    {
      title: "Broiler Concentrate 35%",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2900 kcal/kg" },
        { label: "Crude Protein (min.)", value: "43.00%" },
        { label: "Crude Fibre (max.)", value: "2.75%" },
        { label: "Calcium", value: "2.40%" },
      ],
    },
  ];

  const cockerelFeeds = [
    {
      title: "Cockerel Starter",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2800 kcal/kg" },
        { label: "Crude Protein (min.)", value: "20.50%" },
        { label: "Crude Fibre (max.)", value: "4.50%" },
        { label: "Calcium", value: "1.00%" },
      ],
    },
    {
      title: "Cockerel Grower",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2750 kcal/kg" },
        { label: "Crude Protein (min.)", value: "17.00%" },
        { label: "Crude Fibre (max.)", value: "4.50%" },
        { label: "Calcium", value: "1.00%" },
      ],
    },
  ];

  const gavranFeeds = [
    {
      title: "Gavran Pre-Starter",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2900 kcal/kg" },
        { label: "Crude Protein (min.)", value: "22.50%" },
        { label: "Crude Fibre (max.)", value: "4.00%" },
        { label: "Calcium", value: "1.00%" },
      ],
    },
    {
      title: "Gavran Starter",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2800 kcal/kg" },
        { label: "Crude Protein (min.)", value: "19.50%" },
        { label: "Crude Fibre (max.)", value: "4.00%" },
        { label: "Calcium", value: "1.00%" },
      ],
    },
    {
      title: "Gavran Finisher",
      sub: "Guaranteed Analysis",
      specs: [
        { label: "Energy (me)", value: "2750 kcal/kg" },
        { label: "Crude Protein (min.)", value: "17.50%" },
        { label: "Crude Fibre (max.)", value: "4.50%" },
        { label: "Calcium", value: "1.00%" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-36 lg:pt-44 pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 animate-fade-up">
          <div className="rounded-3xl bg-gradient-to-br from-[#002144] via-[#003366] to-[#327411] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="max-w-2xl relative z-10">
              <span className="inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md animate-pulse">
                High Performance Avian Nutrition
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                FeedRani Layer &amp; Broiler Poultry Feed
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                Guaranteed Analysis poultry nutrition range for Broilers, Layers, Cockerels, and Gavran birds. Scientifically balanced energy, protein, fibre, and calcium ratios for optimal growth and yield.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#layer-feed"
                  className="rounded-full bg-[#327411] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#285e0e] hover:shadow-xl"
                >
                  Layer Feed Range
                </a>
                <a
                  href="#broiler-feed"
                  className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
                >
                  Broiler &amp; Gavran Feed
                </a>
              </div>
            </div>
            <img
              src="/assets/hen.webp"
              alt="Poultry Feed"
              className="absolute right-0 bottom-0 h-full w-1/2 object-cover opacity-30 mix-blend-overlay hidden lg:block"
            />
          </div>
        </section>

        {/* Key Reach & Distribution Grid Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm hover-card-rise">
              <div className="mx-auto mb-4 grid size-12 place-items-center rounded-xl bg-amber-500/10 text-amber-500 text-2xl">
                📍
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">38+ Districts</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">Wide coverage across Bihar</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm hover-card-rise">
              <div className="mx-auto mb-4 grid size-12 place-items-center rounded-xl bg-amber-500/10 text-amber-500 text-2xl">
                🏪
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">500+ Dealers</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">Strong dealer network</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm hover-card-rise">
              <div className="mx-auto mb-4 grid size-12 place-items-center rounded-xl bg-amber-500/10 text-amber-500 text-2xl">
                👥
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">10,000+ Farmers</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">Trusted by farmers</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm hover-card-rise">
              <div className="mx-auto mb-4 grid size-12 place-items-center rounded-xl bg-amber-500/10 text-amber-500 text-2xl">
                🚚
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">Fast Supply</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">Efficient logistics system</p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section id="benefits" className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="rounded-3xl border border-[#327411]/20 bg-gradient-to-b from-[#327411]/5 to-transparent p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Why FeedRani?</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
                Key Benefits of FeedRani Poultry Feed
              </h2>
              <p className="mt-3 text-slate-600">
                Scientifically tested formulations designed to deliver maximum profitability and flock health for poultry farmers.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover-card-rise">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="text-base font-bold text-[#002144]">{b.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Layer Feed Guaranteed Analysis */}
        <section id="layer-feed" className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-20">
          <div className="border-b border-slate-200 pb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Avian Category 01</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
              FeedRani Layer Feed Line
            </h2>
            <p className="mt-2 text-slate-600">
              Guaranteed nutrient composition for layer starter, grower, concentrate, and laying phases.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {layerFeeds.map((feed, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover-card-rise flex flex-col justify-between">
                <div>
                  <div className="h-44 w-full bg-slate-50 rounded-xl overflow-hidden mb-4 p-2 flex items-center justify-center border border-slate-100">
                    <img
                      src="/assets/hen.webp"
                      alt={feed.title}
                      className="h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <span className="inline-block rounded-md bg-[#002144]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#002144]">
                    {feed.sub}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#002144]">{feed.title}</h3>
                  <div className="mt-4 border-t border-slate-100 pt-3 space-y-2">
                    {feed.specs.map((s, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-slate-600">{s.label}:</span>
                        <span className="font-bold text-[#002144]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-[#327411]">Bag Size: 50 kg HDPE Bag</span>
                    <span className="text-xs text-[#327411] font-bold">In Stock ✓</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => { setSelectedProduct(feed.title); setIsSubmitted(false); }}
                      className="rounded-lg border border-[#002144] bg-white px-3 py-2 text-xs font-bold text-[#002144] shadow-sm transition-all hover:bg-[#002144] hover:text-white"
                    >
                      Inquiry
                    </button>
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20FeedRani%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(feed.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20ba5a]"
                    >
                      <span>💬 Chat Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Broiler Feed Guaranteed Analysis */}
        <section id="broiler-feed" className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-20">
          <div className="border-b border-slate-200 pb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Avian Category 02</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
              FeedRani Broiler Feed Line
            </h2>
            <p className="mt-2 text-slate-600">
              High FCR broiler pre-starter, starter, finisher, and concentrate feed formulas.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {broilerFeeds.map((feed, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover-card-rise flex flex-col justify-between">
                <div>
                  <div className="h-44 w-full bg-slate-50 rounded-xl overflow-hidden mb-4 p-2 flex items-center justify-center border border-slate-100">
                    <img
                      src="/assets/hen.webp"
                      alt={feed.title}
                      className="h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <span className="inline-block rounded-md bg-[#327411]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#327411]">
                    {feed.sub}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[#002144]">{feed.title}</h3>
                  <div className="mt-4 border-t border-slate-100 pt-3 space-y-2">
                    {feed.specs.map((s, i) => (
                      <div key={i} className="flex justify-between text-xs">
                        <span className="text-slate-600">{s.label}:</span>
                        <span className="font-bold text-[#002144]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-[#327411]">Bag Size: 50 kg HDPE Bag</span>
                    <span className="text-xs text-[#327411] font-bold">In Stock ✓</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => { setSelectedProduct(feed.title); setIsSubmitted(false); }}
                      className="rounded-lg border border-[#002144] bg-white px-3 py-2 text-xs font-bold text-[#002144] shadow-sm transition-all hover:bg-[#002144] hover:text-white"
                    >
                      Inquiry
                    </button>
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20FeedRani%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(feed.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#25D366] px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#20ba5a]"
                    >
                      <span>💬 Chat Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Cockerel & Gavran Feed Guaranteed Analysis */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Cockerel */}
            <div>
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Specialty 01</span>
                <h3 className="mt-1 text-2xl font-bold text-[#002144]">Cockerel Feed Line</h3>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {cockerelFeeds.map((feed, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover-card-rise">
                    <span className="text-[10px] font-bold text-[#327411] uppercase">{feed.sub}</span>
                    <h4 className="text-base font-bold text-[#002144] mt-1">{feed.title}</h4>
                    <div className="mt-3 space-y-1.5 text-xs">
                      {feed.specs.map((s, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-slate-600">{s.label}:</span>
                          <span className="font-bold text-[#002144]">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gavran */}
            <div>
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Specialty 02</span>
                <h3 className="mt-1 text-2xl font-bold text-[#002144]">Gavran Country Bird Feed Line</h3>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {gavranFeeds.map((feed, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover-card-rise">
                    <span className="text-[10px] font-bold text-[#327411] uppercase">{feed.sub}</span>
                    <h4 className="text-sm font-bold text-[#002144] mt-1">{feed.title}</h4>
                    <div className="mt-3 space-y-1 text-xs">
                      {feed.specs.map((s, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-slate-500 text-[10px]">{s.label}:</span>
                          <span className="font-bold text-[#002144] text-[11px]">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Product Inquiry Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl border border-slate-100">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
            >
              ✕
            </button>

            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#002144]">Inquiry Submitted!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Thank you for your interest in <span className="font-bold text-[#327411]">{selectedProduct}</span>. Our feed sales expert will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="mt-6 rounded-xl bg-[#327411] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#285e0e]"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Product Inquiry</span>
                <h3 className="mt-1 text-2xl font-bold text-[#002144]">{selectedProduct}</h3>
                <p className="mt-1 text-xs text-slate-500">Fill in your contact details for pricing and dealer quotes.</p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    try {
                      await submitInquiry({
                        name: inquiryData.name,
                        phone: inquiryData.phone,
                        location: inquiryData.location,
                        message: `Product Inquiry: ${selectedProduct}. Qty: ${inquiryData.qty}`,
                        product: selectedProduct || "Poultry Feed",
                        type: "Product Modal Quote",
                      });
                      setIsSubmitted(true);
                    } catch (err) {
                      console.error("Inquiry submit error:", err);
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="mt-6 space-y-4 text-left"
                >
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Mobile Number / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">District / Location *</label>
                    <input
                      type="text"
                      required
                      value={inquiryData.location}
                      onChange={(e) => setInquiryData({ ...inquiryData, location: e.target.value })}
                      placeholder="e.g. Patna, Bihar"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Estimated Quantity (Bags)</label>
                    <input
                      type="text"
                      value={inquiryData.qty}
                      onChange={(e) => setInquiryData({ ...inquiryData, qty: e.target.value })}
                      placeholder="e.g. 50 Bags / 2 Tons"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#327411] focus:ring-2 focus:ring-[#327411]/20"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-[#327411] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#285e0e] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </button>
                    <a
                      href={`https://wa.me/917544000912?text=Hello%20FeedRani%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(selectedProduct || "")}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center rounded-xl bg-[#25D366] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#20ba5a] transition-all"
                    >
                      💬 WhatsApp Direct
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
