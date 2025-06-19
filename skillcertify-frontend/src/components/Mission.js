import React, { useState, useEffect, useRef } from 'react'; // Added useState, useEffect, useRef for animation

function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

   
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); 

  return (
    <section
      ref={sectionRef}
      className={`
        bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between overflow-hidden
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
      `}
    >
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Our Mission
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Empowering individuals and organizations with verifiable and secure digital credentials.
          We aim to revolutionize how achievements are recognized and trusted globally.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:from-pink-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center relative">
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-500 rounded-full blur-md opacity-70 animate-pulse-slow"></div>
          <div className="relative z-10 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center p-4 shadow-2xl">
            <svg className="w-3/4 h-3/4 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
              
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2.001 10.47l-3.596 3.596c-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.596-1.596c-.195-.195-.293-.451-.293-.707s.098-.512.293-.707l.707-.707c.195-.195.451-.293.707-.293s.512.098.707.293l.889.889 2.889-2.889c.195-.195.451-.293.707-.293s.512.098.707.293l.707.707c.195.195.293.451.293.707s-.098.512-.293.707z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
