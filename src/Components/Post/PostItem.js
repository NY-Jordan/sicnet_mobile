import { View,  } from 'react-native'
import React from 'react'
import { Box, HStack,Text, Pressable, Center, Divider, ScrollView,  } from 'native-base'
import PostHeader from './PostHeader'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faComment, faRepeat, faShare, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function PostItem() {
   
  return (
    <ScrollView marginTop={2}>
        <Box>
        <PostHeader />
        <Box mx={6} marginTop={2}>
            <Text>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. </Text>
        </Box>
        <HStack space={4} mx={2} my={4}>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>54</Text></Box>
                <Pressable onPress={() => console.log('like')}>
                    <FontAwesomeIcon  icon={faThumbsUp} size={15} />
                </Pressable>
           </HStack>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>54</Text></Box>
                <Pressable onPress={() => console.log('dislike')}>
                    <FontAwesomeIcon  icon={faThumbsDown} size={15} />
                </Pressable>
           </HStack>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>102</Text></Box>
                <Pressable onPress={() => console.log('dislike')}>
                    <FontAwesomeIcon  icon={faComment} size={15} />
                </Pressable>
           </HStack>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>2</Text></Box>
                <Pressable onPress={() => console.log('dislike')}>
                    <FontAwesomeIcon  icon={faRepeat} size={15} />
                </Pressable>
           </HStack>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>0</Text></Box>
                <Pressable onPress={() => console.log('dislike')}>
                    <FontAwesomeIcon  icon={faShare} size={15} />
                </Pressable>
           </HStack>
        </HStack>
        <Divider />
        </Box>
        <Box>
        <PostHeader />
        <Box mx={6} marginTop={2}>
            <Text>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. </Text>
        </Box>
        <HStack space={4} mx={2} my={4}>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>54</Text></Box>
                <Pressable onPress={() => console.log('like')}>
                    <FontAwesomeIcon  icon={faThumbsUp} size={15} />
                </Pressable>
           </HStack>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>54</Text></Box>
                <Pressable onPress={() => console.log('dislike')}>
                    <FontAwesomeIcon  icon={faThumbsDown} size={15} />
                </Pressable>
           </HStack>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>102</Text></Box>
                <Pressable onPress={() => console.log('dislike')}>
                    <FontAwesomeIcon  icon={faComment} size={15} />
                </Pressable>
           </HStack>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>2</Text></Box>
                <Pressable onPress={() => console.log('dislike')}>
                    <FontAwesomeIcon  icon={faRepeat} size={15} />
                </Pressable>
           </HStack>
           <HStack space={2} alignItems={'center'}  backgroundColor={'gray.300'} padding={2} borderRadius={30}>
                <Box textAlign={'center'}><Text>0</Text></Box>
                <Pressable onPress={() => console.log('dislike')}>
                    <FontAwesomeIcon  icon={faShare} size={15} />
                </Pressable>
           </HStack>
        </HStack>
        <Divider />
        </Box>
    </ScrollView>
  )
}