import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getDiscountInfo } from "@/lib/discount";

const AdminTimer = () => {
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");
  const [isActive, setIsActive] = useState(false);
  const [discountCount, setDiscountCount] = useState(0);

  useEffect(() => {
    const timerFunc = setInterval(() => {
      const expiry = localStorage.getItem("admin_promo_expiry");

      if (!expiry) {
        setIsActive(false);
        return;
      }

      const now = new Date().getTime();
      const distance = parseInt(expiry) - now;

      if (distance <= 0) {
        setIsActive(false);
        setTimeLeft("00:00:00");
        clearInterval(timerFunc);
      } else {
        setIsActive(true);
        const h = Math.floor(distance / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(
          `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
            .toString()
            .padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(timerFunc);
  }, []);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const response = await fetch(`${apiBase}/api/registrations/count`);
        if (!response.ok) return;
        const data = await response.json();
        setDiscountCount(Number(data?.count || 0));
      } catch {
        // Ignore count errors.
      }
    };

    loadCount();
  }, []);

  if (!isActive) return null;

  const discountInfo = getDiscountInfo(discountCount);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto mb-12"
    >
      <div className="glass-card rounded-2xl p-6 border border-primary/20 bg-primary/5 text-center">
        <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">
          Flash Sale Ends In
        </span>
        <div className="text-5xl font-mono font-bold text-foreground tracking-tighter">
          {timeLeft}
        </div>
        <p className="text-muted-foreground text-sm mt-2">
          {discountInfo.spotsLeft > 0
            ? `First 10 students get 20% off. ${discountInfo.spotsLeft} spots left.`
            : "All new registrations now get 10% off automatically."}
        </p>
      </div>
    </motion.div>
  );
};

export default AdminTimer;
