import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';

import {
  View,
  Dimensions,
  StatusBar,
  StyleSheet,
  Pressable,
  Share,
  ToastAndroid,
} from 'react-native';
import makeDateReadable from '../utils/makeDateReadable';
import SharedIcon from '../components/Icons/ShareIcon';
import {CONSTANTS} from '../utils/constants';
import SaveIcon from '../components/Icons/SaveIcon';
import CloseIcon from '../components/Icons/CloseIcon';
import MMKVStorage from 'react-native-mmkv-storage';
import {logArticleViewed} from '../analytics/events';

const {height, width} = Dimensions.get('window');
function ArticleWebView({route, navigation}) {
  const htmlDoc = route.params.html;
  const title = route.params.title;
  const primaryTag = route.params.primary_tag?.name || '';
  const image = route.params.image;
  const author = route.params.primary_author;
  const publishedDate = route.params.publishedDate;
  const readingTime = route.params.readingTime;
  const url = route.params.url;
  const item = route.params.fullItem;
  const MMKV = new MMKVStorage.Loader().initialize(); // Returns an MMKV Instance
  const [saved, setSaved] = React.useState(false);

  // make inline html fit to screen
  // close webview and go back
  const goBack = () => {
    navigation.goBack();
***REMOVED***;
  // open share view
  const openShare = async () => {
  ***REMOVED***
      await Share.share({
        message: url,
    ***REMOVED***);
  ***REMOVED***
      console.log(e);
  ***REMOVED***
***REMOVED***;

  useEffect(() => {
    // check if the articled is saved
    MMKV.getArrayAsync('savedArticles')
      .then(value => {
        if (value !== null) {
          if (value.some(el => el.id === item.id)) {
            setSaved(true);
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***)
      .catch(e => {
        console.log(e);
        ToastAndroid.show(
          'Error while showing saved articles',
          ToastAndroid.SHORT,
    ***REMOVED***
    ***REMOVED***);
***REMOVED***, []);

  useEffect(() => {
    // log the article to analytics
    logArticleViewed({title});
***REMOVED***);

  // save article to database
  const saveArticle = async () => {
  ***REMOVED***
      const currentPosts = await MMKV.getArrayAsync('savedArticles');
      if (currentPosts) {
        const newPosts = [item, ...currentPosts];
        // save to MMKV
        await MMKV.setArrayAsync('savedArticles', newPosts);
    ***REMOVED*** else {
        // create array if it doesn't exist
        await MMKV.setArrayAsync('savedArticles', [item]);
    ***REMOVED***
      ToastAndroid.show('Article Saved', ToastAndroid.SHORT);
      setSaved(true);
  ***REMOVED***
      ToastAndroid.shwo(
        'Error Saving Article, please try again',
        ToastAndroid.SHORT,
  ***REMOVED***
      console.log(e);
  ***REMOVED***
***REMOVED***;
  const removeArticle = async () => {
  ***REMOVED***
      const currentPosts = await MMKV.getArrayAsync('savedArticles');
      if (currentPosts) {
        const newPosts = currentPosts.filter(post => post.id !== item.id);
        // delete the key - Direclty writing would interpolate the new aaray with the old one
        MMKV.removeItem('savedArticles');
        // save to MMKV
        await MMKV.setArrayAsync('savedArticles', newPosts);
        ToastAndroid.show('Article Removed', ToastAndroid.SHORT);
    ***REMOVED***
      setSaved(false);
  ***REMOVED***
      ToastAndroid.show(
        'Error Removing Article, please try again',
        ToastAndroid.SHORT,
  ***REMOVED***
      console.log(e);
  ***REMOVED***
***REMOVED***;
  const html = `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        margin: 0;
        padding: 10;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
        background-color: #fff;
        word-wrap: break-word;
    ***REMOVED***
      img{
        max-width: 100%;
        height: auto;
    ***REMOVED***
      p {
        margin: 0 0 10px;
        font-size: 16px;
    ***REMOVED***
      a {
        color: #000;
        text-decoration: none;
    ***REMOVED***
      a:hover,
      a:focus {
        color: #2a6496;
        text-decoration: underline;
    ***REMOVED***
      a:focus {
        outline: thin dotted;
        outline: 5px auto -webkit-focus-ring-color;
        outline-offset: -2px;
    ***REMOVED***
      .img-responsive {
        display: block;
        max-width: 100%;
        height: auto;
    ***REMOVED***
      .img-rounded {
        border-radius: 6px;
    ***REMOVED***
      .img-thumbnail {
        padding: 4px;
        line-height: 1.42857143;
      ] 
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        display: inline-block;
        max-width: 100%;
        height: auto;
    ***REMOVED***
      .img-circle {
        border-radius: 50%;
    ***REMOVED***
      hr {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
    ***REMOVED***
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    ***REMOVED***
      .sr-only-focusable:active,
      .sr-only-focusable:focus {
        position: static;
        width: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        clip: auto;
    ***REMOVED***
      [role="button"] {
        cursor: pointer;
    ***REMOVED***
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      .h1,
      .h2,
      .h3,
      .h4,
      .h5,
      .h6 {
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
    ***REMOVED***
      h1 small,
      h2 small,
      h3 small,
      h4 small,
      h5 small,
      h6 small,
      .h1 small,
      .h2 small,
      .h3 small,
      .h4 small,
      .h5 small,
      .h6 small,
      h1 .small,
      h2 .small,
      h3 .small,
      h4 .small,
      h5 .small,
      h6 .small,
      .h1 .small,
      .h2 .small,
      .h3 .small,
      .h4 .small,
      .h5 .small,
      .h6 .small {
        font-weight: normal;
        line-height: 1;
        color: #777;
    ***REMOVED***
      h1,
      .h1,
      h2,
      .h2,
      h3,
      .h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    ***REMOVED***
      h1 small,
      .h1 small,
      h2 small,
      .h2 small,
      h3 small,
      .h3 small,
      h1 .small,
      .h1 .small,
      h2 .small,
      .h2 .small,
      h3 .small,
      .h3 .small {
        font-size: 65%;
    ***REMOVED***
      h4,
      .h4,
      h5,
      .h5,
      h6,
      .h6 {
        margin-top: 10px;
        margin-bottom: 10px;
    ***REMOVED***
      h4 small,
      .h4 small,
      h5 small,
      .h5 small,
      h6 small,

  ***REMOVED***
    </style>
  </head>
  <body>
  <p style="font-weight: bold; color: #757575; margin-top:5px; letter-spacing: .2rem">${primaryTag.toUpperCase()}</p>
  <h1 style="font-weight: bold; margin-bottom:10px; font-size: 2rem">${title}</h1>
  <div style="display: flex; flex-direction:row; flex: 1;">
  <img style="height: 50px; width: 50px; border-radius: 100px; margin-bottom: 50px; object-fit: cover" src="${
    author.profile_image
***REMOVED***" />
  <div>
  <p style=" margin-left: 15px; color: #000;">${author.name}</p>
  <div style="display: flex; flex-direction:row; flex: 1;">
  <div style=" margin-top: -10px; margin-left: 15px; color: #757575;">${makeDateReadable(
    publishedDate,
  )}</div>
  <div style=" margin-top: -10px; margin-left: 4px; color: #757575;">•</div>
  <div style=" margin-top: -10px; margin-left: 4px; color: #757575;">${readingTime} min read</div>
  </div>
  </div>
  </div>
  <img style="margin-bottom: 50px; object-fit: cover;" src="${image}" alt="Google Pixel දුරකථන සඳහා යොදා ගැනීමට නියමිතව තිබූ Whitechapel chipset එක Google Tensor නමින් එලිදක්වයි" />
    ${htmlDoc}
  </body>
</html>`;
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor={CONSTANTS.accentColor}
      />
      <View style={styles.container}>
        <Pressable style={styles.leftIconContainer} onPress={goBack}>
          <CloseIcon color="white" />
        </Pressable>
        <View style={styles.rightIconContainer}>
          <Pressable style={styles.iconView} onPress={openShare}>
            <SharedIcon color="white" />
          </Pressable>
          <Pressable
            style={styles.iconView}
            onPress={saved ? removeArticle : saveArticle}>
            <SaveIcon color="white" filled={saved} />
          </Pressable>
        </View>
      </View>
      <WebView
        originWhitelist={['*']}
        source={{html}}
        style={styles.webViewStyles}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    backgroundColor: CONSTANTS.accentColor,
    height: height * 0.06,
***REMOVED***,
  iconView: {
    height: 30,
    width: 30,
    marginRight: 15,
***REMOVED***,
  rightIconContainer: {
    flexDirection: 'row',
***REMOVED***,
  leftIconContainer: {
    height: 30,
    width: 30,
    marginLeft: 15,
***REMOVED***,
  webViewStyles: {
    width: width,
    padding: 10,
    alignSelf: 'center',
***REMOVED***,
});
export default ArticleWebView;
