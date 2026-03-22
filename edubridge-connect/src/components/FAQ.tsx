import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who are the instructors?",
    a: "Our instructors are working professionals from top tech companies with 5+ years of industry experience. They bring real-world project knowledge into every session.",
  },
  {
    q: "What if I miss a class?",
    a: "No worries — Will Provide Extra classes. You can also ask questions asynchronously on our community forum.",
  },
  {
    q: "How do coupon codes work?",
    a: "Enter your coupon during registration. FIRST100 gives 15% off (first 100 students). TOP50 gives 50% off but is limited to 5 uses and only applied after successful payment verification.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes, we offer a 7-day no-questions-asked refund policy. If the course isn't the right fit, reach out within a week of purchase.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes, upon completion you receive a verified digital certificate that you can share on LinkedIn and your resume.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="faq" className="section-padding py-24 sm:py-32" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left text-sm hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
