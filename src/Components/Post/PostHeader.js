import { View } from 'react-native'
import React from 'react'
import { Avatar, Box, Text ,HStack, Pressable, ThreeDotsIcon, CloseIcon } from 'native-base'

export default function PostHeader() {
  return (
    <HStack justifyContent={'space-between'} p={2} _dark={{ bg : "coolGray.800" }}>
        <HStack space={8}> 
            <Pressable width={'15%'}>
                    <Avatar bg="green.500" size="md" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH&auto=format&fit=crop&w=687&q=80"
                }}>
                        NY
                    </Avatar> 
            </Pressable>
            <Box>
                <Text fontWeight={'bold'} fontSize={'md'}>Nguetse Yvan</Text>
                <Text fontSize={'xs'} color={'gray.400'}>28 min ago</Text>
            </Box>
        </HStack>
        <HStack space={6}>
            <Pressable onPress={() => console.log('more post')}>
                <ThreeDotsIcon />
            </Pressable>
            <Pressable onPress={() => console.log('close post')}>
                <CloseIcon />
            </Pressable>
        </HStack>
    </HStack>
  )
}