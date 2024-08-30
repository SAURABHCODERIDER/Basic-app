import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Kit from '../../assets/images/tata-ipl-seeklogo.png';

const MatchStatus = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{justifyContent: 'space-between', height: '100%', gap: 50}}>
        <View style={styles.content}>
          <Image
            source={Kit}
            style={styles.image}
            resizeMode="contain" // Adjust image size to maintain aspect ratio
          />
          <Text style={styles.text}>Kolkata to win the match vs Mumbai?</Text>
        </View>
        <View style={styles.content}>
          <Text
            style={{
              color: '#50baa0',
              fontFamily: 'TruenoRoundBd',
              fontSize: 14,
            }}>
            💡LAST 5 T20:Kolkata 4, Mumbai 1, DRAW 0
          </Text>
          <View
            style={{
              borderWidth: 0.6,
              borderColor: '#fff',
              width: '100%',
              marginTop: 5,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              textTransform: 'capitalize',
              fontFamily: 'TruenoRoundBd',
              fontSize: 16,
              paddingLeft: 15,
            }}>
            The Market Predict
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.cShapeContainer}>
            <View style={styles.halfCShape} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0f',
  },
  content: {
    // padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '20%',
    height: 100, // Set a specific height for the image
    // marginBottom: 16, // Add margin below the image
  },
  text: {
    fontSize: 18,
    fontFamily: 'TruenoRoundBd',
    color: '#fff', // Ensure text color is visible against the background
  },
  containerSkew: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cShapeContainer: {
    width: 200, // Width of the container
    height: 200, // Height of the container
    overflow: 'hidden',
  },
  halfCShape: {
    width: 200, // Width of the half C shape
    height: 100, // Half the height for the C shape
    borderRadius: 100, // Radius to make a full circle if doubled
    borderWidth: 8,
    borderColor: '#24a0ed',
    borderBottomWidth: 0, // Remove bottom border to make it half C
    borderTopWidth: 0, // Remove top border to make it half C
    backgroundColor: 'transparent',
    transform: [
      { rotate: '90deg' }, // Rotate to get the correct half C orientation
    ],
  },
});

export default MatchStatus;
