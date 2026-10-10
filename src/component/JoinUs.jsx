import { motion } from "framer-motion";
import JoinUsBg from "../assets/images/joinyour.jpg";
import JoinUsRight from "../assets/images/joinyour-right.webp";
import PlayStoreBadge from "../assets/images/play_store.png";
import AppStoreBadge from "../assets/images/app_store.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const JoinUs = () => {
  return (
    <section
      id="download"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(6, 17, 26, 0.92) 0%, rgba(6, 17, 26, 0.66) 28%, rgba(4, 20, 30, 0.45) 52%, rgba(0, 0, 0, 0) 74%), url(${JoinUsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-30 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#03989E]/20 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-0">
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-xl py-2 lg:py-16"
        >
          <motion.h2
            variants={fadeUp(0.16)}
            className="text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[48px]"
          >
            Join Your
            <span className="block">Neighborhood Today</span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.24)}
            className="mt-4 max-w-md text-[15px] leading-7 text-[#E5E7EB] sm:text-base font-normal"
          >
            Connect, discover, and get things done locally all in one app. From
            daily needs to community activities everything is just a tap away.
          </motion.p>

          <motion.div
            variants={fadeUp(0.34)}
            className="mt-8 flex flex-col gap-3"
          >
            <p className="text-sm font-medium text-white/90 sm:mr-1">
              Get the App
            </p>

            <div className="flex items-center gap-2.5">
              <motion.a
                href="#play-store"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="block"
              >
                <img
                  src={PlayStoreBadge}
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </motion.a>

              <motion.a
                href="#app-store"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="block"
              >
                <img
                  src={AppStoreBadge}
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="pointer-events-none flex justify-center self-end lg:justify-end"
        >
          <img
            src={JoinUsRight}
            alt="Neiborz app screens"
            className="h-auto w-full max-w-110 object-contain sm:max-w-125 lg:max-w-140"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
