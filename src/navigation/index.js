import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import StoriesList from '../screens/Stories';
import Comments from '../screens/CommentsScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Hacker News Clone'}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={({route}) => ({title: route.params.name})}
          name="Stories"
          component={StoriesList}
        />
        <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
