import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { Container, Title, List } from './styles';
import Trade from '~/components/trade';

import actions from '~/store/modules/trade/actions';

export default function Main() {
  const dispatch = useDispatch();
  const trades = useSelector(state => state.trade.items);

  useEffect(() => {
    dispatch(actions.getTrades());
  }, []);

  function onAccept(item) {
    Alert.alert('Do you want to accept?');
    dispatch(actions.updateTradeStatus(item.id, 'accept'));
  }

  function onReject(item) {
    Alert.alert('Do you want to reject?');
    dispatch(actions.updateTradeStatus(item.id, 'reject'));
  }

  return (
    <Container>
      <Title> VAKT</Title>
      {/* <Input icon="call" placeholder="Insert name" style={{ marginTop: 30 }} />
      <Button onPress={handleClick}> test </Button> */}

      <List
        data={trades}
        keyExtractor={item => String(item.etrmId)}
        renderItem={({ item }) => (
          <Trade
            data={item}
            accept={() => onAccept(item)}
            reject={() => onReject(item)}
          />
        )}
      />
    </Container>
  );
}
