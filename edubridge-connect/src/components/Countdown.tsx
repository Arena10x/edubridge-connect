import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";

const Countdown = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  // 1. Logic for the 24-hour timer (86400 seconds)
  const [secondsLeft, setSecondsLeft] = useState(86400); 

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // 2. Helper to format seconds into HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

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
            <Clock size={16} className="animate-pulse" />
            Limited Time Offer: Ends in <span className="font-mono font-bold text-primary-foreground">{formatTime(secondsLeft)}</span>
          </div>
          
          <h3 className="font-heading text-2xl sm:text-4xl font-bold text-primary-foreground mb-3">
            Get <span className="text-yellow-400">15% OFF</span> Original Price
          </h3>
          
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            Special offer for the first 100 students. Register within 24 hours to claim your discount!
          </p>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
            <Users size={14} />
            <span className="tabular-nums">94</span> students already enrolled this week
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Countdown;