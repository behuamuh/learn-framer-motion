import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const HomePage = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      HomePage
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  
`;
