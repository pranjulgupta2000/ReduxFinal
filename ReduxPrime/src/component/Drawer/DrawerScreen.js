import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../Dashboard/Dashboard";
import Liked_Videos from "../../screens/Liked_Videos";
import Saved_Videos from "../../screens/Saved_Videos";
import Favourite_Videos from "../../screens/Favourite_Videos";
import { Image } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {

    return (
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen name="Dashboard" component={Dashboard}
                options={{
                    drawerIcon: () => (
                        <Image source={require('../../assets/speedometer.png')} style={{ height: 20, width: 20 }} />
                    )
                }} />
            <Drawer.Screen name="Saved Videos" component={Saved_Videos} 
            options={{
                drawerIcon: () => (
                    <Image source={require('../../assets/diskette.png')} style={{ height: 20, width: 20 }} />
                )
            }}/>
            <Drawer.Screen name="Liked Videos" component={Liked_Videos}
            options={{
                drawerIcon: () => (
                    <Image source={require('../../assets/heart.png')} style={{ height: 20, width: 20 }} />
                )
            }} />
            <Drawer.Screen name="Watch Later" component={Favourite_Videos} 
            options={{
                drawerIcon: () => (
                    <Image source={require('../../assets/send.png')} style={{ height: 20, width: 20 }} />
                )
            }}/>
        </Drawer.Navigator>

    )
}
