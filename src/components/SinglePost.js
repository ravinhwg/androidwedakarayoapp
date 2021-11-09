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
import useDarkMode from '../utils/hooks/useDarkMode';
import makeDateReadable from '../utils/makeDateReadable';
import {useTheme} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function SinglePost({
  title,
  body,
  image,
  date,
  primary_tag,
  primary_author,
  html,
  url,
  item: fullItem,
  excerpt,
  readingTime,
  publishedDate,
}) {
  const isDarkMode = useDarkMode();
  const navigation = useNavigation();
  const {colors} = useTheme();
  const removeNewLine = text => {
    return text.replace(/\n/g, '').trim();
  };
  return (
    <Pressable
      android_ripple={{
        color: 'rgba(43, 182, 115, 0.2)',
        radius: 300,
        borderless: false,
        foreground: true,
      }}
      onPress={() => {
        navigation.navigate('ArticleWebView', {
          html,
          title,
          primary_tag,
          primary_author,
          url,
          fullItem,
          publishedDate,
          image,
          readingTime,
        });
      }}
      style={[styles.container, {backgroundColor: colors.card}]}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.contentView}>
        <View style={styles.dateReadTimeUnit}>
          <Text style={styles.dateReadTime} numberOfLines={5}>
            {makeDateReadable(publishedDate)}
          </Text>
          <Text style={styles.dateReadTime} numberOfLines={5}>
            {` • `}
          </Text>
          <Text style={styles.dateReadTime} numberOfLines={5}>
            {readingTime} min read
          </Text>
        </View>
        <Text style={[styles.headingText, {color: colors.text}]}>{title}</Text>
        <Text style={styles.excerptText} numberOfLines={5}>
          {removeNewLine(excerpt)}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 2,
  },
  image: {
    width: width - 20,
    aspectRatio: 1200 / 630,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentView: {
    padding: 10,
  },
  headingText: {
    width: width - 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  excerptText: {
    marginTop: 20,
    fontSize: 14,
    color: '#757575',
  },
  dateReadTimeUnit: {
    flexDirection: 'row',
    marginTop: 4,
  },
  dateReadTime: {
    fontSize: 12,
    color: '#757575',
  },
});
