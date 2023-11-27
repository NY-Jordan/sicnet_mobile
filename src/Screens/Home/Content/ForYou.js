import { View, Text } from 'react-native'
import React from 'react'
import { Center, ScrollView } from 'native-base'
import PostItem from '../../../Components/Post/PostItem'

export default function ForYou() {
  return (
    <ScrollView>
        
            <PostItem />
        
    </ScrollView>
  )
}