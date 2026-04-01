import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from "../screens/Home"
import About from "../screens/About"

const Stack=createStackNavigator();

const stackNavigatorStyle={

};

const MainStackNavigator = ({navigation}) => (
    <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor: '#ff6347',},
        headerTintColor: "white",
    }}>
        <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
);

const AboutStackNavigator=({navigator})=>(
    <Stack.Navigator>
        <Stack.Screen name="About" component={About}/>
    </Stack.Navigator>
);
const IosStackNavigator=({navigator})=>(
    <Stack.Navigator>
        <Stack.Screen name="Ios" component={Ios}/>
    </Stack.Navigator>
);
export {MainStackNavigator,AboutStackNavigator,IosStackNavigator};
