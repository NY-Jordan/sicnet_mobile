import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/Navigation/Navigation';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
   <NativeBaseProvider>
      <Navigation />
   </NativeBaseProvider>
  );
}

