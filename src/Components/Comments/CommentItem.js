import { View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Avatar, HStack, Pressable, VStack, Text, Box, Icon } from 'native-base'
import SubComments from './SubComments';

export default function CommentItem({username, message, created_at, like, response, responses_items}) {
    const [showSubComments, setShowSubComments] = useState(false)
  return (
    <View >
      <VStack my={4}>
            <HStack space={2}>
                <Pressable >
                        <Avatar bg="green.500" size="sm" source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                            cache: 'only-if-cached',
                        }}>
                            AJ
                        </Avatar> 
                </Pressable>
                <VStack>
                    <Box flexDirection={'row'} >
                        <Text fontWeight={'bold'}>{username}</Text> 
                    </Box>
                    <Box maxWidth={"90%"}>
                        <Text>{message}</Text>
                    </Box>
                    <HStack space={16}>
                        <Box flexDirection={'row'} >
                                <Text color={'gray.400'}>{created_at}</Text>
                                <Pressable ml={"15%"}>
                                    <Text color={'gray.500'}>Repondre</Text>
                                </Pressable>
                        </Box>
                        <HStack alignItems={'center'} space={4}>
                            <Box flexDirection={'row'} alignItems={'center'}>
                                <Pressable>
                                    <Icon as={MaterialCommunityIcons} size="4"  color={'gray.500'} name="heart-outline" />
                                </Pressable>
                                <Text fontSize={'sm'} color={'gray.400'}  ml={2}>{like}</Text>
                            </Box>
                            <Pressable>
                                <Icon as={MaterialCommunityIcons} size="4"  color={'gray.500'} name="thumb-down-outline" />
                            </Pressable>
                        </HStack>
                    </HStack>
                    {
                        (response > 0 && showSubComments === false) ? <Pressable  onPress={() => setShowSubComments(true)} justifyContent={'center'} mt={"4%"}>
                        <Text fontSize={'sm'} color={'gray.700'} >{"_____Voir " +response+ " reponses"}</Text>
                    </Pressable> : ""
                    }
                    {
                       (response > 0 && showSubComments === true) ? responses_items.map((sub_comment, index) => <SubComments 
                       key={index} 
                       username={sub_comment.username}
                       message={sub_comment.message}
                       like={sub_comment.like}
                       tag={sub_comment.tag}
                       created_at={sub_comment.created_at}
                       />) : ""
                    }
                    {
                        (response > 0 && showSubComments === true) ? <Box pl={16} flexDirection={'row-reverse'}>
                            <Pressable  onPress={() => setShowSubComments(false)} >
                                <Text color={'gray.500'}>Hide</Text>
                                </Pressable>
                            </Box> : ""
                    }
                </VStack>
            </HStack>
            
      </VStack>
    </View>
  )
}