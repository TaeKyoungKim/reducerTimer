
import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Presenter from './components/Timer/presenter';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <Presenter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
