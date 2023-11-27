
import React, { useState } from 'react'
import { ArrowBackIcon, Box, Button, CheckCircleIcon, Image, Pressable, ScrollView, Text, View } from 'native-base'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native';
import vector from './../../../assets/img/Vector.png'
import { CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell } from 'react-native-confirmation-code-field';
import { SafeAreaView } from 'react-native';


export default function PhoneVerification() {
  const CELL_COUNT = 6;
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const VerificationOtpHandle = () =>{
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('UserInformations')
      setLoading(false);
    }, 2000);
    
  }

  return (
    <ScrollView style={{ backgroundColor : 'white', height : "100%", padding : 15 }}>
      <Box marginBottom={"15%"} style={styles.alignCenter} flexDirection={"row"}>
        <Pressable marginLeft={2} onPress={() => navigation.goBack()}>
          <ArrowBackIcon size='5'/>
        </Pressable>
        <Box width={"90%"} style={styles.alignCenter}> 
            <Text fontSize={"2xl"} >OTP</Text>
        </Box>
      </Box>

      <Box style={styles.alignCenter}>
        <Image source={vector} alt='vector' width={"50%"} height={200}  />
      </Box>
      <Box style={styles.alignCenter}  marginTop={10}>
        <Text fontSize={'2xl'}>Verification Code</Text>
        <Text  marginTop={5} fontSize={'sm'} color={'gray.400'} textAlign={'center'}>we have sand otp code verification to your phone number</Text>
      </Box>

      <Box style={styles.alignCenter} flexDirection={'row'}  marginTop={5}>
        <Text fontSize={'2xl'} marginRight={2}>+237675400203</Text>
        <CheckCircleIcon size='5' color="emerald.500" />
      </Box>
      <SafeAreaView style={styles.root}>
        <CodeField
          ref={ref}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              autoFocus={true} 
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {(isFocused ? <Cursor/> : null)}
              
            </Text>
          )}
        />
      </SafeAreaView>
      <Box style={styles.alignCenter}  >
        <Button isLoading={loading}  style={styles.Largebutton} shadow={8} onPress={VerificationOtpHandle}>Continue</Button>
      </Box>
      
    </ScrollView>
  )
}