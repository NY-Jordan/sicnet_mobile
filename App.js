import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation/Navigation';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { enableScreens, useScreens } from 'react-native-screens';
import { SheetProvider } from 'react-native-actions-sheet';

export default function App() {
  
 

  return (
    <SheetProvider>
      <NativeBaseProvider >
          <Navigation />
      </NativeBaseProvider>
   </SheetProvider>
  );
}

