import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import GoogleAnalytics from './components/GoogleAnalytics';
import './index.css'; // Ensure global styles are imported

function App() {
  return (
    <>
      <GoogleAnalytics />
      <Home />
      <Analytics />
    </>
  );
}

export default App;
