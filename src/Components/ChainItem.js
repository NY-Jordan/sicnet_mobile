
import { Avatar, Box, Icon, Pressable, Text } from 'native-base'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ChainItem({name, image, status=false}) {

  const navigation = useNavigation();

  return (
    <Box mx={2}>
        <Pressable  onPress={() => navigation.navigate('chainDetails')}>
                <Avatar bg="green.500" size="lg" source={{
                    uri: image,
                    cache: 'only-if-cached',
                }}>
                    AJ
                </Avatar> 
        </Pressable>
        <Text fontSize={'xs'} textAlign={'center'}>{name} </Text>
        {        

        status && 
            <Box backgroundColor={'green.400'}  position={'absolute'} top={"45%"} left={'65%'}    borderRadius={50}>
              <Icon as={MaterialCommunityIcons} size={'lg'} name='progress-check' />
            </Box>
        }   
     </Box>
  )
}