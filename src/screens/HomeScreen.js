import React from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar} from 'react-native';
import HeroPost from '../components/HeroPost';
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
  {
    id: '5894a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
***REMOVED***,
];

function HomeScreen() {
  const renderItem = ({item}) => <SinglePost title={item.title} />;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.innerContainer}>
        <FlatList
          ListHeaderComponent={HeroPost}
          data={DATA}
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
