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

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
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

    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE,
    });
  }

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

export default CodePush(codePushOptions)(App);
