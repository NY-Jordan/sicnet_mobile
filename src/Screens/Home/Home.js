import React from 'react'
import { Box,View, Text , HStack, ScrollView, Link, SearchIcon, Image, Divider, Avatar, Pressable, AddIcon, Center, Fab, Icon } from 'native-base'
import ContentView from './ContentView'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/Header'
import { useNavigation } from '@react-navigation/native';
import { SheetProvider } from "react-native-actions-sheet";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Message from '../Message/Message'
import ChainGroup from '../../Components/ChainGroup'

export default function Home() {
    const navigation = useNavigation();


    
  return (
   
        <>
            <Header />
            <ChainGroup />
            <ContentView />
            <Fab renderInPortal={false}   onPress={() => navigation.navigate('AddPost')} shadow={2} placement='top-right' flex={1} top={"85%"} size="sm" icon={<FontAwesomeIcon color='white'  icon={faFeather} size={25} />} />
        </>
      
  )
}