import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Center, Divider, Fab, Icon, ScrollView } from 'native-base'
import PostItem from '../../../Components/Post/PostItem'
import { posts } from '../../../data/homeData'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFeather, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import CommentSheets from '../../../Components/Sheets/CommentSheets'

export default function ForYou() {
  return (
    <View _dark={{ bg : "coolGray.800" }}>
        <ScrollView showsVerticalScrollIndicator={false} _dark={{ bg : "coolGray.800" }}  px={2}>
            {
                posts.map((post, index) =>  <>
                <PostItem  
                key={index}
                content={post.content} 
                image={post.image}
                video={post.video}
                StatsReactions={post.StatsReactions}
                commentsId={"comments"+index}
                />
                <Divider key={index} my={2} />
                <CommentSheets  key={index} sheetId={"comments"+index} />
                </>)
            }
        </ScrollView>
    </View>
  )
}