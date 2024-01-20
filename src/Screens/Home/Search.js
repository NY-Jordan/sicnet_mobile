import React from 'react'
import { HStack, View, Text, Pressable, ArrowBackIcon, Box, ThreeDotsIcon, Input, Divider, ScrollView, Image, FlatList } from 'native-base'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import searchIcon from './../../assets/img/searchIcon.png';
import MemberSearch from '../Chain/MemberSearch';
import GroupSearch from '../Chain/GroupSearch';
import Tag from '../../Components/Tag';
import { tags } from '../../data/tags';
export default function Search() {
    const navigation  = useNavigation();
   
  return (
    <View  bg={'white'} _dark={{ bg : "muted.900" }} height={"100%"}>
       <Box>
       <HStack   mt={4} alignItems={'center'}  space={4} >
       <        Pressable mt={2}  onPress={() => navigation.goBack()}  >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box _dark={{ bg : isPressed ? "coolGray.700" : isHovered ? "coolGray.700" : "cyan.900", color : "white" }}   p={2} borderRadius={30}   bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                 <ArrowBackIcon size='5' _dark={{ color : "white" }}/>
                            </Box>
                        }}
                   
                </Pressable>
                <Box  alignItems={'center'} width={'70%'} justifyContent={'center'} > 
                    <Input _light={{ bg : "gray.100" }} fontSize={"md"} _focus={{ bg: "gray.400"}}  _dark={{ bg: "gray.400"}}  borderRadius={30} />
                </Box>
                <Pressable   >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box  _dark={{ bg : isPressed ? "coolGray.700" : isHovered ? "coolGray.700" : "cyan.900", color : "white" }} overflow={'hidden'}  borderRadius={30}   bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                 <Image  source={searchIcon} alt='search icon' width={8} height={10} />
                            </Box>
                        }}
                    
                </Pressable>
                
        </HStack>
        <Box>
        <FlatList  showsHorizontalScrollIndicator={false}  horizontal={true} data={tags} renderItem={({
      item
      }) => <Tag  name={item.name} />} />
        </Box>
       </Box>
        <Divider />
        <ScrollView bg={'gray.100'} _dark={{ bg : "muted.900" }}>
           <MemberSearch /> 

           <GroupSearch />
           <MemberSearch />
           <MemberSearch />
           <GroupSearch />
           <MemberSearch />
           <GroupSearch />
           <MemberSearch />
           <MemberSearch />
           <MemberSearch />
            
        </ScrollView>
    </View>
  )
}