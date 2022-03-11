import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './src/navigators/app-navigator';
import { NBTheme } from './src/util/themes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider theme={NBTheme}>
          <AppNavigator />
        </NativeBaseProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
