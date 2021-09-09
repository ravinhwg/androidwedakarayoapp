import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatagoryScreen from './CatagoryScreen';
import HomeScreen from './HomeScreen';
import SavedScreen from './SavedScreen';
import {CONSTANTS} from '../utils/constants';
const Tab = createBottomTabNavigator();

function TabToStackConnector() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarActiveTintColor: CONSTANTS.accentColor,
      ***REMOVED***}
      />
      <Tab.Screen
        name="CatagoryScreen"
        component={CatagoryScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Catagories',
          tabBarActiveTintColor: CONSTANTS.accentColor,
      ***REMOVED***}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Saved',
          tabBarActiveTintColor: CONSTANTS.accentColor,
      ***REMOVED***}
      />
    </Tab.Navigator>
  );
}

export default TabToStackConnector;
