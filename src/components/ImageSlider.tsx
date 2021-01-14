import { AnimatePresence, motion, PanInfo, Variants } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const getNewSlide = (slide: number, length: number) => {
  return slide < 0 ? length + slide : slide % length;
};

const variants: Variants = {
  initial: direction => ({
    opacity: 0,
    x: direction * 600,
  }),
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: direction => ({
    opacity: 0,
    x: - direction * 600,
  }),
};

interface Props {
  images: string[];
  className?: string
}

const ImageSlider = (props: Props) => {
  const { images, className } = props;
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setSlide(old => getNewSlide(old + newDirection, images.length));
  };

  const handleDragEnd = (_e: unknown, { offset }: PanInfo) => {
    const { x } = offset;
    if (Math.abs(x) < 400) return;

    const newDirection = x > 400 ? -1 : 1;
    paginate(newDirection);
  };

  return (
    <Wrapper className={className}>
      <AnimatePresence custom={direction}>
        <Slide
          key={slide}
          custom={direction}
          src={images[slide]}
          alt="slide"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          variants={variants}
          onDragEnd={handleDragEnd}
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <div>
          <Prev onClick={() => paginate(-1)}>Prev</Prev>
          <Next onClick={() => paginate(1)}>Next</Next>
        </div>
      </AnimatePresence>
    </Wrapper>
  );
};

export default ImageSlider;

const Wrapper = styled.div`
  position: relative;
  height: 300px;
`;

const Slide = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const buttonStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Prev = styled.button`
  ${buttonStyles}
  right: 100%;
`;

const Next = styled.button`
  ${buttonStyles}
  left: 100%;
`;
