import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// eslint-disable-next-line no-undef
// if (__DEV__) {
const tron = Reactotron.configure({
  name: 'VAKT Mobile',
  host: '192.168.1.74',
})
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

tron.clear();

// console.tron = tron;
// }

export default tron;
