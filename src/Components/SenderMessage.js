import React from 'react'
import { Box, Text ,View} from 'native-base'

export default function SenderMessage(message) {
  return (
    <View my={2}>
      <View padding={4} backgroundColor={'gray.300'}
            borderTopLeftRadius={30}
            borderTopRightRadius={30}
            borderBottomRightRadius={50}
            alignSelf={'flex-start'}
            maxWidth={'80%'}
      >
        <Text color={'black'}>Salut à toi ! </Text>
      </View>
    </View>
  )
}