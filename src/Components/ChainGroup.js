
import React from 'react'
import { View, FlatList, Pressable } from 'native-base'
import { chains } from '../data/chain'
import ChainItem from './ChainItem'


export default function ChainGroup() {
    


  return (
    <View _dark={{ bg : "muted.900" }} p={2}>
        <FlatList  showsHorizontalScrollIndicator={false}  horizontal={true} data={chains} renderItem={({
      item
      }) => 
            <ChainItem name={item.name} image={item.image} status={item.status}  />} />
    </View>
  )
}