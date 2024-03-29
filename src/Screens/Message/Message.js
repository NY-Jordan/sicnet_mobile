import React from 'react'
import Header from '../../Components/Header'
import { Avatar, Box, View,Text,HStack, Pressable, ScrollView, VStack } from 'native-base'
import ConversationItem from '../../Components/ConversationItem'

export default function Message() {
  return (
    <View  backgroundColor={'white'} _dark={{ bg  : "muted.900"}}>
        <Header />
        <ScrollView height={"100%"} _dark={{ bg  : "muted.900"}}>
            <Box mx={4} mb={2}>
                <Text fontSize={'2xl'} >Messages</Text>
            </Box>
            <VStack>
                    <ConversationItem />
                    <ConversationItem />
            </VStack>            
        </ScrollView>
    </View>
  )
}