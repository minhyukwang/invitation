import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 200; // 조절 가능한 스크롤 임계값

    if (scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // <- 부드러운 스크롤
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="md:hidden w-10 h-10 bg-gray-100 rounded-full"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            padding: '10px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
