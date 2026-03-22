import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Terminal, Globe, Brain, Smartphone, Database } from "lucide-react";

const courses = [
  {
    name: "C with DSA",
    price: 999,
    icon: Terminal,
    badge: "Foundation",
    badgeClass: "bg-secondary text-secondary-foreground",
    description: "Master C programming and data structures from scratch.",
  },
  {
    name: "Python with DSA",
    price: 999,
    icon: Code,
    badge: "Popular",
    badgeClass: "badge-popular",
    description: "Python fundamentals with algorithmic problem solving.",
  },
  {
    name: "Java with DSA",
    price: 999,
    icon: Database,
    badge: "Enterprise",
    badgeClass: "bg-secondary text-secondary-foreground",
    description: "Object-oriented Java with core data structures.",
  },
  {
    name: "Web Development + AI",
    price: 2999,
    icon: Globe,
    badge: "AI Powered",
    badgeClass: "badge-ai",
    description: "Full-stack web dev enhanced with AI tools and workflows.",
  },
  {
    name: "AI & Machine Learning",
    price: 2499,
    icon: Brain,
    badge: "Trending",
    badgeClass: "badge-popular",
    description: "End-to-end ML pipeline: data, models, deployment.",
  },
  {
    name: "App Development + AI",
    price: 2999,
    icon: Smartphone,
    badge: "AI Powered",
    badgeClass: "badge-ai",
    description: "Build cross-platform apps with AI-assisted development.",
  },
];

const Courses = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="courses" className="section-padding py-24 sm:py-32">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Courses Built for Your Career
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Each course is designed with industry relevance, hands-on projects, and mentor support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.08 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-card rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${course.badgeClass}`}
                  >
                    {course.badge}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {course.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {course.description}
                </p>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-heading text-2xl font-bold text-foreground tabular-nums">
                      ₹{course.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <a
                    href="#register"
                    className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]"
                  >
                    Enroll
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
