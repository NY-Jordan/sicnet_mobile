import { View, Text, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { Box, Button, Icon, Image, Pressable, VStack } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';

export default function VideoMedia({uri}) {
    const video = useRef(null);
    const [status, setStatus] = useState({});
  return (
    <>
        <Pressable  onPress={() => setSelectedMedia()} position={'absolute'} zIndex={100}  bottom={"89%"} left={"89%"} >
                <Icon as={MaterialCommunityIcons} size="8" name="close" color="black" _dark={{
                color: "warmGray.50"
                }}   />
        </Pressable>
        <Box height={"40%"} width={"80%"} >
            <Video
                ref={video}
                style={styles.video}
                paused={false}  
                repeat={false}    
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                
                source={{
                    uri: uri,
                }}
            
            />
        </Box>
         
    </>
  )
}

const styles = StyleSheet.create({
        video : {
          flex : 1,
          left : "25%"
        }
    }); 