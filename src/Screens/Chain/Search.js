import React from 'react'
import { HStack, View, Text, Pressable, ArrowBackIcon, Box, ThreeDotsIcon, Input, Divider, ScrollView, Image } from 'native-base'
import MemberItem from './MemberItem'
import MemberSearch from './MemberSearch'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import searchIcon from './../../assets/img/searchIcon.png';
export default function Search() {
    const navigation  = useNavigation();
  return (
    <View bg={'white'} _dark={{ bg : "muted.900" }} height={"100%"}>
       <HStack mb={4} _dark={{ bg : "muted.900" }} mt={4} alignItems={'center'}  space={4} >
       <        Pressable mt={2}  onPress={() => navigation.goBack()}  >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box  _dark={{ bg : isPressed ? "coolGray.700" : isHovered ? "coolGray.700" : "cyan.900" }}  p={2} borderRadius={30}   bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                 <ArrowBackIcon   _dark={{ color : "white" }} size='5'/>
                            </Box>
                        }}
                   
                </Pressable>
                <Box  alignItems={'center'} width={'70%'} justifyContent={'center'} > 
                    <Input backgroundColor={'gray.100'} _dark={{ bg : "gray.700" }}   borderRadius={30} />
                </Box>
                <Pressable   >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box _dark={{ bg : isPressed ? "coolGray.700" : isHovered ? "coolGray.700" : "cyan.900" }}   overflow={'hidden'}  borderRadius={30}   bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                 <Image  source={searchIcon} alt='search icon' width={8} height={10} />
                            </Box>
                        }}
                    
                </Pressable>
                
        </HStack>
        <Divider />
        <ScrollView _dark={{ bg : "muted.900" }} bg={'gray.100'}>
            <MemberSearch />
            <MemberSearch />
            <MemberSearch />
            <MemberSearch />
            <MemberSearch />
            <MemberSearch />
            
        </ScrollView>
    </View>
  )
}