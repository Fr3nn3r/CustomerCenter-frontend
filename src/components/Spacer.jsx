import React from 'react';

const Spacer = () => {
  return (
    <section className="py-24 lg:py-32 bg-offwhite relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-300 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-gray-200 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default Spacer;
