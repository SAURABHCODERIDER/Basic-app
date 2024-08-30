import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import image from './../../assets/images/tata-ipl-seeklogo.png';

const Card = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MatchStatus')}>
      <View style={{ flexDirection: 'row', gap: 29 }}>
        <View style={{ width: '62%', gap: 12 }}>
          <Text style={styles.cardText1}>
            Kolkata to win the match vs Mumbai?
          </Text>
          <Text style={styles.cardText2}>
            H2H last 5 T20: Kolkata: 4, Mumbai: 1, DRAW: 0
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 4,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={image} style={{ height: 40, width: 60 }} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 40 }}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Yes ₹5.3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>No ₹4.7</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3d575c',
    height: 150,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText1: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'TruenoRoundBd',
  },
  cardText2: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'TruenoRoundBd',
  },
  button1: {
    backgroundColor: '#24a0ed',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 5,
  },
  button2: {
    backgroundColor: '#50baa0',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'TruenoRoundBd',
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});

export default Card;
