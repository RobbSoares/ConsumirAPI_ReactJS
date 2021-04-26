import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Error404 } from './styled';

export default function Page404() {
  return (
    <Container>
      <Error404>Essa página não existe</Error404>
    </Container>
  );
}
