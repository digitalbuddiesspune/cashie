import { useState, useEffect, useRef } from 'react';

const TrustPartnersSection = () => {
  const partners = [
    {
      name: 'Amazon',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      name: 'Microsoft',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4zm-12.6 12.6H0V12.6h11.4V24zm12.6 0H12.6V12.6H24V24z"/>
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      name: 'Google',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
      color: 'from-red-500 to-yellow-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    },
    {
      name: 'Apple',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
      ),
      color: 'from-slate-600 to-slate-800',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-700'
    },
    {
      name: 'Meta',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      name: 'Uber',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M0 3v8h8V3H0zm6 6H2V5h4v4zm6-6v8h8V3h-8zm6 6h-4V5h4v4zM0 13v8h8v-8H0zm6 6H2v-4h4v4zm13-6v8h8v-8h-8zm6 6h-4v-4h4v4z"/>
        </svg>
      ),
      color: 'from-slate-800 to-slate-900',
      bgColor: 'bg-slate-50',
      textColor: 'text-slate-700'
    },
    {
      name: 'PayPal',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.203zm14.146-14.42a9.266 9.266 0 0 1-.443-.05c-.526-.151-1.163-.151-1.666 0a9.224 9.224 0 0 1-1.163.05H15.96l.84-5.412c.05-.3.31-.52.61-.52h1.19c.22 0 .43.08.58.22.15.14.24.34.24.55v.02l-1.12 7.203z"/>
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      name: 'Stripe',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l-1.254 3.794c-1.39-.505-2.664-1.002-4.381-1.711zm-.345 5.395c-.207.06-.43.12-.668.18-1.02.33-2.137.6-3.28.6-1.02 0-1.89-.18-2.64-.54l-.36 1.08c.75.36 1.62.54 2.64.54 1.143 0 2.26-.27 3.28-.6.238-.06.46-.12.668-.18l.36-1.08z"/>
        </svg>
      ),
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700'
    },
    {
      name: 'Visa',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M9.112 8.362l-1.93 5.276h-1.577l1.93-5.276H9.112zm6.112 0l-1.93 5.276h-1.577l1.93-5.276h1.577zm-3.112 3.276l1.93-5.276h1.577l-1.93 5.276h-1.577zm-3.112-3.276l-1.93 5.276H4.605l1.93-5.276h1.577z"/>
        </svg>
      ),
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      name: 'Mastercard',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <circle cx="9" cy="12" r="5" fill="#EB001B"/>
          <circle cx="15" cy="12" r="5" fill="#F79E1B"/>
          <path d="M12 7.5c1.5 1.5 2.5 3.5 2.5 4.5s-1 3-2.5 4.5c-1.5-1.5-2.5-3.5-2.5-4.5s1-3 2.5-4.5z" fill="#FF5F00"/>
        </svg>
      ),
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      name: 'Shopify',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M15.34 4.66c-.98-.98-2.56-.98-3.54 0L8.5 7.98c-.98.98-.98 2.56 0 3.54l3.3 3.3c.98.98 2.56.98 3.54 0l3.3-3.3c.98-.98.98-2.56 0-3.54l-3.3-3.3z"/>
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      name: 'Salesforce',
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    }
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const animationIdRef = useRef(null);
  const animationIdRef2 = useRef(null);
  const translateXRef = useRef(0);
  const translateXRef2 = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);

  // First carousel animation - infinite movement
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      // Stop animation if paused
      if (isPaused) {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
        return;
      }

      translateXRef.current += scrollSpeed;
      const maxTranslate = carousel.scrollWidth / 2; // Half because we duplicated
      
      // Seamless infinite loop - reset when reaching max
      if (translateXRef.current >= maxTranslate) {
        translateXRef.current = translateXRef.current - maxTranslate;
      }
      
      carousel.style.transform = `translateX(-${translateXRef.current}px)`;
      
      // Request next frame
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Cancel any existing animation
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }

    // Initialize translateX if needed
    if (translateXRef.current === 0 && carousel.scrollWidth > 0) {
      translateXRef.current = 0;
    }

    // Start animation only if not paused
    if (!isPaused) {
      animationIdRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    };
  }, [isPaused]);

  // Second carousel animation - infinite movement left to right
  useEffect(() => {
    const carousel = carouselRef2.current;
    if (!carousel) return;
  
    const scrollSpeed = 0.5;
  
    const animate = () => {
      // Stop animation if paused
      if (isPaused2) {
        if (animationIdRef2.current) {
          cancelAnimationFrame(animationIdRef2.current);
          animationIdRef2.current = null;
        }
        return;
      }

      translateXRef2.current += scrollSpeed;
      const maxTranslate = 0;
  
      if (translateXRef2.current >= maxTranslate) {
        translateXRef2.current = -carousel.scrollWidth / 2;
      }
  
      carousel.style.transform = `translateX(${translateXRef2.current}px)`;
      
      // Request next frame
      animationIdRef2.current = requestAnimationFrame(animate);
    };
  
    // Cancel any existing animation
    if (animationIdRef2.current) {
      cancelAnimationFrame(animationIdRef2.current);
      animationIdRef2.current = null;
    }

    // Initialize translateX if needed
    if (carousel.scrollWidth > 0 && translateXRef2.current === 0) {
      translateXRef2.current = -carousel.scrollWidth / 2;
    }

    // Start animation only if not paused
    if (!isPaused2) {
      animationIdRef2.current = requestAnimationFrame(animate);
    }
  
    return () => {
      if (animationIdRef2.current) {
        cancelAnimationFrame(animationIdRef2.current);
        animationIdRef2.current = null;
      }
    };
  }, [isPaused2]);
  
  // Render card component
  const renderCard = (partner, index) => (
    <div
      key={index}
      className={`${partner.bgColor} rounded-xl p-4 md:p-5 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer group relative overflow-hidden flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px]`}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      <div className="relative w-full">
        <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-slate-300 transition-all p-2.5`}>
          <div className="text-slate-700 w-full h-full group-hover:scale-110 transition-transform duration-300">
            {partner.logo}
          </div>
        </div>
        <p className={`text-center font-semibold ${partner.textColor} text-xs md:text-sm leading-tight group-hover:${partner.textColor.replace('700', '800')} transition-colors`}>
          {partner.name}
        </p>
      </div>
    </div>
  );

  return (
    <section className="pt-8 pb-20 bg-white">
      <div className="w-full px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl lg:text-5xl font-semibold text-slate-600 mb-3 tracking-wide uppercase">
            Trusted by growing businesses
          </h2>
          <p className="text-sm md:text-base text-slate-500">
            Join hundreds of companies using Cashie
          </p>
        </div>
        {/* First Carousel */}
        <div 
          className="overflow-hidden mb-4 relative w-full"
          onMouseEnter={() => {
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setIsPaused(false);
          }}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{ cursor: 'grab', pointerEvents: 'auto' }}
        >
          <div 
            ref={carouselRef} 
            className="flex gap-3 md:gap-4 w-max"
            style={{ pointerEvents: 'auto' }}
          >
            {duplicatedPartners.map((partner, index) => renderCard(partner, index))}
          </div>
        </div>

        {/* Second Carousel */}
        <div 
          className="overflow-hidden relative w-full"
          onMouseEnter={() => {
            setIsPaused2(true);
          }}
          onMouseLeave={() => {
            setIsPaused2(false);
          }}
          onTouchStart={() => setIsPaused2(true)}
          onTouchEnd={() => setIsPaused2(false)}
          style={{ cursor: 'grab', pointerEvents: 'auto' }}
        >
          <div 
            ref={carouselRef2} 
            className="flex gap-3 md:gap-4 w-max"
            style={{ pointerEvents: 'auto' }}
          >
            {[...duplicatedPartners].reverse().map((partner, index) => renderCard(partner, `carousel2-${index}`))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPartnersSection;


