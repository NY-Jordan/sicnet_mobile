
import React from 'react'
import { ArrowBackIcon, Box, HStack, Pressable, Text, ThreeDotsIcon } from 'native-base'
import { useNavigation } from '@react-navigation/native';
export default function Header() {
    const navigation = useNavigation();
  return (
    <HStack mb={2}   alignItems={'center'} space={20} >
                <HStack space={4}>
                    <Pressable mt={2}  onPress={() => navigation.goBack()} ml={4} >
                        <ArrowBackIcon size='5'/>
                    </Pressable>
                    <Box  alignItems={'center'}  justifyContent={'center'} > 
                        <Text fontSize={"lg"} fontWeight={'bold'} >Yvan Jordan Nguetse</Text>
                    </Box>
                </HStack>
                <Pressable   >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box  overflow={'hidden'} p={2} borderRadius={30}   bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                <ThreeDotsIcon />
                            </Box>
                        }}
                    
                </Pressable>
                
        </HStack>
  )
}