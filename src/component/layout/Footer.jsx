import { motion } from "framer-motion";
import Logo from "../../assets/logo.webp";
import codesincLogo from "../../assets/codesinc.png";
import PlayStoreBadge from "../../assets/images/play_store.png";
import AppStoreBadge from "../../assets/images/app_store.png";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Download Now", href: "#download" },
  { label: "License", href: "#license" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#service" },
  { label: "Help", href: "#help" },
  { label: "Contact", href: "#contact" },
];

const topRowLinks = navLinks.slice(0, 2);
const bottomRowLinks = navLinks.slice(2);

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-[#E1EEEF] font-jakarta"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-44 w-[min(78vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b3a66]/18 blur-3xl sm:h-52"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-30 -top-25 h-64 w-64 rounded-full bg-[#03989E]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-22.5 -right-25 h-28 w-28 rounded-full bg-white/45 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center md:gap-12">
          <div className="flex w-full flex-col items-start gap-6 md:max-w-2xl">
            <motion.img
              src={Logo}
              alt="Neiborz"
              className="h-auto w-20 sm:w-24"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
            />

            <nav aria-label="Footer links" className="w-full">
              <div className="flex w-full max-w-100 flex-col gap-3 text-[13px] font-medium leading-5 text-[#45555A] sm:text-sm">
                <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
                  {topRowLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block transition-colors duration-200 hover:text-[#03989E]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
                  {bottomRowLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block transition-colors duration-200 hover:text-[#03989E]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="flex w-full flex-col items-start gap-4 md:w-auto md:min-w-50 md:items-start">
            <p className="text-sm font-medium leading-5 text-[#1F2A2E] sm:text-base">
              Get the App
            </p>

            <div className="flex flex-col gap-3">
              <motion.a
                href="#app-store"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <img
                  src={AppStoreBadge}
                  alt="Download on the App Store"
                  className="h-9 w-auto sm:h-10"
                />
              </motion.a>

              <motion.a
                href="#play-store"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <img
                  src={PlayStoreBadge}
                  alt="Get it on Google Play"
                  className="h-9 w-auto sm:h-10"
                />
              </motion.a>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 backdrop-blur-md px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#03989E]/10 via-transparent to-[#0b3a66]/10 pointer-events-none" />

            {/* Left Text */}
            <p className="text-xs sm:text-sm text-[#45555A] font-medium">
              © {new Date().getFullYear()} Neiborz. All rights reserved.
            </p>

            {/* Right Branding */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition"
            >
              <span className="text-[11px] sm:text-xs text-[#45555A]">
                Powered by
              </span>

              <Link
                to="https://www.codes-inc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src={codesincLogo}
                  alt="Codesinc Solutions"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
