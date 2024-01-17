
import { Box, Pressable, Text } from 'native-base'
import React from 'react'

export default function Tag({name}) {
  return (
    <Pressable>
        <Box p={2} my={2} mx={2} bg={'gray.200'} borderRadius={10}>
            <Text fontWeight={'bold'}>{name}</Text>
        </Box>
    </Pressable>
  )
}