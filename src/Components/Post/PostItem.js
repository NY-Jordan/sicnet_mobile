import { View,  } from 'react-native'
import React from 'react'
import { Box, HStack,Text, Pressable, Center, Divider, ScrollView, Image, VStack,  } from 'native-base'
import PostHeader from './PostHeader'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faComment, faRepeat, faShare, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { SheetManager } from 'react-native-actions-sheet'



export default function PostItem({content, image, video, StatsReactions, commentsId}) {
   
  return (
    <View marginTop={4} _dark={{ bg : "coolGray.800" }} >
        <Box _dark={{ bg : "coolGray.800" }}>
            <PostHeader />
            <Box ml={12}  mr={2} >
                <Text fontFamily={'Roboto'}>{content}</Text>
            </Box>
            {
                image && <VStack ml={12} backgroundColor={'gray.200'} justifyContent="center" borderRadius={'10'} alignItems="center"  // my={6}
                            mt={2}>
                            <Image  size={'2xl'} borderRadius={'10'} resizeMode="contain" source={{
                            uri: image
                            }} alt={"Alternate Text "} width={'100%'}  />
                        </VStack>
            }
            <HStack space={4} ml={4} overflow={'hidden'} my={2} justifyContent={'center'} alignItems={'center'}>
                {/* like button */}
                <HStack space={2} alignItems={'center'} _dark={{ bg : "cyan.900" }} _light={{ bg : "gray.300"  }}   padding={2} borderRadius={30}>
                        <Box textAlign={'center'}><Text>{StatsReactions.like}</Text></Box>
                        <Pressable onPress={() => console.log('like')}>
                            <FontAwesomeIcon  icon={faThumbsUp} size={15} />
                        </Pressable>
                </HStack>
                {/* dislike button */}
                <HStack space={2} alignItems={'center'}  _dark={{ bg : "cyan.900" }} _light={{ bg : "gray.300"  }} padding={2} borderRadius={30}>
                        <Box textAlign={'center'}><Text>{StatsReactions.dislike}</Text></Box>
                        <Pressable onPress={() => console.log('dislike')}>
                            <FontAwesomeIcon  icon={faThumbsDown} size={15} />
                        </Pressable>
                </HStack>
                 {/* comments button */}
                 <Pressable onPress={() => SheetManager.show(commentsId)} >
                    <HStack space={2} alignItems={'center'}  _dark={{ bg : "cyan.900" }} _light={{ bg : "gray.300"  }} padding={2} borderRadius={30}>
                            <Box textAlign={'center'}><Text>{StatsReactions.comments}</Text></Box>
                            <FontAwesomeIcon  icon={faComment} size={15} />
                    </HStack>
                </Pressable>
                {/* repost button */}
                <HStack space={2} alignItems={'center'}  _dark={{ bg : "cyan.900" }} _light={{ bg : "gray.300"  }} padding={2} borderRadius={30}>
                        <Box textAlign={'center'}><Text>{StatsReactions.repost}</Text></Box>
                        <Pressable onPress={() => console.log('dislike')}>
                            <FontAwesomeIcon  icon={faRepeat} size={15} />
                        </Pressable>
                </HStack>
            </HStack>
        </Box>
    </View>
  )
}