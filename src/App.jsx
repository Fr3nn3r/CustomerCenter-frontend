import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import './index.css'; // Ensure global styles are imported

function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}

export default App;
