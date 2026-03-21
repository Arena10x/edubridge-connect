import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, Users } from "lucide-react";

const Countdown = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [seatsLeft] = useState(100);
  const [enrolled] = useState(0);

  return (
    <section className="section-padding py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-primary-foreground/80 text-sm font-medium mb-4">
            <Clock size={16} className="animate-pulse-glow" />
            Limited Time Offer
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
            Only{" "}
            <span className="tabular-nums inline-block min-w-[2ch]">{seatsLeft}</span>{" "}
            seats left for 10% discount
          </h3>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            Early registrations get an automatic 10% off. Once seats fill up, the offer ends.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
            <Users size={14} />
            <span className="tabular-nums">{100 - seatsLeft}</span> students already enrolled this week
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Countdown;
