
import { Box, Pressable, Text } from 'native-base'
import React from 'react'

export default function Tag({name}) {
  return (
    <Pressable>
        {({
        isHovered,
        isPressed
    }) => {
        return <Box p={2} my={2} mx={2} bg={'gray.200'} _dark={{ bg : isPressed ? "coolGray.700" : isHovered ? "coolGray.700" : "cyan.900" }} borderRadius={10}>
            <Text fontWeight={'bold'}>{name}</Text>
        </Box> }}
    </Pressable>
  )
}