/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {getItem} from '../../../../services';
import Divider from '../../../../UtilComponents/Divider';
import styles from './index.css';

const CommentItem = ({id, bordered}) => {
  const [item, setItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    getItem(id).then(res => {
      setItem(res.data);
    });
  }, []);

  if (!item) return null;

  return (
    <TouchableOpacity
      onPress={() => setIsExpanded(!isExpanded)}
      style={[styles.container, bordered ? {borderBottomWidth: 0} : null]}>
      <Text style={styles.title}>by {item?.by?.toLowerCase()}</Text>

      <View style={styles.row}>
        {bordered && (
          <Divider
            height={'100%'}
            width={6}
            color={'orange'}
            style={{marginRight: 10}}
          />
        )}
        <Text style={styles.subHeading}>{item.text}</Text>
      </View>

      {isExpanded &&
        item.kids &&
        item.kids.map(id => <CommentItem id={id} bordered />)}
    </TouchableOpacity>
  );
};

export default React.memo(CommentItem);
