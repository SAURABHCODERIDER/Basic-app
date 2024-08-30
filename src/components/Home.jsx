import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Card from './Card';
import HomeBanner from './HomeBanner';
import BannerImage from './../../assets/images/Banner.jpg'; // Adjust the import path if necessary
import Wedding from  './../../assets/images/ceremonywedding.jpg'
import Player from  './../../assets/images/player.jpg'
import Player3 from  './../../assets/images/player3.jpg'
import Header from '../../Apps/Header';
// import PlayGround from  './../../assets/images/PlayGround.jpg'

export default function Home({ navigation }) {
  // Sample data arrays to render the banners and cards
  const bannerData = [
    {id:1}
  ];
  const cardData = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
  const imageData = [
    { id: '1' ,image:BannerImage},
    { id: '2' ,image:Wedding},
    { id: '3' ,image:Player},
    { id: '4' ,image:Player3},
    // { id: '5' ,image:PlayGround},
  ];

  return (
    <View >
      <Header/>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Horizontal scrolling banners */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContainer}
        >
        {bannerData.map((item) => (
          <View key={item.id} style={styles.banner}>
            <HomeBanner />
          </View>
        ))}
      </ScrollView>

      {/* Horizontal scrolling image banners */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContainer}
        >
        {imageData.map((item) => (
          <View key={item.id} style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>

      {/* Vertical scrolling cards */}
      <View style={styles.cardContainer}>
        {cardData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Card navigation={navigation} />
          </View>
        ))}
      </View>
    </ScrollView>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282a',
    paddingHorizontal: 10,
    paddingVertical:16
  },
  horizontalScrollContainer: {
    paddingVertical: 10, // Adjust padding as needed
  },
  banner: {
    marginHorizontal: 10, // Adjust spacing between banners
    marginVertical: 0,
  },
  imageContainer: {
    marginHorizontal: 5, // Adjust spacing between image banners
    marginVertical: 0,
  },
  image: {
    width: 300, // Fixed width for image banners
    height: 125, // Fixed height for image banners
    borderRadius: 2,
  },
  cardContainer: {
    paddingTop: 0, // Adjust padding as needed for better scroll experience
  },
  card: {
    marginBottom: 0, // Adjust spacing between cards if needed
  },
});
