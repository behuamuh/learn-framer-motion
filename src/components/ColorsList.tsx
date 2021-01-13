import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const COLORS = [
  'var(--red)',
  'var(--purp)',
  'var(--blue)',
  'var(--black)',
  'var(--green)',
];

const shuffle = (arr: any[]) => {
  return arr
    .slice()
    .sort(() => Math.random() - 0.5);
};

interface Props {
  className?: string;
}

const ColorsList = (props: Props) => {
  const { className } = props;
  const [colors, setColors] = useState(COLORS);

  return (
    <Wrapper className={className}>
      <button onClick={() => setColors(shuffle(colors))}>Shuffle</button>
      {colors.map(color => (
        <motion.div
          key={color}
          layout
          transition={{
            type: 'spring',
            damping: 10,
            stiffness: 100,
          }}
          style={{
            height: 100,
            backgroundColor: color,
          }}
        />
      ))}
    </Wrapper>
  );
};

export default ColorsList;

const Wrapper = styled.div`
  
`;
