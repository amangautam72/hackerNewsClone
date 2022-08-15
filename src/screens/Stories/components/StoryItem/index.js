/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './index.css';
import moment from 'moment';

const StoryItem = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress({data})} style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>

      <View style={styles.row}>
        <Text style={styles.subHeading}>{data.descendants} comments</Text>
        <Text style={styles.divider}>{' | '}</Text>
        <Text style={styles.subHeading}>{data.score} pts</Text>
        <Text style={styles.divider}>{' | '}</Text>
        <Text style={styles.subHeading}>
          {data?.kids?.length || 0} comments
        </Text>
        <Text style={styles.divider}>{' | '}</Text>
        <Text style={styles.subHeading}>
          {moment.unix(data.time).startOf('hour').fromNow()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoryItem;
