
import { Avatar, Box, Pressable, Text } from 'native-base'
import React from 'react'

export default function ChainItem({name, image, status=false}) {
  return (
    <Box mx={2}>
        <Pressable  onPress={() => navigation.navigate('Account')}>
                <Avatar bg="green.500" size="lg" source={{
                    uri: image,
                    cache: 'only-if-cached',
                }}>
                    AJ
                </Avatar> 
        </Pressable>
        <Text fontSize={'xs'} textAlign={'center'}>{name} </Text>
        {        

        status && <Box height={2} p={2}  position={'absolute'} top={"55%"} left={'75%'} width={2} borderRadius={10} backgroundColor={'green.400'}></Box>
        }   
     </Box>
  )
}