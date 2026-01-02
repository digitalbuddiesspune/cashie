import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('entering');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('exiting');
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('entering');
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`min-h-screen ${
        transitionStage === 'entering' ? 'fade-in' : 'opacity-0'
      }`}
      style={{
        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;

