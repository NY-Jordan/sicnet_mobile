import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Box, HStack, Image, Link, Pressable } from 'native-base'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {   faHome } from '@fortawesome/free-solid-svg-icons'
import {  faBell, faCalendarAlt, faComment, faComments, faMessage } from '@fortawesome/free-regular-svg-icons'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Menu({source, notificationNumber}) {
    const navigation = useNavigation();
    const route = useRoute();
    const Menu = {
        'Home' : 'Home',
        'Notifications' : 'Notifications',
        'Message' : 'Message',
        'Evenements' : 'Evenements',
        'Debate' : 'Debate',
    };

    const colorActive = 'rgb(8, 143, 143)';

    const HandleNavigationMenu = (menu) =>{
        console.log(menu);
        navigation.navigate(menu);
    }
  return (
   <HStack space={16}   >
        <Pressable  onPress={() => navigation.navigate('Account')}>
            <Avatar bg="green.500" size="md" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                cache: 'only-if-cached',
            }}>
                AJ
            </Avatar> 
        </Pressable>
      {/* Home Menu */}
      <Link onPress={() => HandleNavigationMenu(Menu.Home)} mt="3" _hover={{ backgroundColor : "gray.300" }}>
          <Box color={'red.400'}>
              <FontAwesomeIcon color={route.name == Menu.Home ? colorActive :""} icon={faHome} size={25}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={40} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
      <Link onPress={() => HandleNavigationMenu(Menu.Notifications)} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon color={route.name == Menu.Notifications ? colorActive :""} icon={faBell} size={25}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
      <Link onPress={() => HandleNavigationMenu(Menu.Message)} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon  color={route.name == Menu.Message ? colorActive :""} icon={faMessage} size={20}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
      {/* <Link onPress={() => HandleNavigationMenu(Menu.Evenements)} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon color={route.name == Menu.Evenements ? colorActive :""}  icon={faCalendarAlt} size={20}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
      <Link onPress={() => HandleNavigationMenu(Menu.Debate)} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon  color={route.name == Menu.Debate ? colorActive :""}  icon={faComments} size={25}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link> */}
   </HStack>
  )
}