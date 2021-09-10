import React from 'react';
import {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';
import MMKVStorage from 'react-native-mmkv-storage';
import SinglePost from '../components/SinglePost';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
***REMOVED***,
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
***REMOVED***,
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
***REMOVED***,
];

const App = () => {
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
  useEffect(() => {
    MMKV.getArrayAsync('savedArticles').then(value => {
      setData(value);
  ***REMOVED***);
***REMOVED***, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
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

export default App;
