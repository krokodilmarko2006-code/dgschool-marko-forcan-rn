import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AboutStackNavigator, MainStackNavigator } from "./StackNavigator";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab=createBottomTabNavigator();
const BottomTabNavigator =()=>{
    return(
        <Tab.Navigator screenOptions={
            {
                tabBarStyle:{
                    backgroundColor: "#ff6347",
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "lightgray",
            }
        }>
            <Tab.Screen name="Home" component={MainStackNavigator} options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="home" size={24} color={color} />
                )
            }}/>
            <Tab.Screen name="About" component={AboutStackNavigator}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;