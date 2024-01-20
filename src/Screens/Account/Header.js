
import React, { useContext, useState } from 'react'
import { ArrowBackIcon, Box, HStack, Pressable, Text, ThreeDotsIcon, useDisclose } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import Action from './Action';
import ThemeContext from '../../Context/ThemeContext';
export default function Header() {
    const navigation = useNavigation();
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();
      const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <HStack mb={2} _dark={{ bg : "muted.900" }}  alignItems={'center'} space={20} >
                <HStack space={4}>
                    <Pressable mt={2}  onPress={() => navigation.goBack()} ml={4} >
                        <ArrowBackIcon size='5'/>
                    </Pressable>
                    <Box  alignItems={'center'}  justifyContent={'center'} > 
                        <Text  fontSize={"lg"} fontWeight={'bold'} >Yvan Jordan Nguetse</Text>
                    </Box>
                </HStack>
                <Pressable onPress={onOpen} >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box  overflow={'hidden'} p={2} borderRadius={30}   bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                <ThreeDotsIcon />
                            </Box>
                        }}
                    
                </Pressable>

                <Action isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </HStack>
  )
}