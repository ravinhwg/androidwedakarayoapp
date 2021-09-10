import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {useInfiniteQuery} from 'react-query';
import {getPosts} from '../API/apiConnectors';
import HeroPost from '../components/HeroPost';
import SinglePost from '../components/SinglePost';
import {CONSTANTS} from '../utils/constants';

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
      url={item.url}
      item={item}
    />
  );
  const [posts, setPosts] = useState([]);
  const {isFetching, data, fetchNextPage} = useInfiniteQuery(
    'grabPostsFromGhost',
    getPosts,
    {
      getNextPageParam: (lastGroup, allGroups) => {
        return lastGroup.meta.pagination.next || undefined;
      },
    },
  );

  useEffect(() => {
    if (data) {
      data.pages[data.pages.length - 1].posts.forEach(post => {
        setPosts(prevState => [...prevState, post]);
      });
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(43, 182, 115, 0.58)"
      />
      <View style={styles.innerContainer}>
        {!data ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={70} color={CONSTANTS.accentColor} />
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={HeroPost}
            data={posts}
            onEndReached={fetchNextPage}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
  },
});
