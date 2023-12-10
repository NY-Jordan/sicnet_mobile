import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation/Navigation';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { enableScreens, useScreens } from 'react-native-screens';

export default function App() {
  
 
  /*const theme = extendTheme({
    fontConfig: {
      Roboto: {
        100: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        200: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        300: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        400: {
          normal: "Roboto-Regular",
          italic: "Roboto-Italic",
        },
      
        // Add more variants
        //   700: {
        //     normal: 'Roboto-Bold',
        //   },
        //   800: {
        //     normal: 'Roboto-Bold',
        //     italic: 'Roboto-BoldItalic',
        //   },
        //   900: {
        //     normal: 'Roboto-Bold',
        //     italic: 'Roboto-BoldItalic',
        //   },
      },
    },
  
    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: "Roboto",
      body: "Roboto",
      mono: "Roboto",
    },
  });*/
  return (
   <NativeBaseProvider>
      <Navigation />
   </NativeBaseProvider>
  );
}

