import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Mehta",
    course: "Python with DSA",
    text: "The structured approach to DSA alongside Python made all the difference. I cleared two coding rounds within a month of completing the course.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    course: "Web Development with AI",
    text: "Learning to integrate AI tools into my web projects gave me an edge that no other bootcamp offered. The mentorship was outstanding.",
    rating: 5,
  },
  {
    name: "Sneha Singh",
    course: "AI & Machine Learning",
    text: "From understanding neural networks to deploying a model - this course covers the full pipeline. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    course: "Web Development with AI",
    text: "Built my first full-stack project with AI tools and got an internship offer within 6 weeks.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    course: "Java with DSA",
    text: "The problem sets were tough but the mentor feedback made them doable. My confidence in interviews shot up.",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    course: "C with DSA",
    text: "Daily practice sheets and doubt sessions helped me finally understand pointers and trees.",
    rating: 5,
  },
  {
    name: "Moubani Ghosh",
    course: "AI & Machine Learning",
    text: "Loved the focus on real datasets and deployment; my capstone is now on GitHub with a demo.",
    rating: 5,
  },
  {
    name: "Raj Bhattacharjee",
    course: "Python with DSA",
    text: "Consistent weekly mocks and roadmap kept me on track even with college exams.",
    rating: 5,
  },
  {
    name: "Neha Giri",
    course: "App Development + AI",
    text: "From UI to API integration, the hands-on approach made app development feel simple.",
    rating: 5,
  },
  {
    name: "Siddharth Goswami",
    course: "Web Development with AI",
    text: "The resume and portfolio guidance helped me land freelance work.",
    rating: 4,
  },
  {
    name: "Pooja Verma",
    course: "Python with DSA",
    text: "The way they connect DSA to real coding tasks made it click.",
    rating: 5,
  },
  {
    name: "Rahul Rai",
    course: "Java with DSA",
    text: "Interview patterns and mock rounds were exactly what I needed.",
    rating: 5,
  },
  {
    name: "Ishita Bose",
    course: "AI & Machine Learning",
    text: "The mentorship and review sessions were detailed; I finally understood model evaluation.",
    rating: 5,
  },
  {
    name: "Mehul Agarwal",
    course: "App Development + AI",
    text: "Great pacing and practical tasks. I shipped a working app for my final project.",
    rating: 5,
  },
  {
    name: "Divya Banerjee",
    course: "Python with DSA",
    text: "Doubt clearing was fast and the problem-solving sessions were genuinely helpful.",
    rating: 4,
  },
  {
    name: "Ramyani Roy",
    course: "AI & Machine Learning",
    text: "The project-based learning helped me understand how models behave in real-world data.",
    rating: 4,
  },
  {
    name: "Debariddhi Bose",
    course: "Python with DSA",
    text: "The weekly challenges kept me consistent and I finally feel confident in DSA basics.",
    rating: 5,
  },
  {
    name: "Kahini Ghosh",
    course: "Web Development with AI",
    text: "I learned to ship fast with AI tools and improved my portfolio within a month.",
    rating: 5,
  },
  {
    name: "Prithwish Ghosh",
    course: "C with DSA",
    text: "The fundamentals were taught clearly and the practice sheets were super helpful.",
    rating: 5,
  },
  {
    name: "Sujal Goswami",
    course: "Java with DSA",
    text: "Strong focus on problem-solving patterns. Mocks felt like real interviews.",
    rating: 4,
  },
  {
    name: "Kaustav Pal",
    course: "App Development + AI",
    text: "Built my first mobile app end-to-end. The mentors reviewed each milestone.",
    rating: 5,
  },
  {
    name: "Namrata Saha",
    course: "Python with DSA",
    text: "Clean explanations and a clear roadmap made it easy to stay on track.",
    rating: 5,
  },
  {
    name: "Rishikesh Singh",
    course: "Web Development with AI",
    text: "The capstone project guidance was great and I learned to deploy confidently.",
    rating: 5,
  },
  {
    name: "Sanjeev Singh",
    course: "Java with DSA",
    text: "The structured lessons helped me fix gaps in my core concepts quickly.",
    rating: 5,
  },
  {
    name: "Nishant Singh Rajput",
    course: "AI & Machine Learning",
    text: "The end-to-end ML pipeline sessions were the best part of the course.",
    rating: 4,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleScroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth * 0.9;
    trackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = event.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current || !isDragging.current) return;
    event.preventDefault();
    const x = event.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section id="testimonials" className="section-padding py-24 sm:py-32 bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real feedback from students who have transformed their careers.
          </p>
        </motion.div>

        <div className="flex items-center justify-between gap-3 mb-6">
          <p className="text-sm text-muted-foreground">Swipe, drag, or click arrows to browse all reviews.</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              className="p-2 rounded-full border border-border bg-background text-foreground hover:bg-secondary transition"
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              className="p-2 rounded-full border border-border bg-background text-foreground hover:bg-secondary transition"
              aria-label="Scroll testimonials right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-secondary/90 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-secondary/90 to-transparent z-10" />

          <div
            ref={trackRef}
            className="testimonial-scroll flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={`${t.name}-${i}`}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.6, delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-6 w-[280px] sm:w-[320px] flex-shrink-0 hover:-translate-y-1 transition-transform snap-start"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-heading font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.course}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
