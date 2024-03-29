import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowBackIcon, Avatar, Box, Button, CloseIcon, HStack, Icon, Image, Input, Pressable, ScrollView, Stack, Text, TextArea, VStack, View } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import VideoMedia from '../../Components/Media/VideoMedia';
import ImageMedia from '../../Components/Media/ImageMedia';


export default function  AddPost()  {
    const navigation = useNavigation();
    const albumName = "Instagram";
    const [photos, setPhotos] = useState();
    const [selectedMedia,setSelectedMedia] = useState();
    const getPhoto = async ()  =>   {
      const permissionRequest = MediaLibrary.requestPermissionsAsync();
      if(true){
        const album  = await MediaLibrary.getAlbumsAsync(albumName);
        const getAllPhotos =  await MediaLibrary.getAssetsAsync({
          mediaType: ['photo', 'video'],
          first: 20,
          album: album[1],
          sortBy: MediaLibrary.SortBy.creationTime,
        })
        setPhotos(getAllPhotos.assets);
      } else {
        console.log('ici');
      }
    }
    useMemo(() => {
      getPhoto();  
    })
    const loadMediaInGallery = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result.assets[0]);
  
      if (result.assets[0]) {
        setSelectedMedia(result.assets[0]);
      }
    };
   
    return (
    <View  _dark={{ bg : "muted.900" }} _light={{ bg : "white" }} height={'100%'}  paddingTop={10}   paddingRight={2}>
      <Box  px={4} _dark={{ bg : "muted.900" }}  marginBottom={"15%"} justifyContent={'space-between'}   flexDirection={"row"}>
      <Pressable  onPress={() => navigation.goBack()}>
          {({
                isHovered,
                isPressed
            }) => {
               return <Box p={2} width={30} borderRadius={30} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                   <CloseIcon />
               </Box>
            }}
            </Pressable>
        <HStack space={6}> 
        <Button borderRadius={30}>Poster</Button>
            <Button borderRadius={30}>All</Button>
        </HStack>
      </Box>
      <HStack space={2}  _dark={{ bg : "muted.900" }}   px={4} >
            <Pressable >
                    <Avatar bg="green.500" size="md">
                        NY
                    </Avatar> 
            </Pressable>
            <TextArea h={20} _dark={{ bg : "muted.900", color : "white",  }} _focus={{ bg : "muted.900"}} overflowY={'hidden'}  borderColor={'white'} _focus={{ backgroundColor :'white', borderColor : 'white' }} color={'black'} fontSize={'xl'} placeholder="Quoi de neuf ?" w="80%"  />
      </HStack>

      {/* Media uploaded */}
      {
          selectedMedia ? ( selectedMedia.mediaType === "video"  ||  selectedMedia.type === "video" ) ? <VideoMedia uri={selectedMedia.uri}  /> : <ImageMedia uri={selectedMedia.uri}  />  : <Box _dark={{ bg : "muted.900" }} ></Box>
          
      }
            
      <ScrollView   _dark={{ bg : "muted.900" }}  horizontal={true} position={'absolute'} width={"100%"} left={4} right={4}  top={"80%"}>
          <Pressable   onPress={() => loadMediaInGallery()} borderColor={'blue.200'}>
              <Box  borderColor={'gray.200'} alignItems={'center'} justifyContent={'center'} borderRadius={20}  borderWidth="1" style={{ width : 80, height : 80 }}  >
                <Icon as={MaterialCommunityIcons} size="8" name="camera" color="blue.200" _dark={{
                  color: "warmGray.50"
                  }}   />
              </Box>
            </Pressable>
            {
            photos && photos.map((item, key) => <Pressable key={key}   onPress={() => setSelectedMedia(item)}><Image borderRadius={'10'} mx={2} alt='gallery' source={{ uri : item.uri }}  style={{ width : 80, height : 80 }} /></Pressable>)
            }
            <Box  borderColor={'gray.200'} alignItems={'center'} justifyContent={'center'} borderRadius={20}  borderWidth="1" style={{ width : 80, height : 80 }}  >
                <Icon as={MaterialCommunityIcons} size="8" name="image-area" color="blue.200" _dark={{
                  color: "warmGray.50"
                  }}   />
                <Text textAlign={'center'}>Gallerie</Text>
              </Box>
          </ScrollView>
    </View>
  )
}

