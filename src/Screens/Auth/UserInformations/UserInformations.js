import React, { useState } from 'react'
import { ArrowBackIcon, Box, View, Pressable, Text, FormControl, Stack, Input, WarningOutlineIcon, Button, ScrollView } from 'native-base'
import { styles } from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
export default function UserInformations() {
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [valueLabel, setValueLabel] = useState('press to select your birthdate')
  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setShow(false);
    setDate(currentDate);
    console.log(currentDate.toString());
    setValueLabel(currentDate.toString())
    
 };
 const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
  
};
 const displayDatepicker = () => {
  showMode('date');
};
const  userInformationHandle = () => {
  setLoading(true);
    setTimeout(() => {
      navigation.navigate('Tab')
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
            <Text fontSize={"xl"} >User Informations</Text>
        </Box>
      </Box>
      <Box>
        <FormControl isRequired marginBottom={10}>
            <Stack mx="4">
              <FormControl.Label>Username</FormControl.Label>
              <Box >
                  <Input type="text"  placeholder="Username"  _focus={{ borderColor  : 'white' }} style={styles.authInput} borderRadius={30}  shadow={5}  name="password" />
              </Box>
              
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
        <FormControl isRequired marginBottom={10}>
            <Stack mx="4">
              <FormControl.Label>Birthdate</FormControl.Label>
              <Button shadow={5} onPress={displayDatepicker} borderRadius={30} >{valueLabel}</Button>
              <Box >
              {isDisplayDate && (
                <DateTimePicker
                testID="dateTimePicker"
                value={mydate}
                mode={displaymode}
                is24Hour={true}
                display="spinner"
                onChange={changeSelectedDate}
                 /> )}
              </Box>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
        <FormControl isRequired marginBottom={10}>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Box >
                  <Input type="password"  placeholder="Password"  _focus={{ borderColor  : 'white' }} style={styles.authInput} borderRadius={30}  shadow={5}  name="password" />
              </Box>
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
        <FormControl isRequired marginBottom={10}>
            <Stack mx="4">
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Box >
                  <Input type="text"  placeholder="confirm password"  _focus={{ borderColor  : 'white' }} style={styles.authInput} borderRadius={30}  shadow={5}  name="password" />
              </Box>
              
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
        <Box style={styles.alignCenter}  >
          <Button isLoading={loading}  style={styles.Largebutton} shadow={8} onPress={userInformationHandle}>Continue</Button>
        </Box>
      </Box>
    </ScrollView>
  )
}