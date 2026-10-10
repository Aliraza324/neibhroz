import { motion } from "framer-motion";
import {
  MessageSquare,
  ShoppingBag,
  Calendar,
  Users,
  Megaphone,
} from "lucide-react";

const items = [
  {
    title: "Chat & Connect",
    body: "Talk to your neighbors, join conversations, and stay connected in real time.",
    icon: MessageSquare,
    color: "#F3E8FF",
    iconColor: "#2563EB",
  },
  {
    title: "Buy & Sell Locally",
    body: "Discover great deals or sell items within your neighborhood easily and safely.",
    icon: ShoppingBag,
    color: "#F3E8FF",
    iconColor: "#2563EB",
  },
  {
    title: "Local Services",
    body: "Find trusted service providers recommended by people around you.",
    icon: Users,
    color: "#FEE2E2",
    iconColor: "#EF4444",
  },
  {
    title: "Events & Activities",
    body: "Explore local events, meetups, and activities happening near you.",
    icon: Calendar,
    color: "#CCFBF1",
    iconColor: "#14B8A6",
  },
  {
    title: "News & Announcements",
    body: "Stay updated with important updates, alerts, and community news.",
    icon: Megaphone,
    color: "#F3E8FF",
    iconColor: "#2563EB",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

export default function TimelineSection() {
  return (
    <section id="service" className="bg-white py-8 lg:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#03989E]/10 text-[#03989E] text-xs font-semibold tracking-wider uppercase mb-3">
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
            Community Services Tailored for Every Neighbor
          </h2>
          <p className="mt-3 md:text-lg text-sm text-[#6B7280] max-w-2xl mx-auto">
            Neiborz brings your local community together — making it easy to
            connect, find trusted services, trade safely, and stay informed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-[110.5px] rounded-lg w-3 bg-[#03989E70] -translate-x-1/2" />

          <div className="space-y-8">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="relative flex items-center">
                  {/* LEFT */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isLeft
                        ? "md:pr-6 md:text-right"
                        : "md:pl-6 md:ml-auto md:text-left"
                    }`}
                  >
                    <motion.div
                      variants={fadeUp(i * 0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="inline-block text-left bg-white border border-[#F3F4F6] rounded-xl p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-10 w-16 items-center justify-center rounded-lg"
                          style={{ background: item.color }}
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.2}
                            color={item.iconColor}
                          />
                        </div>

                        <div>
                          <h3 className="md:text-2xl text-md font-bold text-[#1F2937]">
                            {item.title}
                          </h3>
                          <p className="mt-1 md:text-lg text-xs text-[#6B7280] font-jakarta">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="absolute hidden md:block top-0 left-3 md:left-1/2 -translate-x-1/2">
                    <div className="w-7 h-7 bg-[#03989E] rounded-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
