import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "../../components/ProductLayout";

export const Route = createFileRoute("/products/")({
  component: ProductsOverviewPage,
});

function ProductsOverviewPage() {
  const products = [
    {
      title: "Poultry Feed Line",
      path: "/products/poultry-feed",
      img: "/assets/hen.webp",
      desc: "Pre-starter, starter, finisher, and layer feeds designed for high FCR, fast weight gains, and durable egg shell structure.",
      tags: ["Broiler Pellets", "Layer Mash", "Pre-Starter Crumbles"],
    },
    {
      title: "Aqua & Fish Feed",
      path: "/products/aqua-fish-feed",
      img: "/assets/fish-feed.webp",
      desc: "Water-stable floating and sinking pellets for freshwater and brackish fish, shrimp, fingerlings, and hatcheries.",
      tags: ["Floating Pellets", "Sinking Aqua Feed", "Fry Crumbles"],
    },
    {
      title: "Goat, Swine & Mineral Mixtures",
      path: "/products/goat-swine-minerals",
      img: "/assets/goat.webp",
      desc: "High-protein fattening feed for goats & swine plus chelated mineral mixtures and vitamin premixes.",
      tags: ["Goat Fattening Pellets", "Swine Grower", "Chelated Minerals"],
    },
    {
      title: "Cattle & Dairy Feed",
      path: "/products/cattle-dairy-feed",
      img: "/assets/cow.webp",
      desc: "Nutrient-rich compound cattle feed formulated with bypass protein and bypass fat for maximum milk volume, FAT, and SNF.",
      tags: ["Lactation Pellets", "Bypass Fat Feed", "Calf Starter"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Plus_Jakarta_Sans'] text-slate-900">
      <Header />

      <main className="pt-32 pb-24">
        <section className="mx-auto max-w-[1400px] px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">
            Comprehensive Animal Nutrition
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#002144] sm:text-5xl lg:text-6xl">
            FeedRani Product Portfolio
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Explore our specialized range of scientifically formulated livestock feed, aqua diets, and mineral supplements.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {products.map((item) => (
              <div
                key={item.path}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-left"
              >
                <div>
                  <div className="overflow-hidden rounded-2xl bg-slate-100 h-56 mb-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-[#002144]">{item.title}</h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#327411]">Dedicated Page</span>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 rounded-full bg-[#002144] px-5 py-2.5 text-xs font-semibold text-white transition-colors group-hover:bg-[#327411]"
                  >
                    View Product Page &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
