import { View, Text } from 'react-native'
import React from 'react'
import { HStack, Image, Pressable, VStack } from 'native-base'
import { socialNetworkImage } from '../../data/socialNetworkData'
import { styles } from './style'

export default function SocialNetwork() {
  return (
    <View  style={styles.alignCenter}>
      <HStack justifyContent={'space-between'} marginTop={5} width={"70%"}>
        <Pressable>
            <Image source={socialNetworkImage[0]} alt="spotify" width={10} height={10} />
        </Pressable>
        <Pressable>
            <Image source={socialNetworkImage[1]} alt="spotify" width={10} height={10} />
        </Pressable>
        <Pressable>
            <Image source={socialNetworkImage[2]} alt="spotify"  width={10} height={10}/>
        </Pressable>
      </HStack>
    </View>
  )
}