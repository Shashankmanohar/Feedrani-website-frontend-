import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "../../components/ProductLayout";

export const Route = createFileRoute("/products/goat-swine-minerals")({
  component: GoatSwineMineralsPage,
});

function GoatSwineMineralsPage() {
  const benefits = [
    {
      title: "Rapid Weight & Muscle Accretion",
      desc: "High digestible protein and energy ratios drive daily live weight gain in goats, sheep, and swine.",
      icon: "📈",
    },
    {
      title: "Prevention of Urinary Calculi & Bloat",
      desc: "Formulated with ammonium chloride and rumen buffers to safeguard male kids, bucks, and rams against urinary blockage.",
      icon: "🧪",
    },
    {
      title: "3x Higher Bioavailability via Chelated Minerals",
      desc: "Organically bound minerals bypass rumen degradation, filling regional soil deficiency gaps and boosting conception rates.",
      icon: "💎",
    },
    {
      title: "Healthy Litter Sizes & Lactation Yield",
      desc: "Optimized lysine and vitamin levels in swine diets ensure bigger litters, robust piglets, and high sow milk yield.",
      icon: "🐖",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#002144] via-[#2d3a24] to-[#327411] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="max-w-2xl relative z-10">
              <span className="inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md">
                Specialty Ruminant &amp; Swine Nutrition
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Goat, Swine &amp; Mineral Mixtures
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                Tailored concentrate feed for goats, sheep, swine, and chelated mineral mixtures formulated to overcome soil and fodder deficiency gaps in Indian farming.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#benefits"
                  className="rounded-full bg-[#327411] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#285e0e] hover:shadow-xl"
                >
                  Key Benefits
                </a>
                <a
                  href="#specifications"
                  className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
                >
                  Browse Mineral &amp; Feed Range
                </a>
              </div>
            </div>
            <img
              src="/assets/goat.webp"
              alt="Goat and Swine Feed"
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Why FeedRani Specialty?</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
                Key Benefits of FeedRani Goat, Swine &amp; Mineral Formulas
              </h2>
              <p className="mt-3 text-slate-600">
                Targeted micronutrients and protein concentrates built for superior growth rates, disease resistance, and reproductive health.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="text-base font-bold text-[#002144]">{b.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Variants & Specs */}
        <section id="specifications" className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
              Targeted Micronutrient &amp; Growth Formulas
            </h2>
            <p className="mt-4 text-slate-600">
              Deficiency-free formulation featuring organically bound trace minerals, bio-available calcium, and bypass fat for maximum weight gain and reproductive efficiency.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Goat & Sheep Feed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Line 01</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">Goat &amp; Sheep Fattening Pellets</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                High-energy concentrate feed with ammonium chloride to prevent urinary calculi in male kids and rams while boosting daily weight gain.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Crude Protein:</span> <span className="font-bold text-[#002144]">16% - 18%</span></li>
                <li className="flex justify-between"><span>Digestible Energy:</span> <span className="font-bold text-[#002144]">2800 kcal/kg</span></li>
                <li className="flex justify-between"><span>Form:</span> <span className="font-bold text-[#002144]">4mm Pellets</span></li>
                <li className="flex justify-between"><span>Packaging:</span> <span className="font-bold text-[#002144]">50 kg HDPE Bag</span></li>
              </ul>
            </div>

            {/* Swine Growth & Breeder Feed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Line 02</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">Swine Starter &amp; Grower Mash</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Amino acid fortified pig feed enriched with lysine and methionine for lean muscle accretion, fast growth, and optimal litter size.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Crude Protein:</span> <span className="font-bold text-[#002144]">18% - 20%</span></li>
                <li className="flex justify-between"><span>Lysine Content:</span> <span className="font-bold text-[#002144]">1.1%</span></li>
                <li className="flex justify-between"><span>Form:</span> <span className="font-bold text-[#002144]">Mash / Crumbles</span></li>
                <li className="flex justify-between"><span>Packaging:</span> <span className="font-bold text-[#002144]">50 kg HDPE Bag</span></li>
              </ul>
            </div>

            {/* Chelated Mineral Mixture */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Line 03</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">Chelated Mineral Mixture &amp; Premix</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Area-specific chelated trace mineral supplement enriched with Chromium, Selenium, Zinc, and Iodine for enhanced conception rate and lactation.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Bioavailability:</span> <span className="font-bold text-[#002144]">3x Higher Absorption</span></li>
                <li className="flex justify-between"><span>Dosage:</span> <span className="font-bold text-[#002144]">50g - 100g per day</span></li>
                <li className="flex justify-between"><span>Form:</span> <span className="font-bold text-[#002144]">Powder / Granules</span></li>
                <li className="flex justify-between"><span>Packaging:</span> <span className="font-bold text-[#002144]">1 kg, 5 kg, 25 kg Buckets</span></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
