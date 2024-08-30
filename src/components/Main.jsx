import React from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from '../../Apps/Footer';
import Header from '../../Apps/Header';
// import Header from './Header'; 
// import Footer from './Footer'; 

const Main = () => {
  return (
    <View style={styles.container}>
      <Header/>
      {/* Your Main Content */}
      <View style={styles.content}>
        {/* Your main content goes here */}
      </View>
    <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#26282a",
    // height:"100%",
    width:"100%"
  },
  content: {
    // flex: 1,
    justifyContent: 'center',
    // height:"100%",
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Main;
