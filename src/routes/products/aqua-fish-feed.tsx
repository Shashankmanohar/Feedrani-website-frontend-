import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "../../components/ProductLayout";

export const Route = createFileRoute("/products/aqua-fish-feed")({
  component: AquaFishFeedPage,
});

function AquaFishFeedPage() {
  const benefits = [
    {
      title: "Superior Water Stability (>3 Hours)",
      desc: "Extruded pellets remain intact in water without disintegrating, preventing nutrient leaching and keeping pond water clean.",
      icon: "🌊",
    },
    {
      title: "Faster Biomass Weight Gain",
      desc: "High digestible protein and essential fatty acids boost weight gain for Rohu, Katla, Tilapia, and Pangasius.",
      icon: "🐟",
    },
    {
      title: "100% Buoyancy & Waste Reduction",
      desc: "Allows farmers to precisely monitor feeding response, eliminating unconsumed feed waste at the pond bottom.",
      icon: "🎯",
    },
    {
      title: "Gut Microbiome & Disease Shield",
      desc: "Fortified with natural immunostimulants, digestive enzymes, and essential trace minerals to lower fish mortality rates.",
      icon: "🔬",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#002144] via-[#004d61] to-[#327411] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="max-w-2xl relative z-10">
              <span className="inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md">
                Water Stable Aquaculture Nutrition
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Aqua &amp; Fish Feed
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                Scientifically extruded floating and sinking pellets for Rohu, Katla, Tilapia, Pangasius, and Shrimp. High water stability, low leaching, and superior gut health absorption.
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
                  Explore Feed Types
                </a>
              </div>
            </div>
            <img
              src="/assets/fish-feed.webp"
              alt="Aqua Feed"
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

        {/* Key Benefits of FeedRani Aqua Feed */}
        <section id="benefits" className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="rounded-3xl border border-[#327411]/20 bg-gradient-to-b from-[#327411]/5 to-transparent p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Why FeedRani Aqua?</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
                Key Benefits of FeedRani Aqua &amp; Fish Feed
              </h2>
              <p className="mt-3 text-slate-600">
                Advanced extrusion technology delivering clean ponds, fast growth cycles, and maximum harvest yields.
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
              Water-Stable Formulations
            </h2>
            <p className="mt-4 text-slate-600">
              Formulated to maintain structural integrity in water for over 2 to 4 hours, minimizing water pollution and maximizing feeding efficiency.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Floating Fish Feed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Category 01</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">Floating Fish Feed Pellets</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Highly buoyant extruded pellets for surface and column feeders. Perfect for monitoring fish appetite and feeding behaviour.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Crude Protein:</span> <span className="font-bold text-[#002144]">28% - 32%</span></li>
                <li className="flex justify-between"><span>Fat Content:</span> <span className="font-bold text-[#002144]">4% - 6%</span></li>
                <li className="flex justify-between"><span>Pellet Sizes:</span> <span className="font-bold text-[#002144]">1.2mm, 2mm, 3mm, 4mm</span></li>
                <li className="flex justify-between"><span>Water Stability:</span> <span className="font-bold text-[#002144]">100% Buoyant (&gt;3 Hours)</span></li>
              </ul>
            </div>

            {/* Sinking Fish & Shrimp Feed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Category 02</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">Sinking Fish &amp; Shrimp Feed</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Dense, highly palatable pellets engineered for bottom-dwelling species and shrimp, enriched with marine proteins and phospholipids.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Crude Protein:</span> <span className="font-bold text-[#002144]">32% - 38%</span></li>
                <li className="flex justify-between"><span>Fat Content:</span> <span className="font-bold text-[#002144]">5% - 7%</span></li>
                <li className="flex justify-between"><span>Pellet Sizes:</span> <span className="font-bold text-[#002144]">1.5mm, 2.5mm, 3.5mm</span></li>
                <li className="flex justify-between"><span>Packaging:</span> <span className="font-bold text-[#002144]">35 kg &amp; 50 kg HDPE</span></li>
              </ul>
            </div>

            {/* Hatchery & Nursery Feed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Category 03</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">Hatchery Fry &amp; Fingerling Crumble</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Micro-granules with high protein and essential fatty acids (EPA/DHA) for optimal survival rates in fish nurseries and hatcheries.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Crude Protein:</span> <span className="font-bold text-[#002144]">40% - 42%</span></li>
                <li className="flex justify-between"><span>Digestibility:</span> <span className="font-bold text-[#002144]">94%+</span></li>
                <li className="flex justify-between"><span>Form:</span> <span className="font-bold text-[#002144]">Micro Crumble (500–800µm)</span></li>
                <li className="flex justify-between"><span>Packaging:</span> <span className="font-bold text-[#002144]">25 kg Sealed Bags</span></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
