import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import BitCoin from '../../assets/images/images.jpeg';
import Kit from '../../assets/images/kit.jpeg';
import Ethereum from '../../assets/images/Ethereum.png';
import Football from '../../assets/images/Footbal.jpeg';

const HomeBannerData = [
  { id: 1, title: "Bitcoin", subTitle: "$5674", image: BitCoin },
  { id: 2, title: "IPL", subTitle: "2024", image: Kit },
  { id: 3, title: "Ethereum", subTitle: "$6757", image: Ethereum },
  { id: 4, title: "Men's World Cup", subTitle: "Cricket", image: Kit },
  { id: 5, title: "Men's World Cup", subTitle: "Cricket", image: Football },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.horizontalScrollView}
      >
        {HomeBannerData.map((item) => (
          <View key={item.id.toString()} style={styles.card}>
            <View style={{ gap: 8 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subTitle}</Text>
            </View>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      {/* Other content can go here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
  },
  horizontalScrollView: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#3d575c',
    paddingHorizontal: 28,
    gap: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    borderBottomWidth: 4,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: "grey",
    flexDirection: "row",
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'TruenoRoundBd',
  },
  subTitle: {
    color: "#fff",
    fontSize: 14,
    fontFamily: 'TruenoRoundBd',
  },
});
