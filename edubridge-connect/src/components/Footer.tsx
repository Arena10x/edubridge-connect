import { Link } from "react-router-dom";
import { Phone, MapPin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-2">
            <div className="font-heading font-bold text-lg text-foreground">
              CODE VICHAR <span className="text-accent">×</span> KODEABLE
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">
              Empowering students with industry-ready skills in DSA, Web Development, and AI.
            </p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="tel:+91 891 048 9989" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <Phone size={16} className="text-primary" /> +91 891 048 9989
              </a>

              <a 
                href="tel:+91 912 377 3171" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                <Phone size={16} className="text-primary" /> +91 912 377 3171
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} /> Kolkata, West Bengal, India
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:items-end gap-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h4>
            <div className="flex flex-col md:items-end gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Built with ❤️ for students.
          </div>
          <div className="flex gap-4">
             {/* Optional Social Icon */}
             <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
               <Github size={18} />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;