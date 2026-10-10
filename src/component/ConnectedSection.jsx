import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import connectedImg from "../assets/images/Connected.webp";
import starImg from "../assets/images/star-05.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const bulletItems = [
  "Connect with people nearby instantly",
  "Discover local services and offers",
  "Buy & sell within your community",
  "Stay updated with events and news",
];

export default function ConnectedSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-8 lg:py-12 scroll-mt-24">
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="relative order-1 flex justify-center lg:justify-start"
        >
          <div
            className="absolute inset-0 -z-10 mx-auto max-w-130 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(3,152,158,0.09) 0%, rgba(3,152,158,0.02) 45%, transparent 75%)",
            }}
          />

          <motion.img
            src={connectedImg}
            alt="Connected community illustration"
            className="h-auto w-full max-w-130 select-none"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="order-2 max-w-xl lg:pl-4"
        >
          {/* Section Badge */}
          <motion.div
            variants={fadeUp(0.08)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03989E]/10 text-[#03989E] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <span>About Neiborz</span>
          </motion.div>

          <motion.h2
            variants={fadeUp(0.12)}
            className="max-w-lg text-[30px] font-bold leading-[130%] tracking-normal text-[#111827] sm:text-[28px] lg:text-[38px]"
          >
            Everything Around You,
            <span className="block text-[#03989E]">Connected in Real Time</span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            className="mt-4 max-w-xl font-normal text-[16px] leading-7 text-[#5C6C7B] lg:text-lg"
          >
            From chatting with neighbors to buying, selling, hiring, and
            discovering events — everything works together in one simple
            platform.
          </motion.p>

          <div className="mt-4 space-y-4 sm:mt-6">
            {bulletItems.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp(0.22 + index * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#03989E] text-white shadow-[0_8px_18px_rgba(3,152,158,0.22)]">
                  <img
                    src={starImg}
                    alt="Star icon"
                    className="h-auto w-3.5 object-contain"
                  />
                </span>
                <p className="text-[16px] font-normal leading-7 text-[#000000]  lg:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
