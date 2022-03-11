import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigator.types';
import { Subreddit } from '../screens/subreddit';
import { SubredditPost } from '../screens/subreddit-post';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Navigator>
      <Screen name="subreddit" component={Subreddit} />
      <Screen name="subredditPost" component={SubredditPost} />
    </Navigator>
  );
};

export default AppNavigator;
