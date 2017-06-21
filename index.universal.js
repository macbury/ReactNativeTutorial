/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const style = {
  flex: 1
}

const ReactNativeTutorial = () => {
  return (
    <View style={style}>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );
};

export default ReactNativeTutorial;
