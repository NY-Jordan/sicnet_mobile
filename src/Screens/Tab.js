import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Home from './Home/Home';
import Message from './Message/Message';
import Notifications from './Notifications/Notifications';
import { Box, useColorModeValue } from 'native-base';
import * as NavigationBar from 'expo-navigation-bar';


export default function Tab() {
    
    const color = useColorModeValue("white", "#164e63");
    const colorIcon = useColorModeValue("white", "white");
    NavigationBar.setBackgroundColorAsync(color);
    const Tab = createBottomTabNavigator();
  return (
    
    <Tab.Navigator initialRouteName='Home'   screenOptions={{ 
        headerShown : false,
        tabBarShowLabel : false,
        tabBarStyle : {
          backgroundColor : color
        }
     }} >
            <Tab.Screen name="Home"  component={Home} options={{ 
                tabBarIcon: ({ color, size }) => (
                    <Box >
                        <MaterialCommunityIcons name="home" color={colorIcon} size={size} />
                        <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={40} >
                            <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+4'}</Text>
                        </Box>
                    </Box>
                  ),
             }} />
             <Tab.Screen name="Notifications" component={Notifications} options={{ 
                tabBarIcon: ({ color, size }) => (
                    <Box>
                        <MaterialCommunityIcons name="bell-outline" color={colorIcon} size={size} />
                        <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={40} >
                            <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
                        </Box>
                    </Box>
                  ),
                  tabBarStyle : {
                    height : '1000px'
                  }
             }} />
              <Tab.Screen name="Message" component={Message} options={{ 
                tabBarIcon: ({ color, size }) => (
                    <Box>
                        <MaterialCommunityIcons name="message-outline" color={colorIcon} size={size} />
                        <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={40} >
                            <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+1'}</Text>
                        </Box>
                    </Box>
                  ),
             }} />
    </Tab.Navigator>
   
  )
}