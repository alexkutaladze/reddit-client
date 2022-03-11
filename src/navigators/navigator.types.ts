import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  subreddit: undefined;
  subredditPost: {
    permalink: string;
    title: string;
    subreddit: string;
    author: string;
    score: number;
    rate: number;
    created: number;
    num_comments: number;
  };
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
