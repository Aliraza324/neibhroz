import { motion } from "framer-motion";
import {
  ShoppingBag,
  Briefcase,
  Calendar,
  Car,
  Home,
  Utensils,
} from "lucide-react";

const items = [
  {
    icon: ShoppingBag,
    title: "Neighborhood Marketplace",
    desc: "Buy and sell items locally with ease",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    desc: "Hire trusted workers near you",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    desc: "Schedule services quickly and easily",
  },
  {
    icon: Car,
    title: "Car Sharing",
    desc: "Share rides within your community",
  },
  {
    icon: Home,
    title: "Home Rentals",
    desc: "Find rooms and apartments locally",
  },
  {
    icon: Utensils,
    title: "Home-Cooked Food",
    desc: "Borrow and lend within your network",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-[#E3F3F3] py-10 lg:py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="md:text-center text-start max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeUp(0.02)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009A9A]/15 text-[#007A7A] text-xs font-semibold tracking-wider uppercase mb-3"
          >
            Key Features
          </motion.div>
          <motion.h2 variants={fadeUp(0.05)} className="text-2xl md:text-3xl font-bold text-[#111827]">
            Everything You Can Do with Neiborz
          </motion.h2>
          <motion.p variants={fadeUp(0.12)} className="mt-3 md:text-lg text-sm text-[#000000]">
            From daily services to community interactions Neiborz brings
            everything together in one simple app.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={fadeUp(0.1 + i * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 4, scale: 1.05 }}
                  className="w-12 h-12 flex items-center justify-center rounded-md bg-[#009A9A] shadow-[0_10px_22px_rgba(44,177,161,0.22)]"
                >
                  <Icon size={22} strokeWidth={1.8} className="text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="mt-4 md:text-2xl text-md font-medium text-[#000000]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-normal md:text-md text-sm text-[#414141] max-w-70.5">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
