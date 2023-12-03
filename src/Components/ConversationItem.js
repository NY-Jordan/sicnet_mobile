import { View,  } from 'react-native'
import React from 'react'
import { Avatar, Box,Text, HStack, Pressable, Divider } from 'native-base'

export default function ConversationItem() {
  return (
    <Box my={2}>
        <Pressable mx={4}>
            {({
                isHovered,
                isPressed
            }) => {
        return <HStack space={20} overflow={'hidden'} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}>
            <HStack>
                <Box>
                    <Avatar bg="green.500" size="lg" source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        }}>
                            AJ
                    </Avatar> 
                    <Box backgroundColor={'tertiary.600'}  padding={2} maxWidth={2}   left={10} bottom={3} borderRadius={40} ></Box>
                </Box>
                <Box ml={4} >
                    <Text fontWeight={'bold'} fontSize={'lg'} >Nguetse Yvan</Text>
                    <Text fontWeight={'bold'} color={'gray.400'} fontSize={'md'} >salut c'est comment ? tu as ...</Text>

                </Box>
            </HStack>
            <Box backgroundColor={'red.600'} position={'absolute'} left={"90%"} maxHeight={5} top={5} minWidth={5}   borderRadius={30} >
                <Text color={'white'} textAlign={'center'}>4</Text>
            </Box>
            </HStack>
      }}
    </Pressable>
    </Box>
  )
}