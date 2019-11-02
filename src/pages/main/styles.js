import styled from 'styled-components/native';
import theme from '~/styles/themes/dark';

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.primaryTextColor};
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 24 },
})``;

export const Container = styled.SafeAreaView`
  flex: 1;
`;
