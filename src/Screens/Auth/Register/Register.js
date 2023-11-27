import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { Box, Button, Divider, FormControl, HStack, Input, ScrollView, Stack, WarningOutlineIcon } from 'native-base'
import PhoneInput from 'react-native-phone-number-input';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import SocialNetwork from '../../../Components/SocialNetwork/SocialNetwork';



export default function Register() {

  const phoneInput = useRef(null);
  const [phoneValue, setphoneValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const requestOtpHandle = () =>{
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('PhoneVerification')
      setLoading(false);
    }, 2000);
    
  }

    return (
    <ScrollView >
      <FormControl isRequired marginTop={"30%"} marginBottom={10}>
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
        <Box style={styles.alignCenter}  >
              <Button isLoading={loading}  style={styles.Largebutton} shadow={8} onPress={requestOtpHandle}>Request OTP</Button>
        </Box>
        <HStack marginTop={'5%'}>
          <Divider  width={"45%"} bgColor={"gray.200"} marginTop={'12px'}></Divider>
          <Text width={"10%"} textAlign={'center'}>or</Text>
          <Divider  width={"45%"} bgColor={"gray.200"} marginTop={'12px'}></Divider>
        </HStack>
        <SocialNetwork />
    </ScrollView>
  )
}