import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center section-padding overflow-hidden pt-28 pb-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, hsl(168 55% 28%), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(38 88% 55%), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-8">
            <Sparkles size={14} className="text-accent" />
            Industry-Ready Skills at Affordable Pricing
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="gradient-text">CODE VICHAR</span>
          <br />
          <span className="text-foreground">× KODEABLE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Master C, Python, Java, Web & App Development, AI and Machine Learning — 
          taught by industry practitioners, priced for students.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#courses"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-heading font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Explore Courses
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-border text-foreground font-heading font-semibold text-base hover:bg-secondary transition-colors active:scale-[0.97]"
          >
            Register Now
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-center"
        >
          {[
            { value: "2,400+", label: "Students Enrolled" },
            { value: "6", label: "Industry Courses" },
            { value: "94%", label: "Completion Rate" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
