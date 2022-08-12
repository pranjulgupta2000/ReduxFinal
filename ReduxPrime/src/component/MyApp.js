import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from './Dashboard/Dashboard'
import Bollywood from '../screens/Bollywood';
import Hollywood from '../screens/Hollywood';
import DrawerScreen from './Drawer/DrawerScreen';
import FilmDetails from "../screens/FilmDetails";

const Stack = createStackNavigator();

export default function MyApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DrawerScreen"
                    component={DrawerScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Bollywood"
                    component={Bollywood}
                />
                <Stack.Screen name="Hollywood"
                    component={Hollywood}
                />
                <Stack.Screen name="FilmDetails"
                    component={FilmDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}