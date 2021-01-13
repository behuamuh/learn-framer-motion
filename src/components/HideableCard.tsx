import { AnimatePresence, motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import React, { CSSProperties, useState } from 'react';

import { Card } from '../styles/primitives';

interface Props {
  style?: CSSProperties;
  title: string;
  image: string;
}

const HideableCard = (props: Props) => {
  const { style, title, image } = props;
  const [show, setShow] = useState(true);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0.1, 1, 0.1]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.point.x) > 200) {
      setShow(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            opacity: {
              duration: 0,
            },
          }}
        >
          <Card
            drag="x" 
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{
              ...style,
              x,
              opacity,
            }}>
            <h3>{title}</h3>
            <img src={image} alt="Card" />
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HideableCard;
