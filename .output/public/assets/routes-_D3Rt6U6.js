import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{n as t,r as n}from"./index-C7YKEHtK.js";import{n as r}from"./ProductLayout-B9jZB6GD.js";var i=e(n()),a=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="FeedRani manufactures scientifically formulated cattle feed, poultry feed, fish feed, goat feed, swine feed, mineral mixtures and feed supplements for healthier livestock and higher farm productivity."
    />
    <meta name="theme-color" content="#002144" />
    <title>FeedRani — Scientific Feed Manufacturing for Cattle, Poultry, Fish, Goat & Swine</title>
    <link rel="icon" type="image/png" href="/feedrani-logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&amp;display=swap&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"><\/script>
    <style>
      /* Modern Grid Background */
      .map-grid-bg {
        background-image: radial-gradient(#E5E7EB 1.5px, transparent 1.5px);
        background-size: 24px 24px;
      }

      /* ===== Premium Hero Animations ===== */

      /* Ken Burns Background Zoom */
      @keyframes kenBurns {
        0% {
          transform: scale(1.08);
        }
        100% {
          transform: scale(1);
        }
      }
      .hero-bg-img {
        animation: kenBurns 6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        will-change: transform;
      }

      /* Navbar Slide Down */
      @keyframes navSlideDown {
        0% {
          opacity: 0;
          transform: translateY(-30px) scale(0.98);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .navbar-init {
        opacity: 0;
        animation: navSlideDown 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
      }

      /* Staggered Hero Content Reveals */
      @keyframes heroRevealUp {
        0% {
          opacity: 0;
          transform: translateY(45px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .hero-badge-anim {
        opacity: 0;
        animation: heroRevealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
      }
      .hero-title-anim {
        opacity: 0;
        animation: heroRevealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
      }
      .hero-desc-anim {
        opacity: 0;
        animation: heroRevealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.75s forwards;
      }
      .hero-cta-anim {
        opacity: 0;
        animation: heroRevealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.95s forwards;
      }
      .hero-card-anim {
        opacity: 0;
        animation:
          heroRevealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards,
          floatingBob 5s ease-in-out 2.5s infinite;
      }
      .hero-stats-anim {
        opacity: 0;
        animation: heroRevealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards;
      }
      .hero-scroll-anim {
        opacity: 0;
        animation: heroRevealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards;
      }

      /* Floating Card Gentle Bob */
      @keyframes floatingBob {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      /* SVG Brush Stroke Draw-On */
      .hero-brush-stroke {
        animation: brushStrokeDraw 1.2s ease-out 1.5s forwards;
      }
      @keyframes brushStrokeDraw {
        to {
          stroke-dashoffset: 0;
        }
      }

      /* Scroll Indicator Bounce */
      @keyframes scrollBounce {
        0%,
        100% {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        50% {
          transform: translateX(-50%) translateY(8px);
          opacity: 0.2;
        }
      }

      /* Green Glow Pulse */
      @keyframes glowPulse {
        0%,
        100% {
          box-shadow: 0 0 6px rgba(50, 116, 17, 0.4);
        }
        50% {
          box-shadow: 0 0 14px rgba(50, 116, 17, 0.7);
        }
      }
    </style>
  </head>

  <body
  class="overflow-x-hidden bg-white font-['Plus_Jakarta_Sans'] text-[#0F172A] antialiased selection:bg-[#327411] selection:text-white"
>
    <a
      href="#main"
      class="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-[#111111] px-5 py-3 text-sm text-white transition-transform focus:translate-y-0"
    >
      Skip to content
    </a>



    <main id="main">
      <section class="relative overflow-hidden bg-[#FFFFFF]">
        <!-- ======= PREMIUM HERO SECTION ======= -->
        <div class="relative min-h-screen w-full overflow-hidden" id="hero">
          <!-- Background Image with Ken Burns Effect -->
          <div class="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/assets/hero-bg.jpg"
              alt="Cinematic illustrated farm landscape with snow-capped mountains, lush forests, golden wheat fields, healthy livestock and wildflowers"
              class="hero-bg-img h-full w-full object-cover object-[center_bottom]"
              fetchpriority="high"
            />
          </div>

          <!-- Gradient Overlays for Text Readability -->
          <div
            class="absolute inset-0 z-[1] bg-gradient-to-r from-black/[0.55] via-black/[0.22] to-transparent"
          ></div>
          <div
            class="absolute inset-0 z-[1] bg-gradient-to-t from-black/[0.55] via-transparent to-black/[0.06]"
          ></div>

          <!-- Main Content Container -->
          <div
            class="relative z-10 mx-auto flex h-full min-h-screen max-w-[1480px] items-center px-5 pt-20 sm:px-8 lg:px-16 lg:pt-0 xl:px-24"
          >
            <!-- Left Content Column -->
            <div class="w-full max-w-[720px]">
              <!-- Glass Badge -->
              <div
                class="hero-badge-anim mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.2] bg-white/[0.08] px-5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-xl"
              >
                <iconify-icon
                  icon="solar:leaf-bold"
                  width="16"
                  class="text-[#327411]"
                ></iconify-icon>
                <span
                  class="font-['Plus_Jakarta_Sans'] text-[13px] font-medium tracking-wide text-white/90"
                  >Complete Feed Solutions For Every Livestock</span
                >
              </div>

              <!-- Headline with Brush Stroke -->
              <h1
                class="hero-title-anim font-['Plus_Jakarta_Sans'] text-[clamp(2.75rem,7.5vw,6rem)] font-[900] leading-[0.92] tracking-[-0.04em] text-white"
              >
                Stronger Livestock.<br />Higher
                <span class="relative inline-block"
                  >Yields.<svg
                    class="absolute -bottom-1 left-0 w-full overflow-visible"
                    viewBox="0 0 280 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      class="hero-brush-stroke"
                      d="M3 9C33 4 63 2.5 93 5.5C123 8.5 153 11 183 8C213 5 243 3 277 7"
                      stroke="#327411"
                      stroke-width="4.5"
                      stroke-linecap="round"
                      stroke-dasharray="300"
                      stroke-dashoffset="300"
                    /></svg
                ></span>
              </h1>

              <!-- Subtitle -->
              <p
                class="hero-desc-anim mt-7 max-w-[580px] font-['Plus_Jakarta_Sans'] text-[clamp(0.95rem,1.6vw,1.15rem)] leading-[1.7] text-white/[0.82]"
              >
                Scientifically manufactured cattle feed, poultry feed, fish feed, goat feed, swine feed, mineral mixtures and feed supplements — engineered for animal health, growth and long-term farm profitability across India.
              </p>

              <!-- Button Group -->
              <div
                class="hero-cta-anim mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
              >
                <!-- Primary CTA -->
                <a
                  href="#products"
                  class="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#327411] to-[#002144] px-8 font-['Plus_Jakarta_Sans'] text-[15px] font-semibold text-white shadow-[0_8px_30px_rgba(50, 116, 17,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(50, 116, 17,0.5)] sm:w-auto"
                  style="height: 58px; line-height: 58px"
                >
                  Explore Feed Range
                  <iconify-icon
                    icon="solar:arrow-right-linear"
                    width="20"
                    stroke-width="1.5"
                    class="transition-transform duration-300 group-hover:translate-x-1"
                  ></iconify-icon>
                </a>

                <!-- Secondary: Play + Our Story -->
                <button
                  type="button"
                  class="group inline-flex items-center gap-3.5 text-white transition-all duration-300 hover:opacity-80"
                >
                  <span
                    class="grid size-[52px] shrink-0 place-items-center rounded-full border border-white/[0.25] bg-white/[0.1] backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white/[0.2]"
                  >
                    <iconify-icon
                      icon="solar:play-bold"
                      width="18"
                      class="ml-0.5 text-white"
                    ></iconify-icon>
                  </span>
                  <span
                    class="font-['Plus_Jakarta_Sans'] text-[15px] font-medium"
                    >Our Feed Story</span
                  >
                </button>
              </div>
            </div>
          </div>

          <!-- Floating Stats Bar (Right Side) -->
          <div
            class="hero-stats-anim absolute bottom-16 right-2 lg:right-4 xl:right-4 z-20 hidden items-center gap-5 rounded-full border border-white/20 bg-emerald-950/40 px-6 py-4 shadow-2xl backdrop-blur-2xl lg:flex"
            style="height: 105px;"
          >
            <!-- Stat 1: Milk Yield -->
            <div class="flex items-center gap-4">
              <span
                class="grid size-11 shrink-0 place-items-center rounded-full bg-white/[0.12]"
              >
                <iconify-icon
                  icon="solar:water-linear"
                  width="22"
                  class="text-white"
                  stroke-width="1.5"
                ></iconify-icon>
              </span>
              <div>
                <div
                  class="font-['Plus_Jakarta_Sans'] text-2xl font-bold tracking-tight text-white"
                >
                  +28%
                </div>
                <div class="font-['Plus_Jakarta_Sans'] text-xs text-white/60">
                  Higher Milk Yield
                </div>
              </div>
            </div>

            <div class="h-10 w-px bg-white/[0.15]"></div>

            <!-- Stat 2: Quality -->
            <div class="flex items-center gap-4">
              <span
                class="grid size-11 shrink-0 place-items-center rounded-full bg-white/[0.12]"
              >
                <iconify-icon
                  icon="solar:heart-linear"
                  width="22"
                  class="text-white"
                  stroke-width="1.5"
                ></iconify-icon>
              </span>
              <div>
                <div
                  class="font-['Plus_Jakarta_Sans'] text-2xl font-bold tracking-tight text-white"
                >
                  100%
                </div>
                <div class="font-['Plus_Jakarta_Sans'] text-xs text-white/60">
                  Assured Nutrition
                </div>
              </div>
            </div>

            <div class="h-10 w-px bg-white/[0.15]"></div>

            <!-- Stat 3: Zero Compromise -->
            <div class="flex items-center gap-4">
              <span
                class="grid size-11 shrink-0 place-items-center rounded-full bg-white/[0.12]"
              >
                <iconify-icon
                  icon="solar:leaf-linear"
                  width="22"
                  class="text-white"
                  stroke-width="1.5"
                ></iconify-icon>
              </span>
              <div>
                <div
                  class="font-['Plus_Jakarta_Sans'] text-2xl font-bold tracking-tight text-white"
                >
                  Zero
                </div>
                <div class="font-['Plus_Jakarta_Sans'] text-xs text-white/60">
                  Compromise on Feed Quality
                </div>
              </div>
            </div>

            <div class="h-10 w-px bg-white/[0.15]"></div>

            <!-- CTA Circle Arrow -->
            <a
              href="#products"
              class="group grid size-14 shrink-0 place-items-center rounded-full bg-white transition-all duration-300 hover:-rotate-[15deg] hover:scale-110 hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)]"
            >
              <iconify-icon
                icon="solar:arrow-right-linear"
                width="22"
                class="text-[#111]"
                stroke-width="2"
              ></iconify-icon>
            </a>
          </div>
        </div>

        <!-- ================= Key Reach & Distribution Grid Section ================= -->
        <section class="relative z-20 bg-[#f8fafc] py-14 border-b border-slate-200/80">
          <div class="mx-auto max-w-[1400px] px-6 lg:px-8">
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <!-- Card 1: 38+ Districts -->
              <div class="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover-card-rise">
                <div class="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[#FFF6EB] text-2xl">
                  📍
                </div>
                <h3 class="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">38+ Districts</h3>
                <p class="mt-2 text-xs font-semibold text-slate-500">Wide coverage across Bihar</p>
              </div>

              <!-- Card 2: 500+ Dealers -->
              <div class="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover-card-rise">
                <div class="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[#FFF6EB] text-2xl">
                  🏪
                </div>
                <h3 class="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">500+ Dealers</h3>
                <p class="mt-2 text-xs font-semibold text-slate-500">Strong dealer network</p>
              </div>

              <!-- Card 3: 10,000+ Farmers -->
              <div class="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover-card-rise">
                <div class="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[#FFF6EB] text-2xl">
                  👥
                </div>
                <h3 class="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">10,000+ Farmers</h3>
                <p class="mt-2 text-xs font-semibold text-slate-500">Trusted by farmers</p>
              </div>

              <!-- Card 4: Fast Supply -->
              <div class="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover-card-rise">
                <div class="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[#FFF6EB] text-2xl">
                  🚚
                </div>
                <h3 class="text-2xl font-extrabold tracking-tight text-[#002144] sm:text-3xl">Fast Supply</h3>
                <p class="mt-2 text-xs font-semibold text-slate-500">Efficient logistics system</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ================= Premium Stats Marquee ================= -->

        <section
          class="relative overflow-hidden border-y border-[#E8E8E3] bg-[#FFFFFF] py-0"
        >
          <!-- Edge Fade -->
          <div
            class="pointer-events-none absolute left-0 top-0 z-20 h-full w-28 bg-gradient-to-r from-[#FFFFFF] to-transparent"
          ></div>
          <div
            class="pointer-events-none absolute right-0 top-0 z-20 h-full w-28 bg-gradient-to-l from-[#FFFFFF] to-transparent"
          ></div>

          <div class="group relative overflow-hidden">
            <div class="stats-marquee flex w-max">
              <!-- First Set -->

              <div
                class="flex h-[180px] min-w-[420px] items-center justify-center border-r border-[#E4E4DF] bg-white px-16 transition-all duration-500 hover:bg-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <div
                    class="counter text-6xl font-black leading-none tracking-[-0.06em] text-[#111111]"
                    data-target="250"
                    data-suffix="K+"
                  >
                    0
                  </div>

                  <p
                    class="mt-4 text-lg font-semibold tracking-wide text-[#666666]"
                  >
                    Farmers Served
                  </p>
                </div>
              </div>

              <div
                class="flex h-[180px] min-w-[420px] items-center justify-center border-r border-[#E4E4DF] bg-white px-16 transition-all duration-500 hover:bg-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <div
                    class="counter text-6xl font-black leading-none tracking-[-0.06em] text-[#111111]"
                    data-target="50"
                    data-suffix="+"
                  >
                    0
                  </div>

                  <p
                    class="mt-4 text-lg font-semibold tracking-wide text-[#666666]"
                  >
                    Feed & Supplement SKUs
                  </p>
                </div>
              </div>

              <div
                class="flex h-[180px] min-w-[420px] items-center justify-center border-r border-[#E4E4DF] bg-white px-16 transition-all duration-500 hover:bg-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <div
                    class="counter text-6xl font-black leading-none tracking-[-0.06em] text-[#111111]"
                    data-target="18"
                    data-suffix=""
                  >
                    0
                  </div>

                  <p
                    class="mt-4 text-lg font-semibold tracking-wide text-[#666666]"
                  >
                    States Served
                  </p>
                </div>
              </div>

              <div
                class="flex h-[180px] min-w-[420px] items-center justify-center border-r border-[#E4E4DF] bg-white px-16 transition-all duration-500 hover:bg-white hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <div
                    class="flex items-center gap-3 text-6xl font-black leading-none tracking-[-0.06em] text-[#111111]"
                  >
                    ISO

                    <iconify-icon
                      icon="solar:verified-check-linear"
                      width="46"
                      class="text-[#327411]"
                    ></iconify-icon>
                  </div>

                  <p
                    class="mt-4 text-lg font-semibold tracking-wide text-[#666666]"
                  >
                    Certified Feed Mill
                  </p>
                </div>
              </div>

              <!-- Duplicate Set -->

              <div
                class="flex h-[180px] min-w-[420px] items-center justify-center border-r border-[#E4E4DF] bg-white px-16"
              >
                <div>
                  <div
                    class="counter text-6xl font-black leading-none tracking-[-0.06em] text-[#111111]"
                    data-target="250"
                    data-suffix="K+"
                  >
                    250K+
                  </div>

                  <p
                    class="mt-4 text-lg font-semibold tracking-wide text-[#666666]"
                  >
                    Farmers Supported
                  </p>
                </div>
              </div>

              <div
                class="flex h-[180px] min-w-[420px] items-center justify-center border-r border-[#E4E4DF] bg-white px-16"
              >
                <div>
                  <div
                    class="counter text-6xl font-black leading-none tracking-[-0.06em] text-[#111111]"
                  >
                    50+
                  </div>

                  <p
                    class="mt-4 text-lg font-semibold tracking-wide text-[#666666]"
                  >
                    Nutrition Products
                  </p>
                </div>
              </div>

              <div
                class="flex h-[180px] min-w-[420px] items-center justify-center border-r border-[#E4E4DF] bg-white px-16"
              >
                <div>
                  <div
                    class="counter text-6xl font-black leading-none tracking-[-0.06em] text-[#111111]"
                  >
                    18
                  </div>

                  <p
                    class="mt-4 text-lg font-semibold tracking-wide text-[#666666]"
                  >
                    Indian States
                  </p>
                </div>
              </div>

              <div
                class="flex h-[180px] min-w-[420px] items-center justify-center bg-white px-16"
              >
                <div>
                  <div
                    class="flex items-center gap-3 text-6xl font-black leading-none tracking-[-0.06em]"
                  >
                    ISO

                    <iconify-icon
                      icon="solar:verified-check-linear"
                      width="46"
                      class="text-[#327411]"
                    ></iconify-icon>
                  </div>

                  <p
                    class="mt-4 text-lg font-semibold tracking-wide text-[#666666]"
                  >
                    Certified Production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style>
          .stats-marquee {
            animation: stats-marquee 26s linear infinite;
            will-change: transform;
          }

          .group:hover .stats-marquee {
            animation-play-state: paused;
          }

          @keyframes stats-marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 1024px) {
            .stats-marquee > div {
              min-width: 320px;
              height: 150px;
              padding-left: 48px;
              padding-right: 48px;
            }

            .stats-marquee .counter,
            .stats-marquee .text-6xl {
              font-size: 3rem;
            }
          }

          @media (max-width: 640px) {
            .stats-marquee > div {
              min-width: 270px;
              height: 130px;
              padding-left: 32px;
              padding-right: 32px;
            }

            .stats-marquee .counter,
            .stats-marquee .text-6xl {
              font-size: 2.35rem;
            }

            .stats-marquee p {
              font-size: 0.95rem;
            }
          }
        </style>
      </section>

      <section
        id="about"
        class="mx-auto max-w-[1480px] px-5 py-20 sm:px-10 lg:px-16 lg:py-36 xl:px-24"
      >
        <div class="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-8">
            <p
              class="reveal mb-5 translate-y-5 text-xs font-medium uppercase tracking-[0.18rem] text-[#327411] opacity-0 transition-all duration-700"
            >
              Why FeedRani / 01
            </p>
            <h2
              class="reveal translate-y-6 text-4xl font-[800] leading-[0.94] tracking-[-0.03em] opacity-0 transition-all duration-700 sm:text-5xl lg:text-6xl"
            >
              Every ingredient earns
              <br class="hidden sm:block" />
              its place in the bag.
            </h2>
          </div>
          <p
            class="reveal translate-y-5 text-base leading-relaxed text-[#666666] opacity-0 transition-all duration-700 lg:col-span-4 lg:text-lg"
          >
            Species-specific feed formulations grounded in animal nutrition science, raw-material analysis and continuous on-farm validation across cattle, poultry, aqua, goat and swine operations.
          </p>
        </div>

        <div
          class="grid auto-rows-[14rem] gap-4 md:grid-cols-2 lg:grid-cols-12"
        >
          <article
            class="reveal group relative translate-y-6 overflow-hidden rounded-[1.75rem] bg-[#002144] p-7 text-white opacity-0 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] md:row-span-2 lg:col-span-5"
          >
            <img
              src="/assets/dairy-farm.jpg"
              alt="Healthy cattle feeding together on a farm"
              loading="lazy"
              class="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#002144] via-[#002144]/40 to-transparent"
            ></div>
            <div class="relative flex h-full flex-col justify-between">
              <span
                class="grid size-12 place-items-center rounded-full border border-white/30 bg-white/10"
              >
                <iconify-icon
                  icon="solar:test-tube-linear"
                  width="24"
                  stroke-width="1.5"
                ></iconify-icon>
              </span>
              <div>
                <p
                  class="mb-2 text-xs uppercase tracking-[0.14rem] text-white/60"
                >
                  Nutrient precision
                </p>
                <h3 class="text-3xl font-bold tracking-tight">
                  Scientific formulation
                </h3>
                <p class="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                  Balanced by animal nutritionists for protein, energy, amino acids, minerals and gut performance across every species we serve.
                </p>
              </div>
            </div>
          </article>

          <article
            class="reveal translate-y-6 rounded-[1.75rem] border border-[#E8E8E8] bg-[#FFFFFF] p-7 opacity-0 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:col-span-3"
          >
            <div class="flex h-full flex-col justify-between">
              <iconify-icon
                icon="solar:shield-check-linear"
                width="30"
                class="text-[#327411]"
                stroke-width="1.5"
              ></iconify-icon>
              <div>
                <h3 class="text-xl font-bold tracking-tight">
                  Veterinary approved
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-[#666666]">
                  Every formula reviewed against species, breed and life-stage requirements.
                </p>
              </div>
            </div>
          </article>

          <article
            class="reveal translate-y-6 rounded-[1.75rem] bg-[#327411] p-7 opacity-0 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:col-span-4"
          >
            <div class="flex h-full items-end justify-between gap-5">
              <div>
                <p class="text-xs uppercase tracking-[0.14rem] text-[#713F12]">
                  Crude protein
                </p>
                <div class="mt-2 text-5xl font-semibold tracking-tight">
                  24%
                </div>
                <p class="mt-2 text-sm text-[#713F12]">
                  High-performance dairy & broiler blends
                </p>
              </div>
              <iconify-icon
                icon="solar:graph-up-linear"
                width="38"
                stroke-width="1.5"
              ></iconify-icon>
            </div>
          </article>

          <article
            class="reveal translate-y-6 rounded-[1.75rem] border border-[#E8E8E8] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] opacity-0 transition-all duration-700 hover:-translate-y-2 md:row-span-2 lg:col-span-4"
          >
            <div class="flex h-full flex-col justify-between">
              <div class="flex justify-between">
                <span
                  class="text-xs font-medium uppercase tracking-[0.14rem] text-[#666666]"
                >
                  Observed outcome
                </span>
                <iconify-icon
                  icon="solar:waterdrops-linear"
                  width="26"
                  class="text-[#327411]"
                  stroke-width="1.5"
                ></iconify-icon>
              </div>
              <div>
                <div
                  class="mb-5 flex h-32 items-end gap-2"
                  aria-label="Yield & growth improvement chart"
                >
                  <span class="h-2/5 flex-1 rounded-t-lg bg-[#D1FAE5]"></span>
                  <span class="h-1/2 flex-1 rounded-t-lg bg-[#A7F3D0]"></span>
                  <span class="h-3/5 flex-1 rounded-t-lg bg-[#6EE7B7]"></span>
                  <span class="h-4/5 flex-1 rounded-t-lg bg-[#34D399]"></span>
                  <span class="h-full flex-1 rounded-t-lg bg-[#327411]"></span>
                </div>
                <h3 class="text-2xl font-bold tracking-tight">
                  Milk yield improvement
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-[#666666]">
                  Consistent nutrition unlocks natural milk, egg, meat and body-weight potential.
                </p>
              </div>
            </div>
          </article>

          <article
            class="reveal relative translate-y-6 overflow-hidden rounded-[1.75rem] bg-[#F0FDF4] p-7 opacity-0 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:col-span-3"
          >
            <div class="relative z-10">
              <iconify-icon
                icon="solar:leaf-linear"
                width="29"
                class="text-[#327411]"
                stroke-width="1.5"
              ></iconify-icon>
              <h3 class="mt-8 text-xl font-bold tracking-tight">
                Better digestion
              </h3>
              <p class="mt-2 text-sm text-[#4A7A5A]">
                Rumen-friendly for ruminants, gut-friendly for poultry, aqua and swine.
              </p>
            </div>
            <div
              class="absolute -bottom-10 -right-10 size-36 rounded-full border-[1.5rem] border-[#BBF7D0]"
            ></div>
          </article>

          <article
            class="reveal translate-y-6 overflow-hidden rounded-[1.75rem] border border-[#E8E8E8] bg-[#111111] p-7 text-white opacity-0 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] lg:col-span-5"
          >
            <div class="flex h-full flex-col justify-between">
              <div class="flex items-center justify-between">
                <iconify-icon
                  icon="solar:map-point-linear"
                  width="28"
                  class="text-[#327411]"
                  stroke-width="1.5"
                ></iconify-icon>
                <span class="text-xs text-white/50">18 states · growing</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold tracking-tight">
                  Nationwide feed distribution
                </h3>
                <p class="mt-2 text-sm text-white/60">
                  Reliable feed and mineral mixture availability through local dealers and disciplined cold-chain logistics.
                </p>
              </div>
            </div>
          </article>
        </div>
      <!-- Industries We Serve Section -->
      <section id="industries" class="bg-[#FAFAF8] py-20 lg:py-36 text-slate-900 border-t border-[#DCDCD7] relative overflow-hidden">
        <div class="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16 xl:px-24">
          <!-- Header -->
          <div class="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div class="lg:col-span-8">
              <p class="reveal mb-4 text-xs font-bold uppercase tracking-[0.18rem] text-[#327411]">
                Sector Expertise / 03
              </p>
              <h2 class="reveal text-4xl font-[800] leading-[0.94] tracking-[-0.03em] text-[#002144] sm:text-5xl lg:text-6xl">
                Industries &amp; Sectors We Serve
              </h2>
            </div>
            <p class="reveal text-base leading-relaxed text-[#666666] lg:col-span-4 lg:text-lg">
              FeedRani provides tailored nutritional solutions and reliable distribution for dairy farms, poultry integrators, fish hatcheries, goat rearers, and regional feed stockists across Eastern India.
            </p>
          </div>

          <!-- Cards Grid (3 Columns Desktop, 2 Columns Tablet) -->
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <!-- Industry 1: Dairy & Cattle Industry -->
            <div class="group rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#327411]/50 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex size-14 items-center justify-center rounded-2xl bg-[#327411]/10 text-3xl group-hover:scale-110 transition-transform">
                    🐄
                  </div>
                  <span class="rounded-full bg-emerald-50 border border-emerald-200/60 px-3 py-1 text-[11px] font-bold text-[#327411]">
                    High Fat &amp; SNF
                  </span>
                </div>
                <h3 class="mt-6 text-2xl font-bold tracking-tight text-[#002144]">Dairy &amp; Milch Livestock</h3>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">
                  Commercial dairy farms, cattle breeding units, milk co-operatives, and gaushalas seeking maximum milk volume, fat percentage, and calving metabolic health.
                </p>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs font-semibold text-slate-400">Milch Feed &amp; Supplements</span>
                <a href="/products/cattle-dairy-feed" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#327411] hover:underline">
                  <span>Explore Feed</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <!-- Industry 2: Poultry Farming Sector -->
            <div class="group rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#327411]/50 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 text-3xl group-hover:scale-110 transition-transform">
                    🐔
                  </div>
                  <span class="rounded-full bg-amber-50 border border-amber-200/60 px-3 py-1 text-[11px] font-bold text-amber-700">
                    High FCR &amp; Immunity
                  </span>
                </div>
                <h3 class="mt-6 text-2xl font-bold tracking-tight text-[#002144]">Poultry Farming Sector</h3>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">
                  Broiler integrators, layer egg producers, and hatcheries requiring fast weight gain, gut health, uniform flock growth, and strong eggshells.
                </p>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs font-semibold text-slate-400">Broiler &amp; Layer Feeds</span>
                <a href="/products/poultry-feed" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#327411] hover:underline">
                  <span>Explore Feed</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <!-- Industry 3: Aquaculture & Fish Hatcheries -->
            <div class="group rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#327411]/50 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex size-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl group-hover:scale-110 transition-transform">
                    🐟
                  </div>
                  <span class="rounded-full bg-cyan-50 border border-cyan-200/60 px-3 py-1 text-[11px] font-bold text-cyan-700">
                    Floating Pellets
                  </span>
                </div>
                <h3 class="mt-6 text-2xl font-bold tracking-tight text-[#002144]">Aquaculture &amp; Aqua Farms</h3>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">
                  Inland fish pond farmers, shrimp culture, biofloc units, and cage culture setups looking for high-protein floating pellets and clean pond water balance.
                </p>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs font-semibold text-slate-400">Fish &amp; Aqua Nutrition</span>
                <a href="/products/aqua-fish-feed" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#327411] hover:underline">
                  <span>Explore Feed</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <!-- Industry 4: Goat, Swine & Small Ruminants -->
            <div class="group rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#327411]/50 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl group-hover:scale-110 transition-transform">
                    🐐
                  </div>
                  <span class="rounded-full bg-emerald-50 border border-emerald-200/60 px-3 py-1 text-[11px] font-bold text-[#327411]">
                    Weight Gain &amp; Minerals
                  </span>
                </div>
                <h3 class="mt-6 text-2xl font-bold tracking-tight text-[#002144]">Goat &amp; Swine Operations</h3>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">
                  Commercial goat rearers, piggeries, and sheep breeding units focused on rapid weight gain, organically bound trace minerals, and reproductive vigor.
                </p>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs font-semibold text-slate-400">Concentrate &amp; Minerals</span>
                <a href="/products/goat-swine-minerals" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#327411] hover:underline">
                  <span>Explore Feed</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <!-- Industry 5: Feed Dealers & Agri-Retailers -->
            <div class="group rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#327411]/50 hover:shadow-xl flex flex-col justify-between lg:col-span-2">
              <div>
                <div class="flex items-center justify-between">
                  <div class="flex size-14 items-center justify-center rounded-2xl bg-purple-500/10 text-3xl group-hover:scale-110 transition-transform">
                    🏪
                  </div>
                  <span class="rounded-full bg-purple-50 border border-purple-200/60 px-3 py-1 text-[11px] font-bold text-purple-700">
                    Distribution Network
                  </span>
                </div>
                <h3 class="mt-6 text-2xl font-bold tracking-tight text-[#002144]">Feed Dealers, Stockists &amp; Agri-Retailers</h3>
                <p class="mt-3 text-sm leading-relaxed text-slate-600">
                  Rural agri-input shops, district feed stockists, and Farmer Producer Organizations (FPOs) backed by exclusive territory protection, marketing support, and direct factory dispatch logistics.
                </p>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs font-semibold text-slate-400">Become an Authorized Dealer</span>
                <a href="/contact" class="inline-flex items-center gap-2 rounded-xl bg-[#327411] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#285e0e] transition-all">
                  <span>Apply for Dealership</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" class="bg-[#FFFFFF] py-20 lg:py-36">
        <div class="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16 xl:px-24">
          <div class="grid gap-10 lg:grid-cols-12">
            <div class="lg:col-span-5">
              <p
                class="text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
              >
                Feed portfolio / 02
              </p>
              <h2
                class="mt-5 text-4xl font-[800] leading-[0.96] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
              >
                A complete feed range for every species and stage.
              </h2>
            </div>
            <div class="lg:col-span-7 lg:pt-12">
              <p
                class="max-w-xl text-base leading-relaxed text-[#666666] lg:text-lg"
              >
                Purpose-built feed for cattle, dairy herds, layers, broilers, fish, shrimp, goat, sheep and swine — plus mineral mixtures and specialty supplements, all designed for Indian farm conditions.
              </p>
            </div>
          </div>

          <div class="mt-14 border-t border-[#DCDCD7]">
            <article
              id="product-cattle"
              class="product-row group grid gap-7 border-b border-[#DCDCD7] py-8 transition-all duration-500 hover:bg-[#FAFAF8] md:grid-cols-12 md:items-center"
            >
              <div class="flex items-center gap-5 md:col-span-5">
                <span class="text-xs text-[#888888]">01</span>
                <a href="/products/cattle-dairy-feed" class="hover:text-[#327411] transition-colors">
                  <h3 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    Cattle &amp; Dairy Feed
                  </h3>
                </a>
              </div>
              <p class="text-sm leading-relaxed text-[#666666] md:col-span-4">
                Pelleted and mash cattle feed for milking cows, buffaloes, calves and dry animals — balanced for milk yield, body condition and fertility.
              </p>
              <div
                class="flex items-center justify-between md:col-span-3 md:justify-end md:gap-8"
              >
                <a href="/products/cattle-dairy-feed">
                  <img
                    src="/assets/cow.webp"
                    alt="Healthy cow on a dairy farm"
                    loading="lazy"
                    class="h-28 w-36 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <a
                  href="/products/cattle-dairy-feed"
                  aria-label="View Cattle & Dairy Feed products"
                  class="grid size-12 place-items-center rounded-full border border-[#CFCFC9] transition-colors group-hover:bg-[#327411] group-hover:text-white"
                >
                  <iconify-icon
                    icon="solar:arrow-right-up-linear"
                    width="21"
                    stroke-width="1.5"
                  ></iconify-icon>
                </a>
              </div>
            </article>

            <article
              id="product-poultry"
              class="product-row group grid gap-7 border-b border-[#DCDCD7] py-8 transition-all duration-500 hover:bg-[#FAFAF8] md:grid-cols-12 md:items-center"
            >
              <div class="flex items-center gap-5 md:col-span-5">
                <span class="text-xs text-[#888888]">02</span>
                <a href="/products/poultry-feed" class="hover:text-[#327411] transition-colors">
                  <h3 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    Poultry Feed
                  </h3>
                </a>
              </div>
              <p class="text-sm leading-relaxed text-[#666666] md:col-span-4">
                Broiler pre-starter, starter, finisher and layer feed engineered for FCR, weight gain, egg mass and shell strength.
              </p>
              <div
                class="flex items-center justify-between md:col-span-3 md:justify-end md:gap-8"
              >
                <a href="/products/poultry-feed">
                  <img
                    src="/assets/hen.webp"
                    alt="Healthy chickens on a poultry farm"
                    loading="lazy"
                    class="h-28 w-36 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <a
                  href="/products/poultry-feed"
                  aria-label="View Poultry Feed products"
                  class="grid size-12 place-items-center rounded-full border border-[#CFCFC9] transition-colors group-hover:bg-[#327411] group-hover:text-white"
                >
                  <iconify-icon
                    icon="solar:arrow-right-up-linear"
                    width="21"
                    stroke-width="1.5"
                  ></iconify-icon>
                </a>
              </div>
            </article>

            <article
              id="product-aqua"
              class="product-row group grid gap-7 border-b border-[#DCDCD7] py-8 transition-all duration-500 hover:bg-[#FAFAF8] md:grid-cols-12 md:items-center"
            >
              <div class="flex items-center gap-5 md:col-span-5">
                <span class="text-xs text-[#888888]">03</span>
                <a href="/products/aqua-fish-feed" class="hover:text-[#327411] transition-colors">
                  <h3 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    Aqua &amp; Fish Feed
                  </h3>
                </a>
              </div>
              <p class="text-sm leading-relaxed text-[#666666] md:col-span-4">
                Floating and sinking pellets for freshwater and brackish fish, shrimp and hatcheries — stable in water, complete in nutrition.
              </p>
              <div
                class="flex items-center justify-between md:col-span-3 md:justify-end md:gap-8"
              >
                <a href="/products/aqua-fish-feed">
                  <img
                    src="/assets/fish-feed.webp"
                    alt="Premium aqua and fish feed pellets"
                    loading="lazy"
                    class="h-28 w-36 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <a
                  href="/products/aqua-fish-feed"
                  aria-label="View Aqua & Fish Feed products"
                  class="grid size-12 place-items-center rounded-full border border-[#CFCFC9] transition-colors group-hover:bg-[#327411] group-hover:text-white"
                >
                  <iconify-icon
                    icon="solar:arrow-right-up-linear"
                    width="21"
                    stroke-width="1.5"
                  ></iconify-icon>
                </a>
              </div>
            </article>

            <article
              id="product-goat-swine-minerals"
              class="product-row group grid gap-7 border-b border-[#DCDCD7] py-8 transition-all duration-500 hover:bg-[#FAFAF8] md:grid-cols-12 md:items-center"
            >
              <div class="flex items-center gap-5 md:col-span-5">
                <span class="text-xs text-[#888888]">04</span>
                <a href="/products/goat-swine-minerals" class="hover:text-[#327411] transition-colors">
                  <h3 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    Goat, Swine &amp; Mineral Mixtures
                  </h3>
                </a>
              </div>
              <p class="text-sm leading-relaxed text-[#666666] md:col-span-4">
                Specialty feed for goat, sheep and swine plus chelated mineral mixtures, vitamin premixes and feed supplements that close regional dietary gaps.
              </p>
              <div
                class="flex items-center justify-between md:col-span-3 md:justify-end md:gap-8"
              >
                <a href="/products/goat-swine-minerals">
                  <img
                    src="/assets/goat.webp"
                    alt="Healthy goat on a farm"
                    loading="lazy"
                    class="h-28 w-36 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <a
                  href="/products/goat-swine-minerals"
                  aria-label="View Goat, Swine & Mineral Mixtures"
                  class="grid size-12 place-items-center rounded-full border border-[#CFCFC9] transition-colors group-hover:bg-[#327411] group-hover:text-white"
                >
                  <iconify-icon
                    icon="solar:arrow-right-up-linear"
                    width="21"
                    stroke-width="1.5"
                  ></iconify-icon>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="relative min-h-[42rem] overflow-hidden">
        <img
          src="/assets/facility.jpg"
          alt="FeedRani modern feed manufacturing plant, pellet mill and warehousing facility"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#002144]/90 via-[#002144]/50 to-transparent"
        ></div>
        <div
          class="relative mx-auto flex min-h-[42rem] max-w-[1480px] items-end px-5 py-16 text-white sm:px-10 lg:px-16 lg:py-24 xl:px-24"
        >
          <div class="max-w-3xl">
            <p
              class="mb-5 text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
            >
              Feed manufacturing / 03
            </p>
            <h2
              class="text-4xl font-[800] leading-[0.96] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Built for consistency.
              <br />
              Bag after bag.
            </h2>
            <div
              class="mt-8 grid gap-6 border-t border-white/30 pt-7 sm:grid-cols-2"
            >
              <p class="text-base leading-relaxed text-white/70">
                Computerised batching, steam conditioning, pelleting and lab-tested traceability protect the nutritional integrity of every bag of feed and mineral mixture we ship.
              </p>
              <div class="flex gap-8">
                <div>
                  <div class="text-3xl font-bold">6×</div>
                  <div class="mt-1 text-xs text-white/60">in-line QC checks</div>
                </div>
                <div>
                  <div class="text-3xl font-bold">100%</div>
                  <div class="mt-1 text-xs text-white/60">
                    batch traceability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="mx-auto max-w-[1480px] px-5 py-20 sm:px-10 lg:px-16 lg:py-32 xl:px-24"
      >
        <div
          class="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p
              class="text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
            >
              From mill to farm / 04
            </p>
            <h2 class="mt-5 text-4xl font-[800] tracking-[-0.03em] sm:text-5xl">
              One controlled feed manufacturing process.
            </h2>
          </div>
          <p class="max-w-md text-sm leading-relaxed text-[#666666]">
            A connected quality system protects feed consistency from ingredient procurement and NIR testing through pelleting, packaging and last-mile dealer distribution.
          </p>
        </div>

        <ol class="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <li
            class="group rounded-[28px] border border-[#E8E8E8] bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#327411] hover:shadow-[0_16px_40px_rgba(50, 116, 17,0.1)]"
          >
            <span class="text-xs text-[#888888]">01</span>
            <iconify-icon
              icon="solar:leaf-linear"
              width="27"
              class="mb-4 mt-5 text-[#327411]"
              stroke-width="1.5"
            ></iconify-icon>
            <img
              src="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=500"
              alt="Close-up of balanced livestock feed pellets"
              loading="lazy"
              class="mb-4 h-20 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <h3 class="text-sm font-semibold text-[#111111]">Raw-material sourcing</h3>
          </li>
          <li
            class="group rounded-[28px] border border-[#E8E8E8] bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#327411] hover:shadow-[0_16px_40px_rgba(50, 116, 17,0.1)]"
          >
            <span class="text-xs text-[#888888]">02</span>
            <iconify-icon
              icon="solar:test-tube-linear"
              width="27"
              class="mb-4 mt-5 text-[#327411]"
              stroke-width="1.5"
            ></iconify-icon>
            <img
              src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
              alt="Scientific formulation of livestock feed in clean laboratory"
              loading="lazy"
              class="mb-4 h-20 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <h3 class="text-sm font-semibold text-[#111111]">Least-cost formulation</h3>
          </li>
          <li
            class="group rounded-[28px] border border-[#E8E8E8] bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#327411] hover:shadow-[0_16px_40px_rgba(50, 116, 17,0.1)]"
          >
            <span class="text-xs text-[#888888]">03</span>
            <iconify-icon
              icon="solar:settings-linear"
              width="27"
              class="mb-4 mt-5 text-[#327411]"
              stroke-width="1.5"
            ></iconify-icon>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
              alt="Automated controls in feed mill processing plant"
              loading="lazy"
              class="mb-4 h-20 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <h3 class="text-sm font-semibold text-[#111111]">Grinding &amp; pelleting</h3>
          </li>
          <li
            class="group rounded-[28px] border border-[#E8E8E8] bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#327411] hover:shadow-[0_16px_40px_rgba(50, 116, 17,0.1)]"
          >
            <span class="text-xs text-[#888888]">04</span>
            <iconify-icon
              icon="solar:clipboard-check-linear"
              width="27"
              class="mb-4 mt-5 text-[#327411]"
              stroke-width="1.5"
            ></iconify-icon>
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
              alt="Quality analysis and safety checks on feed samples"
              loading="lazy"
              class="mb-4 h-20 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <h3 class="text-sm font-semibold text-[#111111]">Lab &amp; NIR testing</h3>
          </li>
          <li
            class="group rounded-[28px] border border-[#E8E8E8] bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#327411] hover:shadow-[0_16px_40px_rgba(50, 116, 17,0.1)]"
          >
            <span class="text-xs text-[#888888]">05</span>
            <iconify-icon
              icon="solar:box-linear"
              width="27"
              class="mb-4 mt-5 text-[#327411]"
              stroke-width="1.5"
            ></iconify-icon>
            <img
              src="/assets/packaging.jpg"
              alt="Traceable secure packaging of FeedRani bags"
              loading="lazy"
              class="mb-4 h-20 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <h3 class="text-sm font-semibold text-[#111111]">Sealed bagging</h3>
          </li>
          <li
            class="group rounded-[28px] bg-gradient-to-br from-[#327411] to-[#002144] p-5 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(50, 116, 17,0.25)]"
          >
            <span class="text-xs text-white/70">06</span>
            <iconify-icon
              icon="solar:delivery-linear"
              width="27"
              class="mb-4 mt-5 text-[#327411]"
              stroke-width="1.5"
            ></iconify-icon>
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
              alt="FeedRani dispatch logistics and distribution trucks"
              loading="lazy"
              class="mb-4 h-20 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <h3 class="text-sm font-semibold text-white">Dealer distribution</h3>
          </li>
        </ol>
      </section>

      <section id="science" class="bg-[#002144] py-20 text-white lg:py-36">
        <div
          class="mx-auto grid max-w-[1480px] gap-12 px-5 sm:px-10 lg:grid-cols-12 lg:px-16 xl:px-24"
        >
          <div class="lg:col-span-5">
            <p
              class="text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
            >
              Nutrition R&amp;D / 05
            </p>
            <h2
              class="mt-5 text-4xl font-[800] leading-[0.96] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Field insight meets feed-lab precision.
            </h2>
            <p class="mt-7 max-w-lg text-base leading-relaxed text-white/60">
              Our animal nutrition team links raw-material analysis, species biology and on-farm performance data to build cattle, poultry, aqua, goat and swine feed formulations that perform well beyond the lab.
            </p>
            <a
              href="#contact"
              class="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#111111] hover:-translate-y-0.5"
            >
              Explore our quality standards
              <iconify-icon
                icon="solar:arrow-right-linear"
                width="20"
                stroke-width="1.5"
              ></iconify-icon>
            </a>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div
              class="relative min-h-[27rem] overflow-hidden rounded-[1.75rem] sm:row-span-2"
            >
              <img
                src="/assets/lab.jpg"
                alt="Animal nutrition scientists conducting laboratory analysis"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
              ></div>
              <div class="absolute inset-x-0 bottom-0 p-7">
                <span
                  class="text-xs uppercase tracking-[0.14rem] text-white/60"
                >
                  Feed-lab analysis
                </span>
                <h3 class="mt-2 text-2xl font-bold tracking-tight">
                  Know exactly what goes into every feed bag.
                </h3>
              </div>
            </div>

            <div class="rounded-[1.75rem] bg-white p-7 text-[#111111]">
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase tracking-wider text-[#666666]">
                  Nutrient profile
                </span>
                <iconify-icon
                  icon="solar:chart-square-linear"
                  width="24"
                  class="text-[#327411]"
                  stroke-width="1.5"
                ></iconify-icon>
              </div>
              <div class="mt-8 space-y-4 text-xs">
                <div>
                  <div class="mb-2 flex justify-between">
                    <span>Protein &amp; amino acids</span>
                    <span>94</span>
                  </div>
                  <div class="h-2 rounded-full bg-[#E8E8E8]">
                    <div class="h-full w-[94%] rounded-full bg-[#327411]"></div>
                  </div>
                </div>
                <div>
                  <div class="mb-2 flex justify-between">
                    <span>Metabolisable energy</span>
                    <span>88</span>
                  </div>
                  <div class="h-2 rounded-full bg-[#E8E8E8]">
                    <div class="h-full w-[88%] rounded-full bg-[#327411]"></div>
                  </div>
                </div>
                <div>
                  <div class="mb-2 flex justify-between">
                    <span>Mineral &amp; vitamin coverage</span>
                    <span>91</span>
                  </div>
                  <div class="h-2 rounded-full bg-[#E8E8E8]">
                    <div class="h-full w-[91%] rounded-full bg-[#327411]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="rounded-[1.75rem] border border-white/15 bg-white/5 p-7"
            >
              <iconify-icon
                icon="solar:document-medicine-linear"
                width="28"
                class="text-[#327411]"
                stroke-width="1.5"
              ></iconify-icon>
              <div class="mt-12 text-4xl font-bold tracking-tight">
                1,200+
              </div>
              <p class="mt-2 text-sm text-white/60">
                raw-material and finished-feed samples tested every year
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="mx-auto max-w-[1480px] px-5 py-20 sm:px-10 lg:px-16 lg:py-36 xl:px-24"
      >
        <div
          class="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p
              class="text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
            >
              Farmer outcomes / 06
            </p>
            <h2 class="mt-5 text-4xl font-[800] tracking-[-0.03em] sm:text-5xl">
              Livestock performance you can measure.
            </h2>
          </div>
          <p class="max-w-md text-sm leading-relaxed text-[#666666]">
            Real results from cattle, poultry, aqua, goat and swine farms using FeedRani feed, mineral mixtures and supplements.
          </p>
        </div>

        <div class="grid gap-4 lg:grid-cols-3">
          <figure
            class="rounded-[1.75rem] border border-[#E8E8E8] bg-[#FFFFFF] p-7"
          >
            <div class="flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=500"
                alt="Indian dairy farmer working with healthy cattle"
                loading="lazy"
                class="size-16 rounded-2xl object-cover"
              />
              <figcaption>
                <div class="text-sm font-medium">Rajesh Patel</div>
                <div class="text-xs text-[#666666]">
                  Anand, Gujarat · 42 cattle
                </div>
              </figcaption>
            </div>
            <blockquote class="mt-9 text-xl leading-snug tracking-tight">
              “The improvement was steady and visible. Our cows held better body condition and milk output stayed consistent through the season.”
            </blockquote>
            <div
              class="mt-9 flex items-end justify-between border-t border-[#DDDDD8] pt-5"
            >
              <span class="text-xs uppercase tracking-wider text-[#666666]">
                Milk per animal
              </span>
              <span
                class="text-3xl font-[800] tracking-tight text-[#327411]"
              >
                +16%
              </span>
            </div>
          </figure>

          <figure
            class="rounded-[1.75rem] bg-gradient-to-br from-[#327411] to-[#002144] p-7 text-white shadow-[0_20px_60px_rgba(50, 116, 17,0.2)] lg:-translate-y-5"
          >
            <div class="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=crop&amp;w=200&amp;q=80"
                alt="Portrait of dairy entrepreneur Sunita Devi"
                loading="lazy"
                class="size-14 rounded-full object-cover"
              />
              <figcaption>
                <div class="text-sm font-medium">Sunita Devi</div>
                <div class="text-xs text-white/60">
                  Karnal, Haryana · 28 cattle
                </div>
              </figcaption>
            </div>
            <blockquote class="mt-9 text-xl leading-snug tracking-tight">
              “FeedRani feed brought real consistency to our shed. Digestion improved, feed wastage dropped and the animals look visibly healthier.”
            </blockquote>
            <div
              class="mt-9 flex items-end justify-between border-t border-white/20 pt-5"
            >
              <span class="text-xs uppercase tracking-wider text-white/60">
                Feed conversion
              </span>
              <span
                class="text-3xl font-[800] tracking-tight text-[#327411]"
              >
                +12%
              </span>
            </div>
          </figure>

          <figure
            class="rounded-[1.75rem] border border-[#E8E8E8] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <div class="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&amp;fit=crop&amp;w=200&amp;q=80"
                alt="Portrait of farmer Gurpreet Singh"
                loading="lazy"
                class="size-14 rounded-full object-cover"
              />
              <figcaption>
                <div class="text-sm font-medium">Gurpreet Singh</div>
                <div class="text-xs text-[#666666]">
                  Ludhiana, Punjab · 67 cattle
                </div>
              </figcaption>
            </div>
            <blockquote class="mt-9 text-xl leading-snug tracking-tight">
              “At our scale, batch reliability is everything. The formulation stays consistent bag after bag, and our production planning is far stronger.”
            </blockquote>
            <div
              class="mt-9 flex items-end justify-between border-t border-[#E8E8E8] pt-5"
            >
              <span class="text-xs uppercase tracking-wider text-[#666666]">
                Yield stability
              </span>
              <span
                class="text-3xl font-[800] tracking-tight text-[#327411]"
              >
                96%
              </span>
            </div>
          </figure>
        </div>
      </section>
      <section class="bg-[#FFFFFF] py-20 lg:py-32">
        <div class="mx-auto max-w-[1480px] px-5 sm:px-10 lg:px-16 xl:px-24">
          <div
            class="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p
                class="text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
              >
                Species we feed
              </p>
              <h2
                class="mt-5 text-4xl font-[800] tracking-[-0.03em] sm:text-5xl"
              >
                Healthy livestock. Proven feed nutrition.
              </h2>
            </div>
            <p class="max-w-md text-sm leading-relaxed text-[#666666]">
              A closer look at the cattle, poultry, fish, goat and swine — and the feed manufacturing behind consistent nutrition outcomes.
            </p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <figure
              class="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem]"
            >
              <img
                src="/assets/cows.jpg"
                alt="Dairy cattle on green farmland"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption
                class="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold backdrop-blur-xl shadow-lg"
              >
                Healthy dairy cows
              </figcaption>
            </figure>
            <figure
              class="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem]"
            >
              <img
                src="/assets/hen-2.webp"
                alt="Healthy layer hens and broiler chickens"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption
                class="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold backdrop-blur-xl shadow-lg"
              >
                Healthy poultry
              </figcaption>
            </figure>
            <figure
              class="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem]"
            >
              <img
                src="/assets/fodder.jpg"
                alt="Premium balanced livestock feed pellets"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption
                class="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold backdrop-blur-xl shadow-lg"
              >
                Pelleted feed &amp; mineral mixtures
              </figcaption>
            </figure>
            <figure
              class="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem]"
            >
              <img
                src="/assets/dairy-farm.jpg"
                alt="Modern dairy farm"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption
                class="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold backdrop-blur-xl shadow-lg"
              >
                Modern dairy farm
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="network" class="overflow-hidden bg-[#FFFFFF] py-20 lg:py-32">
        <div
          class="mx-auto grid max-w-[1480px] items-center gap-14 px-5 sm:px-10 lg:grid-cols-12 lg:px-16 xl:px-24"
        >
          <div class="lg:col-span-5">
            <p
              class="text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
            >
              Distribution network / 07
            </p>
            <h2
              class="mt-5 text-4xl font-[800] leading-[0.96] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Closer to every farm we feed.
            </h2>
            <p class="mt-7 max-w-md text-base leading-relaxed text-[#666666]">
              A growing network of trusted feed dealers and stockists gives farmers local access, expert product guidance and dependable supply of feed, mineral mixtures and supplements.
            </p>
            <div class="mt-9 grid grid-cols-2 gap-4">
              <div class="rounded-2xl border border-[#E2E2DE] bg-white p-5">
                <div class="text-3xl font-semibold tracking-tight">18</div>
                <div class="mt-1 text-xs text-[#666666]">states served</div>
              </div>
              <div class="rounded-2xl border border-[#E2E2DE] bg-white p-5">
                <div class="text-3xl font-semibold tracking-tight">600+</div>
                <div class="mt-1 text-xs text-[#666666]">feed dealers</div>
              </div>
            </div>
          </div>

          <div
          <div
            class="relative min-h-[36rem] rounded-[2.5rem] border border-[#E8E8E3] bg-white p-4 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.04)] lg:col-span-7 flex flex-col justify-center items-center overflow-hidden group map-grid-bg"
          >
            <!-- Map Card Ambient Glow Elements -->
            <div class="absolute -right-24 -top-24 size-80 rounded-full bg-[#327411]/[0.06] blur-[80px] pointer-events-none"></div>
            <div class="absolute -left-24 -bottom-24 size-80 rounded-full bg-[#327411]/[0.04] blur-[80px] pointer-events-none"></div>

            <!-- Aspect-Ratio Locked India Map Wrapper -->
            <div class="relative w-full max-w-[480px] aspect-[850/909] mx-auto select-none transition-transform duration-700 hover:scale-[1.015]" id="india-map-wrapper">
              
              <!-- Map SVG -->
              <svg
                viewBox="75 45.5 850 909"
                class="w-full h-full object-contain filter drop-shadow-[0_12px_40px_rgba(50, 116, 17,0.05)]"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Vector Map of India"
              >
                <path
                  d="M355.9 45.5l0.5 0.7 0.5 0.8 0.7 0.6 0.7 0.2 0.9-0.4 1.3-1.5 0.8-0.4 1.7 0.1 0.4 1.4-0.6 1.9-0.8 1.8-0.2 2.8 1 2.7 2.7 4.9 0.3 1.3 0.2 2.7 0.5 1.2 1.1 1.6 0.3 0.6 1.8 6.7 0.6 1.2 1.2 1.1 1.3 0.5 6.6 1.2 1.7 0.7 2.5 1.9 1.5 2 1.1 0.6 1.3 0.4 1.1 0.5 0.8 0.8 0.2 0.3 0.5 1.1 0.3 0.8 0.1 0.9-0.1 0.8-0.3 0.8-2.1 2-2.8 1.3-2.2 1.5-0.3 3 1.4 4.3 0.5 2.2 0.2 2.3-0.3 6.7 0.5 2 0.7 1.2 2.7 2.5 0 0.1 1.4 1.4 0.8 0.5 0.9 0.4 0.9 0.4 0.6 0.4 0.7 0.3 0.8-0.1 0.7-0.1 3.2 0.1 2.3 0.5 2.3 0 1.1 0.9-1 3.2-1.4 1.6 0.2 1.7 0.5 1.3-1.7 0.4-0.2 0.7 1.3 0.5 1.1 0.3 1.6 2.1 2.7 4 1.5 1 0.2 1.3-1.3 2-1.3 0.8-0.5 1.4-1.2 1.4-0.9 1.1-1 0.2-0.8-1.7-1.7-0.5-1 2.1-1.5 0.9-0.6-0.1-0.7 0.1-0.9 0.3-0.8 0.4-0.6 0.4-0.3 0.8-0.3 2.1-0.5 0.6-0.2 0.1-0.8-0.2-0.4-0.1-0.3 0.1-0.8 0.4-0.4 0.1-0.9 0.5-1-0.3-0.8-0.8-0.8-0.8-2.4-2.1-0.5-1.1-0.5-1.8-0.1-0.5 0.2-0.6 0.2-0.6 0.1-0.6-0.4-0.6-0.7-0.3-0.6 0.3-0.8 1.1-0.5 0.4-0.5 0.3-1.2 0.3-4.1 0.1-1.2 0.3-0.7 0.3-0.1 0.7 0.8 1.8 1.2 1.7 0.1 0.4-0.1 0.2-0.2 0.2-0.2 0.3 0 0.4 0 0.2 0.1 0.1 0.7 3.2 0 0.7-0.2 0.7 0.1 0.4 0.3 0.1 0.2 0.1 1.1 0.6 0.6 0.9 0.5 1 2.8 3.9 0.9 0.7 1.2 0.8 0.4 0.3 0.3 0.7-0.1 0.7-0.6 1.4-0.2 0.7-0.2 1.4-0.2 0.7-0.8 1.2 0 0.5 0.7 0.9 0 0.3-0.1 0.3 0 0.3 0.1 0.3 0.4 0.4 0.2 0.6 0.2 0.3 0.2 0.1 0.3 0.1 0.5 0 1.1 1.1 0.7 0.9-0.2 0.4-0.5 0.6-2.8 2.3-0.1 0.8 1.1 0.7 0.8 0.8-0.1 1.1-0.4 1.3-0.2 1.3 0.1 0.6 0.1 0.3 0.2 0.2 1 0.5 0.3 0 0.7-0.2 0.8 0.1 0.4 0 0.7 0.2 1 0.5 0.6-1.1 0.6-0.8 0.8-0.6 0.8-1.3 1-1.4 0.6-1.3 0.2 0 1.6 0.8 0.7 0.8 0.6 0.7 0.4 0.8 0.5 0.7 0.9 0.7 0 0.6 0.4 0.4 0.3 0.7-0.4 0.8 0.1 0.4 0.7 0.1 0.3 0.5 0.3 0.8 0.1 0.7 0 0.6 0.5 0.8 1.4 1 0.2 0.6 0.3 0.5 0.1 0.3 0.2 1.2 0.2 0.4 0.4 0.1 0.5-0.1 0.4 0 0.5 0.1 0.4 0.2 0.1 0.2 0.1 0.1 0.1 0.2 0 0.2 0.3 0.4 0.4 0.5 0.5 0.5 0.5 0.2 0.6 0.2 0.3 0.1 0.4-0.1 1.2-0.7 0.5-0.1 1.2-0.1 1.4-0.4 0.7 0.1 2.1 0.5 0.5 0.2 0.3 0.5 0.5 1 0.7 0.7 0.3 0.2 0.2 0.1 0.4 0.3 2.1 0.9 0.7 0.5 0.4 0.9 0.5 0.7 0.9 0.3 0.5-0.1 0.9-0.5 0.5 0 0.3 0.3 0.8 1.2 0.9 0.5 0.2 0.3-0.8 1.3-0.2 0.2-0.2 0.1-0.3-0.1-0.3 0.1-0.1 0.1 0 0.5 0.3 0.4 0.4 0.4 0.2 0.4 0.1 0.6-0.1 0.5-0.3 0.5-0.3 0.6 1.1-0.2 1.1 0 2.1 0.7 2.9 1.6 1.4 0.6 1 0.6 0.5 0.1 0.6-0.1 0.4-0.1 0.5 0 0.6 0.2 2.8 1.6 0.9 0.7 0.3 0.4 0.6 1.1 0.3 0.5 0.5 0.4 2.4 1.1 2.3 0.6 0.9 0.5 0.6 0.9 0.2 0.5-0.2 0.5-0.2 0.1-2 0.6-0.5-0.1-0.3-0.6-0.3-0.4-0.4 0.3-0.5 0.6-0.4 0.4 0.3 0.9-0.5 0.9-1.8 1.4-0.4 0.4-0.9 1.4-0.3 0.3-1 0.7-0.8 0.8-0.3 0.2-0.6 0.2-1 0.1-0.5 0.2-0.2 0.6-0.4 1.2-0.6 1.1-1.5 1.9-0.6 0.5-1.8 0.5-0.7 0.6-0.5 0.9 0 0.9 0.3 0.8 0.4 0.9 0.3 0.9-0.1 0.7-0.3 0.7-0.7 0.7-0.1 0.2-0.4 0.2-0.2 0.1-0.1 0.2 0.1 0.2 0 0.2 0 0.2-0.2 0.3-0.2 0.2-0.6 0.5-0.3 0.3-0.2 0.2-0.2 0.2-0.1 0.5-0.2 0.3-0.8 0.3-0.3 0.2-0.2 0.6 0.2 0.6 0.7 1 0.2 1.4 0.1 0.3 0.3 0.1 0.3 0 0.2 0.2 0 0.6-0.1 0.8-0.6 2.1-0.2 0-0.4-0.3-0.5 0.1-0.2 0.4 0.5 1.4 0.1 0.6-0.4 0.4-0.5 0.2-0.6 0-0.5-0.1-0.9 0.4-0.6 1.3-0.2 1.5 0.1 1.1-0.3 0.5-0.4 0.4-0.5 0.2-0.4 0.4-0.4 0.5-0.2 0.6-0.1 0.6 0 0.7 0.2 1.3 0.5 0.4 0.5 0.1 0.3 0.1 0.9 0.5 1 1.4 0.4 0.3 0.6 0.2 1 0.2 0.5 0.3 0.2 0.2 0.3 0.5 0.2 0.3 0.2 0.1 0.6 0.1 0.2 0.2 0.8 1.6 0.3 0.5 0.6 0.2 0.6-0.1 0.5-0.1 0.6 0 0.5 0.3 1.3 1.5 0.5 0.3 0.2-0.4-0.3-2.1 0.1-0.6 0.3-0.5 0.6-0.3 0.5 0 0.6 0.1 0.1 0.1-0.1 0.3 0 0.3 0.2 0.3 0.5 0.3 0.5 0.1 1.1 0.2 0.4 0.3 0.6 1.1 0.3 0.4 0.5 0.2 0.9 0.3 0.4 0.3 1.2 1.2 0.4 0.3 0.6 0.1 1.2 0 0.4 0.2 0.2 0.5 0.1 0.5 0.1 0.4 0.6 0.4 0.4 0.2 0.6 0.1 0.6 0 0.4-0.1 0.4 0.2 0.1 0.3 0 0.4 0.2 0.4 1.4 0.2 2.9 0.6 0.6 0.4 0.6 0.7 0.6 2 0.4 0.9 1.7 2 0.4 0.8-0.4 0.2-0.1 0.2 0.1 0.3 0.5 0.1-0.1 0.5 0.3 0.1 0.5-0.1 0.4-0.2 0.3-0.4 0.1-0.4 0.2-0.3 0.5 0 0.6 0.2 0.6 0.4 0.6 0.6 0.3 0.6 0.2 0.5 0 0.3 0.1 0.3 0.5 0.4 2.6 1.3 0.5 0.5 0.4 0.6 0.6 0.4 1.5 0.4 0.7 0.2 0.6 0.5 1.1 1.3 1.5 0.8 0.8 0.6 0.8 0.5 0.8 0.1 0.7-0.5 1.1-1.4 0.9-0.4 1.5 0.2 0.7 0.2 0.6 0.5 0.5 0.6 0.5 0.3 1.3 0.5 3.5 2.9 2.2 1.1 1.6 1.6 1.1 0.4 2.5-0.3 3.7-1 0.6 0.3 0.2 0 0.5 0.9 0.3 1.2 0.3 2.5 0.3 1.2 0.7 0.8 3.6 0.2 0.7 0.3 1.4 0.7 1.8 0.5 3.6 0 1 0.4 1.5 1.2 0.3 0.4 0.4 0.6 0.1 0.5 0.3 0.3 0.7 0.3 0.7-0.1 0.5-0.3 0.5-0.5 0.6-0.9 0.2-0.4 0.1-0.4-0.5-0.6 0-0.4 0-0.4 0.2-0.3 0.7-0.3 2.8 0 3.2 0.4 2.1 0.8 4 2.2 1.4 0.5 0.1 0.2 0.1 0 0.2-0.3 0.1-0.1 0.3-0.1 0-0.3-0.1-0.3-0.1-0.3-0.8-1-0.2-0.5 0.5-0.2 1.4-0.1 0.6-0.2 0.4 0.1 1.2 0.2 0.9 0 0.6-0.5 1.5-1.8 0.6-0.2 0.5 0.1 0.1 0.6 0.3 0.3 0.3 0.2 0.7 0.2 0.3 0.3 0.3 0.8 0.3 0.1 0.8-0.1 0.4 0.3 0.3 0.6 0.6 0.8 0.6 0.4 8.4 1.5 0.8 0.6 0.8 1.1 0.4 1.2 0.3 1.2 0.1 1.3-0.2 1.3-0.3 0.7-0.4 0.7-0.2 0.8 0.1 0.7 0.4 0.3 3.5 0.9 0.3 0 0.4-0.3 0.5-0.2 0.5 0.1 0.3 0.6 0.7 0.4 1.4 0.5 0.7 0.3 0.4 0.7 0.2 0.6 0.2 0.6 0.7 0.4 0.3 0.1 0.4 0 0.5 0.3 0 0.5 0 0.4 0.8 0.1 1.6-0.7 0.6 0 1.2 0.4 0.1 1 0 1.2 0.8 0.9 2.7 0.7 0.5 0 1-0.4 0.4-0.3 0.1-0.1 0.4-0.5 0.5-0.4 0.5 0 0.5 0.2 0.6-0.2 1-0.6 1.3-0.6 2.3-1 0.3 0.1 2.3 1.3 0.4 0.5 0.2 1.1-0.2 2.4 0.3 1.2 0.4 0.5 1.6 1.3 0.3 0 0.2-0.1 0.3-0.1 0.3 0.2 0 0.3 0 0.3 0.1 0.2 0.2 0.2 0.4-0.1 0.7-0.3 2-1.7 0.5-0.3 0.7-0.1 1-0.3 0.9 0.2 2 1.3 0.1 0.1 0.2 0.1 0.7 0 0.2 0 0.4 0.1 0.2 0.1 0.2 0.2 0.2 0.1 0.3 0.1 0.2-0.1 0.6-0.4 1.1-0.4 0.6-0.1 0.5 0.1 0.2 0.3 0.1 0.4 0.2 0.2 0.2 0.1 0.6-0.1 0.3 0 0.8 0.3 1.8 1 0.9 0.3 0.6 0.2 0.4 0.2 0.4 0.4 0.4 0.4 0.6 0.4 2 0.9 2 1.2 0.5 0.2 0.3-0.3 0.2-0.4 0.2-0.3 0.4-0.1 1.1 0.5 0.2 0 0.8-0.2 0.7-0.5 0.5-0.6 0.3-0.8 1-0.5 0.8-0.3 1.1-0.4 0.3-0.2 0.9-1 0.4-0.3 0.4 0 0 0.6 0.1 0.5 0.3 1.6 0.3 1 0.5 1.1 0.6 0.9 0.9 0.3 1.5-0.2 0.9-0.2 0.3 0.3 0.2 0.5 0.3 0.4 0.4 0.2 1.2 0.6 0.4 0.1 0.3-0.4 0.6-1.1 0.3-0.5 0.8-0.5 1-0.3 0.9 0 0.9 0.2 2.1 1.2 1 0.2 1.1-0.4 0.7-0.6 0.3-0.2 0.7-0.3 0.4 0.3 0.4 0.3 0.5 0.1 0.4-0.2 0.3-0.5 0.2-0.7 0.3-0.1 0.5 0.1 0.6 0.3 0.5 0 0.8-0.7 0.6-0.2 0 0.2 0.7 0.5 0.1 0 0.1 0.3 0.2 0.5 0.2 0.4 0.4 0.3 0.9 0.6 0.4 0.4 0.9-0.1 1.1-1.2 0.9-1.5 0.2-1.4-0.1-0.4 0.1-0.3 0.2-0.7 0.4-1.4 1.3-2.6 0.5-1.4 0.1-0.6 0.1-0.7-0.1-0.6-0.2-1.3-0.1-1.4-0.2-0.5-0.2-0.5-0.7-1-0.2-0.5-0.4-1.2-0.6-1-0.6-0.9-0.4-0.4-0.5-0.2-0.5-0.3-0.5-1.2-0.5-0.4-0.1-0.3-0.1-0.2 0.1-0.3 0.4-1 0.1-2.2 0.5-1.1 0.7-1.6 0.2-0.8-0.1-0.3-0.4-0.7-0.1-0.3 0-0.5 0-0.3 0.3-0.8 0.1-0.2 0.2-0.2 0.1-0.2 0.1-0.2-0.1-0.2-0.3-0.3 0-0.1-0.2-0.6 0-0.4 0-0.3 0.8-1.7 1.8-3.1 0.7-2.7 0.4-0.8 0.3-0.9-0.2-1.3 0.4-0.6-0.1-0.4-0.2-0.2-0.4-0.2-0.7-0.1-0.4-0.6-0.2-0.8 0.1-0.8 0.4-0.7 0.3-0.1 0.7 0.1 0.4 0 0.3-0.1 0.7-0.2 5.3-0.8 0.6-0.4 1.6-1.2 0.6-0.2 0.7 0.2 0.5-0.3 0.4-0.7 0.6-0.6 1.2-0.9 0.5 0 0.6 0.7 0.6 0.5 1.7 0.2 0.7 0.3 1.3 0.9 0.7 0.5 0.4 0.6 0.1 0.5-0.3 1.1 0 0.6 0.3 0.4 0.7 0.7 0.2 0.5 0.1 0.6 0 0.5-1.4 6.2-0.7 1.1-0.4 1.2-0.6 0.9-0.2 0.4 0 0.5 0.5 0.7 0 0.5-0.1 1 0.1 1 0.4 0.8 0.7 0.8 0.4 0.2 0.3 0.2 0.3 0.2 0.6 0.8 0.4 0.3 0.8 0.6-0.2 0.9-0.3 0.2-0.4 0.3-1.7 0.5-0.8 0.5-0.6 0.9-0.5 1.1-0.2 1 0.1 0 0.2 0.2 1.9 1 0.6 0.5 0.4 0.7 0.1 0.9 0 1.8 0.2 1.6 0.5-0.6 0.5-0.5 0.6-0.1 0.5 0.6 0.1 0.4 0 0.4 0 0.3 0.2 0.3 0.3 0.2 0.3 0 0.3-0.1 0.3-0.2 0.6 0 0.8 0.3 0.6 0.5 0.5 0.6 0.4 0.8 0.2 0.6 0.4 0.5 1 0.3 1.6 0.1 0.8-0.1 0.8-0.2 0.4-0.3 0.3-0.3 0.3-0.2 0.4-0.1 0.4 0.1 1.2-0.4 0.8 0.6 1.1 0.8 1 0.5 1.8-0.2 1.2 0.2 1.2 0.4 0.7 0.6 0.1 0.6-0.5 0.9 0.4 0.3 0.5 0 1-0.5 0.7 0.1 1.5 0.7 0.5 0 0.2 0.1 1.1 0 0.1 0 0.3 0.1 0.1 0 0.1-0.2 0.1-0.2 0.1-0.2 0-0.1 0-0.2 0.1-0.1 0.1-0.2 0.1 0.1 0.3 0.2 0.1 0 0.2 0.1 0.1 0 0.5 0.1 0.3 0.1 0.7-0.1 1.8-0.5 3.3-0.3 1.1-0.3 0.8-0.7 0.7-1.9 1-0.7 0.5 0 1.1 0 0.5-0.1 0.5-0.4 0.4-0.4 0.4-0.3 0.6-0.2 1 0.1 2.7 2 3.2 1.7 3.8 0.4 6.6-0.4 1.8-0.1 0.2-0.1 1.4-0.6 0.9 0 1 0.1 2.1-0.1 1 0.3 0.8 0.5 0.4 0.2 0.6-0.1 0.5-0.1 0.5-0.2 0.5-0.3 0.3-0.4 0.4-0.6 0.2-0.6 0.3-0.5 0.5-0.4 0.4 0 1.2 0.1 0.4 0.1 0.3 0.4 0.7 1.5 0.4 0.3 0.5 0 1.1-0.4 0.5 0 1.3 0.3 0.4 0.1 1.4-0.2 0.9-0.4 1.9-1.2 0.8-0.2 0.6 0.3 0.1 0.5 0.1 0.5 0.3 0.5 0.5 0 0.2-0.4 0-0.5-0.4-0.4 0.7-0.3 0-0.5-0.1-0.4 0.4-0.2 0.5 0.2 1 0.8 0.5 0.3 1.7-0.3 1.1-1 0.2-1.2 0.1-0.5-0.4-1.8-0.5-1.1-1.5-1.4-0.4-1.1 0.1-0.6 0-0.6 0.2-0.6 0.2-0.5 0.1-0.1 0.1-0.1 0.3-0.4 0.2-0.2 0.1-0.3 0.1-0.6 0.1-0.3 0.4-0.5 0.9-0.8 0.2-0.6-0.1-0.4-1.8-4.6-1.4-0.9-0.4 0.1-1.8 0.3-1.3-0.2-1.1 0.2-1.1 0.2-1.5-0.2-0.7-0.2-0.7-0.2-0.7-0.2-0.4-0.5-0.3-0.6-0.8-0.6-0.3-0.5-0.6-2.4 0.2-1.3 1.3-1.9 0.3-1 0-1.2-0.9-0.9-1.1-0.3-0.1-1 1.9-0.1 1.5 0.1 1.4 1.5 2.9-0.1 0.8 1.4 0.3 1.2 1.3-0.1 1.2 0.2 0.5-0.7 0.6-0.7 2.2 0.2 1.2-0.8 0.6-0.8 3.3-1.8 0.3 0.1 0.2 0.5 0.5 1.2 0.4 0.6 0.4 0.2 0.4-0.5 0.4-1 0.1 0 0.2 0.6 0.3 0.4 0.5-0.1 0.2-0.5 0.2-0.7 0.3-0.5 0.4 0.1 0.3 0.8 0.3 0.3 0.4-0.1 1-0.8 1.3 0.3 1.6-0.3 0.6-0.7 1.2-0.9 1.4-0.5 0.8-1.3 0.7-1.1-1-1.3 0-0.5-0.3-0.3-1.1-0.1-0.4-0.2-0.1-0.5 0.6-1.1 0.6-0.9 0.9-0.7 1.8-1.2 0.3-0.2 0.1 0.2 0.1 0.2 0.1 0.2 0.4 0 0.5 0 0.4-0.2 0.4-0.2 0.5-0.5 0.7-1 0.4-0.4 0.5-0.3 1.1-0.4 0.5-0.4 2-0.7 2.5-0.8 2.2-0.4 0.3-1.8-0.9-1.3 1-0.8 1.1-1.3 0.8-0.8 0.5-1.2 0.4-1.5 1.1-0.7 2.7-1.6 3-0.2 1.7 0.2 0.5 0 0.5-0.3 0.6-0.3 1.2-0.1 0.5-0.1 1.7 0.5 2.4-0.8 1.9 0.7 1-1.5 0.6-1.3 0.3-1.1 0-1.4 0.5-0.3 0.5-0.4 1.5-0.6 1.6-0.5 1.1-1.1 2.3-0.1 1.2-1.5 1.6-1.5-1.1-1.2-1.1-1.3 0.5-1.6 1 0 0.4-0.1 0.3-0.3 0.4-0.9 0.3-0.3 0.7-0.4 0.8-0.1 1.5 0 0.7-0.2 0.5-0.2 0.4-0.3 1.5-2.4 0.5-0.5 0.9-0.1 1.1 0.5 1.1 0.7 1.5 1.8 0.3 0.6-0.2 1.3 0.5 0.2 0.6 0 0.5 0 1.1-0.1 1.1 0.3 2.9 0.3 1.7 0.4 1.5 0.9 0.5 0.2 2.2 0.4 0.2 0.1 0.2 0.1 0.2 0.3 0 0.3 0.1 0.2 0.2 0.2 1.7 0.2 2.5 0.6 1.8-0.4 1.7-0.7 0.7-2.1 0.2-0.2 0.1-0.8-0.3-1.2 0.1-0.4 1-0.1 0-0.2 0-0.4 0.1-0.3 0.3-0.2 0.2 0 0.3-0.1 0.3 0 1.6 0.7 2 0.3 0.9-1.8-0.1-2.3 1-0.1 0.5-0.3 2 1 2.6-1.2 1.8-0.1 1.7-0.2 2 0 0.3 0.5 0.4 1.7 0.3 0.5 0.8 1 0.9 0.6 1-0.1 1-0.6 0.6-0.5 0.4-0.1 0.3 0.2 0.5 0.5 0 0.5-0.7 1.1-0.4 1-0.3 0.3-3.1 0.8-0.5 0.3-0.3 0.5-0.3 0.5 0.1 3 0.6 2.5 1.5-0.1 1.3-1.6 2.1-1.4 2.7 1.4-0.2 0.4 0 0.4 0.3 0.2 0.4 0 0.5 0.5 0.2 0.6 0.3 1.5 0.4 0.7 1.5 1.9 0.5 1.6 0.2 1.6-2.9 0.8 0.1 1.4-2.7 2.8-2.1 2.7-1 1.9 1.9 1.4 2.1-0.6 1.6-0.8 0.5-0.3 1.4-0.6 1.3 0.1 3.2 0.3 5.3 2.7 1 0.6 1 0.2 0.9-0.2 1-0.7 1.3-0.6 1.1 0.3 2 1.7 0.3 0.1 0.3 0 0.2 0.1 0.3 0.8 0.2 0.3 1.7 1.3 1.1 0.6 0.1 0.9-0.8 2-0.2 1.2 0.4 0.8 1.4 1.5 0.2 1-0.2 0.4-0.4 1-0.2 0.5 0 0.8 0.1 0.3-0.1 0.3-0.6 0.3-0.6 0.2-0.1-0.2-0.1-0.4-0.3-0.5-0.5 0-0.5 0.1-0.6 0.3-0.3 0.3-0.4 0.6-0.4 0.5-1.5 1.3-0.3 0.2-0.3 0.1-0.2 0.1-0.2 0.5-0.2 0.2-0.5 0.2-0.2 0.1-0.1 0.4-0.1 0.4-0.1 0.1-0.2 0-0.4 0.2-0.9 0.2-0.4 0.3-1 1.3-0.5 0.4-1.2 0.8-0.4 0.5-0.4 0.5-0.3 0.7 0 0.7 0.2 0.3 0.3 0.5 0.1 0.3 0 0.3 0.1 0.6 0.1 0.3 0.1 0.5-0.4 0.9 0.1 0.7 0.7 1.1 4.7 6.3 0.8 0.8 0.2 0.3 0 0.6 0.1 0.3 0.2 0.2 0.3 0.2 0.2 0.2 0.2 0.3-0.1 0.3-0.3 0.8-0.1 0.2-0.4 0.2-0.2-0.1-0.2-0.2-0.4-0.2-0.3 0.1-0.2 0.1-0.3 0.1-0.3 0-0.4-0.1-0.2-0.2-0.2-0.3-0.3-0.3-4-1.8-0.6-0.6 0-0.5 0.2-0.5 0.3-0.7-0.2-0.2-0.9-0.8-0.4-0.5-0.6-1-0.3-0.4-0.6-0.4-1-0.5-0.5-0.1-0.5 0-0.4 0.1-0.5 0.5-0.3 0.2-0.3 0-0.2-0.1-0.2-0.1-0.3-0.2-0.8-0.2-0.3 0.3-0.2 0.6-0.6 0.7-0.5 0.2-0.6 0.2-0.6 0.1-0.4-0.2-2-0.1-7.7 1.4-2 0.9-1.7 1.3-1.2 1.5-1 2.1-0.7 0.9-0.8 0.8-0.8 0.4-1.6 0.3-0.8 0.3-1.2 1.6-0.8 1.3-0.3 0.4-0.4 0.1-1.3 0.2-0.5 0.2-0.3 0.4-0.3 0.8-0.3 0.6-0.5 0.3-0.6 0-0.7-0.1-1.2 0.3-0.8 1.1-0.6 1.3-0.9 1.1-0.5 0.3-2.2 0.8-1.1 0.5-0.5 0.2-0.4-0.1-0.3 0-0.4-0.7-0.6 0.1-0.2 0.2-0.4 0.7-0.3 0.2-0.3 0.2-0.6 0.1-0.3 0.1-0.2 0.3-0.2 0.3-0.1 0.9 0.1 0.2-0.1 0.2-0.1 0.4-0.3 0.5-0.9 1-0.4 0.3-0.4 0.7 0 0.5 0.6 1.1 0.1 0.6-0.1 0.5-0.4 1.1-0.2 1 0 1.3 0.1 1.3 0.4 0.9 0.2 0.3 0.2 0 0.3 0.1 0.2 0.1 0.1 0.3-0.1 0.2-0.2 0.3-0.1 0.2 0.2 2.2 0.4 0.4 1.1 0.3 0.3 0.4 0.1 0.7-0.4 0.6-0.9 1.2-1.2 1.3-0.5 0.3-1.1 0.4-0.3 0.3-0.2 0.7 0 0.6 0.6 3.4 0 0.7-0.2 0.6-0.2 0.2-0.6 0.1-0.3 0.1-0.2 0.2-2.7 3.9-0.1 0.1-0.3 0.2-0.1 0.1 0 0.1 0.2 0.3 0 0.2-0.3 0.1-0.5 0-0.3 0.1-0.4 0.6-0.8 1.2-0.5 0.4-0.5 0.2-1 0.1-0.6 0.2-0.9 0.7-0.3 0.3-0.6 0.6-0.6 1-1.7 4.8 0.1 1.4 0.7 0.9 1 0.4 1.2 0.3 1 0.5 0.5 0.9 0.3 1.3-0.2 1.4-0.5 1-0.5 0.6-0.6 2.8-0.4 0.8-1.2 1.6-0.2 1 0 0.5-0.1 0.6-0.2 0.6-0.3 0.4-0.4 0.3-0.4 0-0.4 0-0.4 0.1-0.2 0.5-0.6 2.2-0.4 0.7-1.3 0.9-0.3 0.3-0.3 0.5-0.4 1.6-0.4 0.3-0.3 0.3-0.2 0.3-0.1 1.3-0.3 0.4-0.3 0.2-0.3 0.4-0.1 0.2 0.1 0.6 0 0.2-0.2 0.3-0.6 0.4-0.2 0.3-0.2 0.5-0.1 1.1-0.1 0.5-1.4 3.4-0.3 1.2-0.2 1.1-0.1 0.6-0.3 0.4-0.1 0.3-0.2 1.2-0.1 0.4-1.3 1.8-0.3 0.7 0 0.6 0 0.7-0.1 0.6-0.1 0.1-0.3 0.4-0.5 0-0.4-0.5-0.4-0.6-0.5-0.3-1.7-1-0.6-0.1-1-0.2-0.9-0.4-0.8-0.2-2.3 0.3-0.6-0.3-1.2-1.6-0.9-0.3-1.5-0.2-1.4 0.1-0.7 0.4-0.1 0.3-0.1 0.2-0.1 0.3-0.2 0.1-0.3 0.1-0.1-0.2-0.2-0.2-0.2-0.1-0.5 0.2-0.9 0.5-0.6 0-0.5 0-0.2-0.3-0.1-0.4-0.2-0.5-1-0.9-0.3-0.4-0.8-1.3-0.6-0.3-0.7 0.2-0.4 0.6-0.2 0.7 0 0.2 0 0.6 0 0.6 0.2 0.6 0.2 0.5 0.6 1.1 0.3 0.3 0.1 0.1 0.2 0.3 0 0.5 0 1.1 0.5 3.7 0.9 0.6 0.2 0.4 0.4 0.5 0.1 0.4 0.1 1-1 6.1 0 0.9 0.2 1.9 0.1 0.3-0.1 0.3-0.1 0.3-0.5 0.8-0.2 0.5-0.1 0.6 0.2 1.3-0.3 2.1 0 0.5 0.1 0.4 0 0.4-1.2 2.5-0.4 0.6-0.6 0.5-0.8 0.3-0.7 0.1-0.6-0.5-0.4-0.6-0.5-0.5-0.6-0.1-0.7 0.2-0.3 0.6-0.1 0.9 0.2 0.8 0.2 0.7 0.6 1.1 0.2 0.7-0.1 0.6-0.4 0.6-1.1 1.3-0.2 0.7-0.1-0.1-1 0.9-0.2 2.5 0 0.7 0.3 0.6 0.6 1.1 0.2 0.7 0 0.6-0.3 1.3 0 0.7 0.3 1 0.2 0.6 1.1 1.1 0.3 1.3 0.3 3.6-0.1 0.4-0.1 0.4-0.2 0.1-0.3 0-0.6 0.3-0.2 0 0 0.1 0 0.3 0.5 1-0.6 0.2-0.5-0.2-0.4-0.3-0.5-0.2-0.8-0.1-0.2 0-0.4 0.2-0.1 0.1 0.1 0.3 0 2.1 0 0.3-0.5 0.2-0.3 0.1-0.3 0.2-0.6 1 0 0.5 0.1 0.4 0.2 0.4 0.1 0.2 0 0.2 0 0.2 0 0.3-0.1 0 0 0.1-0.2 0.1-0.2 0-0.2-0.1-0.1-0.1-0.4-0.6-0.5-0.3-0.4 0.2-0.3 0.6-0.2 0.9-0.4 0.4-0.3-0.3-0.1-1-0.3-0.9-0.5-0.7-1.8-1.8-1.9-1.3-0.7-0.2-0.3 0.2-0.1 0.4 0.1 0.9 0 0.3-0.1 0.1-0.2 0 0-0.1-0.2 0.6 0 0.5 0.1 0.4 0 0.5-0.3 0.4-0.3 0.2-0.3 0-0.4 0.1-0.3 0.4-0.2 0.2-0.2 0.2-0.2 0.1-0.2 0.1-0.1-0.3 0-0.3-0.4-2-0.7-2.1 0.4-0.3 0.4 0 0.4-0.2 0-0.8-1.7-10.3 0-0.5-0.4-1-0.1-0.5 0-1.8-0.2-2.5-0.1-0.5-0.3-0.4-0.8-0.7-0.3-0.5-0.2-1-0.3-2.4-0.4-0.5-1-0.4-0.5-0.9-0.2-1 0-2.2-0.8-4.5 0.1-1.3 0.1-0.4 0.5-1.1 0.2-0.6 0-0.3-0.1-0.3-0.2-0.6 0-0.3 0.1-0.6-0.1-0.3-0.1-0.1-0.3-0.3-0.2-0.3 0-0.2 0-0.4 0-0.3-0.2-0.2-0.4-0.4-0.1-0.3-0.2-0.4-0.1-1.6-1.1-3.6-0.1-1 0.3-1.4 0-0.5 0-0.2-0.6-0.3-0.5 0.3-0.4 1.5-0.4 0.4-0.4-0.6-0.3-1.2-0.6-0.9-1.2 0.5-0.5 0.5-1 1.3-0.5 0.5-0.6 0.1-0.5-0.2-1.2-1.4-0.4-0.6-0.3-0.4-0.4 0-0.2 0.4-0.1 0.7 0.1 1.2 0.7 3.7 0 1.2-0.7 1.2-0.4 0.4-0.4 0.3-1.6 0.7-0.5 0.4-0.8 1.1-0.8 1.4-0.5 1.6 0.1 1.3 0.4 1 0.5 2.2 0.4 0.9 0.1 0.4-0.2 0.3-0.4 0.5-0.1 0-0.3-0.1-0.2 0.2 0 0.1 0 0.2 0 0.1-0.5 0.7-0.2 0.3-0.5 0.4-0.2 0.3-0.4 0.2-0.8 0.2-0.4 0.1-0.2 0.1-0.2-0.1-0.2-0.1-0.2 0-0.2 0.1-0.2 0.3-0.1 0.3-0.2 0.2-0.4 0.3-0.1-0.1 0-0.3-0.2-0.4-0.4-0.2-0.4-0.1-0.4-0.1-0.4-0.4-0.1-0.4 0-0.9-0.1-0.1-0.3-0.1 0-0.1-0.2-0.8-0.7-2.3-0.1-0.3-0.2-1-0.1 0-0.4-0.4 0-0.2 0-0.2 0-0.2-0.2-0.3 0 0.1-0.1 0.2-0.2-0.4-0.5-0.6-0.5-0.5-0.7 0-0.3 0.5-0.1 0.7 0 1.4 0.5 2.7-0.1 1-1-0.2-0.7-1-0.3-1.3-0.7-5.1-0.1-0.3-0.2-0.3-0.1-0.2 0.3-0.3 0.2-0.3 0.2-0.2-0.1-0.2-0.4-0.1-0.4-0.3-0.3-0.6-0.4-1.4-0.1-0.8-0.1-0.2-0.2-0.3-0.5-0.3-0.2-0.3-0.3-0.5-0.2-1-0.2-0.6-0.9-1.6-0.1-0.5 0.1-0.8 0.3 0 0.5 0 0.2-0.5-0.2-0.5-0.5-0.2-0.4-0.2-0.1-0.7 0.2-0.6 0.5-0.2 0.6 0 0.5-0.3 0.3-0.5 0.6-1.8 0.1-0.6-0.2-0.4-0.3-0.7 0-0.4 0.1-0.5 1-1.8 0.3-0.4 0.4-0.3 0.5-0.2 0.4 0 0.1 0 0.2 0.1 0.3 0.1 0.4-0.3 0.3-1.3 0-1.2 0.4-0.8 1.2-0.1 2.2 0.5 1.1 0.1 1.2-0.2 0.6-0.2 0.5-0.2 0.2-0.5 0.3-0.7 0.3-2 0.1-0.4 0.3 0.1 0.5 1.3 0.3 0.5 0.5 0.4 0.6 0 0.5-0.2 0.3-0.4 0-0.6-0.2-0.6-0.1-0.6 0.3-0.5 1.9 0.4 0.3 0 0.1 0.3 0 0.7 0.1 0.3 0.9 0.8 0.6 0.2 0.3-0.2 0.2-0.6 0.7-2.7 0-0.6-0.3-1.3 0.1-0.6 0.6-0.2 0.3 0.3 0.6 0.4 0.6 0.2 0-0.4-0.7-1.1 0.1-0.4 2.4 0.2 0.8 0 0.8-0.4 0.5-0.8 0.1-0.9-0.1-1.9 0.1-0.6 0.4-0.4 0.4-0.2 0.4-0.3 0.1-0.1 0.3-0.5 0.1-0.4 0.2-1.1 0.2-1.3 1.5-4.1 0.1-0.5 0-0.5-0.1-0.6-0.3-1-0.2-0.6 0.2-0.5 0.8-0.4 1.2 0.4 1.9 1.2 0.1 0.3 0.1 0.1 0.2 0.1 0.3 0.1 1.8-0.6 1-0.3 0.4-0.6 0.1-0.4-0.1-0.6-0.2-0.5-0.3-0.2-0.7-0.4 0.2-0.2-0.1-0.1-0.3-0.2-0.9-0.7 0-0.1-0.5-0.2-0.2 0-0.1-0.3-0.1-0.6-0.7-0.5-0.8-0.3-0.5-0.7-0.3-0.2-1.5-0.2-0.5-0.1-0.4-0.2-0.3-0.2-0.4-0.4-0.5-0.5-0.2-0.2-0.2-0.1-0.4 0.2-0.2-0.1-0.2-0.2-0.4 0-0.2-0.1-0.2-0.1-0.3-0.5-0.2-0.2-0.8-0.3-0.9-0.2-0.9-0.1-0.8 0.3-0.6 0.2-1.6-0.3-3.1 0.4-1.4-0.1-0.4 0-0.2 0.2-0.2 0.4-0.2 0.2-0.3-0.1-0.3-0.2-0.4 0-0.1 0.5-0.3 0.3-0.7 0.1-0.7 0-0.5-0.1-0.5-0.4-0.2-0.4-0.2-0.2-0.5 0-0.3 0.1-0.5 0.4-0.3 0-0.3 0.1-0.6 0.2-0.3 0-1.1-0.1-4.3-1.3-1.4-0.8-0.3 0-0.7 0.4-0.3 0-1.6 0-4.7 0.7-0.9 0.4-0.3 0-3.3 0.5-0.8-0.1-0.4-0.3-0.4-0.2-0.3-0.3-0.5 0-0.2 0.1-0.3 0.3-0.1 0.1-0.3 0-1.1-0.2-0.6-0.3-0.3-0.1-0.4 0-1.2 0.3-2.4-0.2-2.9 0.6-1.1 0-2.2-1-4.6-1-6.4-2.7-1.2 0-1 0.4-0.4 0-0.4-0.7-0.2-1.1-0.1-1.1 0.1-0.9 0-0.3 0.3-0.9 0.4-1.6 0-2.4 0.3-2.3-0.3-1.3-0.6-1.6-0.6-2.9 0.1-0.8 1.3-2.2 0.1-0.8-0.2-0.2-0.5 0-0.5-0.4 0.5-0.2 0.5-0.3 0-0.4-0.3-0.5-0.1-0.1-0.1 0 0 0.1-0.2 0.2-0.2 0-0.2 0-0.2-0.2-0.2-0.5-0.6-0.8-0.1-0.3-0.1-0.5 0.1-0.4-0.1-0.4-0.3-0.6-0.3-0.4-0.1-0.5-0.2-0.5-0.3-0.3-0.3 0-0.6 0-0.2 0-0.3-0.2-0.1 0 0.1-0.2 0-0.7 0-0.6-0.2-0.5-0.5-0.1-0.6 0.2-0.2 0.3 0 0.9 0.2 0.4 0 0.2-0.6-0.2-0.2 0-0.2 0.1-0.2 0.2-0.3 0.6 0.2 0.4 0.5 0.2 0.5 0.1-0.3 0.2-0.5 0.2-0.3 0.3 0 0.4 0.3 0.1 0.4-0.1 0.4 0.1 0.2 0.4-0.2 0.5-1.3 1.1-0.2 0.9 0 0.4-0.1 0.4-0.2 0.3-0.4 0.1-0.3-0.2-0.2-0.3-0.5-0.7-0.1-0.1-0.1-0.1-0.2 0-1.6 0.2-0.1 0-0.2 0-0.1 0-0.1 0-0.5-0.7-0.3 0-0.4 0.3-0.4 0.3-0.5-0.1-0.6-0.2-0.5-0.4-0.7-0.8-1.1-0.5-0.2-0.3-0.2-0.6-0.3-0.4-0.4-0.3-1.9-0.8-0.4-0.5-0.2-0.5-0.3-2-0.2-0.5-0.6-1-0.1-0.5-0.1-0.9 0.4 0 0.4 0.2 0.2-0.2 0-0.4-0.2-0.2-0.7-0.2-0.5-0.3 0-0.2 0.1-0.3-0.1-0.3-0.3-0.3-0.6-0.1-0.3-0.2-0.3-0.2-0.5-0.5-0.3-0.2-0.4-0.3-0.3-0.3-0.3-0.1-0.5 0.3-0.3 0.3-0.4 0.6-0.2 0.6 0 0.5 0.6 0.7 0.8 0.3 0.7 0.3 0.3 1 0.2 0.2 0.2 0.1 0.3-0.1 0.3-0.1-0.1 0.7 0.2 0.2 0.3 0 0.3 0.1 0.2 0.6-0.6 0.4-1.3 0.3-0.8-0.3-1.3-1.2-0.8-0.2-0.6 0.4-0.4 1.1-0.5 0.2-0.5-0.3-0.2-0.4-0.2-0.6-0.2-0.5-1.1-0.4-2.5 0.9-0.5-0.3 0.2-0.3 1.1-0.5 0.4-0.3 0.3-0.6-0.1-0.4-0.4-0.4-0.7-0.3-0.1-0.2 0-0.6-0.2-0.1-0.3-0.1-0.1-0.2 0.1-0.3 0.1-0.3-0.6-0.1-0.4-0.2-0.3-0.2-0.2-0.3-0.2-0.3-0.2-0.4-0.3-0.1-0.6 0-0.3 0-0.6-0.3-0.6-0.4-0.2-0.3-0.4-0.3-0.3-0.3-0.4-0.5-0.5-0.2-1-0.3-0.4-0.4-0.1-0.7 0.1-0.7-0.1-0.6-0.2-0.1-0.4 0.3-0.4 0.6-0.2 0.5-0.6 2.1-0.4 0.6-0.1 0.5 0 0.5 0.2 0.4 0.4 0.2 0.1-0.2 0.1-0.8 0.1-0.2 0.2 0 0.7 0.3 1.7 0.3 0.8 0.4 0.4 0.7 0.6 1.7 0 0.9-0.6-0.1-0.2 0-0.3 0.1-0.3-0.1-0.2 0-0.3-0.2-0.2 0.1-0.1 0.3-0.2 0.3-1.4 0.8-0.4 0.4-0.5 0.7-0.1 0.4 0.1 1.2-0.3 0.5-0.5 0.3-1.7 0.6-0.6 0.1-0.3 0.2-0.2 0.2-0.2 0.2-0.2 0.2-1 0.6-0.2 0.4-0.4 1.1 0 0.2-0.1 0.1 0.1 0.4 0.1 0.1 0.1 0.1 0.2 0.2 0 0.4-0.2 0.6-0.7 0.6-0.6 1-0.5 1.9-0.2 0.2-0.1 0.1-0.1 0.2 0.2 1.4 0.2 0.5 0 0.3 0 0.3 0.5 0.5 0.1 0.3 0.2 0.6 0.4 0.4 0.5-0.1 0.6-0.2 0.5-0.3 1.3-0.4 0.9 0.5 1.8 2.1 2.1 1.4 0.7 0.9 0.2 2 0.4 0.4 1.1 0.5 0.3 0.7 0.8 0.6 0.2 0.4 0.3 0.3 0.6 0.2 1.2 0 0.6 0.3 0.9 0.6 0.6 0.1 0.4-0.1 0.2-0.2 0.3-0.3 0.3-0.3 0.2 0 0.3 0 0.3 0 0.2-0.1 0-0.6 0.9 0.4 0.3 0.2 0.3 0.4 0.4 0.4 0.3 0.4 0 0.7-0.5 1.1 0 0.2 0.3 0.2 0.1 0.3 0 0.3 0.1 0.4 0.7 0.8 0.2 0.2 0.3 0.1 0.6 0 0.2 0.2 0.5 0.5 0.7 0.1 1.4-0.1 0.2 0.3 0.1 0.3-0.1 0.3-0.2 0.3-1.1 0.8-0.2 0.4-0.1 0.4 0.1 0.4-0.1 0.3-0.5 0.1 0.4 0.7-0.7 0-2-0.7-0.2-0.1-0.2-0.1-0.2 0.1-0.2 0.2-0.3 0.7-0.2 0.2-1.8-0.2-1.7-0.7-0.9-0.2-1 0-0.3 0.1-0.3 0.4-0.3 0.2-0.3 0-0.1 0-0.2 0-0.7-0.3-0.9-0.3-0.5-0.1-1 0.1-0.3 0.6 0.1 1.8-0.3 2.1-0.3 0.9-0.7 0.9-0.1 0.8-0.3 0.8-1 1.3-0.6 0.9-0.2 0.3-0.5-0.1-1.2-0.3-0.4 0 0-0.6-0.3-0.7-0.4-0.5-0.5-0.3-0.5-0.1-0.6 0.2-1.4 0.8 0 0.1 0.1 0.2 0.2 0.3 0.4 1.1 0 0.6-0.2 0.4-0.4 0.4-0.3 0.6-0.4-0.1-0.2 0.3-0.1 0.4 0 0.4-0.2 0.3-0.4 0-0.3 0.2-0.1 1.4-0.4 0.5-0.3 0.6-0.1 1 0.5 0.2 0.5 0.2 0.3 0.6 0.4 0.4 0.1 0.2 0 1.7 0 0.2 0.2 0.1 0.2 0.3 0.3 0.5 0 0.2 0.9 0.2 7.6 4 2.2 1.7 0.6 0.2 1.9 0.1 1.5 0.5 0.6-0.1 0.4-0.7 0.3-0.7 0.7 0.1 0.9 0.6 0.7 0.9 0.2 1.3 0 0.1 0.1 0.6 0.1 0.1-0.1 0.3-0.4 0.5-0.1 0.2-0.4 0.3-0.7 0.2-0.3 0.3-0.1 0.4 0 0.3 0.1 0.6 0 0.4-0.2 0.7 0 0.3 0.1 0.3 0.5 0.5 0.1 0.4 0.7 0.2 0 0.3-0.3 0.4-0.3 0.6 0.2 0.4 0.1 0.6 0.1 0.7-0.1 0.6-0.3 0.3-1.1 1.1-0.4 0.3-0.5 0.2-0.6-0.1-0.6 0-0.5 0.4 0 0.3 0 0.3 0 0.3 0 0.3-0.1 0.3-0.4 0.7-0.2 0.4 0 0.3 0.2 0.4 0.1 0.3-0.6 2.9 0 0.4 0.3 0.1 0.3 0.1 0.1 0.1 0 0.4-0.1 0.2 0 0.2 0.3 0.4 0.3 0.1 0.5-0.1 0.3 0.1 0.4 0.4 0.7 1.3 0.5 0.5 0.8 0.6 0.3 0.1 0.5 0.9 0.3-0.1 0.4-0.6 0.4-0.3 0.3 0.3 0 0.7-1.4 3.8-0.7 1.1-0.3 0.6 0 0.7 0.3 0.6 0.4 0.4 1.9 0.6 0.3 0 0.2-0.1 0.2-0.2 0.3-0.1 0.4-0.1 0.5 0.1 2 0.7 0.3 0.1 0.2 0.1 0.8 0 0.2 0.1 0 0.3-0.2 0.3-0.2 0.3-0.8 0.7-1.6 1.6-0.4 0.8-0.1 1.7-0.2 0.9-0.1 0.6 0.2 0.3 0.5 0.7 0.3 0.5 0.6 1.5 0.4 0.4 0.8 0.3 0.3 0.3 0.1 0.4-0.1 0.7-0.1 0.6-0.1 0.4-0.3 0.5-0.3 0.4-0.2 0.4 0 0.6 0.4 0.9 0.1 0.4 0.1 0.7 0.4 0.7 0.2 0.8 0.2 0.8-0.2 0.7-0.7 0.5 0.9 0.3 0.4 0.3 0.3 1.2 0.5 1.2 0.1 0.8 0 0.2-0.3 0.4-0.1 0.3 0 0.3 0.4 1.7 0.1 0.4 0.5 0.8-0.4 0.3 0.3 0.7 1.2 1.7 0.3 0.5 0.2 0.6 0 0.8-0.5 0.6-0.5-0.2 0.1 0.4 0 0.4-0.2 0.3-0.1 0.5 0.1 0.5 0.4 0.8 0.1 0.4 0.2 2-0.1 0.9-0.7 0.5-0.4-0.2-0.3 0-0.1 0.3 0 0.5-0.5-0.3-0.9-0.6-0.5-0.2-0.2-0.3-0.1-0.6-0.1-0.6-0.5 0-0.2 0.6 0.1 0.7 0.4 0.6 0.4 0.3 0.4 0.1 0.5 0.3 0.8 0.6 0.6 1 0.4 2.6 0.4 1.2 0.1 0.1 0.6 0.6 0.4 1 0.1 0.1 0.1 1.3-0.2 0.5-0.5 0.3-0.3-0.1-0.3-0.1-0.1-0.2-0.1-0.2-0.1-0.2-0.2 0.3-0.1 0.4-0.1 0.1-0.6 0.1-0.7-0.4-1.2-0.8-1.1-0.2-0.1-0.1-0.2-0.3-0.1-0.3-0.3-2.4-0.2-0.6-0.2 0-0.1 0.6-0.4 1-0.1 0.4 0.2 0.6 0.5 1-0.1 0.5-0.4 0.4-0.6 0.2-0.5-0.2-0.2-0.5 0.4-0.4 0.2-0.2 0-0.2-0.1-0.3-0.2-0.5-0.1 0.6-0.2 0.3-0.2 0.1-0.2 0.1-0.2 0.1 0 0.3-0.1 0.3 0.2 0.6 0.3 0.5 0.1 0.4-0.2 0.5-0.8 0.4-1-0.1-0.6-0.6 0.5-0.9-1-2.2-0.1-0.6 0.5-3.6-0.2-0.4-0.1-0.5 0.6-1.8 0.1-1.7 0.2-0.4 0.3-0.4 0.4-0.3 0.3-0.4 0.1-0.5-0.2-0.7-1.1-0.6-0.2-0.5 0.1-0.4 0.5-0.5 0.9-0.9-0.5 0-0.5 0.3-0.4 0.4-0.3 0.4-0.2 0.4-0.1 0.5 0.2 0.4 0.5 0.2 0.4 0.3-0.2 0.8-0.6 1.2-0.1 0.4-0.3 0.5-0.3 0.3-0.4-0.3-0.3 0.2-0.4 0-0.3-0.2-0.1-0.3 0-0.5 0.1-0.3 0.4-0.6 0.3-0.6-0.1-0.4-0.1-0.4-0.1-1-0.2-0.6 0-0.4 0.6-1.3 0.5-0.4 0.2-0.7-0.1-0.6-0.6 0 0.1 0.2-0.2 0.5-0.2 0.4-0.1 0 0 0.2-0.3 0.6-0.1 0.6-0.3 0.3 0 0.2-0.1 0.2 0.1 0.7 0.1 0.6 0.1 0.4-0.2 0.6-0.5 0.7-0.1 0.5 0 1.4 0 0.5-1 2.5 0 0.6 0 1.9 0 0.1 0.5-0.1 0.6-0.3 0.6 0.1 0.3 0.8-0.1 0.6-0.2 0.7-0.3 0.4-0.4-0.3-0.2 0 0.2 2.2-0.1 0.8-0.5-0.4 0 1.6-0.2 0.5-0.4 0-0.4-0.2-0.2-0.4-0.2 0.4 0 0.3 0.1 0.3 0.3 0.3-0.9 0.3-0.6-0.3-0.2-0.7 0.3-0.8 0.2-0.2 0.1-0.2 0.2-0.2 0.1-0.4 0-0.4 0-0.4 0.2-0.3 0.2-0.3-0.6-1.7-0.2-0.9 0.3-0.7 0.5-1 0-0.9-0.4-0.8-0.6-0.8 0.5-1.3 0-0.6-0.5-0.5 0.1 0.6-0.2 0.4-0.4 0.3-0.2 0.6 0.1 0.6 0.5 1.1 0.1 0.6-0.1 0.4-0.2 0.1-0.2-0.1-0.2 0.1-0.1 0.8-0.3 0.6-0.2 0.5 0 0.6 0.1 0.5 0.4 0.9 0.1 0.5-0.1 0.6-0.4 0.6-0.4 0.2-0.5 0.2-0.4 0.4-0.5-0.1-0.3-0.9 0-1.3 0.3-0.8-0.4 0-0.5 0.3-0.2 0.1-0.3-0.1-0.1-0.3-0.2-0.4-0.1-0.3-0.2 0.3 0 0.3 0.1 0.3 0.5 0.6 0.1 0.3 0 0.4-0.1 0.4-0.3 0.6-0.4 0.4-0.3-0.2-0.2-0.7-0.1-3.5-0.1-0.6-0.2-0.5-0.5-0.6-0.3 0 0 0.8 0.9 3 0.1 0.8-0.1 0.3-0.3 0.7 0 0.4 0.1 0.2 0.4 0.4 0.1 0.2 0 0.3 0 0.1-0.2 0.1-0.3 0.2-0.2 0.1-0.4 0.1-0.4 0-0.1-0.2-0.1-0.6-0.2-0.7-0.4-0.4-0.5 0.3-0.5-1.2-0.3-0.7 0-0.6 0.3-0.6 0.4-0.7 0.2-0.7-0.3-0.8 0.2-0.5-0.1-0.5-1.5-2.6 0.1-0.3 0.1-0.3-0.4-1.6 0.1-0.6 0.2-0.4 0.2-0.4 1.3-1.6 0.4-0.7-0.3-0.7-0.2-1.7-0.2-0.5-0.9-0.5-1.4-0.5-1.1-0.5-0.1-0.7-0.5 0.3-0.5 0.1-0.5 0-0.5-0.4-0.7-0.8-0.4-0.6-0.1-0.5-0.1-0.6-0.4-1.2-0.1-0.5 0-0.7-0.2-0.6-0.4-0.3-0.6 0 0 0.2 0.5 0.6 0.4 1.3 0.3 2.5 0.2 0.5 0.3 0.5 0.8 0.9 0.5 0.4 0.5 0.1 0.9 0.1 1.1 0.2 1.1 0.4 0.8 0.7 0.4 1.2-0.3 0.9-0.7 0.9-0.8 0.8-0.8 0.5-1 0-0.2 0.1 0.1 0.3 0.1 0.3 0 0.4-0.1 0.3-0.4 0.5-1.4 3.3-0.4 0.5-0.4 0.3-0.3 0.1-1.1 0.8-0.2 0.1-0.1 0-0.1 0.2 0 0.3-0.1 0.2-0.7 0.7-1 0.7-2.3 1.2-1.5 1.1-0.6 0.2-1.2-0.1-0.6 0.1-4.2 1.1-0.2 0.1-1.9 0.8-1.8 0.7-1.4 0.3-1.1-0.3-0.3 0.2-0.3 0.1-0.7 0-0.3 0-2.6 1.4-1.4 1-4.2 4.7-1.5 2.2-0.9 2.5 0.2 2.9 3.2 7.3 0.4 1.3-0.4 0.8-0.5-0.2-0.6 0-1.1 0.2 0.3 0.5 0.7 0.3 1.3 0.1 0.7-0.1 0.2 0.1 0.2 0.4 0.2 0.3 0 0.3-0.1 0.3-0.3 0.2-0.4-0.2-0.4-0.1-0.4 0.1-0.2 0.4 0.4 0 0.2 0.1 0.2 0.1 0.2 0.2 0.2 0 0.2 0 0.1 0.1 0.1 0.3 0.7-0.3 0.4-0.3 0.3-0.2-0.4 0.5-0.7 0.7-0.8 0.6-1.6 0.5-4.3 3.5-0.7 0.7-0.5 0.8-0.3 0.9-0.1 2 0.6-0.3 0.5-0.5 0.4-0.2 0.5 0.3 0-0.4 0-0.3 0.2-0.7 0.4 0.7-0.4 1.1-0.8 1.1-0.5 0.5-0.3 0.1-0.6 0.3-0.5 0.3-0.3 0.3 0.3 0.3 0.5-0.2 1-0.7-1.1 0.8-2.6 1.6-1.3 0.6-1.4 0.3-0.7 0.3-0.4 0.4-0.2 0.3-0.3 1.4-0.3 0.6 0 0.5-1.6 1.8-0.6 0.5 0.1 0.3 0.2 0.2 0.3 0.2 0.4 0-0.9 0.5-1.4-0.8-2.1-1.9-1.3 0.1-0.7 0-0.2-0.4-0.1-0.1-0.7-0.6-0.1-0.4-0.2-0.6-0.1-0.3-0.2 0-0.2 0.7 0.3 0.9 0.1 0.3 0.2 0.3 0.6 0.3 0.8 0.6 0.5 0.2 1.1 0.3 0.1 0 0.3 0 0.2 0 0.1 0.2 0 0.1 0 0.2 0.1 0.1 0.2 0.3 0.1 0.2 0.2 0.1 0.4 0.1 0.4 0.2 0.4 0.2 0.5 0.2-3 1.7-4.6 1.7-0.6 0.4-0.4 0-0.3-0.3-0.3-0.1-0.3 0.1-0.2 0.2-0.2 0.1-0.5 0.1-3.7 1.1-1.2 0.2-1.1 0.7-0.6 0.3-0.3 0-1 0-0.3 0-0.5 0.3-0.9 0.2-1.8 0.9 0.1-0.1 0.3-0.1 0-0.2-0.7 0.1-1.9 1.2-2 0.7-0.6 0.1-0.2-0.1-0.1-0.2 0-0.5-0.1-0.1-0.2 0.1-0.2 0-0.1-0.2 0-0.2 0.1 0 0.2 0 0.1-0.1 0.3-0.3 0.8-0.2 1.3-0.5 0.1 0.2-0.1 0.1-0.1 0.2-0.1 0.4 1.2-0.9 0.5-0.2-0.2-0.2-0.1-0.1 0-0.3 0.2-0.3-0.1-0.5 0.1-2.6-0.4-0.2-1.2-0.2-1.2-0.4-0.3-0.1-0.7 0.2-0.7 0.6-1.2 1.2-1.6 1.4-0.5 0-0.4 0.1-0.3 0.2-0.3 0.1-0.6 0.6-0.8 0.8-0.5 0.9 0.1 0.7-0.5 0.4-0.4 1.1-0.3 0.3-0.5 0.4-0.3 0.5 0 0.5 0.4 0.4 0 0.2-0.4 0.1-0.5 0.3-0.4 0.3-0.1 0.3 0 0.4 0.1 0.3 0.2 0 0.3-0.4 0.1 0.3 0.1 0.3-0.1 0.4-0.1 0.3 0.3-0.1 0.2-0.2 0.1-0.2 0.2-0.2 0.3-0.1 0.3-0.1 0.2 0.1 0.2-0.1 0.5-0.3-0.1-0.4-0.1-0.3 0.1-0.5 0.2 0.2 0.2 0 0.3-0.1 0.3-0.1-0.9-0.5-0.3-0.1 0-0.2 0.6 0 0.3-0.3 0.2-0.3 0.5-0.3 0-0.2-0.2 0-0.1-0.1-0.1-0.2 0-0.2 0-0.1 0.4-0.5 0-0.1 0.4 0 1.4 0.4 1.2-1.1 0.4 0 0.3 0.1 0.2-0.1 0.3-0.4 0.2 0.4 0.1 0.2 0.1 0.3 0 0.5-0.1 0-0.4 0.2-0.1 0.1-0.1 0.1-0.1 0.4 0 0.1-0.3 0.2-0.5 0.3-0.4 0.1-0.2-0.3-0.1-0.4-0.3 0-0.2 0.3 0 0.5-0.2-0.1-0.3-0.1-0.1 0 0.4 0.4 0.1 0.2-0.1 0.2 0.8-0.1 7.1-3.5-1 0.6-2.2 1.2-2.5 1.2-1.2 0.6-1.5 1.2-1.3 0.5-1.8 1.4-3.2 3.1-2.1 1.5-3.6 3.2-2.4 3.1-0.4 0.1-0.1 0-0.3-0.2-0.4-0.5-0.3-0.3-0.2 0.3 0 0.3-0.3 0.5-0.1 0.4 0.1 0.1 0.4 0.4 0.1 0.3 0.5-0.7 0.1-0.1 0.2 0 0.2 0 0.2 0.1-0.1 0.2-0.8 1.1-0.3 0.8-1.2 1.6-0.6 1-0.4 0.4-1 0.5-2.4 3.7-0.2 0.6-2.7 2.9-0.3 0.6-0.1 0.5-0.3 0.3-1.5 1-0.7 1-0.4 0.5-0.6 0.2-0.2 0.1-0.5 0.4-0.2 0.2-0.3 0-0.6 0-0.1 0-0.3 0.4 0.3 0.3 0.7 0 0.7-0.4 0.9-0.7 0.7-0.5-0.6 0.5-1.2 1-1.4 1.4-0.3 0.4-1.2 0.9-0.4 0.5-0.7 0.5-0.2 0.3-0.2 0.3 0 0.3-0.2 0.4-0.2 0.2-0.3 1.1-1.1 0.9-8.8 4-4.6 2.9-1 0.8-0.1 0.3-0.4 0.8-0.2 0.2 0 0.1-0.5 0.5-0.2 0.1-0.2 0.3-1.2 0.8-0.4 0.4-0.2 0 0-0.1-0.4-0.5 0 0.5 0.1 0.6 0 0.6-0.7 0.4-0.1 0.5-0.3 1-0.4 0.7-1.8 2-0.6 0.4-0.2 0.1-0.3 0.3-0.1 0-0.2 0-0.1-0.1-0.1-0.1-0.1 0-0.1-0.2-0.1-0.3-0.2-0.1-0.6 0-0.2 0.3 0.2 0.4 0.7 0.2 0.6 0.3 0.2 0.2 0 0.2-0.3 0.2-0.6 0.3-0.4 0.3-0.2 0.1-1 0 0.6 0.9 0.1 0.4-0.4 0.2-0.4 0.1-0.4 0.2-0.7 0.5-2.4 0.9-1.1 0.7-0.9 0.5-0.7 0.6-0.6 0.6-0.2 0.1-0.5 0.1-0.2 0.1-1.4 1-0.2 0-0.2-0.4-0.4 0.3-0.4 0.3-0.5 0.3-1.2 0.3-1.1 0.7-1.2 0.4-7.1 4.3-0.7 0.7-0.4 0.9-0.4 0.4-1 0.4-0.5 0.5-0.8 1.1-0.9 0.9-0.4 0.4-0.2 1-1.1 2.1-0.1 0.7 0.1 0.7 0.4 0.5 0.9 0.3 0.1 0.1 0.2 0.1 0.1 0.1 0.2 0 0.2-0.1 0.2 0 0-0.1 0.5 0.3 0.3-0.4 0-1-0.1-1-0.3-1 0.4 0.6 0.2 0.8 0 1.5-0.1 1.5-0.4 1.5-0.1 1.7-0.3 0.8-0.7 1.6 0 0.2 0 0.2 0 0.2-0.3 0-0.1-0.1-0.2-0.5-0.2 0-0.1 0.2 0.1 0.4 0.3 0.5 0.3 0.3-1.4 0.5-1.6 1.6-0.4 0.2-0.5 0.1-1.4 0.7-1 0.7-0.6 0.4-0.9-0.2-0.4 0.4-0.5 0.5-0.4 0.3-0.3 0.1-0.4-0.1-0.4 0.1-0.2 0.5-0.2 0-1.2 0.1-0.6 0.2-0.5 0.1-2.3 1.2-0.6 0.4-1.3 0.4-0.2 0-0.4-0.1-0.6-0.4-0.6-0.3-0.6 0.1-0.4-0.2-1.1-0.1-0.5-0.1 0.2-0.3-0.1-0.3-0.4-0.2-0.5 0 0.3 0.6-0.4 0.1-1.2-0.3-0.6 0-1.7 0.6 0.2-0.3 0.1-0.3 0.1-0.2-0.2-0.2-0.3-0.3-0.4 0-0.3 0.2-0.4 0.3-0.4-0.2-0.4 0-0.4 0.1-0.5 0.1-1.6 1-0.4 0.4 0.1 0.3 0.2 0.3 0.1 0.4-0.2 0.5-0.7 0.8-0.3 1.4-0.9 1.8-0.3 1.6-0.5 0.9-0.2 0.5 0 1.7-0.1 0.4-0.5 0.1-1.3 1.4-1.3 0.8-0.5 0.4-0.8 1 0 0.4 0.1 0.3 0.2 0.2 0.1 0.2 0.2 0.6 0 0.2-0.2 0.2-0.3 0-0.2-0.2-0.2-0.2-0.3-0.3-0.9-0.8-0.2-0.1-0.6-0.2-0.3-0.4-0.2-0.6 0-0.6 0.2-2.3 0-0.5-0.1-0.5-0.3-0.9-0.1 0.3 0.1 0.3-0.2 0.2-0.1-0.2-0.1 0-0.2-0.2 0.4 1.2 0.2 1.2-0.2 1.3-1 2.2-0.7 2.2-0.3 0.7-0.4 0.3 0-2.7-0.1-1.1-0.8-1.3-0.5-0.3-0.7-0.1-1.3-0.1-0.2-0.1-0.2-0.1-0.2 0-0.2 0.2-0.1 0.2 0.1 0.2-1.3 0-0.5 0.2-0.5 0.3-0.4 0.1-0.3-0.4-0.2 0-0.3 0.4-0.5 0.3-1 0.6-0.2 0.1-0.2 0-0.2 0-0.3 0.2-0.4 0.4-0.3 0.2-1.2 0.4-1 0.6-2.3 2.3-0.5 0.8-1.3 3.2-0.1 0.6-0.4 0.9-0.1 0.4 0.4 0.2-0.4 0.5-0.4 0.9-0.4 0.4-0.9 0.9-0.4 0.6-0.2 0.5-0.8 2 0 0.3-0.3 2.8-0.8 3.3 0 2.4 0.2 1.2 0.4 0.9-0.1 0.7 1 4.7 0.1 1.5 0 0.3 0.2 0.2 0.3 0.3 0.7 0.4 0.3 0.4 0.2 1 0.2 0.3 0.1 0.4-0.1 0.3-0.1 0.3-0.3 0.1-0.6 0.3 0.3 0.2 0.3 0 0.7-0.2 0.2 0 0.1 0.2 0 0.2-0.1 0.1 0 0.2-0.1 0.7-0.4 1.7 0.1 2.4-0.1 1.3-0.4 0.6-0.7 1.7-0.3 0.4-0.8 0-0.3 0.1-0.5 0.6 0 0.1-0.5 0.2-0.2 0.5 0.1 0.3 0.7-0.2 0.5-0.5 0.4-0.5 0.4-0.2 0.5 0.4-0.4 1 0.1 1.4 0.7 3.6 0.4 1.2 2.1 4.5 0.4 1.1-0.1 1.4-0.6 1-0.2 0.7 0.2 0.6 0.3 0.5 0.7 2.1 0.8 1.9 0.6 1.4 0.1 1.2-0.2 0-0.8-2.2-0.9-2.3-1.4-1.6-0.4-1-0.9-1.2-0.4-0.3 0 2.4-0.1 0.9-0.5-0.3-0.1-0.3 0.1-0.8-0.1-0.3-0.2-0.2-0.2-0.2-0.2-0.2-0.1 0.7 0 0.4-0.5 0.3-0.6 0.9 0.1 0.7 0.3 0.6 1 1.1 0.3 0.8 0.2 0.3 0.4 0.1 0.6 0.1 0.6 0.1 1.3 0.1 0.2 0.1 0.3 0.2 0.2 0.2 0.3 0.1 0.2 0 0.2 0-0.1 0.5 0.3 0.3 0.5 0.3 0.4 0.5 0.2-0.3 0-0.1 0.4-0.1 0.2 0.5 0.3 1.1 0.1 0.8 0 0.9-0.3 1.5-0.1 0.8-0.3-0.1-0.1-0.1 0 0.6-0.2 0.4 0.2 0 0.4-0.1 0 0.6-0.2 0.6-0.4 0.5-0.2 0.5 0.1 0.3 0.1 0.9-0.1 0.3-0.6 0.6-0.1 0.2-0.1 1.2-0.4 2.1-0.1 3.7-0.4 2.2-0.5 1.5-0.1 1.1-0.2 0.4-0.6 0.8-0.2 0.6-0.3 1.4 0 0.6-0.2 0.4-0.6 1.7-1.1 1.8-0.1 0.4-0.6 1.2-0.2 0.3-0.7 0.4-0.1 0.1-0.1 0.1-0.9 1.6-0.6 0.6-1.6 0.8-0.2 0.4 0.3 0.1 0.6-0.3 0.9-0.5-1.7 2.6-0.4 0.4-0.2 0.3-0.9 1.8-0.8 1-0.2 0.4 0 0.3 0 1-0.1 0.2-0.2 0.4-0.1 0.1-0.1 0.6-0.7 1.7-0.5 2.4-0.3 0.3-0.2 0.5-0.6 2.9-0.1 1.1-0.2 1.1-0.1 0.6 0.2 1.2 0.6 2.2 0.2 1.1 0.2 0 0.1-0.2 0.1-0.3-0.1-0.1-0.1-0.2 0.5 0.1 0.2 0.2 0.1 1.6 0 0.2-0.3 0.1-0.8 0-0.2 0-0.2 0-0.3 0-0.3 0.2-0.2 0.2-1.7 1.6-0.2 0.5 0.2 0 0.4-0.2 1.3-1 0.3-0.1 0.2-0.6 0.5-0.1 0.6 0.1 0.8 0.4 0.2 0 0.1 0.1 0 2.3 0.6 3.1-0.1 4.5-0.1 0.8-0.2 0.9 0.2 4.2 0.1 1.6 0 4.8 0.2 1.2 0.2 5.1-0.3 2.6-0.1 0.3-0.5 0.1-0.6 0.2-0.5 0.1-0.5-0.2 0-0.6-0.6-0.4-3.7-0.6-0.3 0.2-0.2 0.4 0.5 0 0.4 0 0.5 0.1 0.4 0.1 0.2 0.1 0.3 0.2 0.3 0.1 0.8 0 0.8 0.2 0.4 0.3 0 0.3-0.4 0.1-5.2-1.1-0.5 0-0.2-0.1-0.1-0.1 0-0.3 0.1-0.1 0.3 0 0.2 0 0.9-0.4 0.1-0.2-0.6-0.2-0.6 0.2-1.1-0.1 0.1 0.3 0 0.2-0.6 0.2-1.5 0.2-0.7 0-0.7-0.3-0.4-0.2-0.4 0.2-0.6 0.5-1.7 1-0.5 0.5-0.5 0.5 0 0.3 0 0.4 0 0.4-0.3 0.1-0.3 0.1-0.3 0.3-0.1 0.4 0 0.4 0.2 2 0.3 0.9 0.7 0.6-1.1 0.7-1.1 1.2-1.7 2.4-0.6 1.2-0.6 0.6 0 0.1-0.2 0.7-0.5 0.6-1.1 1-1.7 2.4-0.1 0.2 0.1 0.3-0.1 0.3-0.2 0.2-0.3 0.3-0.1 0.1-0.3 0.5-0.3 0.5-0.2 0.7-0.1 1.4-0.4 1.2 0.1 0.6 0.5 1.1 0.8 0.9 2.3 2.1 1 0.4 1.2 0.3 4 0 0.6-0.2 0.7-0.5 0.6-0.3 0.6 0.2 0.2 0.3-0.1 0.2-0.2 0.3-0.1 0.3 0.1 0.3 0.1 0.2 0.2 0.2 0 0.2 0.2 0.2 0.4 0.4 2.1 1.5 0.4 0.5-0.4 0.3-0.4-0.3-1.9-1.6-2-1-1.7-0.3-0.5-0.2-0.4 0-0.5-0.2-0.6 0-1 0.5-0.9 0-0.3 0.1-0.8-0.4-1-0.2-1.1-0.2-0.9 0.1-0.3 0.2-0.5 0.5-0.3 0-0.3 0-0.2 0-0.2 0-1 0.1-0.5 0.1-0.8 0.5-1.2 0.3-0.4 0.3-0.3 0.2-0.3 0.3-0.4 0.1-1.5 0.1-0.4 0.2-0.2 0.5-0.2 0.3-0.4 0.2-0.5 0.1-3.8 0.5-1.1 0.2-1.1 0.5-1 0.7-4 3.2-0.6 0.8-1 1.9-0.2 0.4-0.1 2-0.1 0.7-0.2 0.5 0.4-0.3 0.3-0.1 0.4-0.1 0.3-0.5 0.1 0.6-0.3 0.4-0.5 0.2-0.5 0.4-0.2 0.2-0.3 0.8-0.4 0.5-0.1 0.4 0.2 0.3-0.8 0 0.6 0.9 0.2 1-0.4 3.1-0.2 0.3-0.2 0.3-0.8 0.8-0.2 0.3-0.5 1.7-0.2 0.3-0.5 0-1.2 0.5-5.6 3.4-0.4 0.4-0.7 1-0.5 0.2-3.1 0.6-1.4 0.5-1 0.7 0.1 0.9-1.6 0.2-1.8-0.3-3.9-1.2-0.2-0.1-0.4-0.5-0.2-0.2-0.7-0.4-0.7-0.2-0.4-0.3-2.8-2.5-0.5-0.4-3.4-2.5-0.9-1-2.4-3.5-1.6-1.4-0.4-0.9-2.1-2.5-0.3-0.7-1-0.9-1-1.8-0.5-0.5-2.5-2.1-0.4-0.7 0.1-0.3 0.3-0.1 0.4 0.6 0.6-0.1 0.5-0.3 0.3-0.2-0.4 0-0.4 0.2-0.3 0-0.3-0.4 0.1-0.3 0.2-0.4 0.3-0.3 0.3-0.2 1.6 0.2 0.1-0.1-0.3-0.2-0.3-0.2-0.2-0.1 0.2-0.1 0.5-0.1 0.3-0.2 0-0.2-0.3-0.1-0.4 0.1-0.4 0.2-0.1 0.1-0.2 0.3-0.4-0.1-0.7-0.3-0.2 0.2-0.3 0.9-0.2 0.3-0.2-0.4 0.2-0.2 0.1-0.1 0.1-0.5-0.5 0.3-0.3 0.3-0.1 0.5 0.1 0.5-0.3-0.2-0.2-0.4-0.1-0.5 0-0.4-0.1-0.3-0.4-0.6-0.3-1-0.8-1.8 0-0.6 0.1 0.1 0 0.1 0.1 0.2 0 0.2 0.2 0 0-0.4 0.2-1.2-0.3 0.2 0 0.1-0.1 0.3-0.2 0-0.5-1.8-0.5-1-0.4 0 0.1 0.3 0.9 2.2 0 0.5-0.2 0-2.3-5.3-1.5-5-0.6-4.1 0.2-0.8-0.6-4.4-0.7-2.2-0.2-0.3-0.2-1.4-0.1-0.4 0.5-0.3 0.5 0.4 0.4 0.6 0.2 0.6-0.1 0.2-0.7-0.3-0.2 0.1 0.1 0.4 0 0.3 0.2 0.3 0.3 0.2 0.1-0.2 0.1-0.4 0.2 0.4-0.1 0.4-0.1 0.4-0.1 0.2 0.3 0 0.3-0.2 0.1-0.2-0.2-0.4 0.3-0.3 0.2 0.5 0.7 4.8 0.2 0 0.1-0.8-0.3-1.8 0.2-0.8-0.6-0.9-0.1-0.5 0.3-0.2 0.2 0.4 0.4 0.8 0.2 0.4 0.1 0.3-0.1 0.7 0 0.4 0.3 1.5 0.2 0.6 0.5 0.5 0 0.5-0.2 0.4-0.2 0.3-0.2 0.4-0.6 2.7 0.2 0.4 0.5 0.2 1.4 0.2 0.3 0 0.7 0.3 0.5-0.2 0.8-0.9-0.6-0.3-0.5-0.4-0.5-0.2-0.6 0.3-0.3-0.2-0.3-0.2 0.4-0.8 0-0.6-0.2-0.6 0-1.4-0.1-0.5-0.2-0.3-0.3 0.1 0-0.3 0-0.5 0-0.4-0.1-0.3-0.2-0.5-0.1-0.3 0.1-0.5 0.2-0.3 0.2-0.3-0.1-0.6-0.2-0.6-0.7-1.1-0.1-0.5-1.1-1.1-0.3-0.4-0.5 0.5-0.5-0.8-0.2-1.1 0.1-0.6-0.5-0.4-0.3-1.6-0.3 0-0.2-0.2-0.2-0.2-0.2-0.6-0.2 0.6 0.2 0.5 0.3 0.5 0.1 0.5 0.1 1.2 0.1 0.6 0.2 0.5-0.4-0.4-0.4-0.7-0.9-2.4-0.1-0.4 0.1-0.5 0-0.2-0.2-0.4 0-0.4 1.4-0.8 0.3-0.4 0.1-0.2 0.1-0.2 0-0.2-0.1-0.2-0.1 0-0.2 0.1-0.2 0-0.2-0.5-0.2-0.3-0.4-0.2 0.4 1 0 0.6-0.2 0.4-0.5 0.3-0.4-0.1-0.3-0.4-0.2-0.4-0.4-1.2-0.5-2.4-0.5-1.2-1-1.5-0.2-0.5 0-0.6-0.3-1.3-0.2-0.4-0.8-0.7-0.3-0.4-0.3-1.2-1.7-3.5-0.1-0.6-0.1-0.2-0.2-0.2-0.1-0.2 0-0.3 0-0.2 0.4-0.2 0.2-0.2-0.9-0.4-0.5-1.2-0.4-2.5-1.4-4.8-2.6-6.3-0.2-0.3-0.1-0.2-0.1-0.2 0-0.3 0.3-0.2 0.1-0.3-0.2-0.4-0.4 0.2-0.3-0.5-0.5-1.1-0.5-0.9-0.4-0.4-0.4-0.1-0.6-0.1-0.4-0.1-0.2-0.3-0.1-0.6-0.2-0.6-0.5-0.8 0.1-0.4-1.6-3.8-0.7-1-3.7-4.1-0.2 0-0.5 0.2-0.1-0.1-0.1-0.3-0.7-0.8-0.5-1 0.6-0.1 2.1 0.4 0-0.1-0.4-0.3-0.1-0.3 0.1-0.4 0.2-0.5-0.4 0.2-0.5 0.5-0.4 0.1-0.5 0-0.4-0.2-0.4-0.3-0.4-0.5-0.3-0.6 0-0.3 1 0.1 0.5-0.1-0.2-0.3-0.5-0.6-0.1 0-1.1 0.9-0.2 0.4 0.5 0.9-0.9-1-0.2-0.2-0.1 0-0.2-0.2-0.1-0.1-0.1-0.1-0.1 0-0.2 0.2-0.1 0.1 0 0.1-0.4-0.4-0.2-0.6-0.2-1-1.1-2.5-0.3-1.4 0.2-1 0-0.2-0.3 0-0.3 0.3-0.1 0.2-0.3 0.3 0.1-0.4-0.1-0.4-0.2-0.6-0.4-1.1-1.9-3.3-0.2-0.6 0-0.2-0.1-0.2-0.3-0.2-0.2-0.2-0.1-0.3-0.1-0.6-0.2-0.4-0.6-0.9-2.2-5.6-0.3-0.6-0.4-0.5-0.1-0.1 0-0.7 0-0.3-0.3-0.3-0.2-0.2-0.2-0.3-0.1-0.4 0.7 0.4 0.3 0 0.2-0.2 0.4-0.5 0.3-0.1 0.3-0.1 0.5-0.1 0.4-0.2 0.2-0.4-1.3 0.2-1.3 0.4-0.9-0.1-1.4-5.7 0.4-1-0.3-0.2-0.1-0.2-0.2-0.6-0.1-0.7 0-0.4-0.2-0.1-0.1-0.3-0.4-1.5-0.1-1.3-0.5-2-0.3-0.5-0.3-0.6-0.2-0.4 0.2-0.4-0.2-0.5-0.1-1-0.1-0.7 0.3 0.8 0.1 0.8 0.4 0-0.2-0.2 0-0.7 0-0.5-0.7-2 0-0.6-0.2-1.7 0.1-0.4-0.1-0.1-0.1-0.1 0-0.1 0-0.1 0.1 0.1 0.2-0.1 0-0.2 0.1-0.3 0.2 0 0.2 0.2 0.4 0 0.4-0.1 0.4-0.3-0.5 0.1-0.2-0.2-0.3-0.5-0.4-0.3 0-0.2 0.4-0.1-0.4-0.5-0.4 0.3-0.4 1.2-0.4-0.9-0.7-2.5-0.2-1.8-0.6-1.1-0.3-1-1-1.2-0.4-0.7-0.9-1.3-0.3-0.6 0-0.3 0-0.6 0-0.3-0.1-0.3-0.4-0.4-0.1-0.3-0.1-1.7-0.1-0.6-0.9-1.2-0.2-0.6 0.1-0.7 0.4 0.3 0.7 0.2 0.7 0 0.4-0.1-0.3-0.2-1.8-0.6-0.3-0.2-0.3-0.5-0.1-1.3-0.3-0.5-0.2-0.3-0.1-0.4 0-0.8 0-0.2-0.2-0.2-0.1-0.2-0.2-1.1-0.6-1.1-0.1-0.8 0.5 0.6 0.3 0.8 0.3 0.7 0.5 0-0.3-0.4 0.1-0.1 0.8 0.1-1.2-1.5-0.4-0.2 0.1-0.1 0-0.2 0.1-0.1-0.3-0.2-0.1 0.1-0.2 0.1-0.1-0.4 0-0.1 0.1-0.3-0.4 0.2-0.1 0.4 0.1 0.4-0.2 0.4-0.4 0.2-0.4 0-0.3-0.3 0.1-0.3-0.2-0.8 0-0.7 0.3-0.4 0.9-0.1 0-0.2-0.4-0.2-0.3 0.1-0.4 0.2-0.4 0.1-0.3-0.2-0.2-0.3-0.1-0.3 0.3-0.3-0.2-0.5-0.2-1.3-0.3-0.5-0.5-0.5-0.4-0.1-0.4 0.2-0.4 0.5-0.4-0.8-0.2-0.3-0.1 0-0.3 0.1-0.2-0.1-0.2-0.3 0-0.1-1-0.5-0.4-0.4-0.2-0.5 0.5 0.2 0.2-0.1 0-0.4 0.1-0.3 0.3-0.2 0.4 0 0.3 0.1 0.2 0.2 0.3-0.5 0.3-0.4 0.3-0.2 0.5-0.1 0.3 0.1 0.3 0 0.2 0 0-0.4-0.1-0.1-0.3 0-0.3-0.2-0.1-0.4-0.3 0.3-0.9 0.4-0.2 0.2-0.1 0.3-0.4 0.2-0.5 0.2-0.4 0-0.2-0.3-0.4-0.9-0.3-0.2-0.1-0.1-1.2-0.7-0.1-0.4 0-0.5 0.1-0.9-0.1-0.5-0.3-0.2-0.4 0-0.3-0.2-0.7-1.4-0.3-0.2-1.5-0.5 0.3-0.8 0.2-0.4 0.2-0.3 0.7-0.4 0.1-0.3-0.3-0.5-0.2 0.3-1.6-5.5-0.2-0.4-0.4-0.1-0.6-0.1-0.6-0.1-0.5-0.4-0.8-0.9 1.6 0.1 0.3 0 0.3-0.1 0.3 0.2 0.4 0.1 0.5-0.3 0.9 0.4 0.4 0.3 0.2 0.6 0.2-0.1 0.1 0 0-0.1 0.1-0.1-0.2-0.2-0.7-0.9-0.2-0.2-1.2-0.5-0.2 0-0.5 0-0.1 0-0.2-0.1-0.2-0.3-0.1 0-1.1-0.1-0.2 0.1-0.1-0.4 0.2-0.4 0.2-0.4 0.3-0.3 0.3-0.1 1.3-0.3-0.3-0.2-0.1-0.1 0-0.2 0.2-0.1 0-0.2-2 1.1-0.3 0.3-0.6-0.2-0.5-0.5 0.2-0.7-0.5-0.7-0.1-0.3 0-0.5 0-0.4 0.2-0.1 0.1-0.1 0.1-0.3 0.3-0.5 0.8-0.3 1.5-0.3 0-0.2-1.1-0.1-0.5 0.1-0.2 0.3-0.3 0.1-1 0.6-0.1 0.2-0.3-0.2-0.3-0.5-0.3-0.6-0.2-0.9-0.2-0.3 0.1-0.3 0.4-0.3-0.3-0.1-0.6 0-0.4-0.1-0.3-0.2-0.1-0.4 0.1-1.3-0.2-0.8-1-1.9-0.5-0.7-1.7-1.4-0.6-0.5-0.5-0.8-0.1-0.6 0.8-0.1 0-0.2-0.5 0-0.4-0.1-0.4-0.3-0.1-0.4-0.1-0.1-0.2 0-0.2-0.2-0.1-0.3 0.2-0.1 0.1-0.2 0.1-0.2 0-1.8 0.1-0.4 0.2-0.3 0.2-0.3 0.3-0.3-0.7 0.2-0.3 0.5-0.2 0.7 0 0.9-0.2-1.5 0-1.2-0.2-0.5-0.1 0-0.1 0.1-0.2 0-0.2-0.3-0.1-0.2-0.1-0.6-0.8-2.5 0-0.1 0-0.6-0.1-0.1-0.5-0.2 0-0.4 0.2-0.3 0.2-0.2 0.4-0.2-0.5-0.2-0.5-0.3-0.3-0.4-0.2-1.1-0.4-1.2-0.2-0.3-0.2-0.1-0.1-0.3 0-0.7 0.1-0.3 0.2 0.2 0.2 0.3 0.1 0.1 0.6 0.6 0.3 0.2 0.7 0-0.3-0.1-0.2-0.1-0.2-0.2-0.1-0.2 0.1-0.1 0.3-0.4 0.2-0.1-0.5 0-0.5-0.2-0.4-0.4-0.2-0.4 0-0.2-0.1-0.1 0.1 0 0.2-0.2 0.1 0 0.9-0.4 0 0.5 0.1 0.2 0.2 0 0.1-0.4-0.2-0.5-0.3-0.2-0.5 0.1-0.4 0.3-0.3-0.7-0.1-0.2 0.1-0.2 0.2-0.4 0.1-0.3-0.1-0.4-0.1-0.2-0.5-0.4-0.3-0.8 0.2-0.9 0.2-0.8 0-0.5-0.2 0.2-0.3-0.5-0.3-0.8-0.2-0.8 0.3-0.4 0-0.1-0.3-1.2 0.1-0.5 0.1-0.4 0.4-0.7-0.8-0.4-0.2-0.3 0.2-0.4-0.3-0.4 0-0.3 0.2-0.1 0.3 0.4 0.3-0.7-0.1-0.7-0.2-0.7-0.4-0.6 0.2-0.4 0-0.5-0.2-0.5-0.5-1-0.1-0.6-0.5-1-0.1-0.5-0.1-0.2-0.5-0.6-0.2-0.3 0.5 0.2 0.4 0.3 0.4 0.3 0.5-0.2-0.4-0.5-0.8-1.6-0.3-0.5-0.8-0.6-0.1-0.4 0-0.3 0.3-0.4 0.3-0.5-0.4-0.5 0.2-0.6-0.4-0.8-1-1.1-0.2-0.5 0.1-0.2 0.3-0.1 0.3 0 0.4-0.1 1.1-0.5-0.4-0.2-0.9-0.1-0.5-0.1-0.3-0.4-0.2-0.4 0-0.5 0.2-0.4-0.3-0.2-0.2-0.4-0.1-0.4 0-0.4 0.3-0.3 0.2-0.4 0-0.4-0.3-0.3-0.1-0.3-0.1-0.9-0.2-0.3-0.4-0.5-0.2-0.4-0.2-1-0.2-0.6-1.4-2.3 0-0.6 0.5-0.6-0.5 0-0.3-0.2-0.1-0.4 0.1-0.4 0.4-0.3 0.3-0.2 0.3-0.2 0-0.6-0.3 0.1-0.3 0.2-0.2 0.3-0.2 0.3-0.2-0.4-0.4-0.5-0.2-0.4 0.1 0 0.1-0.2 0-0.3-0.1-0.2-0.1-0.3-0.1-0.2-0.3-2.3-0.3-0.7-0.8-0.2 0.2-0.6 0.1-0.2-0.1-0.2-0.1-0.3 0.1-0.3 0.1-0.3 0.4 0.2 0.1 0.2 0.1 0.2 0.2 0.4 0.2 0.3 0.1 0 0.2 0 0.3 0 0.5 0 0.6 0.2 0.6 0.3 0.3 0.5-0.4 0.3 0 0.4 0.3 0.1 0.4-0.6 0-0.6-0.2-1 0.2-0.5-0.5-0.2-0.4-0.1-0.9 0.1-0.5-0.1-0.5-0.4-0.2-0.4 0.1-0.6-0.4 0-0.2-0.1-0.5-0.7-0.2-0.1-0.2 0-0.1 0.1-0.2-0.2 0-0.2 0-0.1 0-0.2 0-0.2 0-0.5-0.2-0.2-0.2-0.3-0.2-0.4 0-0.3 0-1.3 0.2-0.6 0.3-0.7 0.5-0.3 0.6 0.1 0.5 0.4 0.8 1.5 0.5 0.6 0.2-0.6-0.3-0.3-0.4-0.3-0.3-0.6-0.1-0.5-0.2-0.5-0.3-0.4-0.3-0.2-0.8 0.2-0.3-0.2-0.2-0.5-0.6-1.8-0.6-0.4-0.2-1-0.1-1.2 0-1.5 0.1-0.5 0.3-0.4 0.4-0.3 0.2 0 0.4 0.3 0.3-0.1 0.5-0.8 0.3 0.3 1 1.2-0.2 0.5 0.1 0.5 0.3 0.3 0.4 0.2-0.2-0.7 0.1-0.8 0.4-0.7 0.4-0.4-0.9-0.3-0.2-0.3-0.2-0.4 0.1-0.2 0.1-0.3 0.1-0.3-0.2-0.1-0.1 0.1-0.2 0-0.1 0.1 0 0.1-0.5 0.2-0.9-0.3-0.5-0.8 0.4-0.9 0.5 0.4 0.2-0.3 0-0.8 0.4-0.1 0.4 0.1 0.4 0 0.3-0.5-1 0 0-0.2 0.5-0.1 0.7-0.3 1.4-0.4 0.1 0 0.3-0.6-0.5 0-0.8 0.2-0.7 0.3-0.1-0.3 0.1-0.8-0.2-0.3 0.3-0.7-0.1-0.2-0.4-0.1-0.2-0.4 0.2-2.2-0.2 0-0.5 1.1-0.4 0.4 0 1-0.2 0.4 0.4 0.4-0.2 0.6-1.3 1.3 0-0.3-0.2-0.7-0.4 0.4-0.5 0.8-0.5 0.8-0.2 1.3-0.2 0.5-0.3 0.1-0.3-0.3 0-0.4 0.1-0.3 0.1-0.3-0.2-0.5-0.2 0-0.1 0.2-0.1 0.1-0.4 0.3-0.1-0.3 0.2-0.4 0.5-0.7 0.2-0.5 0.1-0.3-0.1-0.9 0.3 0.1 0.2 0.1 0.1-0.3 0.1-0.4-0.1-0.3-0.4-0.1 0.4-0.9 0-0.3 0-0.4-0.3-0.5-0.1-0.3 0.1-0.2 0.3-0.3 0-0.2-0.1-0.2-0.2 0-0.2 0.1-0.1 0.5-0.3 0.2-0.2 0-0.1-0.3 0.1-0.3 0.5-1.3 0.5-0.9 0.3-0.4-0.4 0-0.4 0.5-0.3 0.6-0.5 0.4 0-1.9 0.1-1 0.2-0.5 1.6-0.1 0.8 0 0.6 0.7 0.4 0.1 0.9 0.2 0.4-0.1 0.4-0.2 0.4 0 0.4 0.5 0.7 1.7 0.5 0.6 0.6-0.4-0.5-0.3-0.1-0.5 0-0.5-0.3-0.2-0.2-0.2-0.3-0.4-0.4-0.5-0.5-0.2-1.5 0.1-0.6-0.1-0.4-0.3-0.8-0.7-0.6-0.2-0.5 0.5-0.5 0-0.4-0.4-0.7-1.1-0.1-0.3-0.3-1.7-0.1-0.7 0.2-0.5 0.5-0.2 3.2-1.3-0.7-0.3-0.6 0.2-0.6 0.2-0.6 0.1-0.2-0.1-0.2-0.2-0.1-0.3-0.1-0.4-0.1-0.3-0.3-0.2-0.5-0.2-0.2 0 0.1 0.3 0 0.3 0 0.3-0.1 0.1 0.4 0.4 0.2 0.3 0 0.2-0.2 0.2-0.2-0.1-0.6-0.6-0.3-1.6 0.2-0.6-0.3-1.3-0.6-2.4 0.2 0.2 0.2 0.2 0.1 0.2 0.1 0.3 0.5-0.3 0-0.3-0.2-0.4-0.1-0.5 0.1-0.2 0.2 0 0.2-0.1 0.1-0.2-0.1-0.3 0-0.3-0.1-0.4-1.1 1.4-0.4 0.1 0-0.6 0.1-1.1-0.2-0.4-0.7-0.9 0-0.3 0.3-0.4 0.1-0.5 0.1-1.1-0.1-0.8 0-0.3 0.4-0.2 0.2-0.2 0.3-0.4 0.3-0.6 0.1-0.5 0-1.8 0.1-0.3 0.5-1.5 0.2-1.3 0.1-0.4 0.4-0.6 0.1-0.3-0.1-0.1-0.1 0-0.2-0.1 0-0.1 0-0.7 0.2-1.1 0.2-0.4 0.3-0.5 0.3-0.6 0.1-0.7 0.2 0 0.3-0.2 0.4-0.3 0.2-0.2 0.1-0.3 0-1 0.2-0.6 0.3-0.7 1.2-1.7 0.2-0.6 0.1-0.6 0-0.7 0-0.4-0.1-0.6-0.1-0.4 0.1-0.3 0.4-0.4 0.1-0.3 0.1-1.4 0-0.7-0.3-0.4 1.2-0.8 0.2 0 0-0.4-0.3-0.2-0.3-0.1-0.2-0.2 0-0.3 0.1-0.2 0.1-0.2-0.2-0.4-0.5 0.7-0.4-0.2-0.2-0.7 0.2-0.7 0.4-0.5-0.2-0.1-0.4 0.2-0.1 0.1-1.2 0.8 0.3-0.5 0.2-1.1 0.4-0.3-0.9-1 0.6-0.6 0.9-0.4 0-0.7-0.3 0.1-0.7 0.2-0.6 0-0.3-0.3 0-0.3-0.2-0.2-0.2-0.2-0.3 0-0.3 0-0.2-0.1-0.2-0.5-0.2-0.4 0.5-0.1 1.1 0.2 0.7-0.1 0.1-0.3-1-2.3-0.2-0.3-0.2 0.1-1.3 0.6-0.1-0.2-0.2-0.1-0.1-0.2-0.1 0.2-0.1 0.2 0 0.6-0.2 0.1-0.8 0.4 0.1-0.9 0.5-0.8 0.2-0.5-0.4-0.5-0.3 0.2-0.5-0.1-0.3 0.2-0.1 0.2-0.1 0.4 0.1 0.7-0.1 0.4-0.1 0-0.2 0-0.7 0.4-0.2-0.1-0.4-0.5 0-0.5 0.4-0.5 1.9-1.3 0.5-0.5 0.3-0.1 0.4 0-0.4-0.3-1-0.4-0.2-0.3-0.2-0.3-0.4-0.2-0.4-0.2 0-0.7-0.6 0.5-0.2 0.2-0.4-0.4-0.1-0.4-0.1-0.9-0.3-0.8 0-0.3 0.1-0.2 0.3-0.1 1.1-0.2 0.2-0.1-0.2-0.3-0.5 0-0.8 0.3-0.5-0.2-0.3-0.3-0.1-0.3 0.3-0.1 1.8-0.5 1.1-0.7 0.1-0.1 1.5-1.1 0.5 0.4 0.2-0.3-0.1-0.5-0.3-0.1-1.6 0.5-0.6 0.3-1.5 1.1-0.8 0.1 0.2-0.4 0.8-1.7 0.5-0.4 0.4-0.3 1.2-1 0.4-0.2 0.6-0.2 0.7-0.4 0.7-0.5 0.4-0.4 0.7-1.3 0.3-0.2 0.4-0.1 0.7 0.3 0.3 0 0.6-0.1 1.3-0.6 0.9-0.6 1.6-0.6 1.9-1 0.6-0.1 0.3-0.2 0.3-0.3 0.1-0.3-0.1-0.3-0.3 0.1-1 0.6-1.1 0.4-0.1 0.1-0.6 0.4-0.3 0.1-0.6 0.1-1.2 0.6-0.6 0.2-1.3-0.3-0.7 0-0.6 0.2-0.6 0.4-0.6 0-1.2-0.3-0.7-0.1-1.6 0.3-0.7-0.1-0.5-0.1-0.6 0-1.3 0.4-0.6 0.2-0.5-0.2-0.1-0.7 0.1-0.6 0.5-1.2 0.2-0.7 0.2-2.1 0.1-0.3 0.5-0.3 0.4-0.7 0.6-1.3 0.4-0.4 0.6-0.1 1.1 0 0.3-0.2 0.2-0.6 0.2-0.6 0.6-0.1 0-0.2-0.3-0.1-0.2 0-0.1 0-0.2 0.1-0.2 0.2-0.1 0.2-0.1 0.2 0 0.1-2.1 0.2-0.3 0.3-0.3 0.4-0.6 0.5-0.7 0.4-0.4 0.1-0.3-0.3-0.8-1.3-0.1-0.4 0.1-0.6 0.4-1.2 0.1-0.7 0-0.4-0.1-0.3 0-0.4 0.3-0.6 0.1-0.3 0.1-0.7 0.2-0.5 0.4-0.6 0.5-0.6 0.5-0.3 0.7-0.2 0.5 0 0.6 0.3 0.5 0.4 0.3 0.2 0.3 0 0.2-0.1 0.3 0 0.3 0.1 0.3 0.1 0.6 0.5 1.2-1.7 0.6-0.5 1-0.2 0.6 0.2 0.4 0.4 0.5 0.2 0.5-0.3 0.2-0.4 0-0.6-0.1-0.5-0.4-0.3-0.1 0.4-0.4 0.2-0.5 0-0.5-0.3-0.4-0.2-0.6 0.1-0.6 0.3-0.4 0.2-0.8 0.5-0.9-0.2-1.9-0.8-0.4 0-0.3 0.1-0.3 0-0.6-0.4-0.3-0.1-0.6 0-0.6 0.1-0.9 1-0.6 0.4-0.7 0.2-0.3 0-0.3-0.1-0.1-0.3 0.4-0.3-0.1-0.3-0.5-0.1-0.4 0.4-0.6 0.3-0.6-0.3-0.2-0.4-0.1-0.7 0-0.7 0.2-0.3 0.5-0.4 0.1-0.6-0.4-0.4-0.7 0.3-0.3 0.4-0.3 0.6-0.3 0.7-0.1 0.6-0.3 0.7-0.5 0.1-0.6-0.1-0.4 0-0.4-0.5 0.1-0.3 0-0.3-0.7-0.2-0.5 0-0.4 0.1-0.3 0.3 0.2 0.5-1.3-0.2-0.4 0.1 0.5 0.5 0.7 0.3 0.6-0.2 0.9-0.9 0.2 0.4-0.1 0.3-0.2 0.3-0.1 0.4 0.1 0.1 0.9 0.4 1.1-0.1 0.3 1.4-0.3 3.3-0.2 0.6-0.1 0.3-0.1-0.1-0.3 0.3-0.2 0.4 0 0.1-0.5 0.5-0.3 0.1-0.3 0.1-0.5-0.1-0.1 0.1-0.1 0.4-0.2 0-0.2-0.4-0.1 0.1-0.1 0.3-0.2 0.2-0.1 0.1-0.3 0.3-0.3 0-0.1-0.3-0.2-0.3-0.5-0.3-0.6-0.2-0.5 0.1 0.7 0.4 0.2 0.3-0.1 0.4-0.3 0.1-1.1-0.4 0.2 0.2 0.6 0.5 0 0.2 0 0.2-0.2 0.1-0.3-0.2-0.4-0.2-0.5 0.1-0.5 0.2-0.3 0.2 1.7 0.6 0.5 0.1 1.1-0.2 0.4-0.1-0.3 0.3 0 0.2 0.4 0.2-0.2 0.2 0.5 0.2 0 0.4-0.3 0.4 0.1 0.4 0.2 0.4-0.2 0-0.9-0.2-0.2-0.2-0.4-0.5-0.3-0.3-0.6-0.5-0.6-0.1-0.3 0.6 0.1 0.1 0.3 0.1 0.3 0.1 0.2 0 0.2 0.1 0.5 1-0.5 0.1-0.7-0.1-1.7-0.7-0.2 0.1-0.1 0.4 0 0.9 0.1 0.4 0.1 0.4 0.1-0.2 0.2-0.1 0.3-0.2 0 0.3 0 0.4 0 0.2 1-0.4 0.5-0.1 0.4 0.2 0.5 0.3 0.4-0.1 1.4-0.5 0.2 0.1 0 0.4 0.1 0.3 0.6 0.3 0.1 0.2 0.1 0.1 0.3 1.1 0.2 0.2 0.1 0.2 0.2 0.1 0.3 0.2 0.3 0 0.3-0.1 0.3 0.1 0.2 0.6 0.2 0.2 0.2 0.2 0.1 0.2 0 0.3 0.1 0.3 0 0.2-0.1 0.3-0.1 0.2-0.4 0.3-0.1 0.2-1 3.6-0.6 1.1-1.6 1.6-0.2 0.6-0.2 0.4-1 1.2-0.4 0.2 0.2 0.4 0 0.2-0.1 0.2-0.3 0.1 0.2 0.4-0.1 0.3-0.2 0.2-0.1 0.2 0.1 0.3 0.3 0.6 0 0.6-0.4 0.4-0.1 0.1-0.3 0.1-0.3 0.1-0.1 0.2-0.2 0.2-1.9 1-0.5 0.1-1.4 0.1-3.4 2.1-0.6 0.5-0.7 0.5-0.6 0.1-0.4-0.1-0.3 0-0.5 0.3-0.5 0.3-1.3 0.5-1.6 1.2-1 0.2 0.2-0.5 0.2-0.2 0.2-0.2-0.6 0.2-0.4 0.3-1.2 1.1-0.3 0.4-0.1 0.5-0.6 0.4-2.4 0.9-1.7 0.3-5.2 2.6-0.7-0.1-0.2 0.3-0.4-0.2-0.4 0.3-0.3 0.3-0.3 0.2-0.5 0-0.6-0.2-0.5 0.1 0 0.2-0.2 0.4-0.5 0.4-0.3 0-2 0.1-1.8 0.2-0.6-0.1-0.6-0.2-0.4-0.4-0.4-0.1-0.3 0-0.3 0.2-0.4 0-0.2-0.1-1-0.7-3.9-1.7-0.6-0.2-1.7-1.2-0.6-0.1-0.4-0.2-1-1.1-0.5-0.4-1.8-0.8-1.1-0.9-1-0.7-3.3-3.1-2.8-2.3-1.9-2.5-0.6-0.8-0.1-0.1-0.2-0.4-1.4-1.3-1.9-2.3-0.9-1.4-0.2-1-0.5-0.1-0.5-0.3-0.5-0.3-3.7-4-1.7-1-0.5-0.5-1-1.2-0.6-0.5-0.6-1-0.9-0.5-0.5-0.4-0.9-1.1-0.2-0.5 0.1-0.9-0.1-0.5-0.7 0.6-0.3 0.1-0.6-0.3-2.7-2.6-0.9-0.7-0.4-0.4-1.4-1.9-0.9-0.6-0.5-0.5-0.3-0.7-1.3-1.9-1-0.8-0.5-0.6-0.4-1-0.8-1.3-0.3-0.6 0-0.7 0.2-0.5 0.3-0.5 0.1-0.5 0.1-0.7 0.2-0.5 0.2-0.5 0.3-0.4 0.4-0.3 1.2-0.7 0.8-0.5 0.2 0 0.1 0.2-0.1 0.5-0.2 0.3-0.6 0.2-0.2 0.3 0.4 0.8 0.3 0.3 0.5 0 0.3 0 0.4-0.3 0.3-0.1 0.3 0 0.2 0.1 0.2 0.1 0.2-0.1 0.4-0.4 0.3-0.2 0.3 0 0.4 0.4 0.1 0.5-0.7 1 0.1 0.5-0.4 0.7 0.1 0.6 0.5 0.5 0.6 0.4 0 0.2 2.2-0.3 1.4-0.7 0.3-0.6 0.4-0.1 2.2-0.1 1-0.2 0.3-0.1 0.1-0.2 0.5-0.6 0-0.2 0.2-0.1 0.2 0 0.1-0.1 0.2-0.4-0.1-0.4-0.1-0.4-0.1-0.5 0-0.5 0.2 0 0.3 0.1 0.3-0.2 0.2 0 0.3 1.3 0.1 0.6-0.2 0.4 0.4 0.3 0.9 0.2 0.4 0.2 0.1-0.3 0.1-0.2 0.2-0.4 0.3 0.3 0.2-0.1 0.2-0.3 0.2-0.3 0.1-0.1 0.1-0.1 0.1-0.2 0.1 0 0.2 0 0.4 0.2 0.2 0 0.2-0.5 0.5-1.4 0.3-0.5 0.2 0.2 1.4 1.6 0.1 0.2 0.4-0.1 0.2-0.3 0.1-0.4 0.1-0.3 0.4-0.4 0.2-0.1 0.3 0.1 0.3 0 0.7-0.3 0.6-0.4 1.6-1.5 0.3-0.2 0.1 0 0.6 0 0.2-0.1 0.5-0.3 1.1-0.1 2.5 0.3 1-0.5 0.3-0.5 0.5-1.1 0.8-1.1 1-1.8 1.5-2.3 0.1-0.3 0-0.7 0-0.4 0.1-0.1 0.5-0.5 0.9-1.9 0.4-0.3 0.5-0.2 0.9-1.2 0.5-0.3 0.3 0 0.3 0.1 0.4 0 0.3-0.2 0.2-0.3 0.2-0.5 0.2-0.3 0.2-0.6 0.1-0.8-0.2-0.7-0.2-0.6-0.4-0.5-0.5-0.5-0.5-0.3-0.2 0.5-0.3 0.3-1.1 0.6-0.4 0.5 0 0.4 0.1 0.4 0.1 0.4 0.2 0.3-0.3 0.7 0 0.3 0.1 0.3-0.1 0.4 0 0.5-0.1 0.2-0.2 0.2-0.2 0-0.6 0.1-0.2 0-0.1 0.1-0.2 0.1-0.2-0.1-0.2-0.2-0.1-0.1-0.1 0-0.2-0.1-0.1 0.1-0.2 0.1-0.2 0.1-0.1-0.2-0.1-0.2-0.1-0.1-0.7-0.2-0.3-0.4-0.2-0.5-0.5-0.4 0 0.8-0.3 0.5-0.6 0.2-0.7 0-0.2 0-0.1 0.1-0.1 0-0.3-0.2-0.1-0.2 0-0.1-0.1 0-0.2 0-0.3-0.1-0.2-0.2 0.1-0.3 0.1-0.3-0.6 1.1 0.3 0.2 0.4 0.4 0.1 0.3-0.5 0.2-1.7 0.2-1.9 0.8-1.6 0.2-1.7 0.6-0.9 0.1-0.5 0.2-0.8 0.4-0.8 0.6-0.6 0.6-0.9 1.7-0.4 0.2-0.6-0.1-1.2-0.3-1.9 0-0.3-0.1-0.6-0.5-0.3-0.1-1 0-0.3 0-0.3-0.1-0.2-0.1-0.2-0.1-0.1-0.1-1.4-0.3-0.6-0.3-0.9-0.2-1-0.4-2.9-0.3-1.1-0.3-1.9-1.2-2.8-1.9-5.1-2.2-5.1-3.5-0.9-0.8-0.1-0.1-0.1-0.1 0-0.3-0.1-0.3-0.8-0.3-0.3-0.5-0.3-0.6-0.1-0.5 0 0.1 0.4 0.3 0.3-0.5 0.1-0.4 0-0.3-0.6 0.2-0.8 0.1-0.7-0.1-0.3-0.6 0.6-1.2 0.2-0.1 0.9-0.1 0.2-0.1-0.1-0.2-0.3-0.2-0.4-0.1-0.3-0.1-0.1-0.3-0.1-0.2 0-0.1-0.2 0-0.2 0.1-0.2 0.1-0.4-0.2-0.2-0.2-0.2-0.2 0-0.4 0-0.3 0.2-0.3 0.2-0.1 0.4 0-0.2-0.3-0.1-0.2-0.3 0.1-0.2 0.2-0.4-0.2-0.1 0.2-0.2 0.3-0.4 0.1-0.4-0.1-0.1-0.4 0-0.4 0.2-0.4-0.4 0.3-0.4 0.1-0.2-0.1-0.2-0.3 0.2-0.6 0.4-0.7 0.6-0.6 0.6-0.3-0.2-0.3-0.1 0-0.3 0.2-0.2-0.1-0.2-0.1-0.3-0.5-0.1-0.3 0.1 0.6 0.1 0.5 0 0.4-0.4 0.3-0.6 0-0.2-0.5 0.2-1.3-0.2-1.5 0.1-0.8 0.6-0.3 1.2 0.4 0.6 0 0.1-0.6-0.2-0.1-0.3 0.1-0.2-0.1-0.1-0.4 0.1-0.2 0.6-0.1 0.4-0.3 0.6-0.1 0.3-0.1 0.1-0.2 0.5-0.7 0.8-0.9 0.5-0.4 1.1-0.4 0.5-1.2 0.4-0.5 0.3-0.1 1 0.1 0.3-0.1 0.6-0.5 0.3-0.1 0.4-0.1 1.5-1.2-0.4-0.2-0.8 0.3-0.4-0.1-0.7 0.8-0.7 0.4-0.7 0.1-1.1 0-0.6 0.1-0.3 0.3-0.4 0.9-0.3 0.4-0.4 0.2-0.9 0.3-0.5 0.2-0.4 0.3-0.4 0.2-1.1 0.2-0.7 0.5-0.6 0.3-0.5 0.4-2 2.5 0.3 0.1 0 0.3-0.1 0.2-0.2 0.2-0.4 0.3-0.3 0.1-0.3-0.1-0.4-0.1-1.9 0.1-1.4-0.2-0.7-0.2-0.4-0.4 0.2-0.6 0.2 0 0.3 0 0.2 0 0.1-0.1 0.1-0.4 0.1-0.1 0.2-0.2 0.2-0.1 0.3-0.1 0.4 0.2 0.3 0.4 0.4-0.5 0.4 0 0.5-0.2 0.1-0.6-0.6 0.3-0.6 0.1-0.1-0.1-0.3-0.2-0.5-0.4-0.3-0.6-0.1-0.6 0.1-0.7 0-0.6-0.3 0.3-0.3 0.3-0.2 0.2-0.2-0.3 0.1-0.5 0.2-0.8 0.2-0.9 0-0.3 0.1-0.2 0.7-1.1 0.2-0.1 0.5-0.3 0.2-0.1 0.1 0 0.3 0 0.1 0 0.1-0.1-0.1-0.1-0.1-0.1 0-0.1 0-0.2 0-0.3 0-0.2 0.3-0.3 0.3 0 0.1 0.1 0.1 0.3 0.2 0.3 0.4 0.1 0.4-0.1 0.3-0.4 0.3-0.4-0.1-0.3-0.1-0.3 0-0.2 0.4-0.1 0.2 0.1 0.1 0.3 0 0.3 0 0.2 0.9-0.6 1.4-0.3 3.4 0.1 2.8 0 2.3 0 0-4.4 0-3.4 0-2.5 0.7-1.4 1.5 0.1 0.4 0.7 0.2 1.8 0.5 0.5 0.3-0.3 0.9-1.7 0.1-0.2 0.1-0.3 0.1-0.2 0.4 0 0.3 0.1 0.3 0.2 0.2 0.3 0.5 1 0.4 0.4 0.6 0.1 0.7-0.3 1.2-0.7 0.6-0.1 0.7 0.2 1.6 0.8 0.6 0.1 1.1-0.1 2.2-0.8 8.2 0.2 0.9 0.4 2.2 2.4 1.3 0.6 1.6 0.2 5.9-0.1 1.3-0.3 1-0.8 0.3-0.6 0.7-2 0.4-0.5 0.3-0.2 1-0.1 1.7-0.6 0.6 0 0.6-0.1 1-0.8 0.6-0.3 1.6-0.1 0.5-0.2 1.3-0.9 3.1-0.8 1.2 0.1 0.3 0.7-0.1 0.4-0.5 0.3-0.2 0.2 0 0.3 0.3 1.2 0.1 1.2 0.2 0.5 0.5 0.5 1.1 0.5 3.9 0.3 0.6-0.1 1.1-0.6 0.6-0.2 0.5-0.1 0.2-0.3-0.4-0.5-0.1-0.6 0.4-0.5 1.8-1.2 0.5-0.2 0.6 0 0.6 0.3 0.6 0 0.3-0.2 0.2-0.4 0.3-0.3 1.4-0.5 0.3-0.3-0.2-0.8-1-0.4-1.2-0.2-0.7-0.3 0-0.3-0.1-0.2 0-0.2 0.1-0.3 0-0.6 0.1-0.3 0.1-0.2-0.1-0.2-0.1-0.1-0.5-0.5-0.1-1 0.2-1 0.4-0.7 2-1 0.6-0.4-0.3-0.3-0.5-0.9-1-2.8-1.8-2.8-0.8-1.7-0.6-1.7-1-4.5-0.3-0.7-0.5-0.7-1.8-1.6-1-1.1-0.4-0.6-0.1-0.8-0.2-0.8-1.2-1.2-0.4-0.7-0.3-1.1 0.2-3.7 0.1-2.9-0.1-1.3-0.6-0.9-1.2-0.2-1.1 0.3-1.1 0.5-1.1 0.3-3.4 0-1.7-0.3-1.1-0.4-0.4-0.4-0.5-0.7-0.6-1.8-0.5-0.7-1.2-1-1.1-1.4-1-1.5-0.5-1.7 0-0.5 0.2-1.6 0.1-1.2 0.1-0.5 1.6-2.7 0.4-1.1 0.1-1.2-0.2-1.3 0-0.7 0.1-0.6 0.3-0.7 0.1-0.5-0.1-1.3 0.2-2.7-0.2-1.2-0.8-1.1-1.1-0.5-1.1-0.3-7 0.3-1.2-0.5-2.1-1.9-1.2-0.8-4.5-1.9-0.9-1-0.2-1.3 0.6-3.9 0.6-4 0.8-2.5 1.2-2.1 2.6-2.6 1.9-1.4 3.4-3.2 1.7-2.9 2.5-2.4 0.7-1 2.1-6.3 0.4-0.6 2.5-2.6 0.3-0.3 2-1.5 1.6-1.8 0.6-0.4 0.5-0.1 1.1-0.2 1.1-0.5 0.6-0.1 0.6 0.1 0.9 0.2 0.8 0.5 0.7 0.5 1 1.2 0.8 0.6 0.3 0.4 0.3 0.7-0.1 1.2 0.1 0.7 0.9 2.1 1.1 1.6 1.5 1 2 0.3 2.4-0.5 3.3-1.7 3.6-1.8 2.2-0.7 2.5-0.6 2.5-0.2 2.3 0.2 2.4-0.2 4.1-1.2 4.6-1.5 0.4-0.3 0.2-0.5 0.3-4 0.2-0.6 0.3-0.7 2.3-3 3.6-3 1.2-1.2 0.8-1.4 0.5-1.6 1.8-6.6 0.6-1.4 2.2-2.7 0.8-0.5 4.2-2.2 3.9-2.1 3.3-1.7 3.7-2 0.5-0.3 0.4-0.5 0.9-2.3 0.8-1.3 1.8-2.4 2.2-4.4 1.5-2.8 1.6-3.1 1.5-4.9 1.2-4.1 1.3-4.1 0.4-0.5 5-2.4 5.3-1.2 1.1-0.6 4.9-4.1 0-0.5 0.1-0.4-0.4-1.5-0.7-1.5-0.6-0.8-1.4-0.8 0.1-0.1 0.2-0.6 0.4-0.5 0.6-0.3 0.5 0.1 0-0.2-0.1-0.5 0-0.2 0.4 0.1 0.4 0 0.3-0.3 1.5-2.1 0.2-0.4 0.2-0.3 1.2-0.3 0.3-0.4 0.2-0.9-0.1-0.6-0.1-0.6 0.3-0.6 0.5-0.5 0.4-0.4 0.4-0.3 0.6-0.3 0.7-0.2 0.2-0.1 0.1-0.5 0.1-0.3 0.4-0.3 0.2-0.7 0.3-0.3 0.4-0.4 0.6-0.9 0.3-0.2 0.4-0.4 0.2-0.2 0-0.3-0.3-0.6 0.1-0.2 0.6-0.2 0.6-0.4 0.3-0.6-0.2-0.6 0.2-0.4 0.3-0.3 0.3-0.2 0.3-0.1 0.4 0.1 0.7 0.2 0.6 0 0.3-0.2 0.1-0.5 0.3-0.6 0.5-0.5 0.5-0.2 0.6-0.1 0.6 0 0.6-0.2 0.4-0.5 0.4-0.5 0.5-0.4 0-0.7 0.4-0.6 0.7-0.5 1.6-0.9-0.2-0.4-0.5-0.5-0.5-0.2-0.6 0-1.2 0.2-0.5-0.2-0.4-0.5-0.2-0.4-0.2-0.5-0.1-0.7 0.1-0.6 0.4-1.4 0.1-1.5 0.2-0.8 1.1-2.9 0.4-0.6 0.4-0.6 0.4-0.6 0.1-0.6 0-0.7-0.9-1.3-0.9-3.2-1.6-3-0.3-0.4 0.1-0.1 0.3-0.6 0.1 0 0.2-0.1 0.1-0.1 0.1-0.2 0-0.4 0.1-0.1 0.2-0.4 0.1-0.1 0.1-0.1 0-0.5 0.1-0.7 0.3-0.6 0.4-0.5 2.2-1.7 0.5-0.1 0.4-0.3 0.8-1.6 1.9 0.4 0.6-0.2 0.5-0.9 0.3-1.1 0.5-0.8 1.3 0.5 0.4-0.6 0.6-0.1 0.7 0.1 0.7-0.1 0.3-0.2 0.2-0.3 0.1-0.3 0.3-0.3 0.2-0.1 0.8 0 0.2 0-0.2-1 0.6-0.1 1.7 0.7 0.3 0 0.2-0.1 0.3-0.3 0.3-0.1 0.7 0.2 0.3 0 0-0.8 0.7-0.6 0.9-0.5 0.6-0.2 0.4-0.1 0.9 0.1 0.1-0.4 0.3-1.2 0.3-0.6 0.9-1 0.3-0.7-0.2-0.8-0.7-1-0.9-0.6-1.9-1.7-1-0.6-2.1-0.5-1-0.6-1-0.9-0.9-0.4-1 0.1-1.2 0.5-1.2 0.2-2-1.1-1.2 0.1-1 0.4-1.1 0-1.1-0.3-0.8-1-0.8-2.4-0.1-0.7 0.2-0.6 0.3-0.6 0.3-0.6 0-0.7-0.2-1.4 0-0.7 0.2-0.8 0.7-1.4 0.2-0.8-0.1-0.8-0.4-0.3-0.5 0.1-0.5 0.6-0.3 0.6-0.1 0.6-0.3 0.5-0.6 0.5-0.5 0.2-1.6 0.2-0.6 0-0.4-0.3-0.9-0.8-0.5-0.3-0.5 0-1 0.6-0.5 0.2-0.7-0.1-0.4-0.4-0.4-0.5-0.3-0.6 0.3-0.4 0-0.1 0.2-0.2 0.3-0.7 0.1-0.7-0.4-1.8-0.1-1.7-0.3-0.8-0.8-0.5-2.7-0.5-1.1-0.6-1.6-2.3-0.9-0.9-1.1-0.8-0.8-0.8-0.4-1.1 0.1-1.5 0.3-0.6 0.5-0.3 1.1-0.5 0.5-0.3 0.4-0.4 0.3-0.5 0.2-0.6 0.9-2.5 0.7-2.7-0.5-1.9-1.6-1.3-1.8-1-1.4-1.2-0.2-0.5-0.2-0.5-0.1-0.5 0.1-1 0.1-0.5 0.1-0.4 0.2-0.5 1-1.8 0.7-0.6 3.1-0.5 1-0.5 1.1-0.7 0.7-0.8 0.7-1 0.3-1.2-0.4-1.1-0.9-0.7-1 0.1-1.1 0.3-1.1 0-1.5-0.5-0.6-0.1-2 0.5-0.9-0.1-0.9-0.7-0.6-0.9-0.3-1.1 0.3-1 0.7-0.7 1.7-1 0.5-0.5 0.1-0.7-0.2-0.8-0.4-0.6-0.7-1.8-0.4-0.6-0.9-0.1-0.8 0.1-0.8-0.1-0.7-0.3-0.7-0.4-0.6-0.7-0.3-0.8 0.2-0.9 0.4-0.8 0.4-0.3 0.7-0.4 0.2-0.2 0.2-0.5 0-1.3 0.5-0.8 1.4-1 0.4-0.7 0-1-0.2-0.9 0-0.8 0.9-0.7 0.4-0.2 4.6-0.8 0.7-0.4 2.2-1.7 1.9-0.7 1.8-0.2 1.9 0.4 7.3 2.6 10.3 2.1 2.7-0.1 1.9-0.4 1.1 0 0.3 0.2 0.4 0.2 0.4 0.7 0.4 0.5 1.2 0.9 1.2 0.6 7.7 2.1 1.2 0 1.7-0.4 0.6 0 1.3 0.2 0.5-0.2 0.6-0.5 1.7-1.7 1.9-1.5 0.8-0.2 0.2-0.1 0.4-0.5 0.6-1 0.4-0.5 1.1-0.2 1.8 0.8 1 0 3.1-0.8 4-2.4 1.1-0.4 1.1 0.2 1.3 0.9 0.4 0.2 0.5 0 2.6-0.5 0.3-0.2 2.7-2.6 0.3-0.7-0.1-1.9 0.2-0.8 0.7-0.5 1-0.4 1.1-0.1 0.7 0.2 0.8 0.5 0.5 0.1 0.3-0.3 0.6-0.6 1.7-1.4 0.5-0.6 0.2-1.1-0.3-1-0.1-0.9 0.6-0.7 0.2-0.1 10.9-6.9 10.9-6.8z m92.2 640.3l0.4 0.4 0.2 0.3-0.1 0.3-0.4 0.4-0.9 0.2-0.7-0.4-1.4-1.7 0.3-0.9 0.3-0.2 1.4 0.9 0.9 0.7z m-213 170.5l-0.1 0.3-0.1 0.2-0.1 0.2-0.1 0.1 0-0.3 0-0.3 0.1-0.2 0.2-0.3 0.1 0.1 0 0.2z m0.4-1.7l0 0.1-0.1 0-0.1 0 0.1-0.1 0.1 0z m-29.4-12.5l-0.3 0.2-0.2 0.1-0.2 0 0.2-0.1 0.5-0.4 0 0.1 0 0.1z m-2.9-6.3l-0.3 0.2 0-0.1 0.1-0.1 0.1 0 0.1 0z m32.6-1.5l0.3 0 0.1 0.1-0.2 0.1-0.1-0.1-0.1 0 0-0.1z m-26.8-8.6l-0.1 0.1 0 0.1 0 0.1-0.2 0 0-0.1 0.1-0.1 0.1 0 0.1-0.1z m7.7-11.3l-0.1 0.3-0.1 0.2-0.1 0.1 0-0.2 0-0.3 0.1-0.1 0.2 0z m-8.7-5.7l-0.2 0.1-0.1 0.1-0.1 0 0.1-0.2 0.1 0 0.2 0z m615.5-17.1l-0.6 0.2 0-0.3 0.2-0.3 0.4 0.4z m11.9-35.1l0.2 0.6-0.4 0.1-0.4-0.3 0.6-0.4z m-10.5 189.9l0.2 0.3 0 1.6-0.2 0.7-0.8 1.7-0.1 1 0.1 0.3 0.2 0.2 0.1 0.2 0 0.3-0.2 0.1-0.2 0.1-0.3 0-0.2-0.1-0.4 0-0.3 0.6-0.4 1.1-0.7-0.2-0.1-0.4 0.2-0.6 0-0.6-0.3-0.2-0.4-0.3-0.2-0.3 0.3-0.4-0.3-0.2-0.2-0.3-0.1-0.3 0.2-0.4-0.3-0.1-0.1-0.2-0.1-0.3 0.1-0.4-0.5 0-0.3-0.5-0.3-0.8-0.3-0.7-0.4-0.4-0.6-0.4-0.6-0.2-0.4 0.4 0-3.1 0.1-0.4 0.7-1.4 0.2-0.1 0.7 0 0.3-0.1 0.2-0.2 0.1-0.2 0.2-0.1 0.1-0.1 0.8-0.3 0.2 0.2 0.7-0.7 0.5-0.2 0.5 0.2 0.7 0.6 0.3 0.4 0.1 0.6 0.2 0.5 0.1 0.6 0.1 1.1 0.1 0.5 0.5 0.8 0.3 0.8 0.2 0.3z m-5.5-10.1l0.1 0.5-0.2 0.4-0.4 0.3-0.5 0.4-0.5 0.4-1.1 1.2-0.4 0.2-0.3-0.2-0.1-0.2 0.1-0.3-0.1-0.3-0.1-0.2-0.5-0.6 0.4-0.4 0.1-0.6 0.1-0.6 0.7-0.2 0.8-0.2 0.3-0.5 0.2-0.7 0.4-0.7 0 0.8 0 0.6 0.3 0.3 0.4 0.2 0.3 0.4z m-8.8-17.2l0.1 0 0.8 1.3 0 0.3-0.1 0.6-0.1 0.3-0.2-0.1-0.3-0.3-0.4-0.3-0.2 0-0.4 0.1-0.4 0.1-0.3 0.1-0.3 0.1-0.4-0.1-0.3-0.3-0.1-0.3 0-0.3 0.2-0.3-0.2-0.2-0.2 0.2-0.3 0-0.3-0.2-0.2-0.2 0-0.4 0.2-1.2 0.3-0.3 0.6-0.3 0.8-0.2 0.6 0.1 0.1 0.2 0 0.3 0 0.6 0.2 0.3 0.6 0.2 0.2 0.2z m4-1.3l0.1 0.3 0.1 0.6 0 1.3-1.6-1.2-0.2-0.5 0-0.4 0.2-0.3 0.6 0.2 0-0.5 0.2-0.1 0.3 0.1 0.3 0.5z m-1-1.1l-0.1 0.1-0.4 0.1-0.1 0.1-0.1 0.2-0.4 0.7-0.3 0.1-0.2-0.3 0-0.9 0.1-0.2 0.2-0.2 0.2-0.1 0.1-0.4 0.2 0 0.3 0.2 0-0.2-0.1-0.4-0.4-0.2-0.2 0.6-0.3 0-0.4-0.3-0.3-0.5-0.3-1.9 0-0.3 0.2-0.2 0.3-0.3 0.3-0.5 0.1-0.3 0.2-0.3 0.6-0.2 0.5 0 0.3 0.4-0.1 0.6-0.2 0.4-0.4 0.4-0.1 0.5 0.1 0.6 0.5 1 0.3 1.1 0 0.2-0.1 0.4z m-595.1-8.2l0.2 0 0 0.1 0 0.1-0.5 1.1-0.3 0.3-0.3 0.2-0.4 0.1-0.2-0.2-0.1-0.5 0.2 0 0 0.3 0 0.1 0.6-0.2 0.4-0.4 0.3-0.4 0.1-0.6z m583.5 2.2l0.8 0.3 0.3 0.2 0.1 0.3-0.2 0.2-0.4 0-0.9-0.2-0.6-0.3-0.6-0.6-0.5-0.7-0.2-0.7 0.1-0.9 0.1-0.4 0.1-0.3 0.4-0.3 0.4 0 0.1 0.3 0 1.4 0.1 0.6 0.3 0.6 0.6 0.5z m13.8-9.1l0.4 0.9 0.1 0.4 0.1 0.5-0.1 0.4-0.2 0.6-0.3 0.5-0.2 0 0-0.4 0.2-1.2 0-0.5-0.4-1 0-0.5 0.4-0.3 0 0.6z m-23.2-20.1l0.7 0.9-0.1 1.7-0.9 1-2-0.6-0.3-0.5-0.3-0.8-0.1-0.8 0.2-0.4 0.4-0.1 0.5-0.3 0.3-0.5-0.1-0.5 0.3 0 0.3 0.1 0.6 0.5 0.5 0.3z m-6.6-45.5l0.1 1.1 0.3 0.8-0.1 0.9-0.6 0.7-0.4 0.3-0.3 0.3-0.3 0.4 0.1 0.8 0.4 0.1 0.5 0.3-0.8 0.9-0.3 0.7-0.7 0.5-0.9-0.2-0.5-0.5-0.6-0.4-0.6 0-0.5 0.5-0.6 0-0.2-0.4 0.7-1 0.3-0.9 0.1-0.7-0.2-0.5-0.5-0.5-0.4-0.2 0-1.4 0-0.9-0.1-0.8 0.1-0.3 0.2 0.1 0.7-0.2 0.2-0.3 0.2-0.7 0.2-0.8 1.6-1.1 1.3-0.3 0.6 0.7 0.4 0.7 0.1 1 0.4 0.8 0.1 0.5z m2.7-19l0.2 0.4 0.4 0.2 0.1 0.3-0.5 0.3-0.3 0.2-0.8 0.2-0.3 0-0.5 0-0.2-0.2-0.2-0.2-0.3-0.2 0.1-0.6 0.1-0.2 0.2-0.1 0.5-0.1 0.2-0.1 0.1-0.4 0-0.5-0.2-0.9 0.2-0.9 0.5 0 0.6 0.5 0.5 0.7 0.2 0.4-0.2 0.3-0.3 0.4-0.1 0.5z m-11.9-5.2l0.3 0.1 0.3 0.6-0.1 0.6-0.3 0.4-0.7 0.1-0.5-0.4-0.1-1.1-0.4-0.4 0-0.2 0.4 0 0.7 0.1 0.4 0.2z m22.5-11.1l0.2 0.3 0.5 1.6-0.5 0.1-0.4-0.5-0.2-0.6-0.1-0.3-0.3-0.1-0.4-0.1-0.3-0.2-0.3-0.3-0.1-0.2-0.2-0.2-0.5-0.1-0.1-0.2 0.3-0.6 0.4-0.6 0.2-0.2 1 0 0.3 0.1-0.2 0.5 0.7 1.4 0 0.2z m1.8-6.8l0 0.1 0 0.1 0 0.1-0.2 0.6 0 0.2 0.2 1 0 0.5-0.3 0.4-0.2-0.2-0.3-0.4-0.3-0.5-0.2-0.4 0-0.4 0.1-0.6 0.1-0.5 0.2-0.3 0.3-0.1 0.2 0 0.3 0.1 0.1 0.3z m-10.8-23.3l0.2 0.3-0.2 0.5-0.1 1.5-0.1 0.7-0.2 0.3-0.5 0.5-0.1 0.2-0.1 0.4 0.1 0.3-0.1 0.3-0.3 0.2-0.4-2.1 0.1-0.3 0.1-0.4 0.2-1.6 0-0.5 0.3-0.3 0.2-0.3 0.2-0.2 0.3 0 0.1 0.1 0.2 0.1 0.1 0.1 0 0.2z m9.3-9.3l0.7 0.4 0.1 0.3-0.6 1.1-0.2 0.8 0 1.9-0.1 0.9-0.3 1.2-0.5 0.9-0.7-0.3-0.2 0-0.1 0.3-0.2 0.1-0.2-0.1-0.2-0.1-0.1-0.4 0.1-0.7 0-0.4-0.3 0 0 0.7-0.5-0.1-0.3 0.5 0 0.6 0.1 0.5 0.6 0.6 0.1 0.3-0.1 0.3-0.3 0.5-0.2 0 0-0.5-0.2-0.3-0.3 0-0.4 0 0 0.2-0.7 1.3 0 0.3-0.1 0.2 0 0.1 0.2 0.2 0.4 0.2 0.2-0.2 0.3-0.4 0.3 0.1 0.1 0.3 0.1 0.3 0 0.1 0.3 0.1 0.7 0.7-0.1 0.5 0.1 0.7 0.1 0.6-0.4 0.6 0.5 0.6 0.3 0.6 0.2 0.6 0 0.7-0.4 1.4-0.1 0.8 0.5 1 0.1 0.8-0.1 1.4-0.2 0.4-0.5 0.4-0.3 0.5 0.4 0.2-0.2 0.4-0.4 0.3-0.3 0.2-0.1 0.6-0.2 0-0.1-0.4-0.3-0.3-0.2-0.2-0.4-0.2 0.1 0.2 0.1 0.5-0.8 0-0.8 0 0 0.1 0.2 0.4 0.3 0.9 0.2 0.2 0.4 0.1 0.3 0.2 0.3 0.3-0.1 0.4 0.4 0.2 0 0.1-0.3 0.2-0.3 0.1-0.2 0.3-0.2 0 0 0.1 0 0.2 0.2 0.3 0.2 0.1 0.2 0.2 0 0.5-0.1 0.2-0.3 0.2-0.2 0.3 0.1 0.4 0.2 0.2 0.1 0.3 0 0.3-0.1 0.1-0.5 0 0 0.5-0.3 0.4-0.6 0.4-0.4 0.5 0.2 0.4 0 0.2-0.3 0.1-0.5 0.4 0 0.2-0.2 0.2-0.5 0.1-0.4 0-0.4 0.3 0.3 0.4 0.8 0.8-0.4-0.1-0.3 0.1-0.2 0.1-0.1 0.3 0.2 0-0.6 0.8-0.1 0.4-0.1 0.6 0 2.5 0.2 0 0.1-1 0.1-0.6 0.3-0.3 0.4 0.1 0.3 0.1 0.3 0.4 0.1 0.7-0.1 1-1.1 4.6-0.1 0.2-0.6 0.1-0.4 0.2-0.9 1-0.2 0.3 0 0.4 0 0.6 0.1 0.1 0.3 0 0.3-0.1 0.1-0.2 0-1.1 0.1 0 0.3 0.1 0.2 0.1-0.1-0.6 0.2-0.3 0.3 0 0.4 0.3 0.1 0.3 0.1 1 0 0.3-0.2 0.2-0.3 0.4-0.1 0.3 0 0.9-0.3 1-0.3 0.5-0.2 0.4-0.1-0.4-0.2-0.1-0.3 0-0.2-0.1-0.9-1-0.1-0.2 0-0.3 0-0.3-0.3-0.1-0.4-0.1-0.2-0.4-0.1-0.4 0-0.3 0.2-0.2 0.2-0.1 0.3 0 0.1-0.3-0.2-0.2-0.3-0.1-0.4-0.1-0.1-0.3 0-0.4-0.2-0.5 0-0.4-0.1-0.4-0.3 0-0.2 0.1-0.2 0.1-0.5-0.4-0.1-0.4 0.2-1.4 0-1.2-0.1-0.2-0.2-0.1-0.3-0.1-0.3-0.2-0.1 0-0.1 0-0.1-0.1 0-0.2 0-0.1 0.1-0.1 0.1 0 0.2-0.9 0.7-1.1 0.2 0 0.2 0.1 0.4 0.7 0.1 0.2 0.2 0.1 0.4-0.1-0.2 0.4 0.1 0.4 0.2 0.1 0.1-0.2 0.1-1.7 0.1-0.4 0-0.4-0.2-0.5 0-0.4 0.1-0.4 0.3-0.7 0.2-0.3-0.1-3 0.2-0.6 0.6-1.3 0.4-0.6 0.3 0.4 0.2 0 0.2-0.5 0.3-0.3 0.2 0.2 0.1 0.7-0.2 0.6 0 0.2 0.3 0.1 0.2 0 0-0.1 0.1-0.1 0.1 0 0.5 0 0.2 0 0.5-0.3 0.2-0.2 0.1-0.3-0.3-1.2-0.2-0.1-0.3-0.1-0.1-0.2-0.1-0.1 0-0.4 0.1 0.1 0.5-0.1 0.3-0.1 0.1-0.1 0-0.4-0.2-0.3-0.2-0.1-0.7 0-0.7-0.2-0.3-0.6-0.1-0.7 0.1-7.1 0.2-0.4 0.5-0.6 0.1-0.3 0.2-0.2 0.1 0 0.5 0 0.1-0.1 0.1-0.3-0.2-0.2-0.3 0-0.3-0.2-0.2-0.5-0.1-2-0.2-1.4 0.1-0.4 0.2-0.2 0.3-0.2 0.2-0.3 0.6 0.1 0.4-0.5 0.3-0.8 0.1-0.6 0-1.6 0.4-0.8 0.2-0.5-0.1-0.2-0.7-0.3 0-0.8 0.6-1.7 0.6-1 0.1-0.2 0.1-0.1-0.1-0.2-0.4-0.4-0.1-0.2 0.3-0.4-0.1-0.6 0-0.6 0.6-0.3 0-0.2-0.4-1.4 0.2-0.4 0-0.2-0.4-0.4 0.2-0.6 1.1-1.5 0.1-0.2 0.1-0.4 0.1-0.3-0.1-0.7 0-0.2 0.2-0.4 0.1 0 0.3-0.3 0.7-0.7 0.1-0.3 0.1-0.3 0-0.5 0.1-0.2 0.3-0.2 0.5-0.1 0.2-0.1 0.3 0.2 0.1 0.1 0.2 0 0.2-0.1-0.1-0.2-0.1-0.1 0.1-0.2 0.1-0.3 0.2 0.3 0.2 0 0.2 0 0.3-0.1 0.3 0.1 0.4 0.9-0.3 1 0 1 0.1 1.9 0.2 0 0.3-0.1 0.1-0.1 0 0.5-0.6 0.4-0.2 0.4-0.1 0.4-0.4 0.3-0.5 0.2-0.4 0.3 0-0.5-0.2-0.3-0.4 0-0.2 0.3 0.1 0.5 0.3 0.4 0.4 0.2 0.6-0.2 0.3 0.3 0.5 0.7z m-0.4-11.5l0.1 0.2 0.3 0.6-0.9-0.2-0.6-0.3-0.3-0.3 0.9-0.4 0.4 0 0.1 0.4z m-121.2-242.2l0.5 0.2 0.4 0.3 0.3 0.4 0 0.6-0.1 0.5-0.4 0.1-0.5-0.1-0.5 0.2-0.7-0.2-0.2-1.5 0.3-1.1 0.9 0.6z m-23.9-3.5l1.2-3.2 0.8-1.6 0.8-0.3 0.6 3.3-0.1 1.8-0.9 0.7 0.3 0.8 0.1 0.5-0.2 0.4-0.3 0.1-0.3 0-0.8-0.3-0.8 0-0.4-0.2-0.2-0.5 0-0.3 0-0.4 0.2-0.8z m17.1-6.7l0.4-0.2 0.3 0.2 0.3 0.4-0.2 0.5-0.3 0.8-0.2 0.7-0.1 1.8-0.2-0.2-1.1-0.3-0.2-0.1-0.1-0.2-0.1-0.5-0.1-0.2 0.1-0.3 0.4-0.8 0.5-0.9 0.6-0.7z m-16.2 2.2l-0.3-0.2 0-0.5 0.1-0.6 0.1-0.4 0.2-0.5 0.3-0.5 0.3-0.3 0.4 0 0.4 0.8-0.2 1-0.6 0.9-0.7 0.3z m-462.8 335.3l0-0.6 0.2-0.6 0.2-0.3 0.1-0.1 0.2-0.3 0.1-0.1 0 0.4-0.3 0.8-0.5 0.8z m17.9-13.4l0.1 0 0.1 0 0 0.1 0 0.1-0.1 0.1-0.1 0.1 0 0.5-0.1 0.4-0.2 0.9-0.1 0-0.1-0.4 0-0.1 0.1-0.6 0.4-1.1z"
                  fill="rgba(50, 116, 17, 0.04)"
                  stroke="#327411"
                  stroke-width="2.0"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition-all duration-500 hover:fill-[#327411]/[0.09] hover:stroke-opacity-95 hover:stroke-[2.2px]"
                />
              </svg>

              <!-- Pulsing State Hubs (Geographically Precise Coordinates) -->
              
              <!-- 1. Punjab -->
              <div class="absolute left-[30.0%] top-[21.4%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <span class="absolute -left-0.5 -top-0.5 size-4 animate-ping rounded-full bg-[#327411]/25"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Punjab</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>72 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>4 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 2. Haryana -->
              <div class="absolute left-[33.5%] top-[25.8%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <span class="absolute -left-0.5 -top-0.5 size-4 animate-ping rounded-full bg-[#327411]/25"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Haryana</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>58 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>3 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 3. Rajasthan -->
              <div class="absolute left-[22.9%] top-[33.5%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Rajasthan</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>45 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>3 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 4. Gujarat -->
              <div class="absolute left-[12.3%] top-[47.8%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <span class="absolute -left-0.5 -top-0.5 size-4 animate-ping rounded-full bg-[#327411]/25"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Gujarat</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>65 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>4 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 5. Maharashtra -->
              <div class="absolute left-[31.1%] top-[59.9%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <span class="absolute -left-0.5 -top-0.5 size-4 animate-ping rounded-full bg-[#327411]/25"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Maharashtra</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>80 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>5 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 6. Madhya Pradesh -->
              <div class="absolute left-[40.5%] top-[47.8%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Madhya Pradesh</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>52 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>3 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 7. Uttar Pradesh -->
              <div class="absolute left-[48.8%] top-[32.4%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <span class="absolute -left-0.5 -top-0.5 size-4 animate-ping rounded-full bg-[#327411]/25"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Uttar Pradesh</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>95 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>6 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 8. Bihar -->
              <div class="absolute left-[62.9%] top-[33.5%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Bihar</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>40 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>2 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 9. West Bengal -->
              <div class="absolute left-[70.0%] top-[42.3%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">West Bengal</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>48 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>3 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 10. Odisha -->
              <div class="absolute left-[57.0%] top-[53.3%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Odisha</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>35 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>2 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 11. Assam -->
              <div class="absolute left-[86.4%] top-[30.2%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Assam</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>22 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>1 Regional Hub</p>
                  </div>
                </div>
              </div>

              <!-- 12. Himachal Pradesh -->
              <div class="absolute left-[34.7%] top-[15.9%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Himachal Pradesh</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>18 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>1 Regional Hub</p>
                  </div>
                </div>
              </div>

              <!-- 13. Uttarakhand -->
              <div class="absolute left-[41.7%] top-[19.2%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Uttarakhand</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>20 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>1 Regional Hub</p>
                  </div>
                </div>
              </div>

              <!-- 14. Telangana -->
              <div class="absolute left-[42.9%] top-[63.2%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Telangana</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>42 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>2 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 15. Andhra Pradesh -->
              <div class="absolute left-[46.4%] top-[70.9%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Andhra Pradesh</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>55 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>3 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 16. Karnataka -->
              <div class="absolute left-[34.7%] top-[76.4%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <span class="absolute -left-0.5 -top-0.5 size-4 animate-ping rounded-full bg-[#327411]/25"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Karnataka</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>60 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>4 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 17. Tamil Nadu -->
              <div class="absolute left-[41.7%] top-[87.4%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Tamil Nadu</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>50 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>3 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 18. Kerala -->
              <div class="absolute left-[35.8%] top-[87.4%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Kerala</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>28 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>2 Regional Hubs</p>
                  </div>
                </div>
              </div>

              <!-- 19. Jammu & Kashmir -->
              <div class="absolute left-[35.8%] top-[8.2%] group/hub cursor-pointer" aria-haspopup="true">
                <span class="absolute -left-1.5 -top-1.5 size-6 animate-ping rounded-full bg-[#327411]/15 duration-1000"></span>
                <span class="absolute -left-0.5 -top-0.5 size-4 animate-ping rounded-full bg-[#327411]/25"></span>
                <div class="relative size-3 rounded-full border-2 border-white bg-[#327411] shadow-md transition-transform duration-300 group-hover/hub:scale-125"></div>
                <div class="absolute bottom-5 left-1/2 z-30 w-44 -translate-x-1/2 scale-95 rounded-xl border border-white/40 bg-white/75 p-3 shadow-xl backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover/hub:scale-100 group-hover/hub:opacity-100">
                  <p class="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-[#111]">Jammu & Kashmir</p>
                  <div class="mt-1.5 space-y-0.5 font-['Plus_Jakarta_Sans'] text-[10px] text-[#555]">
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>32 Partners</p>
                    <p class="flex items-center gap-1.5"><span class="size-1 rounded-full bg-[#327411]"></span>2 Regional Hubs</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Legend Overlay -->
            <div
              class="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/75 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 group-hover:bg-white"
            >
              <div class="flex items-center gap-3">
                <span class="relative flex size-2.5">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#327411] opacity-75"></span>
                  <span class="relative inline-flex size-2.5 rounded-full bg-[#327411]"></span>
                </span>
                <span class="font-['Plus_Jakarta_Sans'] text-[12px] font-semibold text-[#111]">Active Feed Distribution Network</span>
              </div>
              <span class="font-['Plus_Jakarta_Sans'] text-[11px] font-medium text-[#666]">19 States Served</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="knowledge"
        class="mx-auto max-w-[1480px] px-5 py-20 sm:px-10 lg:px-16 lg:py-36 xl:px-24"
      >
        <div class="mb-12 flex items-end justify-between">
          <div>
            <p
              class="text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
            >
              Knowledge centre / 08
            </p>
            <h2 class="mt-5 text-4xl font-[800] tracking-[-0.03em] sm:text-5xl">
              Practical feed science, plainly shared.
            </h2>
          </div>
          <a
            href="#"
            class="hidden items-center gap-2 text-sm font-medium text-[#327411] sm:flex"
          >
            View all articles
            <iconify-icon
              icon="solar:arrow-right-linear"
              stroke-width="1.5"
            ></iconify-icon>
          </a>
        </div>

        <div class="grid gap-5 lg:grid-cols-12">
          <article class="group lg:col-span-7">
            <a href="#" class="block">
              <div class="overflow-hidden rounded-[1.75rem]">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"
                  alt="Green fodder and sustainable farm nutrition"
                  loading="lazy"
                  class="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div class="mt-5 flex gap-5">
                <span class="pt-1 text-xs text-[#666666]">Guide · 8 min</span>
                <div>
                  <h3
                    class="text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
                  >
                    How to build a balanced dairy ration and supplement plan through seasonal fodder changes.
                  </h3>
                  <p class="mt-3 text-sm text-[#666666]">
                    A practical framework for maintaining feed nutrition consistency all year round.
                  </p>
                </div>
              </div>
            </a>
          </article>

          <div class="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <article class="group border-t border-[#E8E8E8] pt-5">
              <a href="#" class="grid grid-cols-3 gap-5">
                <img
                  src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                  alt="Healthy cattle in pasture"
                  loading="lazy"
                  class="aspect-square w-full rounded-2xl object-cover"
                />
                <div class="col-span-2">
                  <span class="text-xs text-[#327411]">
                    Animal health · 6 min
                  </span>
                  <h3
                    class="mt-3 text-xl font-bold leading-tight tracking-tight group-hover:text-[#327411] transition-colors duration-300"
                  >
                    Five early signs of mineral deficiency in dairy cattle — and the right mineral mixture to correct it.
                  </h3>
                </div>
              </a>
            </article>
            <article class="group border-t border-[#E8E8E8] pt-5">
              <a href="#" class="grid grid-cols-3 gap-5">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&amp;fit=crop&amp;w=500&amp;q=80"
                  alt="Productive agricultural landscape"
                  loading="lazy"
                  class="aspect-square w-full rounded-2xl object-cover"
                />
                <div class="col-span-2">
                  <span class="text-xs text-[#327411]">
                    Farm economics · 5 min
                  </span>
                  <h3
                    class="mt-3 text-xl font-bold leading-tight tracking-tight group-hover:text-[#327411] transition-colors duration-300"
                  >
                    Why feed conversion ratio matters far more than feed price per bag.
                  </h3>
                </div>
              </a>
            </article>
            <article class="group border-t border-[#E8E8E8] pt-5">
              <a href="#" class="grid grid-cols-3 gap-5">
                <div
                  class="grid aspect-square w-full place-items-center rounded-2xl bg-[#327411]"
                >
                  <iconify-icon
                    icon="solar:play-circle-linear"
                    width="38"
                    stroke-width="1.5"
                  ></iconify-icon>
                </div>
                <div class="col-span-2">
                  <span class="text-xs text-[#327411]">
                    Field notes · 12 min
                  </span>
                  <h3
                    class="mt-3 text-xl font-bold leading-tight tracking-tight group-hover:text-[#327411] transition-colors duration-300"
                  >
                    A poultry &amp; ruminant nutritionist answers common questions on gut and rumen health.
                  </h3>
                </div>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="px-4 pb-4">
        <div
          class="relative mx-auto max-w-[1480px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#327411] via-[#002144] to-[#002144] px-5 py-20 text-center text-white sm:px-10 lg:py-28"
        >
          <div
            class="absolute -left-24 -top-24 size-80 rounded-full border-[3rem] border-white/5"
          ></div>
          <div
            class="absolute -bottom-32 -right-20 size-96 rounded-full border-[4rem] border-[#327411]/15"
          ></div>
          <div class="relative mx-auto max-w-4xl">
            <p
              class="text-xs font-medium uppercase tracking-[0.18rem] text-[#327411]"
            >
              Better feed starts here
            </p>
            <h2
              class="mt-6 text-4xl font-[900] leading-[0.94] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
            >
              Feed a more productive farm.
            </h2>
            <p
              class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70"
            >
              Speak with a FeedRani animal nutrition specialist, request a feed trial, or locate your nearest authorised feed dealer.
            </p>
            <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+911800000000"
                class="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#002144] transition-transform hover:-translate-y-1"
              >
                <iconify-icon
                  icon="solar:phone-calling-linear"
                  width="20"
                  stroke-width="1.5"
                ></iconify-icon>
                Talk to a nutritionist
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-medium transition-colors hover:bg-white hover:text-[#002144]"
              >
                Find your nearest feed dealer
                <iconify-icon
                  icon="solar:map-point-linear"
                  width="20"
                  stroke-width="1.5"
                ></iconify-icon>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Wave SVG Separator for Footer (inspired by Henraajh Feeds) -->
    <div class="w-full overflow-hidden leading-none bg-white -mt-2">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[40px] text-[#002144] fill-current">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,17,83.63,24.47,163.6,45.47,243.6,59.34,321.39,56.44Z"></path>
      </svg>
      <!-- FAQ Accordion Section -->
      <section id="faq" class="relative z-10 border-t border-white/10 bg-[#00152e] py-20 text-white">
        <div class="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold uppercase tracking-widest text-[#8ec44a]">Got Questions?</span>
            <h2 class="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p class="mt-3 text-slate-300 text-sm">
              Everything you need to know about FeedRani scientific livestock feeds, dealership programs, and feeding practices.
            </p>
          </div>

          <div class="space-y-4 max-w-4xl mx-auto">
            <details class="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between font-bold text-white text-base">
                <span>What makes FeedRani animal feed superior in scientific nutrition?</span>
                <span class="ml-4 shrink-0 text-[#8ec44a] transition-transform duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <p class="mt-4 text-sm leading-relaxed text-slate-300 border-t border-white/10 pt-4">
                FeedRani feeds are formulated by specialized veterinary nutritionists utilizing high-digestibility ingredients, organic trace minerals, phytase enzymes, and mycotoxin binders to deliver maximum Feed Conversion Ratio (FCR) and immunity.
              </p>
            </details>

            <details class="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between font-bold text-white text-base">
                <span>How can I become an authorized FeedRani distributor or dealer?</span>
                <span class="ml-4 shrink-0 text-[#8ec44a] transition-transform duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <p class="mt-4 text-sm leading-relaxed text-slate-300 border-t border-white/10 pt-4">
                You can apply for dealership support by clicking the "Become a Dealer" button on our header or reaching our sales team directly at +91 7544000912 / care@feedrani.in. We offer competitive dealer margins, logistics support, and marketing assistance.
              </p>
            </details>

            <details class="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between font-bold text-white text-base">
                <span>What product categories does FeedRani offer?</span>
                <span class="ml-4 shrink-0 text-[#8ec44a] transition-transform duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <p class="mt-4 text-sm leading-relaxed text-slate-300 border-t border-white/10 pt-4">
                FeedRani manufactures high-performance feeds across 4 major livestock divisions: Poultry Feed (Layer &amp; Broiler), Aqua &amp; Fish Feed (Floating Pellets), Cattle &amp; Dairy Feed (Lactation &amp; Bypass Fat), and Goat, Swine &amp; Mineral Mixtures.
              </p>
            </details>

            <details class="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between font-bold text-white text-base">
                <span>Are FeedRani feeds tested for safety and quality standards?</span>
                <span class="ml-4 shrink-0 text-[#8ec44a] transition-transform duration-300 group-open:-rotate-180">▼</span>
              </summary>
              <p class="mt-4 text-sm leading-relaxed text-slate-300 border-t border-white/10 pt-4">
                Yes, every batch undergoes rigorous Near-Infrared (NIR) chemical testing, toxin screening, and moisture verification in ISO 9001 certified manufacturing facilities to ensure safety and consistent performance.
              </p>
            </details>
          </div>
        </div>
      </section>

      <!-- Schema.org Structured Data (FAQPage Schema) -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes FeedRani animal feed superior in scientific nutrition?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FeedRani feeds are formulated by specialized veterinary nutritionists utilizing high-digestibility ingredients, organic trace minerals, phytase enzymes, and mycotoxin binders to deliver maximum Feed Conversion Ratio (FCR) and immunity."
            }
          },
          {
            "@type": "Question",
            "name": "How can I become an authorized FeedRani distributor or dealer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can apply for dealership support by clicking the 'Become a Dealer' button on our header or reaching our sales team directly at +91 7544000912 / care@feedrani.in. We offer competitive dealer margins, logistics support, and marketing assistance."
            }
          },
          {
            "@type": "Question",
            "name": "What product categories does FeedRani offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FeedRani manufactures high-performance feeds across 4 major livestock divisions: Poultry Feed (Layer & Broiler), Aqua & Fish Feed (Floating Pellets), Cattle & Dairy Feed (Lactation & Bypass Fat), and Goat, Swine & Mineral Mixtures."
            }
          },
          {
            "@type": "Question",
            "name": "Are FeedRani feeds tested for safety and quality standards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, every batch undergoes rigorous Near-Infrared (NIR) chemical testing, toxin screening, and moisture verification in ISO 9001 certified manufacturing facilities to ensure safety and consistent performance."
            }
          }
        ]
      }
      <\/script>

    <footer
      class="bg-[#002144] px-5 pb-8 pt-12 text-white sm:px-10 lg:px-16 lg:pt-16 xl:px-24"
    >
      <div class="mx-auto max-w-[1480px]">
        <div class="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-12">
          <!-- Column 1: About and Socials -->
          <div class="lg:col-span-5">
            <a href="#" class="flex items-center gap-3">
              <img
                src="/feedrani-logo.png"
                alt="FeedRani Agricultural Logo"
                loading="lazy"
                class="h-14 w-14 shrink-0 rounded-full bg-white p-1 object-contain shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
              />
              <span class="flex flex-col leading-none">
                <span class="font-['Plus_Jakarta_Sans'] text-[26px] font-extrabold tracking-tight text-white">Feed<span class="text-[#8ec44a]">Rani</span></span>
                <span class="mt-1.5 font-['Plus_Jakarta_Sans'] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Scientific Feed. Healthier Livestock.</span>
              </span>
            </a>
            <p class="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              FeedRani Feeds &amp; Nutrition Private Limited is a leading scientific feed manufacturer. We formulate high-performance poultry, cattle, aqua, and swine feed to support animal health, FCR, and farm profitability across Bihar and India.
            </p>
            <div class="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                class="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] transition-all duration-300 hover:bg-[#327411] hover:text-white hover:border-[#327411]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(50,116,17,0.3)]"
              >
                <iconify-icon
                  icon="ri:facebook-fill"
                  width="18"
                ></iconify-icon>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                class="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] transition-all duration-300 hover:bg-[#327411] hover:text-white hover:border-[#327411]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(50,116,17,0.3)]"
              >
                <iconify-icon
                  icon="ri:twitter-x-fill"
                  width="18"
                ></iconify-icon>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                class="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] transition-all duration-300 hover:bg-[#327411] hover:text-white hover:border-[#327411]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(50,116,17,0.3)]"
              >
                <iconify-icon
                  icon="ri:youtube-fill"
                  width="18"
                ></iconify-icon>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                class="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] transition-all duration-300 hover:bg-[#327411] hover:text-white hover:border-[#327411]/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(50,116,17,0.3)]"
              >
                <iconify-icon
                  icon="ri:linkedin-fill"
                  width="18"
                ></iconify-icon>
              </a>
            </div>
          </div>

          <!-- Columns 2, 3, 4: Quick Links -->
          <div
            class="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3 lg:col-span-7"
          >
            <div>
              <h3
                class="mb-5 text-xs font-bold uppercase tracking-[0.14rem] text-white/40"
              >
                Explore Links
              </h3>
              <ul class="space-y-3 text-white/70">
                <li><a href="#about" class="hover:text-[#8ec44a] transition-colors">About FeedRani</a></li>
                <li><a href="#science" class="hover:text-[#8ec44a] transition-colors">Why Choose Us</a></li>
                <li><a href="#science" class="hover:text-[#8ec44a] transition-colors">Vision &amp; Mission</a></li>
                <li><a href="#science" class="hover:text-[#8ec44a] transition-colors">Quality Standards</a></li>
                <li><a href="#science" class="hover:text-[#8ec44a] transition-colors">Manufacturing</a></li>
                <li><a href="#contact" class="hover:text-[#8ec44a] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3
                class="mb-5 text-xs font-bold uppercase tracking-[0.14rem] text-white/40"
              >
                Product Range
              </h3>
              <ul class="space-y-3 text-white/70">
                <li><a href="#products" class="hover:text-[#8ec44a] transition-colors">Cattle &amp; Dairy Feed</a></li>
                <li><a href="#products" class="hover:text-[#8ec44a] transition-colors">Poultry Feed Line</a></li>
                <li><a href="#products" class="hover:text-[#8ec44a] transition-colors">Aqua &amp; Fish Feed</a></li>
                <li><a href="#products" class="hover:text-[#8ec44a] transition-colors">Goat &amp; Swine Feed</a></li>
                <li><a href="#products" class="hover:text-[#8ec44a] transition-colors">Mineral Mixtures</a></li>
              </ul>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <h3
                class="mb-5 text-xs font-bold uppercase tracking-[0.14rem] text-white/40"
              >
                Contact Info
              </h3>
              <ul class="space-y-3.5 text-white/70">
                <li class="flex items-start gap-2.5">
                  <iconify-icon icon="solar:map-point-linear" width="18" class="text-[#8ec44a] shrink-0 mt-0.5"></iconify-icon>
                  <span>Khajekalan, Patna City, Bihar, 800008</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <iconify-icon icon="solar:letter-linear" width="18" class="text-[#8ec44a] shrink-0"></iconify-icon>
                  <a href="mailto:care@feedrani.in" class="hover:text-[#8ec44a]">care@feedrani.in</a>
                </li>
                <li class="flex items-center gap-2.5">
                  <iconify-icon icon="solar:phone-calling-linear" width="18" class="text-[#8ec44a] shrink-0"></iconify-icon>
                  <a href="tel:+917544000912" class="hover:text-[#8ec44a]">+91 7544000912</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p>© 2026 FeedRani Feeds &amp; Nutrition Private Limited. All Rights Reserved.</p>
            <p class="mt-1">
              Developed &amp; Maintained by
              <a
                href="https://www.webfloratechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#8ec44a] font-medium transition-colors duration-200 hover:underline"
                >Webflora Technologies</a
              >
            </p>
          </div>
          <div class="flex gap-5">
            <a href="#" class="transition-colors duration-200 hover:text-[#327411]">Privacy Policy</a>
            <a href="#" class="transition-colors duration-200 hover:text-[#327411]">Terms &amp; Conditions</a>
            <a href="#" class="transition-colors duration-200 hover:text-[#327411]">Quality Policy</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Floating Quick Enquiry Widget (inspired by Henraajh Feeds) -->
    <div class="fixed bottom-6 right-6 z-[100]">
      <!-- Trigger Button -->
      <button
        id="enquiryTrigger"
        class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#327411] to-[#002144] text-white shadow-[0_8px_30px_rgba(50,116,17,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(50,116,17,0.6)]"
        aria-label="Quick Enquiry"
      >
        <iconify-icon icon="solar:chat-line-linear" width="26"></iconify-icon>
      </button>

      <!-- Enquiry Box -->
      <div
        id="enquiryBox"
        class="absolute bottom-16 right-0 w-80 translate-y-4 scale-95 opacity-0 pointer-events-none rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 z-50 text-gray-800"
      >
        <div class="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
          <h5 class="font-['Space_Grotesk'] text-lg font-bold text-[#002144]">Quick Enquiry</h5>
          <button id="closeEnquiry" class="text-gray-400 hover:text-gray-600 transition-colors">
            <iconify-icon icon="solar:close-circle-linear" width="22"></iconify-icon>
          </button>
        </div>

        <form id="quickEnquiryForm" class="space-y-3.5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-xs font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:border-[#327411] focus:bg-white"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Mobile Number"
              required
              class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-xs font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:border-[#327411] focus:bg-white"
            />
          </div>
          <div>
            <select
              required
              class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-xs font-medium text-gray-800 outline-none transition-all focus:border-[#327411] focus:bg-white"
            >
              <option value="">Select Product Feed</option>
              <option value="cattle">Cattle &amp; Dairy Feed</option>
              <option value="poultry">Poultry Feed</option>
              <option value="aqua">Aqua &amp; Fish Feed</option>
              <option value="goat">Goat &amp; Swine Feed</option>
              <option value="mineral">Mineral Mixtures</option>
            </select>
          </div>
          <div>
            <textarea
              rows="3"
              placeholder="Your message..."
              class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-xs font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:border-[#327411] focus:bg-white"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full rounded-xl bg-gradient-to-r from-[#327411] to-[#002144] py-2.5 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(50,116,17,0.2)] transition-all hover:opacity-95"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>

    <script>
      const navbar = document.getElementById("navbar");
      const menuButton = document.getElementById("menuButton");
      const sideDrawer = document.getElementById("sideDrawer");
      const menuBackdrop = document.getElementById("menuBackdrop");
      const closeDrawerButton = document.getElementById("closeDrawerButton");

      window.addEventListener(
        "scroll",
        () => {
          const nav = navbar.querySelector("nav");
          if (window.scrollY > 80) {
            nav.style.backgroundColor = "rgba(255,255,255,0.94)";
            nav.style.boxShadow = "0 4px 30px rgba(0,0,0,0.08)";
            nav.style.borderColor = "rgba(0,0,0,0.06)";
          } else {
            nav.style.backgroundColor = "";
            nav.style.boxShadow = "";
            nav.style.borderColor = "";
          }
        },
        { passive: true },
      );

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              window.setTimeout(() => {
                entry.target.classList.remove(
                  "opacity-0",
                  "translate-y-5",
                  "translate-y-6",
                  "translate-y-8",
                );
                entry.target.classList.add("opacity-100", "translate-y-0");
              }, index * 70);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );

      document
        .querySelectorAll(".reveal")
        .forEach((element) => revealObserver.observe(element));

      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target;
            const target = Number(element.dataset.target);
            const suffix = element.dataset.suffix || "";
            const duration = 1500;
            const start = performance.now();

            const updateCounter = (time) => {
              const progress = Math.min((time - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              element.textContent = Math.floor(target * eased) + suffix;
              if (progress < 1) requestAnimationFrame(updateCounter);
            };

            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(element);
          });
        },
        { threshold: 0.5 },
      );

      document
        .querySelectorAll(".counter")
        .forEach((counter) => counterObserver.observe(counter));

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
          }
          try {
            if (href.startsWith("#") && href.length > 1) {
              const target = document.querySelector(href);
              if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }
          } catch (e) {
            // Ignore invalid query selector
          }
        });
      });
    <\/script>

    <!-- Sleek & Professional Floating WhatsApp Widget -->
    <a
      href="https://wa.me/919876543210?text=Hello%20FeedRani%2C%20I%20would%20like%20to%20inquire%20about%20your%20feed%20products."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FeedRani on WhatsApp"
      class="fixed bottom-6 right-6 z-[999] group flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:shadow-[0_14px_30px_rgba(37,211,102,0.5)] hover:-translate-y-1"
    >
      <div class="relative flex items-center justify-center">
        <!-- Subtle Pulse Ring -->
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40"></span>
        <iconify-icon icon="logos:whatsapp-icon" width="28" class="relative z-10"></iconify-icon>
      </div>
      <span class="hidden sm:inline font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-white pr-2">
        Chat with Us
      </span>
    </a>
  </body>
</html>
`,o=t();function s(){let e=(0,i.useMemo)(()=>{let e=a.match(/<body[^>]*>([\s\S]*)<\/body>/i),t=e?e[1]:a;return t=t.replace(/<header[\s\S]*?<\/header>/gi,``),t},[]);return(0,i.useEffect)(()=>{if(document.getElementById(`iconify-script`))window.Iconify&&window.Iconify.scan();else{let e=document.createElement(`script`);e.id=`iconify-script`,e.src=`https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js`,e.onload=()=>{window.Iconify&&window.Iconify.scan()},document.head.appendChild(e)}},[]),(0,o.jsxs)(`div`,{className:`min-h-screen bg-white font-['Plus_Jakarta_Sans'] text-[#0F172A] antialiased selection:bg-[#327411] selection:text-white`,children:[(0,o.jsx)(r,{}),(0,o.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e}})]})}export{s as component};