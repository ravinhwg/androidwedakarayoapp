import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatagoryScreen from './CatagoryScreen';
import HomeScreen from './HomeScreen';
import SavedScreen from './SavedScreen';
import {CONSTANTS} from '../utils/constants';
import HomeIcon from '../components/Icons/HomeIcon';
import CatagoriesIcon from '../components/Icons/CatagoriesIcon';
import SavedIcon from '../components/Icons/SavedIcon';
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
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
      ***REMOVED***}
      />
      <Tab.Screen
        name="CatagoryScreen"
        component={CatagoryScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Categories',
          headerTitle: 'Categories',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: CONSTANTS.accentColor,
        ***REMOVED***,
          tabBarActiveTintColor: CONSTANTS.accentColor,
          tabBarIcon: ({color}) => <CatagoriesIcon color={color} />,
      ***REMOVED***}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Saved',
          headerTitle: 'Saved',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: CONSTANTS.accentColor,
        ***REMOVED***,
          tabBarActiveTintColor: CONSTANTS.accentColor,
          tabBarIcon: ({color}) => <SavedIcon color={color} />,
      ***REMOVED***}
      />
    </Tab.Navigator>
  );
}

export default TabToStackConnector;
