import styled from 'styled-components/native';
import theme from '~/styles/themes/dark';

export const Container = styled.View`
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  background: ${theme.primaryLightColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 16px;
`;

export const Id = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${theme.primaryTextColor};
`;

export const CounterParty = styled.Text`
  font-size: 13px;
  color: ${theme.primaryTextColor};
  margin-top: 4px;
`;
