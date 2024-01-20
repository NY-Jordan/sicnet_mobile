import { View,  } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Avatar, Box,Text, HStack, Pressable, VStack, ScrollView, Divider } from 'native-base'
import NotificationItem from '../../Components/NotificationItem'

export default function Notifications() {
  return (
    <View _dark={{ bg  : "muted.900"}}>
      <Header />
      <ScrollView  _dark={{ bg  : "muted.900"}}>
        <Box mx={4}>
          <Text fontSize={'2xl'} >Notifications</Text>
        </Box>
        <VStack mx={4} >      
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />   
        </VStack>
      </ScrollView>
    </View>
  )
}