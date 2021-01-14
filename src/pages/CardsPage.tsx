import React from 'react';
import Collapse from 'components/Collapse';
import HideableCard from 'components/HideableCard';
import PageWrapper from 'components/PageWrapper';
import { Card, CardGrid } from 'styles/primitives';
import blue from 'assets/images/blue.png';
import purp from 'assets/images/purp.png';
import black from 'assets/images/black.png';
import green from 'assets/images/green.png';

const CardsPage = () => {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
};

export default CardsPage;
