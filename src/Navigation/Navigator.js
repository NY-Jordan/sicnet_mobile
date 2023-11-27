import { useNavigation } from '@react-navigation/native';

import { View, Text } from 'react-native'
import React from 'react'

  function navigatior() {
    const navigation = useNavigation();
    const GoToHome = () => navigatior.navigate('Home');
    const GoToUserAuth = () => navigatior.navigate('Authentification');
    const GoToVerificationPhone = () => navigatior.navigate('PhoneVerification');
    const GoToFavoriteMusic = () => navigatior.navigate('FavoriteMusic');
    const GoToUserInformations = () => navigatior.navigate('UserInformations');
    return;
}    

export  default class Navigator {
   
     static navigation = useNavigation();
    
  
    static  GoToUserAuth() {
      return navigation.navigate('Authentification');
    }
  }
  

