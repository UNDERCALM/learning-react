import React from 'react';
import Navbar from '../components/Navbar';
import RoomSelector from '../components/RoomSelector';
import AddonSelector from '../components/AddonSelector';
import MealSelector from '../components/MealSelector';
import SummaryModal from '../components/SummaryModal';

const ProductSelectionPage = () => {
  // Dummy modal state for now
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div style={{ background: '#111', minHeight: '100vh', color: '#f3f4f6' }}>
      <Navbar onShowDetails={() => setShowModal(true)} />
      <div style={{ display: 'flex', flexDirection: 'row', gap: 32, padding: 32, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
        <RoomSelector />
        <AddonSelector />
        <MealSelector />
      </div>
      <SummaryModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ProductSelectionPage;
