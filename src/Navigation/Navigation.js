import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../Screens/Landing/Landing'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Auth from '../Screens/Auth/Auth';

const Stack = createStackNavigator();

export default class Navigation extends Component {

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Landing'>
                <Stack.Screen name="Landing" component={Landing} options={{ headerShown : false }} />
                <Stack.Screen name="Authentification" component={Auth} options={{ headerShown : false }} />
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
       
    )
  }
}
