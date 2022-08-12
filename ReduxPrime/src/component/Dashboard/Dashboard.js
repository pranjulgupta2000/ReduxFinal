import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bollywood from "../../screens/Bollywood";
import Hollywood from "../../screens/Hollywood";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

class Dashboard extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Bollywood" component={Bollywood}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image source={require('../../assets/clapperboard.png')} style={{ height: 20, width: 20 }} />
                        )
                    }}
                />
                <Tab.Screen name="Hollywood" component={Hollywood}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image source={require('../../assets/tv.png')} style={{ height: 20, width: 20 }} />
                        )
                    }} />
            </Tab.Navigator>
        )

    }
}
export default Dashboard;