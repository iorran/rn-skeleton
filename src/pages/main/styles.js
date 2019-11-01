import styled from 'styled-components/native';
import theme from '~/styles/themes/dark';

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.primaryTextColor};
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;
