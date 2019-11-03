import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import '~/config/reactotron-config';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import theme from '~/styles/themes/dark';
import Background from '~/components/background';
import Main from '~/pages/main';

import { store, persistor } from './store';

class App extends React.Component {
  constructor(props) {
    super(props);
    OneSignal.init('387febd1-4394-45e3-ae3c-fad230cf9313');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  // onReceived = data => {
  //   console.log('>: App -> data', data);
  // };

  // onOpened = notification => {
  //   console.log('>: App -> notification', notification);
  // };

  // onIds = id => {
  //   console.log('>: App -> id', id);
  // };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Background>
            <StatusBar
              barStyle="light-content"
              backgroundColor={theme.primaryColor}
            />
            <Main />
          </Background>
        </PersistGate>
      </Provider>
    );
  }
}

// eslint-disable-next-line no-class-assign
export default App = CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  installMode: CodePush.InstallMode.ON_NEXT_RESUME,
})(App);
