import React from 'react'
import { ArrowBackIcon, HStack, Pressable, View, Text, ThreeDotsIcon, Box, Divider, ScrollView, Avatar, Icon, VStack  } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import MemberItem from './MemberItem';

export default function ChainDetails() {
    const navigation  = useNavigation();
  return (
    <View bg={'white'} height={'100%'}>
      <HStack mb={2} justifyContent={'center'}  bg={'white'}>
                
                <Pressable mt={2} width={"25%"}  onPress={() => navigation.goBack()} ml={4} >
                    <ArrowBackIcon size='5'/>
                </Pressable>
               
                <Box justifyContent={'center'} alignItems={'center'} width={"50%"} >
                    <Avatar bg="green.500" size="xl"  mt={5} source={{
                        uri: 'https://www.emploi.cm/sites/emploi.cm/files/styles/medium/public/logo/img-20220204-wa0028.jpg?itok=im50Vh2Z'
                    }}>
                            NY
                    </Avatar> 
                    <Text fontSize={'xl'}>Kamix</Text>
                    <HStack space={4} ml={4}>
                        <Text fontSize={'md'}   fontWeight={'bold'}> 10 Membres</Text>
                        <Pressable> 
                            <Icon as={MaterialCommunityIcons} size={'lg'}  name='account-plus-outline' />
                        </Pressable>
                    </HStack>
                </Box>
                <Pressable  width={"25%"} >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box  overflow={'hidden'} p={2}  alignItems={'center'}  borderRadius={30}   bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                                <ThreeDotsIcon />
                            </Box>
                        }}
                    
                </Pressable>
                
        </HStack>
        <Box mb={2} p={1} bgColor={'gray.200'}>

        </Box>
        <ScrollView  >
            <Box display={'flex'} mx={2}  mb={2} flexDirection={'row'} justifyContent={'space-between'}>
                <Text>10 Members</Text>
                <Pressable>
                    <Icon as={MaterialCommunityIcons} size={'lg'} name='account-search-outline'/>
                </Pressable>
            </Box>
            <MemberItem  isAdmin={true} />
            <MemberItem />
            <MemberItem isAdmin={true} />
            <MemberItem  isAdmin={true} />
            <MemberItem isAdmin={true} />
            <MemberItem />
            <MemberItem />
            <MemberItem />
            <MemberItem />
            <Box mb={2} p={1} bgColor={'gray.200'}>

            </Box>
            <VStack py={6}  space={6}>
               
                <Pressable  >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return   <HStack bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}  px={2} space={4} alignItems={'enter'}>
                                    <Icon size={'xl'}  color={'red.500'} as={MaterialCommunityIcons} name='logout'  />
                                    <Text color={'red.500'} fontSize={'lg'}>Quitter la Chaine</Text>
                                </HStack>
                    }}
                </Pressable>
                <Pressable  >
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return   <HStack bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}  px={2} space={4} alignItems={'enter'} >
                                    <Icon size={'xl'}  color={'red.500'} as={MaterialCommunityIcons} name='thumb-down-outline'  />
                                    <Text color={'red.500'} fontSize={'lg'}>Signaler la Chaine</Text>
                                </HStack>
                    }}
                </Pressable>
                
            </VStack>
        </ScrollView>

    </View>
  )
}