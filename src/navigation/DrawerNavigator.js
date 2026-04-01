import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./TabNavigator";
import { AboutStackNavigator } from "./StackNavigator";

const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>(
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={BottomTabNavigator}/>
        <Drawer.Screen name="About" component={AboutStackNavigator}/>
    </Drawer.Navigator>
);

export default DrawerNavigator;