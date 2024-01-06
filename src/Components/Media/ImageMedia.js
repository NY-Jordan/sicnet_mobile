import { View, Text } from 'react-native'
import React from 'react'
import { Icon, Image, Pressable, VStack } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function ImageMedia({uri}) {
  return (
    <VStack ml={16} backgroundColor={'gray.200'} justifyContent="center" borderRadius={'10'} alignItems="center"   mt={2}>
        <Pressable  onPress={() => setSelectedMedia()} position={'absolute'} zIndex={100}  bottom={"89%"} left={"89%"} >
                <Icon as={MaterialCommunityIcons} size="8" name="close" color="black" _dark={{
                color: "warmGray.50"
                }}   />
        </Pressable>
        <Image    size={'2xl'} borderRadius={'10'} resizeMode="cover" source={{
        uri: uri
        }} alt={"Alternate Text "} width={'100%'}  />
    </VStack>
  )
}