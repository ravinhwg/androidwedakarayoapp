/* eslint-disable react-hooks/exhaustive-deps */
import {useIsFocused} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {grabArticlesFromTag} from '../API/apiConnectors';
import SinglePost from '../components/SinglePost';

const {height} = Dimensions.get('window');
const CatagoryArticleScreen = ({route}) => {
  const renderItem = ({item}) => (
    <SinglePost
      title={item.title}
      html={item.html}
      url={item.url}
      item={item}
      primary_tag={item.primary_tag}
      primary_author={item.primary_author}
      excerpt={item.excerpt}
      image={item.feature_image}
      publishedDate={item.published_at}
      readingTime={item.reading_time}
    />
  );
  const {tagSlug, tagName, tagPostsCount, tagAccentColor} = route.params;
  const [posts, setPosts] = useState([]);

  const {data, fetchNextPage} = useInfiniteQuery(tagSlug, grabArticlesFromTag, {
    getNextPageParam: (lastGroup, allGroups) => {
      return lastGroup.meta.pagination.next || undefined;
    },
  });
  const isFocused = useIsFocused();

  useEffect(() => {
    if (data) {
      data.pages[data.pages.length - 1].posts.forEach(post => {
        setPosts(prevState => [...prevState, post]);
      });
    }
  }, [data]);
  const ListEmpty = () => (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        height: height - StatusBar.currentHeight - 150,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size={70} color={tagAccentColor} animating={true} />
    </View>
  );
  const Header = () => {
    return (
      <View style={[styles.heroContainer, {backgroundColor: tagAccentColor}]}>
        <Text style={styles.title}>{tagName}</Text>
        <Text style={styles.postCount}>
          {tagPostsCount} {tagPostsCount === 1 ? 'POST' : 'POSTS'}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={tagAccentColor} />

      <FlatList
        data={posts}
        ListHeaderComponent={Header}
        renderItem={renderItem}
        ListEmptyComponent={ListEmpty}
        onEndReached={fetchNextPage}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  heroContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 42,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  postCount: {
    fontSize: 18,
    color: '#fff',
  },
});

export default CatagoryArticleScreen;
