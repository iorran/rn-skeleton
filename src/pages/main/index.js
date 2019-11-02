import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title } from './styles';

import Input from '~/components/input';
import Button from '~/components/button';

import { getTrades } from '~/store/modules/trade/actions';

export default function Main() {
  const dispatch = useDispatch();
  const trades = useSelector(state => state.trade.items);

  useEffect(() => {
    dispatch(getTrades());
  }, []);

  function handleClick() {
    dispatch(getTrades());
  }

  return (
    <Container>
      <Title> VAKT</Title>
      <Input icon="call" placeholder="Insert name" style={{ marginTop: 30 }} />
      <Button onPress={handleClick}> test </Button>
    </Container>
  );
}
