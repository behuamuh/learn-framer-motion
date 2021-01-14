import React, { useState } from 'react';
import Modal from 'components/Modal';
import PageWrapper from 'components/PageWrapper';
import { Card } from 'styles/primitives';
import blue from 'assets/images/blue.png';
import purp from 'assets/images/purp.png';
import black from 'assets/images/black.png';
import green from 'assets/images/green.png';
import ImageSlider from 'components/ImageSlider';

const images = [blue, purp, black, green];

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <PageWrapper>
      <>
      <div>
          <button onClick={() => setOpenModal(true)}>Show modal</button>
        </div>
        <h2>Super Cool</h2>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} alt="Card" />
          </Card>
        </Modal>
        <ImageSlider images={images} />
      </>
    </PageWrapper>
  );
};

export default HomePage;
