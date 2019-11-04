import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, Left, Right, Info, Id, CounterParty } from './styles';

import theme from '~/styles/themes/dark';

export default function Trade({ data, reject, accept }) {
  return (
    <Container>
      <Left>
        <Info>
          <Id>#{data.etrmId}</Id>
          <CounterParty>
            {data.counterParty} {data.product} {data.status}
          </CounterParty>
        </Info>
      </Left>

      <Right>
        <TouchableOpacity onPress={accept}>
          <Icon
            name="thumbs-up"
            size={20}
            color={theme.primaryColorSuccess}
            style={{ marginLeft: 32 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={reject}>
          <Icon
            name="thumbs-down"
            size={20}
            color={theme.primaryColorDanger}
            style={{ marginLeft: 32 }}
          />
        </TouchableOpacity>
      </Right>
    </Container>
  );
}

Trade.propTypes = {
  data: PropTypes.shape({
    etrmId: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    counterParty: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  reject: PropTypes.func.isRequired,
  accept: PropTypes.func.isRequired,
};
