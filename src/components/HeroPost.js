/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {useQuery} from 'react-query';
import {grabFeaturedArticle} from '../API/apiConnectors';
import useDarkMode from '../utils/hooks/useDarkMode';
import makeDateReadable from '../utils/makeDateReadable';

const {height, width} = Dimensions.get('window');

export default function HeroPost() {
  const {data, isLoading} = useQuery('grabGhostFeatured', grabFeaturedArticle);
  const [articleData, setArticleData] = useState({});
  const navigation = useNavigation();
  const isDarkMode = useDarkMode();

  useEffect(() => {
    if (data) {
      setArticleData(data.posts[0]);
    }
  }, [data]);
  return (
    <>
      {!isLoading && (
        <Pressable
          onPress={() => {
            navigation.navigate('ArticleWebView', {
              html: articleData.html,
              title: articleData.title,
              primary_tag: articleData.primary_tag,
              primary_author: articleData.primary_author,
              url: articleData.url,
              fullItem: articleData,
              publishedDate: articleData.published_at,
              image: articleData.feature_image,
              readingTime: articleData.reading_time,
            });
          }}
          style={[styles.container, {backgroundColor: '#fff'}]}>
          <Image
            source={{
              uri: articleData.feature_image,
            }}
            style={styles.image}
          />
          <View style={styles.contentView}>
            <View style={styles.heroText}>
              <View style={styles.dateReadTimeUnit}>
                <Text style={styles.dateReadTime} numberOfLines={5}>
                  {makeDateReadable(articleData.published_at)}
                </Text>
                <Text style={styles.dateReadTime} numberOfLines={5}>
                  {` • `}
                </Text>
                <Text style={styles.dateReadTime} numberOfLines={5}>
                  {articleData.reading_time} min read
                </Text>
              </View>
              <Text style={styles.headingText} numberOfLines={4}>
                {articleData.title}
              </Text>

              <Text style={styles.excerptText} numberOfLines={2}>
                {articleData.excerpt}
              </Text>
            </View>
          </View>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    borderRadius: 10,
    elevation: 5,
  },
  image: {
    height: height / 2,
    aspectRatio: 1200 / 630,
  },
  contentView: {
    padding: 10,
    position: 'absolute',
    backgroundColor: 'rgba(43, 182, 115, 0.58)',
    height: height / 2,
    aspectRatio: 1200 / 630,
  },
  heroText: {
    position: 'absolute',
    top: height / 5,
    padding: 10,
  },
  headingText: {
    width: width - 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  excerptText: {
    marginTop: 20,
    fontSize: 14,
    width: width - 20,
    color: 'white',
  },
  dateReadTimeUnit: {
    flexDirection: 'row',
    marginTop: 4,
  },
  dateReadTime: {
    fontSize: 12,
    color: 'white',
  },
});
