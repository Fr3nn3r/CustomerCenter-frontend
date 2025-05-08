import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} AI Swiss Knife. All rights reserved.
        </p>
        {/* <p className="text-xs text-gray-400 mt-2">
          A Product of Brunner Digital GmbH
        </p> */}
      </div>
    </footer>
  );
};

export default Footer; 