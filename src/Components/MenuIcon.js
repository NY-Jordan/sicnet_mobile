import { View, Text } from 'react-native'
import React from 'react'
import { Box, Image, Link } from 'native-base'

export default function MenuIcon({source, notificationNumber}) {
  return (
    <Link onPress={() => console.log('skip')} mt="3">
        <Box >
            <Image  source={source} alt='menu icon' width={6} height={6} />
        </Box>
        <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
            <Text style={{ color : "white", textAlign : "center"}}>{notificationNumber}</Text>
        </Box>
    </Link>
  )
}