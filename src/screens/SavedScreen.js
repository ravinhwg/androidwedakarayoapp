import React from 'react';
import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/core';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import MMKVStorage from 'react-native-mmkv-storage';
import SinglePost from '../components/SinglePost';
import SaveIcon from '../components/Icons/SaveIcon';
import {CONSTANTS} from '../utils/constants';
import {useTheme} from '@react-navigation/native';

const {width} = Dimensions.get('window');
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
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const ListEmpty = () => {
    const {colors} = useTheme();

    return (
      <View style={[styles.emptyContainer]}>
        <View style={{height: 150, width: 150}}>
          <SaveIcon color={CONSTANTS.accentColor} />
        </View>
        <Text style={[styles.emptyText, {color: colors.text}]}>
          Saved articles will be displayed here!
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {!data.length ? (
        <ListEmpty />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  emptyText: {
    width: width - 140,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedScreen;
