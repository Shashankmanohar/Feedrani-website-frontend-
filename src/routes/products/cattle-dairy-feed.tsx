import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "../../components/ProductLayout";

export const Route = createFileRoute("/products/cattle-dairy-feed")({
  component: CattleDairyFeedPage,
});

function CattleDairyFeedPage() {
  const benefits = [
    {
      title: "Increased Daily Milk Fat & SNF",
      desc: "Rumen-protected bypass fat and balanced bypass protein significantly enhance total milk yield, Fat %, and Solid-Not-Fat (SNF).",
      icon: "🥛",
    },
    {
      title: "Maintains Body Condition During Lactation",
      desc: "Prevents negative energy balance (NEB) in high-producing cows and buffaloes, reducing metabolic disorders like ketosis.",
      icon: "🐄",
    },
    {
      title: "Improved Inter-Calving Period & Fertility",
      desc: "Fortified with organic zinc, copper, selenium, and vitamin E to accelerate uterine involution and boost conception rates.",
      icon: "🌾",
    },
    {
      title: "Optimal Rumen Digestion & Buffer Shield",
      desc: "Contains live yeast culture and sodium bicarbonate buffers to maintain optimal rumen pH (6.2-6.8) and prevent acidosis.",
      icon: "🌿",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-36 lg:pt-44 pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 animate-fade-up">
          <div className="rounded-3xl bg-gradient-to-br from-[#002144] via-[#003822] to-[#327411] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="max-w-2xl relative z-10">
              <span className="inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md animate-pulse">
                Premier Bovine &amp; Dairy Yield Nutrition
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Cattle &amp; Dairy Feed
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                Balanced bypass protein, bypass fat, and high-energy mash &amp; pellets for milking cows, buffaloes, pregnant heifers, and dry cattle. Boost milk yield, FAT %, and SNF naturally.
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
                  Explore Cattle Feed Rations
                </a>
              </div>
            </div>
            <img
              src="/assets/cow.webp"
              alt="Cattle and Dairy Feed"
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Why FeedRani Cattle Feed?</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
                Key Benefits of FeedRani Cattle &amp; Dairy Feed
              </h2>
              <p className="mt-3 text-slate-600">
                Formulated for Indian dairy cows and buffaloes to maximize daily milk revenue and protect animal longevity.
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
              Scientific Formulations for High Milk Fat &amp; SNF
            </h2>
            <p className="mt-4 text-slate-600">
              Tested across thousands of dairy farms across India to ensure peak lactation performance, metabolic health, and calving efficiency.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* High Yield Milk Pellets */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Grade 01</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">High Yield Lactation Pellets</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Formulated for cows and buffaloes yielding over 15+ liters per day. Features bypass protein and bypass fat for maintaining peak milk curve without body weight loss.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Crude Protein:</span> <span className="font-bold text-[#002144]">22% - 24%</span></li>
                <li className="flex justify-between"><span>Crude Fat:</span> <span className="font-bold text-[#002144]">4.5% - 5.5%</span></li>
                <li className="flex justify-between"><span>TDN (Total Digestible Nutrients):</span> <span className="font-bold text-[#002144]">75%</span></li>
                <li className="flex justify-between"><span>Packaging:</span> <span className="font-bold text-[#002144]">50 kg HDPE Bag</span></li>
              </ul>
            </div>

            {/* Standard Cattle Feed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Grade 02</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">Bypass Fat Balanced Feed</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Optimal daily compound feed for commercial milk producers seeking reliable milk volume, improved solid-not-fat (SNF), and clean digestive health.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Crude Protein:</span> <span className="font-bold text-[#002144]">20% - 21%</span></li>
                <li className="flex justify-between"><span>Crude Fat:</span> <span className="font-bold text-[#002144]">3.5% - 4.0%</span></li>
                <li className="flex justify-between"><span>TDN:</span> <span className="font-bold text-[#002144]">70%</span></li>
                <li className="flex justify-between"><span>Packaging:</span> <span className="font-bold text-[#002144]">50 kg HDPE Bag</span></li>
              </ul>
            </div>

            {/* Calf Starter & Heifer Grower */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Grade 03</span>
              <h3 className="mt-2 text-xl font-bold text-[#002144]">Calf Starter &amp; Heifer Grower</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Promotes early rumen papillae development, faster frame growth, and earlier age at first calving in young heifers.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                <li className="flex justify-between"><span>Crude Protein:</span> <span className="font-bold text-[#002144]">23% - 24%</span></li>
                <li className="flex justify-between"><span>Rumen Boosters:</span> <span className="font-bold text-[#002144]">Yeast Culture Enriched</span></li>
                <li className="flex justify-between"><span>Form:</span> <span className="font-bold text-[#002144]">Crumble / Pellets</span></li>
                <li className="flex justify-between"><span>Packaging:</span> <span className="font-bold text-[#002144]">25 kg &amp; 50 kg Bags</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cross-Product Internal Links */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Explore Other Categories</span>
            <h2 className="mt-1 text-2xl font-extrabold text-[#002144]">Related Feed Formulations</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Link
                to="/products/poultry-feed"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-[#327411] hover:bg-emerald-50/50 transition-all"
              >
                <div className="text-2xl mb-1">🐔</div>
                <h3 className="font-bold text-[#002144] text-sm">Poultry Feed</h3>
                <span className="text-xs font-semibold text-[#327411] mt-1 inline-block">Broiler &amp; Layer Nutrition →</span>
              </Link>

              <Link
                to="/products/aqua-fish-feed"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-[#327411] hover:bg-emerald-50/50 transition-all"
              >
                <div className="text-2xl mb-1">🐟</div>
                <h3 className="font-bold text-[#002144] text-sm">Aqua &amp; Fish Feed</h3>
                <span className="text-xs font-semibold text-[#327411] mt-1 inline-block">Floating &amp; Sinking Pellets →</span>
              </Link>

              <Link
                to="/products/goat-swine-minerals"
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-[#327411] hover:bg-emerald-50/50 transition-all"
              >
                <div className="text-2xl mb-1">🐐</div>
                <h3 className="font-bold text-[#002144] text-sm">Goat, Swine &amp; Minerals</h3>
                <span className="text-xs font-semibold text-[#327411] mt-1 inline-block">Chelated Mineral Mixtures →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
