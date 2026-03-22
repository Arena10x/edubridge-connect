import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

const courseOptions = [
  "C with DSA – ₹999/month",
  "Python with DSA – ₹999/month",
  "Java with DSA – ₹999/month",
  "Web Development with AI – ₹2999/month",
  "AI & Machine Learning – ₹2499/month",
  "App Development with AI – ₹2999/month",
];

const Registration = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [submitted, setSubmitted] = useState(false);
  const [couponMsg, setCouponMsg] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    coupon: "",
  });

  const validateCoupon = (code: string) => {
    const upper = code.toUpperCase().trim();
    if (upper === "TOP50") {
      setCouponMsg("🎉 50% discount will be applied after payment!");
    } else if (upper === "FIRST100") {
      setCouponMsg("✅ 15% discount applied!");
    } else if (upper.length > 0) {
      setCouponMsg("❌ Invalid coupon code");
    } else {
      setCouponMsg("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiBase}/api/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
      console.error("Backend Error 👉", data);
      throw new Error(data.message || data.error || "Failed to submit");
    }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Frontend Error 👉", err);
      setError(err.message || "Something went wrong");
      }
    finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="register" className="section-padding py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center glass-card rounded-3xl p-12"
        >
          <CheckCircle size={48} className="text-primary mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            Registration Received!
          </h3>
          <p className="text-muted-foreground mb-1">
            Student ID: <span className="font-mono font-semibold text-foreground">CV-{Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            You'll receive a confirmation email shortly. Payment link will follow.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="register" className="section-padding py-24 sm:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Register for a Course
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fill in your details below. Use coupon <span className="font-mono font-semibold text-foreground">FIRST100</span> for 15% off.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glass-card rounded-3xl p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
            <input
              required
              type="text"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              placeholder="Rahul Sharma"
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
              placeholder="rahul@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
            <input
              required
              type="tel"
              pattern="[0-9]{10}"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              placeholder="9876543210"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Select Course</label>
            <select
              required
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            >
              <option value="">Choose a course...</option>
              {courseOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Coupon Code (optional)</label>
            <input
              type="text"
              maxLength={20}
              value={form.coupon}
              onChange={(e) => {
                setForm({ ...form, coupon: e.target.value });
                validateCoupon(e.target.value);
              }}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              placeholder="e.g. FIRST100"
            />
            {couponMsg && (
              <p className="text-sm mt-1.5 text-muted-foreground">{couponMsg}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Register & Proceed to Payment"}
          </button>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Registration;
