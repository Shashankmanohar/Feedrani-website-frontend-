import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "../components/ProductLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      title: "Scientific Precision",
      desc: "Every formulation is crafted by animal nutrition scientists using bio-available ingredients tailored to local fodder variations across Bihar & Eastern India.",
      icon: "🧪",
    },
    {
      title: "Zero Adulteration",
      desc: "Strict NIR spectroscopy testing on raw materials guarantees zero toxins, zero heavy metals, and consistent nutrient density in every batch.",
      icon: "🛡️",
    },
    {
      title: "Farmer Profitability",
      desc: "Our feeds are engineered to deliver lower FCR in poultry and higher FAT/SNF % in dairy milk, maximizing net income for farmers.",
      icon: "📈",
    },
    {
      title: "Fast Local Logistics",
      desc: "With a network spanning 38+ districts and 500+ distribution dealers, fresh feed reaches farms with minimal transit turnaround.",
      icon: "🚚",
    },
  ];

  const leadership = [
    {
      name: "Research & Formulation Team",
      role: "Animal Nutrition Experts & Vets",
      desc: "Dedicated specialists continuously analyzing soil, crop residue, and livestock genetic potential to produce optimum feed ratios.",
    },
    {
      name: "Quality Assurance Division",
      role: "ISO & BIS Standard Compliance",
      desc: "In-house wet lab and digital grain checking team ensuring every 50kg bag meets stringent moisture, protein, and safety benchmarks.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-36 lg:pt-44 pb-24">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#002144] via-[#003822] to-[#327411] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="max-w-3xl relative z-10">
              <span className="inline-block rounded-full bg-[#8ec44a]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8ec44a] backdrop-blur-md">
                About FeedRani Feeds &amp; Nutrition
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Pioneering Scientific Feed &amp; Animal Nutrition in India
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-200">
                FeedRani Feeds &amp; Nutrition Private Limited is committed to transforming livestock farming through scientific feed manufacturing, balanced micro-nutrients, and trustworthy dealer partnerships.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="rounded-xl bg-[#8ec44a] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#002144] shadow-md hover:bg-white transition-all"
                >
                  Explore Products →
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md hover:bg-white/20 transition-all"
                >
                  Become a Dealer →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Distribution Reach Grid */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover-card-rise">
              <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[#FFF6EB] text-2xl">
                📍
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">38+ Districts</h3>
              <p className="mt-2 text-xs font-semibold text-slate-500">Wide coverage across Bihar</p>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover-card-rise">
              <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[#FFF6EB] text-2xl">
                🏪
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">500+ Dealers</h3>
              <p className="mt-2 text-xs font-semibold text-slate-500">Strong dealer network</p>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover-card-rise">
              <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[#FFF6EB] text-2xl">
                👥
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">10,000+ Farmers</h3>
              <p className="mt-2 text-xs font-semibold text-slate-500">Trusted by farmers</p>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover-card-rise">
              <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[#FFF6EB] text-2xl">
                🚚
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">Fast Supply</h3>
              <p className="mt-2 text-xs font-semibold text-slate-500">Efficient logistics system</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 md:p-12 border border-slate-200/80 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Our Mission</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#002144]">Empowering Livestock Farmers</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                Our mission is to empower farmers by manufacturing nutrient-dense poultry, dairy cattle, aqua, and swine feed that improves body weight gain, milk production, and immune strength while optimizing operational feed costs.
              </p>
              <Link to="/products" className="mt-4 inline-block text-xs font-bold text-[#327411] hover:underline">
                View All Product Lines →
              </Link>
            </div>

            <div className="rounded-3xl bg-white p-8 md:p-12 border border-slate-200/80 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Our Vision</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#002144]">Leading Agri-Nutrition Brand</h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                To build India's most trusted, scientifically backed animal feed brand through state-of-the-art manufacturing plants, transparent dealer networks, and relentless nutritional research.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-xs font-bold text-[#327411] hover:underline">
                Connect With Distribution Team →
              </Link>
            </div>
          </div>
        </section>

        {/* Product Internal Links Section */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="rounded-3xl bg-[#002144] p-8 md:p-12 text-white shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8ec44a]">Product Ecosystem</span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Explore Our Livestock Feed Range</h2>
            <p className="mt-2 text-xs text-slate-300">Discover scientifically tested feeds tailored for every species and growth stage.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                to="/products/cattle-dairy-feed"
                className="rounded-2xl bg-white/10 p-5 backdrop-blur-md hover:bg-white/20 transition-all border border-white/10"
              >
                <div className="text-2xl mb-2">🐄</div>
                <h3 className="font-bold text-white text-base">Cattle &amp; Dairy Feed</h3>
                <span className="mt-2 inline-block text-xs font-bold text-[#8ec44a]">Explore Dairy Range →</span>
              </Link>

              <Link
                to="/products/poultry-feed"
                className="rounded-2xl bg-white/10 p-5 backdrop-blur-md hover:bg-white/20 transition-all border border-white/10"
              >
                <div className="text-2xl mb-2">🐔</div>
                <h3 className="font-bold text-white text-base">Poultry Feed</h3>
                <span className="mt-2 inline-block text-xs font-bold text-[#8ec44a]">Explore Avian Feeds →</span>
              </Link>

              <Link
                to="/products/aqua-fish-feed"
                className="rounded-2xl bg-white/10 p-5 backdrop-blur-md hover:bg-white/20 transition-all border border-white/10"
              >
                <div className="text-2xl mb-2">🐟</div>
                <h3 className="font-bold text-white text-base">Aqua &amp; Fish Feed</h3>
                <span className="mt-2 inline-block text-xs font-bold text-[#8ec44a]">Explore Aqua Range →</span>
              </Link>

              <Link
                to="/products/goat-swine-minerals"
                className="rounded-2xl bg-white/10 p-5 backdrop-blur-md hover:bg-white/20 transition-all border border-white/10"
              >
                <div className="text-2xl mb-2">🐐</div>
                <h3 className="font-bold text-white text-base">Goat, Swine &amp; Minerals</h3>
                <span className="mt-2 inline-block text-xs font-bold text-[#8ec44a]">Explore Minerals →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="rounded-3xl border border-[#327411]/20 bg-gradient-to-b from-[#327411]/5 to-transparent p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Core Pillars</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
                Why Farmers &amp; Dealers Trust FeedRani
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover-card-rise">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="text-base font-bold text-[#002144]">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Research Team */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 mt-16">
          <div className="border-b border-slate-200 pb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Our Commitment</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#002144] sm:text-4xl">
              Quality Assurance &amp; Technical Support
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {leadership.map((team, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <span className="text-xs font-bold text-[#327411] uppercase tracking-wider">{team.role}</span>
                <h3 className="text-xl font-bold text-[#002144] mt-1">{team.name}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{team.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

