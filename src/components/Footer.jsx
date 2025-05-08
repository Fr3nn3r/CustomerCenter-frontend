import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-neutral-800 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img className="h-8 w-auto" src="/aisk.png" alt="AI Swiss Knife Logo" /> 
              <span className="ml-3 text-lg font-bold text-white">
                AI Swiss Knife
              </span>
            </a>
          </div>
          <div className="flex space-x-8">
            <a href="#how-it-works" className="text-neutral-300 hover:text-white transition-colors duration-250">How it works</a>
            <a href="#faqs" className="text-neutral-300 hover:text-white transition-colors duration-250">FAQs</a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-250">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400 mb-4 md:mb-0">
            &copy; {currentYear} AI Swiss Knife. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-250">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-250">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.012 10.012 0 01-3.127 1.191 4.926 4.926 0 00-8.384 4.482A13.9 13.9 0 013.008 3.01a4.899 4.899 0 00-.669 2.479c0 1.718.875 3.23 2.205 4.115a4.881 4.881 0 01-2.235-.616v.061a4.939 4.939 0 003.947 4.834 4.886 4.886 0 01-2.224.084 4.933 4.933 0 004.6 3.42 9.865 9.865 0 01-6.115 2.107c-.4 0-.792-.023-1.187-.07a13.952 13.952 0 007.548 2.148c9.058 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.015-.637a10.063 10.063 0 002.466-2.554z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 