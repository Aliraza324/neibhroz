import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroRightImg from "../assets/images/hero-right.webp";
import heroPersonImg from "../assets/images/hero-person.png";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <>
      <div className="w-full mx-auto">
        <section id="home" className="relative w-full min-h-[88vh] flex items-center bg-white font-jakarta scroll-mt-24">
          {/* ── Background gradient blob – top-left ── */}
          <div
            aria-hidden
            className="absolute top-0 left-0 w-[320px] h-55 rounded-l-sm background-[radial-gradient(ellipse_at_20%_30%,rgba(3,152,158,0.13)_0%,rgba(3,152,158,0.04)_55%,transparent_80%)] blur-3xl pointer-events-none"
          />

          {/* ── Background gradient blob – right (behind phones) ── */}
          <div
            aria-hidden
            className="absolute top-1/2 -right-30 w-150 h-150 rounded-full background-[radial-gradient(ellipse_at_60%_50%,rgba(3,152,158,0.12)_0%,rgba(200,240,240,0.18)_40%,transparent_72%)] blur-3xl pointer-events-none"
            style={{ transform: "translateY(-50%)" }}
          />
          {/* ── Main content grid ── */}
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center py-4 lg:py-6">
                {/* ── LEFT: Text content ── */}
                <div className="flex flex-col items-start order-1 lg:order-1">
                  {/* Headline */}
                  <motion.h1
                    variants={fadeUp(0.1)}
                    initial="hidden"
                    animate="visible"
                    className="font-semibold text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-tight text-[#111827] mb-0"
                  >
                    Your{" "}
                    <span style={{ color: "#03989E", display: "block" }}>
                      Neighborhood,
                    </span>
                    <span style={{ display: "block" }}>Connected in</span>
                    <span style={{ display: "block" }}>One App</span>
                  </motion.h1>

                  {/* Sub-copy */}
                  <motion.p
                    variants={fadeUp(0.25)}
                    initial="hidden"
                    animate="visible"
                    className="font-jakarta font-normal text-base leading-6 text-[#6B7280] max-w-md mt-6"
                  >
                    Chat with neighbors, buy &amp; sell, find services,
                    <br className="hidden sm:block" />
                    and stay connected — all in one trusted local app.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.a
                    variants={fadeUp(0.38)}
                    initial="hidden"
                    animate="visible"
                    href="#features"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 8px 28px rgba(3,152,158,0.38)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-9 inline-flex gap-2.5 bg-[#03989E] text-white font-jakarta font-medium text-base leading-6 py-3 px-7 rounded-lg"
                    style={{
                      textDecoration: "none",
                      transition: "box-shadow 0.25s ease",
                    }}
                  >
                    Explore Features
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.8,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight size={16} strokeWidth={2.3} />
                    </motion.span>
                  </motion.a>

                  {/* Social proof */}
                  <motion.div
                    variants={fadeUp(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="mt-6 flex aling-center gap-3"
                  >
                    {/* Avatar stack */}
                    <motion.div
                      variants={fadeUp(0.62)}
                      initial="hidden"
                      animate="visible"
                    >
                      <img
                        src={heroPersonImg}
                        alt="Community members"
                        className="w-24 h-auto block max-w-3xs"
                      />
                    </motion.div>

                    <p className="font-dm font-bold text-sm text-[#1B1C20] leading-10">
                      Trusted by growing local communities
                    </p>
                  </motion.div>
                </div>

                {/* ── RIGHT: Phone mockup group ── */}
                <div
                  className="order-2 lg:order-2 relative flex justify-center lg:justify-end"
                  style={{ minHeight: "300px" }}
                >
                  {/* Phones container with real image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    }}
                    className="relative w-full max-w-lg h-[300px] flex items-center justify-center"
                  >
                    <img
                      src={heroRightImg}
                      alt="Neiborz App - Three phone mockups"
                      className="w-full max-w-lg h-auto block"
                      style={{
                        filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.18))",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
