import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Actionsheet, Box, Center, Icon, IconButton, Stagger, Switch, useColorMode } from 'native-base'
import ThemeContext from '../../Context/ThemeContext';

export default function Action({isOpen, onOpen, onClose}) {
    const {theme, toggleTheme} = useContext(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
    settIsToggle(!isToggle);
  };

   const [isToggle, settIsToggle] = useState(false)

   const {colorMode,
   toggleColorMode
 } = useColorMode();

  return (
   
  <Center>
    <Actionsheet   isOpen={isOpen} onClose={onClose} >
      <Actionsheet.Content borderTopRadius="0" >
        <Box w="100%" h={60} px={4} justifyContent="center">
          <Text fontSize="16" color="gray.500" _dark={{
          color: "gray.300"
        }}>
            Actions
          </Text>
        </Box>
        <Actionsheet.Item _hover={{ bg : "gray.300" }} display={'flex'} flexDirection={'row'}  _pressed={{ bg : "gray.200" }} >
              <Text fontSize={'md'} >Theme</Text>
              <Switch onToggle={toggleColorMode} isChecked={isToggle} />
        </Actionsheet.Item>
        <Actionsheet.Item _hover={{ bg : "gray.300" }} _pressed={{ bg : "gray.200" }} startIcon={<Icon as={MaterialCommunityIcons} size="6"  color={'red.300'} name="block-helper" />}>
              <Text color={'red.400'}   fontSize={'md'}>Block</Text>
        </Actionsheet.Item>
        <Actionsheet.Item _hover={{ bg : "gray.300" }} _pressed={{ bg : "gray.200" }} startIcon={<Icon as={MaterialCommunityIcons} size="6"  color={'red.300'} name="alert-outline" />}>
          <Text color={'red.400'}  fontSize={'md'}>Signal Account</Text>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  </Center>
  )
}