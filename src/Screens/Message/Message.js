import { View,  } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Avatar, Box, Text,HStack, Pressable, ScrollView, VStack } from 'native-base'
import ConversationItem from '../../Components/ConversationItem'

export default function Message() {
  return (
    <View>
        <Header />
        <ScrollView>
            <Box mx={4} mb={8}>
                <Text fontSize={'2xl'} >Messages</Text>
            </Box>
            <VStack>
                    <ConversationItem />
                    <ConversationItem />
                    <ConversationItem />
                    <ConversationItem />
                    <ConversationItem />
                    <ConversationItem />
                    <ConversationItem />
                    <ConversationItem />
            </VStack>            
        </ScrollView>
    </View>
  )
}