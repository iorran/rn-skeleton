import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Title } from './styles';

import Input from '~/components/input';
import Button from '~/components/button';

import { getTrades } from '~/store/modules/trade/actions';

export default function Main() {
  function handleClick() {
    const dispatch = useDispatch();
    dispatch(getTrades());
  }

  return (
    <Container>
      <Title> VAKT</Title>
      <Input icon="call" placeholder="Insert name" style={{ marginTop: 30 }} />
      <Button onClick={handleClick}> test </Button>
    </Container>
  );
}
