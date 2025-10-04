import React, { useState } from 'react';
import NewHeader from '../components/NewHeader';
import Hero from '../components/Hero';
import StatementBlock from '../components/StatementBlock';
import Spacer from '../components/Spacer';
import SecondaryHeadline from '../components/SecondaryHeadline';
import NewFooter from '../components/NewFooter';
import LetsTalkModal from '../components/LetsTalkModal';

const NewHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLetsTalkClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <NewHeader onLetsTalkClick={handleLetsTalkClick} />
      <Hero onLetsTalkClick={handleLetsTalkClick} />
      <StatementBlock />
      <Spacer />
      <SecondaryHeadline onLetsTalkClick={handleLetsTalkClick} />
      <NewFooter onLetsTalkClick={handleLetsTalkClick} />
      <LetsTalkModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default NewHome;
