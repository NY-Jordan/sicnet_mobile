import React, { useRef, useState } from 'react'
import { Box, Button, Divider, FormControl, HStack, Input, Stack, Text, View, WarningOutlineIcon } from 'native-base'
import { styles } from './style'
import { BoxShadow } from 'react-native-shadow'
import PhoneInput from 'react-native-phone-number-input'
import SocialNetwork from '../../../Components/SocialNetwork/SocialNetwork'


export default function Login() {
  const phoneInput = useRef(null);
  const [phoneValue, setphoneValue] = useState("");
  
    
  return (
    <View  >
      <Box >
        <FormControl isRequired marginTop={10} marginBottom={10}>
            <Stack mx="4">
              <FormControl.Label>Phone Number</FormControl.Label>
              <PhoneInput
              ref={phoneInput}
              layout="second"
              containerStyle={{ borderRadius : 30 }}
              defaultValue={phoneValue}
              defaultCode="CM"
              onChangeText={(text) => {
                setphoneValue(text);
              }}
              withDarkTheme
              withShadow
              autoFocus
            />
             
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                phone number input field is required.
              </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
        <FormControl isRequired marginBottom={10}>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Box >
                  <Input type="password" _focus={{ borderColor  : 'white' }} style={styles.authInput} borderRadius={30}  shadow={5}  name="password" placeholder="Password" />
              </Box>
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
        <Box style={styles.alignCenter}  >
              <Button   style={styles.Largebutton} shadow={8} onPress={() => navigation.navigate('Authentification')}>Log In</Button>
        </Box>
        <HStack marginTop={'5%'}>
          <Divider  width={"45%"} bgColor={"gray.200"} marginTop={'12px'}></Divider>
          <Text width={"10%"} textAlign={'center'}>or</Text>
          <Divider  width={"45%"} bgColor={"gray.200"} marginTop={'12px'}></Divider>
        </HStack>
        <SocialNetwork />
      </Box>
    </View>
  )
}