import { Avatar, Box, CloseIcon, Divider, HStack, Input, KeyboardAvoidingView, Pressable, ScrollView, Text, View, useColorModeValue } from "native-base";
import React, { useState } from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import CommentItem from "../Comments/CommentItem";
import { comments } from "../../data/comments";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import * as NavigationBar from 'expo-navigation-bar';

export default function CommentSheets(props) {
  const  [message, setMessage] = useState('');
  const HandleMessage = (val) => {
    const value = message + val;
    setMessage(value);
  }
  const bgColor = useColorModeValue("white", "#171717");
  const color = useColorModeValue("white", "#164e63");
  NavigationBar.setBackgroundColorAsync(color);
  return (
    <ActionSheet id={props.sheetId} bg={bgColor} keyboardShouldPersistTaps={"always"} bounceOnOpen={true} bounciness={10} >
      <View   maxHeight={"73%"} _dark={{ bg : "muted.700" }} >
        <Box position={'relative'} left={'88%'} top={"3%"}>
          <Pressable  onPress={() => SheetManager.hide(props.sheetId)}>
          {({
                isHovered,
                isPressed
            }) => {
               return <Box p={2} width={30} borderRadius={30} bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"}>
                   <CloseIcon />
               </Box>
            }}
            </Pressable>
        </Box>
        <Box alignItems={'center'}  mb={4}>
           <Text _light={{ color : "blueGray.800" }} dark={{ color : "white" }} fontSize={'md'}><Text _dark={{ color : "white" }} fontWeight={'bold'}>250 </Text  > Comments</Text>
        </Box>
        <Divider />
        
       {/*  <Input display={'absolute'} top={"5%"} zIndex={10}/> */}
        
      </View>
      <ScrollView  p={2} minHeight={'40%'} maxHeight={"70%"} _dark={{ bg : "muted.900" }}>
          {
            comments.map((comment, index) => <CommentItem 
            key={index}
            username={comment.username} 
            message={comment.message}
            like={comment.like}
            created_at={comment.created_at}
            response={comment.response}
            responses_items={comment.responses_items}
            />)
          }
          
      </ScrollView>
      <KeyboardAvoidingView mb={4} _dark={{ bg : "muted.900" }}>
        <Divider />
         <HStack  space={8} justifyContent={'center'} alignItems={'center'} mt={2} mb={4}>
            <Pressable onPress={() => HandleMessage('😁')}>
              <Text fontSize={"xl"}>😁</Text>
            </Pressable>
            <Pressable onPress={() => HandleMessage('🥰')}>
              <Text fontSize={"xl"}>🥰</Text>
            </Pressable>
            <Pressable onPress={() => HandleMessage('😂')}>
              <Text fontSize={"xl"}>😂</Text>
            </Pressable>
            <Pressable onPress={() => HandleMessage('😳')}>
              <Text fontSize={"xl"}>😳</Text>
            </Pressable>
            <Pressable onPress={() => HandleMessage('😏')}>
              <Text fontSize={"xl"}>😏</Text>
            </Pressable>
            <Pressable onPress={() => HandleMessage('😅')}>
              <Text fontSize={"xl"}>😅</Text>
            </Pressable>
         </HStack>
        
        <HStack justifyContent={'center'} space={2} >
          <Pressable >
                <Avatar bg="green.500" size="md" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    cache: 'only-if-cached',
                }}>
                    AJ
                </Avatar> 
          </Pressable>
            <Input backgroundColor={'gray.100'} value={message}  onChange={text => setMessage(text)} borderRadius={30} width={'70%'}/>
            <Pressable >
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
      </KeyboardAvoidingView>
    </ActionSheet>
  );
}

// Register your Sheet component.
registerSheet("commentSheets", CommentSheets);