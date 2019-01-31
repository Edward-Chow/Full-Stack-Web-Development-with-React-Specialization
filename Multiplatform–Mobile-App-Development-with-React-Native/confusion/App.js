import React from 'react';
import Main from './components/MainComponent';
import { SafeAreaView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    );
  }
}
