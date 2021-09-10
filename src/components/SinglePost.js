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
  const removeNewLine = text => {
    return text.replace(/\n/g, '').trim();
***REMOVED***;
  return (
    <Pressable
      android_ripple={{
        color: 'rgba(43, 182, 115, 0.2)',
        radius: 300,
        borderless: false,
        foreground: true,
    ***REMOVED***}
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
      ***REMOVED***);
    ***REMOVED***}
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#fff'},
      ]}>
      <Image
        source={{
          uri: image,
      ***REMOVED***}
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
        <Text style={styles.headingText}>{title}</Text>
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
***REMOVED***,
  image: {
    width: width - 20,
    aspectRatio: 1200 / 630,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
***REMOVED***,
  contentView: {
    padding: 10,
***REMOVED***,
  headingText: {
    width: width - 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
***REMOVED***,
  excerptText: {
    marginTop: 20,
    fontSize: 14,
    color: '#757575',
***REMOVED***,
  dateReadTimeUnit: {
    flexDirection: 'row',
    marginTop: 4,
***REMOVED***,
  dateReadTime: {
    fontSize: 12,
    color: '#757575',
***REMOVED***,
});
