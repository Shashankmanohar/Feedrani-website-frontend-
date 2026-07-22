import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <nav
        aria-label="Primary navigation"
        className="mx-auto mt-4 flex items-center justify-between rounded-[999px] border border-white/20 bg-white/85 px-5 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-6 lg:mt-5 lg:max-w-[1400px] lg:px-8"
        style={{ height: "72px" }}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/feedrani-logo.png"
            alt="FeedRani Logo"
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
          />
          <span className="flex flex-col leading-none">
            <span className="font-['Plus_Jakarta_Sans'] text-[18px] font-extrabold tracking-tight text-[#002144] sm:text-[20px]">
              Feed<span className="text-[#327411]">Rani</span>
            </span>
            <span className="mt-1 hidden font-['Plus_Jakarta_Sans'] text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6b7280] sm:block">
              Balanced Animal Nutrition
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold text-[#1e293b] lg:flex">
          <Link to="/" className="transition-colors duration-200 hover:text-[#327411]">
            Home
          </Link>

          <Link to="/about" className="transition-colors duration-200 hover:text-[#327411]">
            About Us
          </Link>

          {/* Products Dropdown */}
          <div className="relative group py-2">
            <Link
              to="/products"
              className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#327411] py-1 font-semibold text-[#327411]"
            >
              <span>Products</span>
              <span className="text-xs">▾</span>
            </Link>

            <div className="absolute left-0 top-full hidden w-64 rounded-2xl border border-slate-100 bg-white/95 p-2 shadow-xl backdrop-blur-xl transition-all group-hover:block z-50">
              <div className="space-y-1">
                <Link
                  to="/products/poultry-feed"
                  className="block rounded-xl px-3.5 py-2.5 text-xs font-semibold text-[#002144] transition-all hover:bg-[#327411]/10 hover:text-[#327411]"
                >
                  Poultry Feed
                </Link>
                <Link
                  to="/products/aqua-fish-feed"
                  className="block rounded-xl px-3.5 py-2.5 text-xs font-semibold text-[#002144] transition-all hover:bg-[#327411]/10 hover:text-[#327411]"
                >
                  Aqua &amp; Fish Feed
                </Link>
                <Link
                  to="/products/goat-swine-minerals"
                  className="block rounded-xl px-3.5 py-2.5 text-xs font-semibold text-[#002144] transition-all hover:bg-[#327411]/10 hover:text-[#327411]"
                >
                  Goat, Swine &amp; Mineral Mixtures
                </Link>
                <Link
                  to="/products/cattle-dairy-feed"
                  className="block rounded-xl px-3.5 py-2.5 text-xs font-semibold text-[#002144] transition-all hover:bg-[#327411]/10 hover:text-[#327411]"
                >
                  Cattle &amp; Dairy Feed
                </Link>
              </div>
            </div>
          </div>

          <Link to="/quality-nutrition" className="transition-colors duration-200 hover:text-[#327411]">
            Quality &amp; Nutrition
          </Link>
          <a href="/#industries" className="transition-colors duration-200 hover:text-[#327411]">
            Industries We Serve
          </a>
          <Link to="/contact" className="transition-colors duration-200 hover:text-[#327411]">
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+917544000912"
            aria-label="Call FeedRani"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/90 px-4 py-2 text-xs font-semibold text-[#002144] shadow-sm transition-all duration-300 hover:bg-[#002144] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-[#327411]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="hidden sm:inline font-['Plus_Jakarta_Sans'] text-xs font-semibold">Call Us</span>
          </a>

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#327411] px-6 py-2.5 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#285e0e] hover:shadow-lg sm:inline-flex"
          >
            <span>Become a Dealer</span>
            <span>→</span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            className="relative z-50 grid size-10 place-items-center rounded-full border border-gray-200 bg-white text-gray-800 transition-all hover:bg-gray-100 lg:hidden cursor-pointer shadow-sm active:scale-95"
            aria-label="Toggle navigation menu"
          >
            <span className="text-xl font-bold leading-none">{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 z-[10000] w-full max-w-xs bg-[#002144] p-6 text-white shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-lg font-bold">FeedRani Navigation</span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="grid size-9 place-items-center rounded-full bg-white/10 text-xl font-bold text-white hover:bg-white/20"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-4 font-medium text-sm">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[#8ec44a] font-semibold hover:underline">
                  Home
                </Link>

                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#8ec44a]">
                  About Us
                </Link>

                <div className="border-t border-white/10 pt-3">
                  <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-wider text-[#8ec44a] block mb-2">
                    Products ▾
                  </Link>
                  <div className="flex flex-col gap-2.5 pl-3 text-sm text-gray-200">
                    <Link to="/products/poultry-feed" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#8ec44a]">Poultry Feed</Link>
                    <Link to="/products/aqua-fish-feed" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#8ec44a]">Aqua &amp; Fish Feed</Link>
                    <Link to="/products/goat-swine-minerals" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#8ec44a]">Goat, Swine &amp; Mineral Mixtures</Link>
                    <Link to="/products/cattle-dairy-feed" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#8ec44a]">Cattle &amp; Dairy Feed</Link>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 flex flex-col gap-3">
                  <Link to="/quality-nutrition" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#8ec44a]">
                    Quality &amp; Nutrition
                  </Link>
                  <a href="/#industries" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#8ec44a]">
                    Industries We Serve
                  </a>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#8ec44a]">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
              <a
                href="tel:+917544000912"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center rounded-xl border border-white/20 bg-white/10 py-2.5 text-sm font-semibold text-white hover:bg-white/20"
              >
                📞 Call Us: +91 7544000912
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center rounded-xl bg-[#327411] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#285e0e]"
              >
                Become a Dealer →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
