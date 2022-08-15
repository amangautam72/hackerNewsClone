/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View} from 'react-native';

const Divider = ({width, height, color, style}) => {
  return (
    <View
      style={{
        width: width || '100%',
        height: height,
        backgroundColor: color || 'lightgrey',
        ...style,
      }}></View>
  );
};

export default Divider;
