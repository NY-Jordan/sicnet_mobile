import { View, Text } from 'react-native'
import React from 'react'
import { Box, HStack, Image, Link } from 'native-base'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faCalendar, faCommentSms, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Menu({source, notificationNumber}) {
  return (
   <HStack space={12}>
      {/* Home Menu */}
      <Link onPress={() => console.log('skip')} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon color='gray' icon={faHome} size={25}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={40} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
      <Link onPress={() => console.log('skip')} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon  icon={faBell} size={25}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
      <Link onPress={() => console.log('skip')} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon  icon={faCommentSms} size={25}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
      <Link onPress={() => console.log('skip')} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon  icon={faCalendar} size={25}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
      <Link onPress={() => console.log('skip')} mt="3">
          <Box color={'red.400'}>
              <FontAwesomeIcon  icon={faCalendar} size={25}/>
          </Box>
          <Box backgroundColor={'red.600'}  padding={1} minWidth={5}  position={'absolute'} left={4} bottom={2} borderRadius={30} >
              <Text style={{ color : "white", textAlign : "center", fontSize  : 10}}>{'+10'}</Text>
          </Box>
      </Link>
   </HStack>
  )
}