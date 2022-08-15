/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {FlatList, SafeAreaView, Text, TextInput} from 'react-native';
import {getStories, getItem} from '../../services';
import StoryItem from './components/StoryItem';
import styles from './index.css';

const StoriesList = ({navigation, route}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const idListRef = useRef([]);
  const [searchText, setSearchText] = useState('');

  //used custom promise.all to get rid of looping through 2 times.
  const fetchStoryData = async (ids, start, end) => {
    const idList = ids.slice(start, start + end);

    const storyList = [];
    return new Promise((resolve, reject) => {
      for (let i = start; i < start + end; i++) {
        if (!ids[i]) break;
        getItem(ids[i])
          .then(res => {
            storyList.push(res.data);
            if (storyList.length === idList.length) {
              resolve(storyList);
              setLoading(false);
            }
          })
          .catch(err => {
            reject(false);
            setLoading(false);
          });
      }
    });
  };

  useEffect(() => {
    getStories(route.params.type).then(async res => {
      idListRef.current = res.data;
      const stories = await fetchStoryData(res.data, 0, 10);
      if (stories) setList(stories);
    });
  }, []);

  const fetchMore = async () => {
    setLoading(true);
    const stories = await fetchStoryData(idListRef.current, list.length, 5);
    if (stories) setList([...list, ...stories]);
  };

  const onStoryPress = ({data}) => {
    navigation.navigate('Comments', {kids: data.kids});
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={setSearchText}
        value={searchText}
      />
      <FlatList
        data={list}
        renderItem={({item}) =>
          item?.title
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) && (
            <StoryItem data={item} onPress={onStoryPress} search={searchText} />
          )
        }
        onEndReached={!searchText && fetchMore}
        ListFooterComponent={() =>
          loading ? <Text style={{padding: 10}}>Loading...</Text> : null
        }
      />
    </SafeAreaView>
  );
};

export default StoriesList;
