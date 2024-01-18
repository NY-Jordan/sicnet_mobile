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
import Notifications from '../Screens/Notifications/Notifications';
import Message from '../Screens/Message/Message';
import Evenements from '../Screens/Evenements/Evenements';
import Debate from '../Screens/Debate/Debate';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Conversation from '../Screens/Message/Conversation';
import AddPost from '../Screens/Posts/AddPost';
import Index from '../Screens/Account/Index';
import Tab from '../Screens/Tab';
import ChainDetails from '../Screens/Chain/ChainDetails';
import Search from '../Screens/Chain/Search';
import SearchHome from '../Screens/Home/Search';


enableScreens();
const Stack = createNativeStackNavigator();

export default class Navigation extends Component {

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Landing'>
                <Stack.Screen name="Landing" component={Landing} options={{ headerShown : false }} />
                {/* Authentification */}
                <Stack.Screen name="Authentification" component={Auth} options={{ headerShown : false }} />
                <Stack.Screen name="PhoneVerification" component={PhoneVerification} options={{ headerShown : false }} />
                <Stack.Screen name="UserInformations" component={UserInformations} options={{ headerShown : false }} />
                <Stack.Screen name="FavoriteMusic" component={FavoriteMusic} options={{ headerShown : false }} />
                {/* Home screen */}
                <Stack.Screen name="Home" component={Home}   options={{ headerShown : false }} />
                {/* Notifications screen */}
                <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown : false  }} />
                {/* Message screen */}
                <Stack.Screen name="Message" component={Message} options={{ headerShown : false }} />
                <Stack.Screen name="Conversation" component={Conversation} options={{ headerShown : false }} />
                {/* Evenements screen */}
                <Stack.Screen name="Evenements" component={Evenements} options={{ headerShown : false }} />
                {/* Debate screen */}
                <Stack.Screen name="Debate" component={Debate} options={{ headerShown : false }} />
                {/* Debate screen */}
                <Stack.Screen name="AddPost" component={AddPost} options={{ headerShown : false }} />

                 {/* Account screen */}
                <Stack.Screen name="Account" component={Index} options={{ headerShown : false }} />

                <Stack.Screen name="Tab" component={Tab} options={{ headerShown : false }} />
                <Stack.Screen name="chainDetails" component={ChainDetails} options={{ headerShown : false }} />
                <Stack.Screen name="chainSearchUser" component={Search} options={{ headerShown : false }} />
                <Stack.Screen name="Search" component={SearchHome} options={{ headerShown : false }} />

            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
       
    )
  }
}
