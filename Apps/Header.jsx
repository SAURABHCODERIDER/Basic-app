import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SwitchButton from '../src/customComponent/SwitchButton';


const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.header}>
      {/* Left Dropdown */}
      <TouchableOpacity style={styles.leftSection}>
        <Text style={styles.dropdownText}>Category</Text>
        <AntDesign name="down" size={16} color="#fff" />
      </TouchableOpacity>

      {/* Right Section */}
      <View style={styles.rightSection}>
        {/* Switch */}
        {/* <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          /> */}
          <SwitchButton thubmSize={18} disabled={false} onPress={toggleSwitch} isEnabled={isEnabled} style={{right:12 ,color:"#3d575c"}}/>
          <Text style={{color:"#fff",fontFamily:"TruenoRoundBd"}}>Live</Text>
          {/* Bell Icon */}
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="bells" size={16} color="#fff" style={{fontFamily:"TruenoRoundBd"}}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingLeft:24,
    paddingVertical:18,
    backgroundColor: '#000',
    elevation: 2,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    marginRight: 5,
    color:"#fff",
    fontFamily:"TruenoRoundBd"
  },
  rightSection: {
    width:"40%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-around",
    // paddingHorizontal:8
  },
  iconButton: {
    borderWidth:1,
    marginRight: 15,
    padding:4,
    borderRadius:56,
    borderColor:"#fff"
  },
});

export default Header;
