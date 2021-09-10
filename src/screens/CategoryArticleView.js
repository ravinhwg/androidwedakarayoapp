/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {grabArticlesFromTag} from '../API/apiConnectors';
import SinglePost from '../components/SinglePost';

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

  const {status, data, fetchNextPage} = useInfiniteQuery(
    tagSlug,
    grabArticlesFromTag,
    {
      getNextPageParam: (lastGroup, allGroups) => {
        return lastGroup.meta.pagination.next;
    ***REMOVED***,
  ***REMOVED***,
  );

  useEffect(() => {
    if (data) {
      data.pages[data.pages.length - 1].posts.forEach(post => {
        setPosts(prevState => [...prevState, post]);
    ***REMOVED***);
  ***REMOVED***
***REMOVED***, [data]);

  const Header = () => {
    return (
      <View style={[styles.heroContainer, {backgroundColor: tagAccentColor}]}>
        <Text style={styles.title}>{tagName}</Text>
        <Text style={styles.postCount}>{tagPostsCount} POSTS</Text>
      </View>
***REMOVED***
***REMOVED***;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={tagAccentColor} />
      <FlatList
        data={posts}
        ListHeaderComponent={Header}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
***REMOVED***

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
***REMOVED***,
  heroContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
***REMOVED***,
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
***REMOVED***,
  title: {
    fontSize: 42,
    color: '#fff',
    fontWeight: 'bold',
***REMOVED***,
  postCount: {
    fontSize: 18,
    color: '#fff',
***REMOVED***,
});

export default CatagoryArticleScreen;
