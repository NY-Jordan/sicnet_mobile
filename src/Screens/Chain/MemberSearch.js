import { View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Box, HStack , Modal, Pressable, Text} from 'native-base'
import LinkChain from '../../Components/LinkChain';

export default function MemberSearch({isAdmin = false}) {
    

  return (
    <Pressable>
    {({
        isHovered,
        isPressed
    }) => {
        return   <HStack  _dark={{ bg : isPressed ? "coolGray.700" : isHovered ? "coolGray.700" : "muted.900" }} py={2} my={2} alignItems={"center"} mx={2} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                <Avatar bg="green.500" size="md"  source={{
                            uri: "https://images.bigbadtoystore.com/images/p/full/2022/09/dd4eac8d-15bd-49f4-bde5-c31ac7944d20.jpg"
                        }}>
                    NY
                </Avatar> 
                <Box ml={2}>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Text fontSize={'md'} width={isAdmin ? '50%'  :  '100%'}>Yvan Jordan Nguetse</Text>
                        {
                            isAdmin && <Box width={'50%'}   overflowX={'hidden'}   alignItems={'right'} >
                            <Box width={'60%'}  px={2} backgroundColor={'green.200'}    ><Text color={'gray.500'} fontSize={'xs'}>Administrator</Text></Box>
                        </Box>
                        }
                    </Box>
                    <Text color={'gray.400'}>J'utilise SocialChain</Text>
                </Box>
                </HStack>
    }}
  </Pressable>
  )
  
}