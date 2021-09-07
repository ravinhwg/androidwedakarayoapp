import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabToStackConnector from './src/screens/TabToStackConnector';
import ArticleWebView from './src/screens/ArticleWebView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
