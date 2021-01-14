import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const CardsPage = (props: Props) => {
  const { className } = props;

  return (
    <Wrapper className={className}>
      CardsPage
    </Wrapper>
  );
};

export default CardsPage;

const Wrapper = styled.div``;
