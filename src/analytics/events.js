import analytics from '@react-native-firebase/analytics';

// log article viewed event
export const logArticleViewed = async article => {
  await analytics().logEvent('article_viewed', {
    article_title: article.title,
  });
};
