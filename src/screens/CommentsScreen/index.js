/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import CommentItem from './components/CommentItem';

const Comments = ({route}) => {
  const idList = route.params.kids;

  return (
    <SafeAreaView>
      <FlatList
        data={idList}
        renderItem={({item}) => <CommentItem id={item} />}
      />
    </SafeAreaView>
  );
};

export default Comments;
