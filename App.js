import React from 'react';
import {useColorScheme} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabToStackConnector from './src/screens/TabToStackConnector';
import ArticleWebView from './src/screens/ArticleWebView';
import CatagoryArticleScreen from './src/screens/CategoryArticleView';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();
  console.log('colorScheme', colorScheme);

  // listen to color scheme changes
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabToStackConnector}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ArticleWebView"
            component={ArticleWebView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CategoryArticles"
            component={CatagoryArticleScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
