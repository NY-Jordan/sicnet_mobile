import React, { useState } from 'react'
import { ArrowBackIcon, FaceSmileIcon, Avatar,View, Box, Button, Divider, HStack, Popover, Pressable,Text, ThreeDotsIcon, VStack, ScrollView, TextField, Input, IconButton, Stagger, useDisclose, Icon } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { Stop } from 'react-native-svg';
import ConversationHeader from '../../Components/ConversationHeader';
import {   faFaceSmile, faHome, faPaperPlane, faPlusMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import EmojiPicker from 'rn-emoji-keyboard'
import ReceiverMessage from '../../Components/ReceiverMessage';
import SenderMessage from '../../Components/SenderMessage';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import MesageActions from '../../Components/MesageActions';



export default function Conversation() {
  const [EmojisTabIsOpen, setEmojisTabIsOpen] = useState(false);
  const [MessageValue, setMessageValue] = useState('');
  const [messageSent, setmessageSent] = useState([]);
  const { isOpen, onToggle } = useDisclose();
  
  const HandleMessage = (val) => {
    const value = MessageValue + val;
    console.log(value);
    setMessageValue(value);
  }
  const HandleMessageSent = () => {
    setmessageSent([...messageSent, MessageValue])
    setMessageValue('');
  }
  return (
    <>
    <Box backgroundColor={'white'}>
      {/* start header chat */}
    <ConversationHeader />
    <Divider />
    {/* end header chat */}
    </Box>
    <ScrollView backgroundColor={'white'} contentContainerStyle={{flexGrow: 1}} marginBottom={"14%"}>
        <VStack >
          {/* Profil presentation start */}
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={10}>
              <Avatar bg="green.500" size="xl" source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                      cache: 'only-if-cached',
                  }}>
                      AJ
              </Avatar> 
              <Text textAlign={'center'} fontSize={"lg"}>Nguetse Yvan Jordan</Text>
              <HStack space={2}>
                    <Text color={'gray.400'}>86 Followers</Text>
                    <Text color={'gray.400'}>206 Following</Text>
              </HStack>
          </Box>
          {/* Profil presentation end */}


          {/* Message content start */}
          <Box  padding={4}>
            <SenderMessage />
            {
              messageSent.map((message, key) => <ReceiverMessage  message={message}  key={key} />)
            }
          </Box>
          {/* Message content ends */}
        </VStack>
        {/* stagger for more tools start*/}
        <Box alignItems="center" minH="220" position={'absolute'}  left={"2%"} top={'58%'}>
          <Stagger visible={isOpen} initial={{
          opacity: 0,
          scale: 0,
          translateY: 34
        }} animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }} exit={{
          translateY: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}>
            <IconButton mb="4" variant="solid" bg="indigo.500" colorScheme="indigo" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="location-pin" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="yellow.400" colorScheme="yellow" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
            color: "warmGray.50"
          }} size="6" name="microphone" color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="teal.400" colorScheme="teal" borderRadius="full" icon={<Icon as={MaterialCommunityIcons} _dark={{
            color: "warmGray.50"
          }} size="6" name="video" color="warmGray.50" />} />
            <IconButton mb="4" variant="solid" bg="red.500" colorScheme="red" borderRadius="full" icon={<Icon as={MaterialIcons} size="6" name="photo-library" _dark={{
            color: "warmGray.50"
          }} color="warmGray.50" />} />
          </Stagger>
        </Box>
        {/* stagger for more tools end*/}
    </ScrollView>


    {/* message tools start */}
    <VStack position={'absolute'} marginBottom={'100%'}   backgroundColor={'white'}  alignItems={'center'} width={'100%'} py={2} justifyContent={'center'}  top={"90%"}>
      <Divider />
      <HStack mt={2} space={2} alignItems={'center'} >
        <HStack alignItems="center">
          <IconButton variant="solid"  borderRadius="full" size="lg" onPress={onToggle} bg="white" icon={<Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal" color="black" _dark={{
          color: "warmGray.50"
        }}   />} _hover={{
                    bg: "blueGray.300"
                  }} 
                  _pressed={{
                    bg: "blueGray.300"
                  }} />
        </HStack>
      <Pressable onPress={() => setEmojisTabIsOpen(true)}>
      {({
            isHovered,
            isPressed
        }) => {
          return <Box p={1} borderRadius={20}   bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
            <FontAwesomeIcon  size={25} icon={faFaceSmileBeam} />
          </Box>
          }}           
      </Pressable>
      <Input size={'md'} value={MessageValue} onChangeText={text => setMessageValue(text)}  backgroundColor={'gray.100'}  borderRadius={30} width={'60%'}  />
      <Pressable onPress={HandleMessageSent}  >
            {({
            isHovered,
            isPressed
        }) => {
          return <Box p={2} borderRadius={20}    bg={isPressed ? "blueGray.300" : isHovered ? "blueGray.300" : "white"}>
            < FontAwesomeIcon  size={25} icon={faPaperPlane} />
          </Box>
          }}
        
      </Pressable>
       </HStack>
    </VStack>
    {/* message tools end */}
    
    <EmojiPicker onEmojiSelected={(e) => HandleMessage(e.emoji)} open={EmojisTabIsOpen} onClose={() => setEmojisTabIsOpen(false)} />
       {/* <EmojiBoard showBoard={show} onClick={() => console.log("dd")} />  */}

    </>
  )
}