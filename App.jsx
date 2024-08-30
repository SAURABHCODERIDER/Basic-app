import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import Home from './src/components/Home';
import MatchStatus from './src/components/MatchStatus'; // Adjust import as necessary
import Settings from './src/components/Settings';
import Portfolio from './src/components/Portfolio';
import Profile from './src/components/Profile';

// Bottom tab navigator
const Tab = createBottomTabNavigator();

// Stack navigator
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} // Hide header for Home screen
      />
      <Stack.Screen 
        name="MatchStatus" 
        component={MatchStatus} 
        options={{ 
          headerStyle: {
            backgroundColor: "#000", // Header background color
          },
          headerBackTitleStyle: {
            color: "#fff", // Back button title color
          },
          headerTitleStyle: {
            color: "#fff", // Title color
          },
          headerBackImage: () => (
            <View style={{ padding: 10 }}>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerRightIcon}>
              <AntDesign name="sharealt" size={24} color="#fff" />
            </TouchableOpacity>
          ),
          headerShown: true, // Show header for MatchStatus screen
        }} 
      />
    </Stack.Navigator>
  );
}

function PortfolioStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Portfolio" component={Portfolio}/>
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Add screens here */}
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Add screens here */}
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
}

// Main App component
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName;
            let IconComponent;
            let iconSize = 18;
            let borderColor = focused ? '#1d8895' : '#fff';
            switch (route.name) {
              case 'HomeStack':
                iconName = 'home';
                IconComponent = AntDesign;
                break;
              case 'PortfolioStack':
                iconName = 'weight-hanging';
                IconComponent = FontAwesome;
                break;
              case 'SettingsStack':
                iconName = 'setting';
                IconComponent = AntDesign;
                break;
              case 'ProfileStack':
                iconName = 'user';
                IconComponent = AntDesign;
                break;
              default:
                break;
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
          tabBarLabelStyle: {
            fontFamily: "TruenoRoundBd",
          },
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
        <Tab.Screen name="PortfolioStack" component={PortfolioStack} options={{ title: 'Portfolio' }} />
        <Tab.Screen name="SettingsStack" component={SettingsStack} options={{ title: 'Settings' }} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profile' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    overflow: 'visible',
  },
  iconContainer: {
    backgroundColor: '#000',
    padding: 8,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#000",
  },
  headerRightIcon: {
    paddingRight: 30,
  },
});

export default App;
