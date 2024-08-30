import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import Card from './src/components/Card';
import MatchStatus from './src/components/MatchStatus';
import Home from '../src/components/Home';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Passing navigation prop explicitly */}
      {/* <Card navigation={navigation} /> */}
      {/* You can render more cards or other content here */}
    </View>
  );
}

function LayoutStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MatchStatus" component={MatchStatus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#26282a',
  },
});

export default LayoutStack;
