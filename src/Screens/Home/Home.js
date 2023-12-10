import React from 'react'
import { Box,View, Text , HStack, ScrollView, Link, SearchIcon, Image, Divider, Avatar, Pressable, AddIcon, Center, Fab, Icon } from 'native-base'
import ContentView from './ContentView'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Components/Header'

export default function Home() {
  return (
    <View backgroundColor={'white'}  height={'1000px'}  paddingLeft={2} paddingRight={2}>
        <Header />
        {/* avatar and create section */}
        <HStack>
           <Pressable width={'15%'}>
                <Avatar bg="green.500" size="md" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    cache: 'only-if-cached',
                }}>
                    AJ
                </Avatar> 
           </Pressable>
            <Box width={'80%'} display={'flex'} flexDirection={'row'} >
            <Box width={'50%'} marginRight={2} backgroundColor={'red.400'} borderRadius={30} display={'flex'} justifyContent={'center'} alignItems={'center'} > 
                <Pressable display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                    <AddIcon  />
                   <Text style={{ color : 'white', fontWeight : 'bold' }}> New debate</Text>
                </Pressable>
            </Box>
            <Box width={'50%'}backgroundColor={'#ffcc00'} borderRadius={30} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Pressable display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                  <AddIcon  />
                   <Text style={{ color : 'white', fontWeight : 'bold' }}> New even</Text>
                </Pressable>
            </Box>
            </Box>
        </HStack>
        <ContentView />
        <Fab renderInPortal={false} shadow={2} placement='top-right' top={"62%"} size="sm" icon={<FontAwesomeIcon color='white'  icon={faFeather} size={25} />} />
    </View>
  )
}