
import { ArrowBackIcon, Avatar, Box, Divider, HStack, Icon, Pressable, ScrollView, Text, ThreeDotsIcon, View } from 'native-base'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import PostItem from '../../Components/Post/PostItem';
import { posts } from '../../data/homeData';
import CommentSheets from '../../Components/Sheets/CommentSheets';
import ChainGroup from '../../Components/ChainGroup';


export default function Index() {
    const navigation = useNavigation();
  return (
    <View bgColor={'white'} _dark={{ bg : "muted.900" }} height={"100%"} p={2}>
      <Box>
        <Header />
        <Divider />
      </Box>
      <View mt={4} px={2}>
        <HStack space={6}>
            <Pressable mr={2}>
                <Avatar bg="green.500" size="lg" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    cache: 'only-if-cached',
                }}>
                    AJ
                </Avatar> 
            </Pressable>
            <Box justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'bold'}>6</Text>
                <Text>Posts</Text>
            </Box>
            <Box justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'bold'}>100</Text>
                <Text>Followers</Text>
            </Box>
            <Box justifyContent={'center'} alignItems={'center'}>
                <Text fontWeight={'bold'}>300</Text>
                <Text>Following</Text>
            </Box>
        </HStack>
        {/* Bio */}
        <Box mt={2}>
            <Text _dark={{ color : "white" }}  color={'blueGray.600'}>Plus tu seras honnête , plus on dira que tu simules</Text>
        </Box>

        <HStack justifyContent={'center'} space={2} mt={4}>
            <Pressable >
                  {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box borderWidth={1}  _dark={{ bg : "gray.900" }} borderColor={'gray.400'}   px={4} py={2} borderRadius={30} flexDirection={"row"} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                            <Text fontWeight={'bold'}  mr={2}>Nouveau post</Text>
                            <Icon as={MaterialCommunityIcons} size="5"  color={'gray.500'} name="plus" />
                        </Box>
                    }}
                
            </Pressable>
            <Pressable >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box borderWidth={1} _dark={{ bg : "gray.900" }}  flexDirection={"row"} borderColor={'gray.400'} px={4} py={2} borderRadius={30} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                <Text fontWeight={'bold'} mr={2}>Modifier le profil</Text>
                                <Icon as={MaterialCommunityIcons} size="5"  color={'gray.500'} name="pencil-outline" />
                        </Box>
                    }}
            </Pressable>
            
        </HStack>
        <Box my={2}>
            <ChainGroup />
        </Box>
        <Divider />
      </View>
      <ScrollView mt={4} >
       
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
                <Divider my={2} />
                <CommentSheets sheetId={"comments"+index} />
                </>)
            }
      </ScrollView>
         
        
    </View>
  )
}