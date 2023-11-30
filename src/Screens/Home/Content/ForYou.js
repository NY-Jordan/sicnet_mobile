import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Center, Divider, Fab, Icon, ScrollView } from 'native-base'
import PostItem from '../../../Components/Post/PostItem'
import { posts } from '../../../data/homeData'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFeather, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export default function ForYou() {
  return (
    <View >
        <ScrollView showsVerticalScrollIndicator={false} marginBottom={"80%"}>
            {
                posts.map((post, index) =>  <>
                <PostItem  
                key={index}
                content={post.content} 
                image={post.image}
                video={post.video}
                StatsReactions={post.StatsReactions}
                />
                <Divider my={2} />
                </>)
            }
        </ScrollView>
    </View>
  )
}