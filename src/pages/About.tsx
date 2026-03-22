import { motion } from "framer-motion";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="site-root min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-8 sm:p-12 mb-8 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-heading text-foreground">
            Empowering the Next Generation of <span className="text-primary">Developers</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CODE VICHAR × KODEABLE was founded with a single mission: to provide high-quality, 
            industry-relevant tech education that is accessible and affordable for every student.
          </p>
        </motion.div>

        {/* Stats/Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary"><Users size={24} /></div>
            <div>
              <h3 className="font-bold text-lg">Expert Mentors</h3>
              <p className="text-sm text-muted-foreground">Taught by industry practitioners with real-world experience.</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl text-primary"><BookOpen size={24} /></div>
            <div>
              <h3 className="font-bold text-lg">Modern Curriculum</h3>
              <p className="text-sm text-muted-foreground">Up-to-date projects focusing on DSA, Web, and AI Development.</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Award className="text-primary" /> Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe that coding is a superpower. Our curriculum is designed not just to teach 
              syntax, but to build problem-solving skills that stay with you throughout your career. 
              Whether you are starting with C or diving into AI, we provide the support you need.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Why "Code Vichar"?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              "Vichar" means thought. We don't just teach you how to write lines of code; we teach 
              you the "thought process" behind scalable software architecture and efficient algorithms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;