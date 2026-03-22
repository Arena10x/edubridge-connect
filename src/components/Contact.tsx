import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding py-24 sm:py-32 bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a question? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg mx-auto"
        >
          {sent ? (
            <div className="glass-card rounded-3xl p-12 text-center">
              <CheckCircle size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  required
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder="What would you like to know?"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
