import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // button when page is scrolled down 400px
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-2xl shadow-2xl shadow-blue-900/40 flex items-center justify-center transition-all animate-bounceIn hover:scale-110 active:scale-95 border border-white/10"
          aria-label="Scroll to top"
        >
          <span className="text-xl">↑</span>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;