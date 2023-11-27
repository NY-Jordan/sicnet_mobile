import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../Screens/Landing/Landing'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Auth from '../Screens/Auth/Auth';
import PhoneVerification from '../Screens/Auth/PhoneVerification/PhoneVerification';
import UserInformations from '../Screens/Auth/UserInformations/UserInformations';
import FavoriteMusic from '../Screens/Auth/FavoriteMusic/FavoriteMusic';
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();

export default class Navigation extends Component {

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Landing" component={Landing} options={{ headerShown : false }} />
                {/* Authentification */}
                <Stack.Screen name="Authentification" component={Auth} options={{ headerShown : false }} />
                <Stack.Screen name="PhoneVerification" component={PhoneVerification} options={{ headerShown : false }} />
                <Stack.Screen name="UserInformations" component={UserInformations} options={{ headerShown : false }} />
                <Stack.Screen name="FavoriteMusic" component={FavoriteMusic} options={{ headerShown : false }} />
                {/* Home screen */}
                <Stack.Screen name="Home" component={Home} options={{ headerShown : false }} />
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
       
    )
  }
}
