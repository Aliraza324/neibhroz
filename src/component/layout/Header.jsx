import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Menu } from "lucide-react";
import Logo from "../../assets/logo.webp";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Service", href: "#service" },
];

const BRAND_COLOR = "#03989E";


export default function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const scrollToSection = (e, href) => {
    if (e) e.preventDefault();
    setActiveLink(href);
    setDrawerOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "#home");
      return;
    }

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    }
  };

  // Scroll spy to update active link on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 140;
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));

      if (window.scrollY < 100) {
        setActiveLink("#home");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveLink(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-17">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <img className="w-20 h-auto" src={Logo} alt="Logo" />
            </motion.div>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: isActive ? BRAND_COLOR : "#4B5563",
                      position: "relative",
                      textDecoration: "none",
                    }}
                    whileHover={{ color: BRAND_COLOR }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                    {/* Active underline indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          style={{
                            position: "absolute",
                            bottom: "-4px",
                            left: 0,
                            right: 0,
                            height: "2px",
                            background: BRAND_COLOR,
                            borderRadius: "99px",
                            transformOrigin: "left",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.a>
                );
              })}
            </nav>

            {/* ── CTA Button (desktop) ── */}
            <motion.a
              href="#download"
              onClick={(e) => scrollToSection(e, "#download")}
              className="hidden md:flex items-center gap-2 rounded-full px-5 py-2.5"
              style={{
                background: BRAND_COLOR,
                color: "#fff",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: `0 6px 24px ${BRAND_COLOR}55`,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              Download App
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.span>
            </motion.a>

            {/* ── Hamburger (mobile / tablet) ── */}
            <motion.button
              onClick={() => setDrawerOpen(true)}
              className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg"
              style={{ color: BRAND_COLOR, background: `${BRAND_COLOR}15` }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={2.2} />
            </motion.button>
          </div>
        </div>

        {/* ── Hairline border ── */}
        <div style={{ height: "1px", background: "#F3F4F6" }} />
      </motion.header>

      {/* ── Mobile / Tablet Drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(3px)" }}
            />

            {/* Drawer panel */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
              style={{
                width: "min(320px, 88vw)",
                background: "#fff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-17 border-b border-gray-100">
                <img className="w-20 h-auto" src={Logo} alt="Logo" />
                <motion.button
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-lg"
                  style={{ color: BRAND_COLOR, background: `${BRAND_COLOR}15` }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={2.2} />
                </motion.button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col px-4 pt-6 gap-1 flex-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeLink === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.06 + i * 0.07,
                        type: "spring",
                        stiffness: 300,
                        damping: 28,
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "13px 16px",
                        borderRadius: "10px",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: isActive ? BRAND_COLOR : "#374151",
                        background: isActive ? `${BRAND_COLOR}12` : "transparent",
                        textDecoration: "none",
                        transition: "background 0.2s, color 0.2s",
                      }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="drawerDot"
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: BRAND_COLOR,
                            flexShrink: 0,
                          }}
                        />
                      )}
                      {!isActive && <span style={{ width: 6, flexShrink: 0 }} />}
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <motion.div
                className="px-6 pb-8 pt-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="#download"
                  onClick={(e) => scrollToSection(e, "#download")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: BRAND_COLOR,
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    borderRadius: "99px",
                    padding: "13px 24px",
                    textDecoration: "none",
                    boxShadow: `0 4px 20px ${BRAND_COLOR}44`,
                  }}
                >
                  Download App
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Spacer so page content starts below fixed header ── */}
      <div style={{ height: "69px" }} />
    </>
  );
}