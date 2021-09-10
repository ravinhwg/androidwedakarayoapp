/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';

const {width} = Dimensions.get('window');

export default function SinglCategory(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('CategoryArticles', {
          tagSlug: props.tagSlug,
          tagName: props.tagName,
          tagPostsCount: props.postCount,
          tagAccentColor: props.accentColor,
        })
      }
      android_ripple={{
        color: 'rgba(43, 182, 115, 0.2)',
        radius: 300,
        borderless: false,
        foreground: true,
      }}
      style={[styles.container]}>
      <Image source={{uri: props.featureImage}} style={styles.image} />
      <View
        style={[styles.textContainer, {backgroundColor: props.accentColor}]}>
        <Text style={styles.textStyleCount}>
          {props.postCount} {props.postCount === 1 ? 'POST' : 'POSTS'}
        </Text>
        <Text style={styles.textStyle}>{props.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    aspectRatio: 1200 / 630,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 2,
  },
  textStyle: {
    fontSize: 36,
    width: width - 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  textStyleCount: {
    fontSize: 18,
    width: width - 25,
    textAlign: 'center',
    color: 'white',
  },
  textContainer: {
    position: 'absolute',
    width: width - 20,
    aspectRatio: 1200 / 630,
    opacity: 0.8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width - 20,
    aspectRatio: 1200 / 630,
    borderRadius: 10,
  },
  contentView: {
    padding: 10,
  },
  dateReadTime: {
    fontSize: 12,
    color: '#757575',
  },
});
