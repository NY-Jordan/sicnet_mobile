import React from 'react'
import { AddIcon, View, Text, Avatar, Box, Divider, HStack, Link, Pressable, Image } from 'native-base'
import Menu from './Menu'
import { styles } from '../Screens/Home/styles'
import searchIcon from './../assets/img/searchIcon.png';

export default function Header() {
  return (
    <Box mx={2}>
        <HStack justifyContent={'space-between'}>
              <Box>
                <Text fontSize={'3xl'} style={styles.logo}>SicNet</Text>
              </Box>
              <Link onPress={() => console.log('skip')} mt="3">
                <Box display={'flex'} alignItems={'center'}  justifyContent={'center'} borderRadius={30} padding={2} backgroundColor={'gray.300'} borderColor={'gray.200'} borderStyle={'solid'}>
                  <Image  source={searchIcon} alt='search icon' width={8} height={8} />
                </Box>
              </Link>
         
        </HStack>
        <Menu />
        <Divider marginBottom={2} marginTop={2} />       
    </Box>
  );
}