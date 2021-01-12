import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
}

const Collapse = (props: Props) => {
  const { className, title, children } = props;
  const [open, setOpen] = useState(false);

  return (
    <Wrapper className={className}>
      <Title role="button" onClick={() => setOpen(prev => !prev)}>{title}</Title>
      <AnimatePresence>
        {open && (
          <Content
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <p>
              {children}
            </p>
          </Content>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default React.memo(Collapse, areEqual);

const Wrapper = styled.article``;

const Title = styled.h2`
  cursor: pointer;
`;

const Content = styled(motion.div)`
  overflow: hidden;
`;
