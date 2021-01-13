import React, { useState } from 'react';

import { Card, CardGrid, Container, Header } from './styles/primitives';
import './App.css';
import blue from './assets/images/blue.png';
import purp from './assets/images/purp.png';
import black from './assets/images/black.png';
import green from './assets/images/green.png';
import { MenuIcon } from './assets/icons';
import Modal from './components/Modal';
import Collapse from './components/Collapse';
import Nav from './components/Nav';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Header>
        <MenuIcon onClick={() => setOpenMenu(true)} />
        <h1>Header</h1>
      </Header>
      <Nav open={openMenu} onClose={() => setOpenMenu(false)} />
      <Container>
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
        <CardGrid>
          <Collapse title="Collapse text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto facilis asperiores cum, commodi fugiat,
            rerum dignissimos nobis eius aliquid eaque, provident ipsa dolores laborum eligendi.
            A mollitia architecto velit quos.
          </Collapse>
          <Card
            whileHover={{
              scale: [1, 0.8, 1.2],
            }}
            whileTap={{
              background: 'var(--red)',
            }}
            onHoverEnd={(...args) => console.log(args)}
            style={{ background: 'var(--purp)' }}
          >
            <h3>Some card</h3>
            <img src={purp} alt="Card" />
          </Card>
          <Card style={{ background: 'var(--blue)' }}>
            <h3>Some card</h3>
            <img src={blue} alt="Card" />
          </Card>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img src={black} alt="Card" />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img src={green} alt="Card" />
          </Card>
        </CardGrid>
      </Container>
    </div>
  );
}

export default App;
