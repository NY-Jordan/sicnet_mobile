import {  } from 'react-native'
import React from 'react'
import { Box , Text, View} from 'native-base'

export default function ReceiverMessage({message}) {
  return (
    <View my={2} >
      <Box padding={4} backgroundColor={'radial-gradient(circle at 3% 7.4%, rgb(0, 144, 243) 0%, rgb(0, 86, 240) 90%)'}
            
            borderTopLeftRadius={30}
            borderTopRightRadius={30}
            borderBottomLeftRadius={30}
            alignSelf={'flex-end'}
            maxWidth={'80%'}
      >
        <Text color={'white'}>{message}</Text>
      </Box>
    </View>
  )
}