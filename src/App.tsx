import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

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
import HideableCard from './components/HideableCard';
import ColorsList from './components/ColorsList';
import ImageSlider from './components/ImageSlider';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import styled from 'styled-components';

const images = [blue, purp, black, green];

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Header>
        <MenuIcon onClick={() => setOpenMenu(true)} />
        <h1>Header</h1>
        <Links>
          <StyledLink exact activeClassName="active" to="/">Home</StyledLink>
          <StyledLink exact activeClassName="active" to="/cards">Cards</StyledLink>
        </Links>
      </Header>
      <Nav open={openMenu} onClose={() => setOpenMenu(false)} />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cards" component={CardsPage} />
        </Switch>
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
        <ColorsList />
        <CardGrid>
          <Collapse title="Collapse text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto facilis asperiores cum, commodi fugiat,
            rerum dignissimos nobis eius aliquid eaque, provident ipsa dolores laborum eligendi.
            A mollitia architecto velit quos.
          </Collapse>
          <HideableCard
            title="Some hideable card"
            image={purp}
            style={{ background: 'var(--purp)' }}
          />
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

const StyledLink = styled(NavLink)`
  color: white;
  font-size: 1rem;
  margin: 0 1rem;

  &.active {
    font-weight: bold;
  }
`;

const Links = styled.div`
  margin-left: auto;
`;
