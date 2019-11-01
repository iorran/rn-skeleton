import React from 'react';
import { Container, Title } from './styles';

import Input from '~/components/input';
import Button from '~/components/button';

export default function Main() {
  return (
    <Container>
      <Title> Olá VAKT</Title>
      <Input icon="call" placeholder="Insert name" style={{ marginTop: 30 }} />
      <Button> test </Button>
    </Container>
  );
}
