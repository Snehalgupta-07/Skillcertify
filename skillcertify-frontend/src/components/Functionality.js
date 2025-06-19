import React, { useState, useEffect, useRef } from 'react';

function Functionality() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Run once on mount

  const FunctionalityCard = ({ title, description, delay }) => (
    <div
      className={`
        p-8 bg-gray-850 rounded-xl shadow-lg border border-gray-700
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'}
      `}
      style={{ transitionDelay: `${delay}ms` }} // Staggered animation
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
        {title}
      </h3>
      <p className="text-gray-300 text-base md:text-lg">
        {description}
      </p>
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Core Functionalities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <FunctionalityCard
          title="Create & Issue Certificates"
          description="Easily design, generate, and issue digital certificates to your recipients. Streamline your credentialing process."
          delay={0}
        />
        <FunctionalityCard
          title="Manage & Track Issued Certificates"
          description="Keep a comprehensive record of all certificates you've issued, track their status, and revoke them if necessary."
          delay={150}
        />
        <FunctionalityCard
          title="Receive & View Digital Credentials"
          description="Recipients can securely access and view all their received certificates from a centralized dashboard."
          delay={300}
        />
        <FunctionalityCard
          title="Secure Sharing & Verification"
          description="Share your certificates easily and securely. Anyone can verify the authenticity of a certificate using a unique QR code or link."
          delay={450}
        />
        <FunctionalityCard
          title="Customizable Templates"
          description="Utilize our pre-designed templates or create your own custom designs for a professional look."
          delay={600}
        />
        <FunctionalityCard
          title="Blockchain Integration (Future)"
          description="Explore future possibilities for enhanced security and immutability with blockchain-backed certificates."
          delay={750}
        />
      </div>
    </section>
  );
}

export default Functionality;
