import React, { useState } from 'react'
import { ArrowBackIcon, Box, View, Text, Pressable } from 'native-base'
import { Svg } from 'react-native-svg'
import { styles } from './style'
import Login from './Login/Login';
import Register from './Register/Register';

export default function Auth() {
    const login = 'login';
    const register = 'register';
    const [toggleState, setToggleState] = useState(login);

  return (
    <View style={{ backgroundColor : 'white', height : "100%", padding : 15 }}>
      <Box marginBottom={"15%"}>
        <Box marginLeft={"5%"}> 
            <Text fontSize={"2xl"} >Authentification</Text>
            <Text color={'gray.400'}>Hello, register or log in to an existing account</Text>
        </Box>
      </Box>
      <Box>
        <Box style={styles.switchToggle} background={"gray.100"}>
            <Pressable style={styles.ButtonToggle}  onPress={() => setToggleState(register)}> 
                    <Box 
                        style={toggleState == register ?  styles.ButtonToggleActive : ''} 
                        shadow={toggleState == register ? 8 : 0}
                    >
                            <Text color={toggleState == register ? "gray.600" : "gray.400"}>Register</Text>
                    </Box>
            </Pressable>           
            <Pressable style={styles.ButtonToggle} onPress={() => setToggleState(login)}> 
                <Box   
                    style={ toggleState == login ?  styles.ButtonToggleActive : ''} 
                    shadow={toggleState == login ? 8 : 0}
                > 
                    <Text color={toggleState == login ? "gray.600" : "gray.400"}>Login</Text>
                </Box>
            </Pressable>
        </Box>
        <Box>
            {
                toggleState == login ?
                <Login /> : <Register />
            }
        </Box>

      </Box>
    </View>
  )
}