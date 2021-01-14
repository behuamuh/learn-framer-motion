import React, { useState } from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Container, Header } from 'styles/primitives';
import { MenuIcon } from 'assets/icons';
import Nav from 'components/Nav';
import HomePage from 'pages/HomePage';
import CardsPage from 'pages/CardsPage';
import ColorsPage from 'pages/ColorsPage';

import './App.css';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  return (
    <div>
      <Header>
        <MenuIcon onClick={() => setOpenMenu(true)} />
        <h1>Header</h1>
        <Links>
          <StyledLink exact activeClassName="active" to="/">Home</StyledLink>
          <StyledLink exact activeClassName="active" to="/cards">Cards</StyledLink>
          <StyledLink exact activeClassName="active" to="/colors">Colors</StyledLink>
        </Links>
      </Header>
      <Nav open={openMenu} onClose={() => setOpenMenu(false)} />
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cards" component={CardsPage} />
            <Route exact path="/colors" component={ColorsPage} />
          </Switch>
        </AnimatePresence>
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
