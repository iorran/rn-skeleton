import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Title, List } from './styles';
import Trade from '~/components/trade';

import { getTrades } from '~/store/modules/trade/actions';

export default function Main() {
  const dispatch = useDispatch();
  const trades = useSelector(state => state.trade.items);

  useEffect(() => {
    dispatch(getTrades());
  }, []);

  return (
    <Container>
      <Title> VAKT</Title>
      {/* <Input icon="call" placeholder="Insert name" style={{ marginTop: 30 }} />
      <Button onPress={handleClick}> test </Button> */}

      <List
        data={trades}
        keyExtractor={item => String(item.etrmId)}
        renderItem={({ item }) => <Trade data={item} />}
      />
    </Container>
  );
}
