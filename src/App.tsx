import React from 'react';
import { motion } from 'framer-motion';

import { Card, CardGrid, Container, Header } from './styles/primitives';
import './App.css';
import blue from './assets/images/blue.png';
import purp from './assets/images/purp.png';
import black from './assets/images/black.png';
import green from './assets/images/green.png';
import { MenuIcon } from './assets/icons';

function App() {
  return (
    <div>
      <Header>
        <MenuIcon />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <CardGrid>
          <Card initial={{
            opacity: 0,
            rotateZ: 45,
          }}
            animate={{
              rotateZ: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            style={{ background: 'var(--purp)' }}
          >
            <h3>Some card</h3>
            <img src={purp} alt="Card" />
          </Card>
          <Card initial={{
            opacity: 0,
            rotateZ: 45,
          }}
            animate={{
              rotateZ: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            style={{ background: 'var(--blue)' }}
          >
            <h3>Some card</h3>
            <img src={blue} alt="Card" />
          </Card>
          <Card initial={{
            opacity: 0,
            rotateZ: 45,
          }}
            animate={{
              rotateZ: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 2,
            }}
            style={{ background: 'var(--black)' }}
          >
            <h3>Some card</h3>
            <img src={black} alt="Card" />
          </Card>
          <Card initial={{
            opacity: 0,
            rotateZ: 45,
          }}
            animate={{
              rotateZ: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 3,
            }}
            style={{ background: 'var(--green)' }}
          >
            <h3>Some card</h3>
            <img src={green} alt="Card" />
          </Card>
        </CardGrid>
      </Container>
    </div>
  );
}

export default App;
