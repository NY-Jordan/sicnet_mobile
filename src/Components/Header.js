import React from 'react'
import { AddIcon, View, Text, Avatar, Box, Divider, HStack, Link, Pressable, Image, Icon } from 'native-base'
import Menu from './Menu'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { styles } from '../Screens/Home/styles'
import searchIcon from './../assets/img/searchIcon.png';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
  const navigation = useNavigation();
  return (
    <>
    <Box _dark={{ bg: "cyan.900"}}>
      <HStack  space={4} alignItems={'center'}  mx={2} my={2}>
        <Pressable mt={4} onPress={() => navigation.navigate('Account')}>
            <Avatar bg="green.500" size="sm" source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH&auto=format&fit=crop&w=687&q=80"
            }}>
                NY
            </Avatar> 
        </Pressable>
        <Link onPress={() => navigation.navigate('Search')} mt="3">
          <HStack bg={'blueGray.200'} _dark={{ bg: "gray.400"}} px={2} width={'85%'} space={4} alignItems={'center'}>
              <Image  source={searchIcon} alt='search icon' width={4} height={8} />
              <Text _dark={{ color: "white"}} color={'gray.600'}>Search</Text>
          </HStack>
        </Link>
      </HStack>
      
    </Box>
    <Box _dark={{ bg: "coolGray.800"}}  p={1} _light={{ bg: "gray.200" }} ></Box> 
  </>
  );
}