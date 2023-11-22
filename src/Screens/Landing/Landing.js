import React, { Component } from 'react'
import {  Dimensions } from 'react-native'
import { styles } from './style'

import { Box, HStack, Image, View,Link, ScrollView, Text, Button } from 'native-base'
import { Carousel } from 'react-native-basic-carousel'
import { imageSliderLandingPage } from '../../data/landing'


export default function Landing({navigation}) {
  const SCREEN_WIDTH = Dimensions.get('window').width ;
  return (
        <View style={styles.container}>
            <HStack justifyContent={'space-between'}>
              <Box>
                <Text fontSize={'3xl'} style={styles.logo}>SicNet</Text>
              </Box>
              <Link onPress={() => console.log('skip')} mt="3">
                <Box style={styles.skipBorder} borderColor={'gray.200'}>
                  <Text fontSize={'sm'} >Skip</Text>
                </Box>
              </Link>
         
            </HStack>
            <View style={styles.alignCenter} marginTop={"8%"}>
                <Carousel 
                  data={imageSliderLandingPage} 
                  renderItem={({item, index}) => <View  
                         style={styles.alignCenter} 
                         width={'100%'} 
                         height="300px"
                         marginBottom={"8%"}
                         >
                    <Image source={item} alt='img' width={"100%"} height={"100%"}/>
                  </View>}
                  itemWidth={SCREEN_WIDTH}
                  onSnapItem={(item) => console.log(item)}
                  autoplay
                />
            </View>
            <Box style={styles.alignCenter} marginBottom={"5%"}>
              <Text fontSize={'3xl'}  fontWeight={"bold"} marginBottom={"5%"} textAlign={"center"}>Best Social App To Make New Freinds</Text>
              <Text fontSize={"md"}  color={"gray.500"}   textAlign={"center"}>With SicNet you will find friends with the same musical tastes</Text>
            </Box>
            <Box style={styles.alignCenter} >
              <Button   style={styles.Largebutton} shadow={8} onPress={() => navigation.navigate('Authentification')}>Get Started</Button>
            </Box>
        </View>
      )
}
