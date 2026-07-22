import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";

export const Header = Navbar;

export function Footer() {
  return (
    <>
      {/* FAQ Accordion Section for Product Pages */}
      <section className="border-t border-slate-200 bg-slate-100 py-16 text-slate-900 font-['Plus_Jakarta_Sans']">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#327411]">Got Questions?</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#002144] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Answers regarding FeedRani nutritional specs, feeding guides, and dealership distribution.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-[#002144] text-base">
                <span>What makes FeedRani animal feed superior in scientific nutrition?</span>
                <span className="ml-4 shrink-0 text-[#327411] transition-transform duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                FeedRani feeds are formulated by specialized veterinary nutritionists utilizing high-digestibility ingredients, organic trace minerals, phytase enzymes, and mycotoxin binders to deliver maximum Feed Conversion Ratio (FCR) and immunity.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-[#002144] text-base">
                <span>How can I become an authorized FeedRani distributor or dealer?</span>
                <span className="ml-4 shrink-0 text-[#327411] transition-transform duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                You can apply for dealership support by clicking the "Become a Dealer" button on our header or reaching our sales team directly at +91 7544000912 / care@feedrani.in. We offer competitive dealer margins, logistics support, and marketing assistance.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-[#002144] text-base">
                <span>What product categories does FeedRani offer?</span>
                <span className="ml-4 shrink-0 text-[#327411] transition-transform duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                FeedRani manufactures high-performance feeds across 4 major livestock divisions: Poultry Feed (Layer &amp; Broiler), Aqua &amp; Fish Feed (Floating Pellets), Cattle &amp; Dairy Feed (Lactation &amp; Bypass Fat), and Goat, Swine &amp; Mineral Mixtures.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-[#002144] text-base">
                <span>Are FeedRani feeds tested for safety and quality standards?</span>
                <span className="ml-4 shrink-0 text-[#327411] transition-transform duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                Yes, every batch undergoes rigorous Near-Infrared (NIR) chemical testing, toxin screening, and moisture verification in ISO 9001 certified manufacturing facilities to ensure safety and consistent performance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Schema.org FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What makes FeedRani animal feed superior in scientific nutrition?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FeedRani feeds are formulated by specialized veterinary nutritionists utilizing high-digestibility ingredients, organic trace minerals, phytase enzymes, and mycotoxin binders to deliver maximum Feed Conversion Ratio (FCR) and immunity.",
                },
              },
              {
                "@type": "Question",
                name: "How can I become an authorized FeedRani distributor or dealer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can apply for dealership support by clicking the 'Become a Dealer' button on our header or reaching our sales team directly at +91 7544000912 / care@feedrani.in. We offer competitive dealer margins, logistics support, and marketing assistance.",
                },
              },
              {
                "@type": "Question",
                name: "What product categories does FeedRani offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FeedRani manufactures high-performance feeds across 4 major livestock divisions: Poultry Feed (Layer & Broiler), Aqua & Fish Feed (Floating Pellets), Cattle & Dairy Feed (Lactation & Bypass Fat), and Goat, Swine & Mineral Mixtures.",
                },
              },
              {
                "@type": "Question",
                name: "Are FeedRani feeds tested for safety and quality standards?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, every batch undergoes rigorous Near-Infrared (NIR) chemical testing, toxin screening, and moisture verification in ISO 9001 certified manufacturing facilities to ensure safety and consistent performance.",
                },
              },
            ],
          }),
        }}
      />

    <footer className="border-t border-gray-200 bg-[#002144] py-16 text-white relative">
      {/* Sleek & Professional Floating WhatsApp Widget */}
      <a
        href="https://wa.me/919876543210?text=Hello%20FeedRani%2C%20I%20would%20like%20to%20inquire%20about%20your%20feed%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with FeedRani on WhatsApp"
        className="fixed bottom-6 right-6 z-[999] group flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:shadow-[0_14px_30px_rgba(37,211,102,0.5)] hover:-translate-y-1"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-30"></span>
          <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path fill="#FFF" d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.83.496 3.55 1.36 5.038L2 22l5.09-1.332A9.957 9.957 0 0 0 12.004 22C17.52 22 22 17.52 22 12.004 22 6.48 17.52 2 12.004 2Z" />
            <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
          </svg>
        </div>
        <span className="hidden sm:inline font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-white pr-2">
          Chat with Us
        </span>
      </a>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/feedrani-logo.png" alt="FeedRani" className="h-10 w-10 bg-white rounded-full p-1" />
              <span className="text-xl font-bold text-white">FeedRani</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-gray-300">
              Scientifically formulated livestock nutrition engineered for Indian farm conditions. Higher yields, improved health, superior conversion.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8ec44a]">Product Lines</h4>
            <ul className="mt-4 space-y-2 text-xs text-gray-300">
              <li><Link to="/products/poultry-feed" className="hover:text-white transition-colors">Poultry Feed</Link></li>
              <li><Link to="/products/aqua-fish-feed" className="hover:text-white transition-colors">Aqua &amp; Fish Feed</Link></li>
              <li><Link to="/products/goat-swine-minerals" className="hover:text-white transition-colors">Goat, Swine &amp; Mineral</Link></li>
              <li><Link to="/products/cattle-dairy-feed" className="hover:text-white transition-colors">Cattle &amp; Dairy Feed</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8ec44a]">Quality &amp; Standards</h4>
            <ul className="mt-4 space-y-2 text-xs text-gray-300">
              <li>ISO 9001 Certified</li>
              <li>Mycotoxin Screened</li>
              <li>NIR Chemical Tested</li>
              <li>Custom Formulations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8ec44a]">Legal &amp; Policies</h4>
            <ul className="mt-4 space-y-2 text-xs text-gray-300">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8ec44a]">Dealer Inquiries</h4>
            <p className="mt-4 text-xs text-gray-300">Reach out to our animal nutritionists and regional distribution hubs.</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://wa.me/917544000912?text=Hello%20FeedRani%2C%20I%20would%20like%20to%20inquire%20about%20your%20feed%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#20ba5a]"
              >
                <span>💬 WhatsApp Sales</span>
              </a>
              <Link
                to="/contact"
                className="inline-block text-center rounded-lg bg-[#327411] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#327411]/90"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} FeedRani Agricultural Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <p>
              Developed &amp; Maintained by{" "}
              <a
                href="https://www.webfloratechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8ec44a] hover:underline transition-colors font-medium"
              >
                Webflora Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
