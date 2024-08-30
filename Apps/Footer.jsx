import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import Header from './Header';

import Home from './Home';
import Card from '../src/components/Card';

const HomeScreen = () => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontFamily:"TruenoRoundBd",color:"#C2C2C2"}}>Home Screen Content</Text>
      <Card/>
    </View>
  </View>
);

const PortfolioScreen = () => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontFamily:"TruenoRoundBd",color:"#C2C2C2"}}>Portfolio Screen Content</Text>
      {/* <Card /> */}
    </View>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontFamily:"TruenoRoundBd",color:"#C2C2C2"}}>Settings Screen Content</Text>
    </View>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontFamily:"TruenoRoundBd",color:"#C2C2C2"}}>Profile Screen Content</Text>
    </View>
  </View>
);

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName;
            let IconComponent;
            let iconSize = 18;  // Adjust this value to control icon size
            let borderColor = focused ? '#1d8895' : '#fff';  // Dynamic border color based on focus

            if (route.name === 'Home') {
              iconName = 'home';
              IconComponent = AntDesign;
            } else if (route.name === 'Portfolio') {
              iconName = 'weight-hanging';
              IconComponent = FontAwesome;
            } else if (route.name === 'Settings') {
              iconName = 'setting';
              IconComponent = AntDesign;
            } else if (route.name === 'Profile') {
              iconName = 'user';
              IconComponent = AntDesign;
            }

            return (
              <View style={[styles.iconContainer, { borderColor }]}>
                <IconComponent name={iconName} size={iconSize} color={color} />
              </View>
            );
          },
          tabBarActiveTintColor: '#1d8895',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: styles.tabBarStyle,
          headerShown: false,
          tabBarIconStyle: {
            // Additional styling if needed
          },
          tabBarLabelStyle: {
            fontFamily: "TruenoRoundBd",
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "12%",
    borderColor: '#000',
    borderWidth: 1,
    // borderTopWidth: 1,
    elevation: 5,  // Adds shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    overflow: 'visible', // Ensures the raised middle section is visible/
  },
  iconContainer: {
    backgroundColor: '#000',
    padding: 8,
    borderWidth: 1,
    borderRadius: 25,
    borderColor:"#000"
  },
  middleIconContainer: {
    backgroundColor: '#000',
    padding: 8,
    borderWidth: 1,
    borderRadius: 25,
    borderColor:"#000",
    elevation:5,
    position: 'absolute',
    top: -30, // Raises the middle icon
    zIndex: 1, // Ensures it is above other elements
  },
});

export default Footer;
