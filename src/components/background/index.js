import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import theme from '~/styles/themes/dark';

export default styled(LinearGradient).attrs({
  colors: [theme.primaryDarkColor, theme.primaryColor],
})`
  flex: 1;
`;
