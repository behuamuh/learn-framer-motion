import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  className?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = (props: Props) => {
  const { className, open, children, onClose } = props;

  return (
    <AnimatePresence>
      {open && (
        <Wrapper
          className={className}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <motion.div
            initial={{
              y: 30,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: 30,
            }}
          >
            <button onClick={onClose}>close</button>
            {children}
          </motion.div>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Modal, areEqual);

const Wrapper = styled(motion.div)`
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  top: 0;
`;
