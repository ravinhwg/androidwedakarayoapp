import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {getPosts} from '../API/apiConnectors';
import HeroPost from '../components/HeroPost';
import SinglePost from '../components/SinglePost';

function HomeScreen() {
  const renderItem = ({item}) => (
    <SinglePost
      title={item.title}
      html={item.html}
      primary_tag={item.primary_tag}
      primary_author={item.primary_author}
      excerpt={item.excerpt}
      image={item.feature_image}
      publishedDate={item.published_at}
      readingTime={item.reading_time}
    />
  );
  const [posts, setPosts] = useState([]);
  const {status, data, fetchNextPage} = useInfiniteQuery(
    'grabPostsFromGhost',
    getPosts,
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

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.innerContainer}>
        <FlatList
          ListHeaderComponent={HeroPost}
          data={posts}
          onEndReached={fetchNextPage}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
***REMOVED***,
  innerContainer: {
    flex: 1,
***REMOVED***,
  contentContainer: {
    justifyContent: 'center',
***REMOVED***,
});
