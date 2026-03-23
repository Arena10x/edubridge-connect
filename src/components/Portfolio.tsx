import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone } from "lucide-react";

const projects = [
  {
    name: "GroFresh Web",
    type: "Web Platform",
    description: "A full-featured grocery storefront with category browsing, cart flows, and delivery-ready UX.",
    link: "https://grofresh-web.6amtech.com/",
    badge: "Ecommerce",
    icon: Globe,
  },
  {
    name: "eGrocer Web",
    type: "Web Platform",
    description: "Modern grocery marketplace with multilingual UX and a smooth, mobile-first shopping flow.",
    link: "https://egrocerweb.wrteam.me/?lang=en",
    badge: "Retail",
    icon: Globe,
  },
  {
    name: "SJMC App",
    type: "Android App",
    description: "A production Android experience designed for streamlined service requests and tracking.",
    link: "https://play.google.com/store/apps/details?id=com.app.SJMC&hl=en",
    badge: "Android",
    icon: Smartphone,
  },
  {
    name: "Today App",
    type: "iOS App",
    description: "A polished iOS experience focused on daily insights and engaging content delivery.",
    link: "https://apps.apple.com/ca/iphone/today",
    badge: "iOS",
    icon: Smartphone,
  },
  {
    name: "I-Invest",
    type: "iOS App",
    description: "Personal finance app built for saving goals, smart investing, and trust-first UX.",
    link: "https://apps.apple.com/us/app/i-invest-invest-save/id1381126486",
    badge: "Finance",
    icon: Smartphone,
  },
  {
    name: "Tracks by Truckoom",
    type: "iOS App",
    description: "Fleet tracking app with clean reporting views and operational status visibility.",
    link: "https://apps.apple.com/in/app/tracks-by-truckoom/id1608130603",
    badge: "Logistics",
    icon: Smartphone,
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="portfolio" className="section-padding py-24 sm:py-32">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Project Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A snapshot of real products and client outcomes delivered by our team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {project.badge}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {project.name}
                </h3>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {project.type}
                </div>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project
                    <span aria-hidden="true">?</span>
                  </a>
                  <div className="text-xs text-muted-foreground break-all">
                    {project.link}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
