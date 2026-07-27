/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import { AppRoutes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from './src/theme';
import './global.css';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colors.transparent}
          translucent={true}
          barStyle={'light-content'}
        />
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
