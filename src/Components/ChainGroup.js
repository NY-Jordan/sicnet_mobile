
import React from 'react'
import { Avatar, Box, Pressable, ScrollView, View, Text, HStack, SectionList, FlatList } from 'native-base'
import { VirtualizedList } from 'react-native'
import { chains } from '../data/chain'
import ChainItem from './ChainItem'


export default function ChainGroup() {
    
 
  return (
    <View>
        <FlatList  showsHorizontalScrollIndicator={false}  horizontal={true} data={chains} renderItem={({
      item
      }) => <ChainItem name={item.name} image={item.image}  />} />
    </View>
  )
}