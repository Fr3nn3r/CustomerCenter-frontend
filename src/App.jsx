import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import NewHome from './pages/NewHome';
import GoogleAnalytics from './components/GoogleAnalytics';
import './index.css';

function App() {
  return (
    <>
      <GoogleAnalytics />
      <NewHome />
      <Analytics />
    </>
  );
}

export default App;
