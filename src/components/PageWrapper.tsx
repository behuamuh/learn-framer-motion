import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  initial: {
    opacity: 0,
    x: 300,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -300,
  },
};

interface Props {
  children: ReactNode;
}

const PageWrapper = (props: Props) => {
  const { children } = props;

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
