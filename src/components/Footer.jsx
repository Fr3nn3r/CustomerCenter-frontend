import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} AI Swiss Knife. All rights reserved.
        </p>
        {/* Optional: Add a small tagline or links here if desired */}
        {/* <p className="text-xs text-gray-400 mt-1">
          Innovate. Automate. Elevate.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer; 