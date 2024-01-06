import { View, Animated} from 'react-native'
import React, { useRef, useState } from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Avatar, Box, HStack, Pressable, VStack, Text, Icon } from 'native-base'

export default function SubComments({username, message, created_at, like, tag}) {
    const user_tag = tag && "@"+tag+" ";
    const  [colorLikeButton, setColorLikeButton] = useState(false);
    const [nameLikeButton, setnameLikeButton] = useState(false);
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);

    const likeEvent = () =>  {
          animateElement();
         setColorLikeButton(!colorLikeButton);
         setnameLikeButton(!nameLikeButton)
    }

    const scaleAnimate = useRef(new Animated.Value(20)).current;
    const animateElement = () => {
      Animated.timing(scaleAnimate, {
        toValue: 200,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    };
    const animationStyle = {
      width: scaleAnimate,
      height: scaleAnimate,
    };
  return (
    <View>
       <VStack my={2}>
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
                    <Box maxWidth={"90%"} flexDirection={'row'}>
                        {
                            tag && <Text color={'primary.800'}>{user_tag}</Text> 
                        }
                        <Text>{message}</Text>
                    </Box>
                    <HStack space={8}>
                        <Box flexDirection={'row'} >
                                <Text color={'gray.400'}>{created_at}</Text>
                                <Pressable ml={"15%"}>
                                    <Text color={'gray.500'}>Repondre</Text>
                                </Pressable>
                        </Box>
                        <HStack alignItems={'center'} space={4}>
                            <Box flexDirection={'row'} alignItems={'center'}>
                                <Pressable onPress={() => likeEvent()}>
                                    <AnimatedIcon style={animationStyle}
                                        as={MaterialCommunityIcons} size="4"     color={colorLikeButton ===true? 'error.700' : 'gray.500'} name={nameLikeButton ===true ? 'heart' : 'heart-outline'} >
                                    </AnimatedIcon>
                                </Pressable>
                                <Text fontSize={'sm'} color={'gray.400'}  ml={2}>{like}</Text>
                            </Box>
                            <Pressable>
                                <Icon as={MaterialCommunityIcons} size="4"  color={'gray.500'} name="thumb-down-outline" />
                            </Pressable>
                        </HStack>
                    </HStack>
                   
                </VStack>
            </HStack>
            
      </VStack>
    </View>
  )
}