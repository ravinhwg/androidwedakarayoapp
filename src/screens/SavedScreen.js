import React from 'react';
import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import MMKVStorage from 'react-native-mmkv-storage';
import SinglePost from '../components/SinglePost';

const SavedScreen = () => {
  const [data, setData] = React.useState([]);
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
  const MMKV = new MMKVStorage.Loader().initialize();
  const isFocused = useIsFocused();
  useEffect(() => {
    MMKV.getArrayAsync('savedArticles').then(value => {
      console.log(value.length);
      setData(value);
  ***REMOVED***);
    // eslint-disable-next-line react-hooks/exhaustive-deps
***REMOVED***, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
***REMOVED***

const styles = StyleSheet.create({
  container: {
    flex: 1,
***REMOVED***,
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
***REMOVED***,
  title: {
    fontSize: 32,
***REMOVED***,
});

export default SavedScreen;
