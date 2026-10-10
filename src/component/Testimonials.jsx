import { motion } from "framer-motion";
import testimonialsImg from "../assets/images/testimonials-img.png";
import avatarImg from "../assets/images/hero-person.png";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

export default function Testimonials() {
  return (
    <section className="bg-white py-6 lg:py-8">
      <div >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT: Illustration */}
          <motion.div
            variants={fadeIn(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="order-1 lg:order-1"
          >
            <div className="rounded-r-4xl bg-[#E8F6F7] p-2 md:p-4">
              <img
                src={testimonialsImg}
                alt="Community members"
                className="w-125 h-auto block"
              />
            </div>
          </motion.div>

          {/* RIGHT: Testimonial content */}
          <motion.div
            variants={fadeIn(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="order-2 lg:order-2 px-4 py-2 sm:px-6 sm:py-4 lg:px-8"
          >
            <h3 className="md:text-3xl text-xl leading-16 font-semibold text-[#212121]">
              What Our Community Says
            </h3>

            <div className="md:mt-6 mt-3 flex items-start gap-4">
              <img
                src={avatarImg}
                alt="Samantha Sench"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-semibold text-[#0B1320]">
                  Samantha Sench
                </p>
                <p className="text-xs text-[#6B7280]">Riyadh</p>
              </div>
            </div>
            <p className="mt-4 max-w-md md:text-2xl text-md font-normal md:leading-12 text-[#212121]">
              I found a plumber and sold my old furniture within a day. Neiborz
              made everything so easy.
            </p>

            <div className="mt-6 flex items-center gap-4 text-[#03989E]">
              <button
                aria-label="previous"
                className="rounded-full border border-[#E6F3F3] bg-white p-2 shadow-sm"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#03989E"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                aria-label="next"
                className="rounded-full border border-[#E6F3F3] bg-white p-2 shadow-sm"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#03989E"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
