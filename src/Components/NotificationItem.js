import { Avatar, Box, Divider, HStack, Pressable, Text } from 'native-base'
import React from 'react'

export default function NotificationItem() {
  return (
    <Box >
            <Pressable >
              {({
                    isHovered,
                    isPressed
                  }) => {
                    return <HStack space={8} my={6} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}> 
                              <Pressable width={'15%'}>
                                    <Avatar bg="green.500" size="lg" source={{
                                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                        cache: 'only-if-cached',
                                    }}>
                                        AJ
                                    </Avatar> 
                              </Pressable>
                              <Box overflow={'hidden'} width={'75%'}>
                                  <Text fontSize={'md'}> <Text fontWeight={'bold'}>Yvan Jordan</Text> viens de publier un nouveau post </Text>
                                  <Text fontSize={'sm'} color={'gray.400'}>Le 01 Dec 2023 à 19h:46</Text>
                              </Box>
                            </HStack>
              }}
            </Pressable>
            <Divider />
    </Box>
  )
}