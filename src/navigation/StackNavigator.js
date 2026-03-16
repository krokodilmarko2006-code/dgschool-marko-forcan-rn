import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from "../screens/Home"
import Home from "../screens/About"

const Stack=createStackNavigator();

const stackNavigatorStyle={

};

const MainStackNavigator = ({navigation}) => (
    <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor: '#ff6347',},
        headerTintColor: "white",
    }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
);

export default MainStackNavigator;
