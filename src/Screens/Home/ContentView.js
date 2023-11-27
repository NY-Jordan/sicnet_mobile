import { View, Text, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Box, Center, Pressable, StatusBar, useColorModeValue } from 'native-base';
import { SceneMap, TabView } from 'react-native-tab-view';
import ForYou from './Content/ForYou';
import Following from './Content/Following';



const initialLayout = {
    width: Dimensions.get('window').width
  };
const renderScene = SceneMap({
    first: ForYou,
    second: Following,
});

export default function ContentView() {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'first',
            title: 'For You'
        }, 
        {
            key: 'second',
            title: 'Following'
        }
    ]);

    const renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return <Box flexDirection="row">
            {props.navigationState.routes.map((route, i) => {
                const opacity = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
                });
                const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
                const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
                return <Box key={i} borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
                            <Pressable onPress={() => {
                                console.log(i);
                                setIndex(i);
                            }}>
                                <Animated.Text style={{color}}>{route.title}</Animated.Text>
                            </Pressable>
                    </Box>;
            })
        }
        </Box>;
    };

  return <TabView 
            navigationState={{index,routes}} 
            renderScene={renderScene} 
            renderTabBar={renderTabBar} 
            onIndexChange={setIndex} 
            initialLayout={initialLayout}
            style={{ marginTop: 10}} 
    />;
}