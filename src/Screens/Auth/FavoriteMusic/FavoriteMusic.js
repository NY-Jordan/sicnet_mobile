import { ArrowBackIcon, Box, Button, CloseIcon, DeleteIcon, Pressable, Text, View } from 'native-base'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { musicData } from '../../../data/favoritemusic';
import { SafeAreaView } from 'react-native';


export default function FavoriteMusic() {
    const navigation = useNavigation();
    const [selectedMusic, setSelectedMusic] = useState([]);
    const disabled = selectedMusic.length == 5  ? false  : true;
    const [loading, setLoading] = useState(false);

    const removeMusicChoice = (item) => {
        const selected = selectedMusic
        setSelectedMusic(selectedMusic.filter(music => music.id !== item.id))
        
        console.log(selectedMusic);
    }
    const addMusicChoice = (item) =>{
        if(selectedMusic.length < 5) {
            const find =  selectedMusic.find(music => music.id === item.id);
            if(!find){
             setSelectedMusic([...selectedMusic, item])
            }
        }      
    }
    const Continue = () =>{
        setLoading(true);
        setTimeout(() => {
          navigation.navigate('Home')
          setLoading(false);
        }, 2000);
    }
  return (
    <View style={{ backgroundColor : 'white', height : "100%", padding : 15 }}>
        <Box marginBottom={"15%"} style={styles.alignCenter} flexDirection={"row"}>
            <Pressable marginLeft={2} onPress={() => navigation.goBack()}>
                <ArrowBackIcon size='5'/>
            </Pressable>
            <Box width={"100%"} style={styles.alignCenter}> 
                <Text fontSize={"xl"} >Your Favorite Music</Text>
            </Box>
        </Box>
        <View>
            <Text textAlign={'center'} marginBottom={4}>Select 5 (fives) of your favorite music and let's start your experience</Text>
          <SearchableDropdown
            multi={false}
            selectedItems={selectedMusic}
            onItemSelect={(item) => addMusicChoice(item)}
            containerStyle={{ padding: 5 }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={musicData}
            defaultIndex={2}
            chip={true}
            resetValue={false}
            textInputProps={
              {
                placeholder: "Select your Music",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
          />
        </View>
        <Box minHeight={"40%"}  maxHeight={"60%"} style={styles.alignCenter}>
            {
                selectedMusic.length >0 ?
                selectedMusic.map((item, key) => 
                    <Box style={styles.musicChoices} flexDirection={'row'} borderWidth={1} padding={3} borderRadius={30}  backgroundColor={'gray.300'} borderColor={'white'} >
                        <Text fontSize={'xl'} marginRight={4} key={key}>{item.name}</Text>
                        <Pressable onPress={() => removeMusicChoice(item)}>
                            <CloseIcon color={"error.700"}  />
                        </Pressable>
                    </Box>
                ) : <Text color={'gray.400'}>Your Favorite Music</Text>
            }
        </Box>
        <Box style={styles.alignCenter}  >
          <Button isLoading={loading}  isDisabled={disabled} onPress={Continue} style={styles.Largebutton} shadow={8} >Start</Button>
        </Box>
    </View>
  )
}