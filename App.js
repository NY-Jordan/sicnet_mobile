import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation/Navigation';
import { NativeBaseProvider, extendTheme, useColorModeValue } from 'native-base';
import { enableScreens, useScreens } from 'react-native-screens';
import { SheetProvider } from 'react-native-actions-sheet';
import { ThemeProvider } from './src/Context/ThemeContext';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  const color = useColorModeValue("white", "#164e63");

 // Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
const customTheme = extendTheme({ config });
  NavigationBar.setBackgroundColorAsync(color);
  return (
    <SheetProvider>
      <NativeBaseProvider theme={customTheme}>
          <ThemeProvider>
            <Navigation />
          </ThemeProvider>
      </NativeBaseProvider>
   </SheetProvider>
  );
}

