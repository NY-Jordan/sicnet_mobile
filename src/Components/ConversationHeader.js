import React from 'react'
import { ArrowBackIcon, Avatar,View, Text , Box, HStack, Pressable, ThreeDotsIcon } from 'native-base'
import { useNavigation } from '@react-navigation/native';
export default function ConversationHeader() {
  const navigation = useNavigation();
  return (
    <HStack space={4}>
    <Pressable ml={4} onPress={() => navigation.goBack()}>
      {({
          isHovered,
          isPressed
      }) => {
        return <HStack   space={2} my={2} py={2}  overflow={'hidden'} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>

                    <Box mt={2}>
                      <ArrowBackIcon color='black' size='5'/>
                    </Box>
                    <Box>
                        <Avatar bg="green.500" size="sm" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                                cache: 'only-if-cached',
                            }}>
                                AJ
                        </Avatar> 
                    </Box>

            </HStack>
        }}
    </Pressable>
    <Pressable  >
      {({
          isHovered,
          isPressed
      }) => {
        return <Box  overflow={'hidden'}  my={2} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                   <Text   fontSize={'lg'}>Nguetse Yvan Jordan</Text>
                   <Text color={'tertiary.600'}  fontSize={'xs'}>Online</Text> 
            </Box>
        }}
    </Pressable>
    <Pressable  ml={6} padding={4}>
      <ThreeDotsIcon />
    </Pressable>
  </HStack>
  )
}