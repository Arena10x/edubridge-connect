import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdminTimer from "@/components/AdminTimer";
import Courses from "@/components/Courses";
import Countdown from "@/components/Countdown";
import Registration from "@/components/Registration";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="site-root">
      <div className="edu-backdrop" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="starfield">
          <span className="star star-1" />
          <span className="star star-2" />
          <span className="star star-3" />
          <span className="star star-4" />
          <span className="star star-5" />
          <span className="star star-6" />
        </div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AdminTimer />
        <Courses />
        <Portfolio />
        <Countdown />
        <Registration />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
