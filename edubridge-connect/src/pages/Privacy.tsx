const Privacy = () => (
  <div className="site-root min-h-screen pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12">
      <h1 className="text-4xl font-bold mb-8 font-heading">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you register for a course, including your name, email address, and phone number.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Data</h2>
          <p>We use your information to process course registrations, provide mentor support, and send updates regarding your classes.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure.</p>
        </section>
      </div>
    </div>
  </div>
);
export default Privacy;