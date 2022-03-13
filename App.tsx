import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Platform, StyleSheet, UIManager } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './src/navigators/app-navigator';
import { NBTheme } from './src/util/themes';

const queryClient = new QueryClient();

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider theme={NBTheme}>
          <GestureHandlerRootView style={styles.flexOne}>
            <AppNavigator />
          </GestureHandlerRootView>
        </NativeBaseProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({ flexOne: { flex: 1 } });
