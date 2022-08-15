/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, SafeAreaView, View, TouchableHighlight} from 'react-native';
import Divider from '../../UtilComponents/Divider';

import styles from './index.css';

const HomeScreen = ({navigation}) => {
  const onItemPress = (type, title) => {
    navigation.navigate('Stories', {type: type, name: title});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.item}
          underlayColor={'grey'}
          onPress={() => onItemPress('topstories', 'Top Stories')}>
          <Text style={styles.titleBold}>Top Stories</Text>
        </TouchableHighlight>
        <Divider height={1} />
        <TouchableHighlight
          style={styles.item}
          underlayColor={'grey'}
          onPress={() => onItemPress('newstories', 'New Stories')}>
          <Text style={styles.titleBold}>New Stories</Text>
        </TouchableHighlight>
        <Divider height={1} />
        <TouchableHighlight
          style={styles.item}
          underlayColor={'grey'}
          onPress={() => onItemPress('beststories', 'Best Stories')}>
          <Text style={styles.titleBold}>Best Stories</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
