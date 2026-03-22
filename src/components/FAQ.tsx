import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What technologies will I learn in this course?",
    a: "At Code Vichar, students learn industry-relevant technologies including: C Programming for strong fundamentals, Python for automation and AI, Java with Data Structures & Algorithms (DSA) for interviews, Web Development (HTML/CSS/JS), App Development, and AI/ML fundamentals.",
  },
  {
    q: "Is this course suitable for beginners with no coding background?",
    a: "Yes. The program is beginner-friendly and designed for students who are completely new to programming. We start with basic concepts and gradually move to advanced technologies.",
  },
  {
    q: "What projects will I build during the course?",
    a: "Students build real-world projects such as responsive websites, web applications, mobile apps, automation tools using Python, DSA-based programs, and beginner AI/ML models.",
  },
  {
    q: "How long is the course duration?",
    a: "The duration depends on the specific program, but most run for 4 to 12 weeks with structured classes, assignments, and intensive project work.",
  },
  {
    q: "Are the classes live, recorded, or offline?",
    a: "Code Vichar provides both online (live instructor-led) and offline classes at our training center. Recorded sessions are also provided to all students for revision.",
  },
  {
    q: "Will I get doubt-solving support?",
    a: "Yes. Students can ask doubts during live classes and receive dedicated mentor support for clearing doubts throughout the entire duration of the course.",
  },
  {
    q: "Is there a community or group for students?",
    a: "Yes. Students are added to a private community group where they can interact with mentors, ask questions, and collaborate with fellow learners.",
  },
  {
    q: "Will I receive notes and practice assignments?",
    a: "Yes. Students receive comprehensive class notes, coding exercises, and practice assignments to strengthen their understanding of programming concepts.",
  },
  {
    q: "Will this course help me get a job or internship?",
    a: "The course focuses on industry-relevant skills and project development, which are essential for preparing students for internships and entry-level developer roles.",
  },
  {
    q: "Will I build a portfolio of real-world projects?",
    a: "Yes. Students complete multiple real-world projects that can be directly added to their GitHub portfolio and professional resume.",
  },
  {
    q: "Will Code Vichar provide placement assistance?",
    a: "We provide career guidance, interview preparation tips, and portfolio-building support to help students effectively explore internship and job opportunities.",
  },
  {
    q: "What system requirements are needed for the course?",
    a: "You need a laptop or desktop computer and a stable internet connection (for online classes). For offline classes, you can bring your laptop and we will help with software setup.",
  },
  {
    q: "Will I get access to recorded sessions if I miss a class?",
    a: "Yes. If you miss a live class, you will receive access to the recorded version so you can stay on track with the curriculum.",
  },
  {
    q: "How long will I have access to the course materials?",
    a: "Students get access to recordings and materials for a limited period after the course ends to ensure they have enough time to revise all concepts.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, debit cards, credit cards, and all major online payment methods for secure and easy transactions.",
  },
  {
    q: "Can I pay the course fee in installments?",
    a: "In some cases, installment options may be available. Please contact the Code Vichar team directly for more specific details regarding your program.",
  },
  {
    q: "Where are the offline classes conducted?",
    a: "Offline classes are held at the Code Vichar training center, providing a direct classroom environment for hands-on learning.",
  },
  {
    q: "What are the benefits of offline classes?",
    a: "Offline classes offer direct instructor interaction, faster doubt solving, better focus in a dedicated environment, and hands-on guidance during coding practice.",
  },
  {
    q: "Why should I choose Code Vichar over other institutes?",
    a: "We focus on practical coding skills, real-world projects, affordable education, and mentorship from experienced industry developers.",
  },
  {
    q: "Will I receive mentorship from industry developers?",
    a: "Yes. Students receive guidance from experienced developers who help them understand real-world industry standards and practices.",
  },
  {
    q: "Do you provide demo classes before enrollment?",
    a: "Yes. Code Vichar provides demo sessions so students can experience our teaching style and understand the course structure before committing.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="faq" className="section-padding py-24 sm:py-32" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our programs and learning experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-2xl px-6 border-none shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left text-base hover:no-underline py-5 transition-all">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-5 leading-relaxed">
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