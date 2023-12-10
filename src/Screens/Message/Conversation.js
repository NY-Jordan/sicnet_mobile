import React, { useState } from 'react'
import { ArrowBackIcon, FaceSmileIcon, Avatar,View, Box, Button, Divider, HStack, Popover, Pressable,Text, ThreeDotsIcon, VStack, ScrollView, TextField, Input } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { Stop } from 'react-native-svg';
import ConversationHeader from '../../Components/ConversationHeader';
import {   faFaceSmile, faHome, faPaperPlane, faPlusMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import EmojiPicker from 'rn-emoji-keyboard'
import ReceiverMessage from '../../Components/ReceiverMessage';
import SenderMessage from '../../Components/SenderMessage';



export default function Conversation() {
  const [EmojisTabIsOpen, setEmojisTabIsOpen] = useState(false);
  const [MessageValue, setMessageValue] = useState('');
  const [messageSent, setmessageSent] = useState([]);

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
          <Box  padding={4}>
            <SenderMessage />
            {
              messageSent.map((message, key) => <ReceiverMessage  message={message}  key={key} />)
            }
          </Box>
        </VStack>
    </ScrollView>
        <VStack position={'absolute'} mx={2}  backgroundColor={'white'}  alignItems={'center'} width={'100%'} py={2} justifyContent={'center'}  top={"90%"}>
          <Divider />
          <HStack mt={2} space={2} alignItems={'center'} >
          <Pressable>
            <FontAwesomeIcon  size={25} icon={faPlusMinus} />
          </Pressable>
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
              return <Box p={2} borderRadius={20}    bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                < FontAwesomeIcon  size={25} icon={faPaperPlane} />
              </Box>
              }}
            
          </Pressable>
        </HStack>
        </VStack>
        <EmojiPicker onEmojiSelected={(e) => HandleMessage(e.emoji)} open={EmojisTabIsOpen} onClose={() => setEmojisTabIsOpen(false)} />
       {/* <EmojiBoard showBoard={show} onClick={() => console.log("dd")} />  */}

    </>
  )
}