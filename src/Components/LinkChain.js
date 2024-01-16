import { View, Text } from 'react-native'
import React from 'react'
import { Box, Pressable } from 'native-base'

export default function LinkChain({onPress, text}) {
  return (
      <Pressable onPress={() => onPress} >
            {({
                isHovered,
                isPressed
            }) => {
                return  <Box py={2} pl={2}  bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                        {text}
                </Box>
            }}
    </Pressable>
  )
}