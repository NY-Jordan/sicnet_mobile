import { View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Box, HStack , Modal, Pressable, Text} from 'native-base'
import LinkChain from '../../Components/LinkChain';

export default function MemberItem({isAdmin = false}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Pressable onPress={() => setModalIsOpen(!modalIsOpen) }>
    {({
        isHovered,
        isPressed
    }) => {
        return   <HStack py={2} my={2} alignItems={"center"} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                <Avatar bg="green.500" size="md"  source={{
                            uri: "https://i0.wp.com/www.theiststore.com/wp-content/uploads/2023/03/gojo-toon.png?fit=1125%2C1125&ssl=1"
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
                
                <Modal isOpen={modalIsOpen}  onClose={() => setModalIsOpen(false)}>
                    <Modal.Content maxWidth="400px" bg={'white'}>
                    <Modal.CloseButton />
                    <Modal.Body mt={4}>
                        <LinkChain text={'Ecrire à  Yvan Jordan'} />
                        <LinkChain text={'Nommer Administrateur'} />
                        <LinkChain text={'Supprimer Yvan Jordan'} />
                    </Modal.Body>
                   
                    </Modal.Content>
                </Modal>
                </HStack>
    }}
  </Pressable>
  )
  
}