import { View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Box, HStack , Modal, Pressable, Text} from 'native-base'
import LinkChain from '../../Components/LinkChain';

export default function GroupSearch({isAdmin = false}) {
    

  return (
    <Pressable>
    {({
        isHovered,
        isPressed
    }) => {
        return   <HStack  _dark={{ bg : isPressed ? "coolGray.700" : isHovered ? "coolGray.700" : "muted.900" }} py={2}   my={2} mx={4}  px={2} ml={2}  borderRadius={10} alignItems={"center"} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                    <Avatar bg="green.500" size="lg"  source={{
                                uri:  'https://www.emploi.cm/sites/emploi.cm/files/styles/medium/public/logo/img-20220204-wa0028.jpg?itok=im50Vh2Z'
                            }}>
                        NY
                    </Avatar> 
                <Box ml={2}>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Text fontSize={'md'} width={isAdmin ? '50%'  :  '100%'}>Kamix</Text>
                        {
                            isAdmin && <Box width={'50%'}   overflowX={'hidden'}   alignItems={'right'} >
                            <Box width={'60%'}  px={2} backgroundColor={'green.200'}    ><Text color={'gray.500'} fontSize={'xs'}>Administrator</Text></Box>
                        </Box>
                        }
                    </Box>
                    <HStack space={4}>
                        <Text color={'gray.400'}>Private.</Text>
                        <Text color={'gray.400'} fontWeight={'bold'}>100k Followers</Text>
                    </HStack>
                    
                </Box>
                </HStack>
    }}
  </Pressable>
  )
  
}