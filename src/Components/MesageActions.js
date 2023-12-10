import { View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Actionsheet,Text, Button, Box,useDisclose, Center, IconButton, Icon, HStack } from 'native-base';

export default function MesageActions({isOpen, onOpen, onClose}) {
   
      return <Center>
          <Actionsheet   isOpen={isOpen} onClose={onClose} >
            <Actionsheet.Content borderTopRadius="0" >
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text fontSize="16" color="gray.500" _dark={{
                color: "gray.300"
              }}>
                  Actions
                </Text>
              </Box>
              <Actionsheet.Item _hover={{ bg : "gray.300" }} _pressed={{ bg : "gray.200" }} startIcon={<Icon as={MaterialCommunityIcons} size="6"  color={'gray.500'} name="volume-off" />}>
                    <Text fontSize={'md'} >Mute</Text>
              </Actionsheet.Item>
              <Actionsheet.Item _hover={{ bg : "gray.300" }} _pressed={{ bg : "gray.200" }} startIcon={<Icon as={MaterialCommunityIcons} size="6"  color={'red.300'} name="block-helper" />}>
                    <Text color={'red.400'}   fontSize={'md'}>Block</Text>
              </Actionsheet.Item>
              <Actionsheet.Item _hover={{ bg : "gray.300" }} _pressed={{ bg : "gray.200" }} startIcon={<Icon as={MaterialCommunityIcons} size="6"  color={'red.300'} name="alert-outline" />}>
                <Text color={'red.400'}  fontSize={'md'}>Signal Account</Text>
              </Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>;
}