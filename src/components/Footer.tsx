const Footer = () => {
  return (
    <footer className="section-padding py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-heading font-bold text-sm text-foreground">
          CODE VICHAR <span className="text-accent">×</span> KODEABLE
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Built with ❤️ for students.
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
