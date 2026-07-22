import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "../components/ProductLayout";

export const Route = createFileRoute("/quality-nutrition")({
  component: QualityNutritionPage,
});

function QualityNutritionPage() {
  const pillars = [
    {
      step: "01",
      title: "Raw Material Testing & NIR Analysis",
      desc: "Every grain, oilcake, and mineral batch undergoes Near-Infrared Spectroscopy (NIR) screening before unloading. We test for moisture, crude protein, fiber, and aflatoxin contamination.",
      img: "/assets/grain_quality_inspection.png",
      tag: "Zero Adulteration",
    },
    {
      step: "02",
      title: "Precision Bio-Nutritional Formulation",
      desc: "Formulated by veterinary animal nutrition scientists using linear software tailored to Indian crop residues, seasonal green fodder shortages, and high ambient heat index.",
      img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
      tag: "Scientifically Balanced",
    },
    {
      step: "03",
      title: "Thermal Conditioning & Steam Pelleting",
      desc: "Conditioned at 80°C–85°C steam temperatures to gelatinize starch for 92%+ digestive absorption while completely eliminating Salmonella and E. coli pathogens.",
      img: "/assets/feed_pellet_machinery.png",
      tag: "Pathogen Free",
    },
    {
      step: "04",
      title: "Chelated Trace Mineral Fortification",
      desc: "Enriched with organically bound chelated minerals (Zinc, Copper, Manganese, Cobalt) and bypass fat/protein to maximize milk yield, SNF%, and broiler FCR.",
      img: "/assets/science_lab_testing.png",
      tag: "High Bioavailability",
    },
  ];

  const labBenchmarks = [
    {
      parameter: "Moisture Content",
      limit: "Below 10.0%",
      importance: "Prevents fungal & mycotoxin growth during storage",
      icon: "💧",
    },
    {
      parameter: "Aflatoxin B1 Level",
      limit: "Below 20 ppb (Parts Per Billion)",
      importance: "Protects liver health, eggshell quality & milk safety",
      icon: "🛡️",
    },
    {
      parameter: "Crude Protein Digestibility",
      limit: "Above 88.5%",
      importance: "Ensures maximum muscle gain & milk protein synthesis",
      icon: "💪",
    },
    {
      parameter: "Organic Trace Minerals",
      limit: "100% Bio-Available Chelates",
      importance: "Boosts immune defense, udder health & somatic cell count",
      icon: "🌿",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-36 lg:pt-44 pb-24">
        {/* Hero Section with Scientific Image */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center rounded-3xl bg-gradient-to-br from-[#002144] via-[#003822] to-[#327411] p-8 md:p-14 text-white shadow-2xl overflow-hidden relative">
            <div className="lg:col-span-7 relative z-10">
              <span className="inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md">
                Uncompromising Quality Assurance
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Scientific Animal Nutrition &amp; Quality Standard
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                FeedRani is built on a foundation of zero-tolerance laboratory testing, NIR spectroscopy raw material verification, precision formulation, and bio-available mineral enrichment for Indian farm conditions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="rounded-xl bg-[#8ec44a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#002144] shadow-md hover:bg-white transition-all"
                >
                  Explore Feed Products →
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20 transition-all"
                >
                  Request Lab Test COA →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl h-80 lg:h-96">
                <img
                  src="/assets/science_lab_testing.png"
                  alt="FeedRani Scientific Animal Nutrition Laboratory"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Quality with Scientific Photos */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Quality Process</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#002144] sm:text-4xl">
              Our 4-Stage Quality Control System
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              From raw grain arrival to final sealed 50kg bags, every batch is verified for nutritional accuracy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#327411]/50 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[#002144]/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white shadow-sm">
                      Stage {p.step}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold tracking-tight text-[#002144]">{p.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{p.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-[#327411] uppercase tracking-wider">{p.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive Science Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="rounded-3xl bg-white p-8 md:p-14 border border-slate-200/80 shadow-sm grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80"
                alt="Spectroscopy & Micro-Nutrient Analysis"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Advanced Lab Tech</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#002144]">NIR Spectroscopy &amp; Wet Chemistry Testing</h2>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Conventional visual grain checking is insufficient for modern high-yield dairy and poultry farming. At FeedRani's central laboratory, Near-Infrared Spectroscopy (NIR) delivers real-time molecular moisture, crude protein, ether extract, and crude fiber readouts within seconds before raw materials are accepted into our manufacturing bins.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#327411]">✓</span> Real-time Mycotoxin &amp; Aflatoxins B1 screening
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#327411]">✓</span> Guaranteed bypass protein and energy density per batch
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#327411]">✓</span> ISO 9001:2015 and BIS standards compliance
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lab Testing Benchmarks */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
            <div className="border-b border-slate-100 pb-6 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">In-House Wet Lab Standards</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#002144]">Analytical Testing Benchmarks</h2>
              <p className="mt-2 text-xs text-slate-500">Every production run is tested against stringent BIS &amp; ISO animal feed specifications.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {labBenchmarks.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-base font-bold text-[#002144]">{item.parameter}</h3>
                  <div className="mt-2 text-sm font-extrabold text-[#327411]">{item.limit}</div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.importance}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="rounded-3xl bg-gradient-to-r from-[#002144] to-[#327411] p-8 md:p-12 text-white text-center shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8ec44a]">Partner With FeedRani</span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Experience Higher Farm Returns with Proven Nutrition</h2>
            <p className="mt-3 max-w-xl mx-auto text-sm text-slate-200">
              Join 10,000+ satisfied farmers and 500+ dealers who rely on FeedRani for consistent, high-yield feed solutions.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/products"
                className="rounded-xl bg-[#8ec44a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#002144] shadow-md hover:bg-white transition-all"
              >
                Browse All Feeds →
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                Contact Sales Team →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
