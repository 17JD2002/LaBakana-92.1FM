import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screen/HomeScreen";
import SettingsScreen from "./screen/SettingsScreen";
import StackScreen from "./screen/StackScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#FFFFFF',
                tabBarActiveBackgroundColor: '#80dd46',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarInactiveBackgroundColor: '#444444',
            }}
        >
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'ACERCA DE',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information-variant" color={color} size={30} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'INICIO',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    tabBarLabel: 'CONTACTO',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cellphone" color={color} size={30} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}