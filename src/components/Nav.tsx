/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion, Variants } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const links = ['One', 'Two', 'Three', 'Four'];

const navVariants = {
  open: { x: 0 },
  closed: { x: '-100%', transition: { delay: 0.2 } },
};

const ulVariants: Variants = {
  open: {
    skewX: 10,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      when: 'afterChildren',
    },
  },
  closed: {},
};

const liVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: -30, opacity: 0 },
};

interface Props {
  className?: string;
  open: boolean;
  onClose: () => void;
}

const Nav = (props: Props) => {
  const { className, open, onClose } = props;

  return (
    <Wrapper
      className={className}
      variants={navVariants}
      initial="closed"
      animate={open ? 'open' : 'closed'}
      transition={{
        damping: 300,
      }}
    >
      <button onClick={onClose}>Close Menu</button>
      <motion.ul
        variants={ulVariants}
      >
        {links.map(link => (
          <motion.li
            key={link}
            variants={liVariants}
          >
            <a href="#">{link}</a>
          </motion.li>
        ))}
      </motion.ul>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled(motion.nav)`
  background-color: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 40px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 16px;
    font-size: 2rem;
  }

  a {
    color: white;
  }
`;
