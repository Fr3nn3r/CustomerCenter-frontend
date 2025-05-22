import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load the Google Analytics script
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-R6GYC87YBT';
    script1.async = true;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    
    // Configure Google Analytics with domain settings
    gtag('config', 'G-R6GYC87YBT', {
      'cookie_domain': 'aiswissknife.com',
      'cookie_flags': 'SameSite=None;Secure',
      'linker': {
        'domains': ['aiswissknife.com', 'aiswissknife.ch']
      }
    });

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything
};

export default GoogleAnalytics; 