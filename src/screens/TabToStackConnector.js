import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CatagoryScreen from './CatagoryScreen';
import HomeScreen from './HomeScreen';
import SavedScreen from './SavedScreen';
const Tab = createBottomTabNavigator();

function TabToStackConnector() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="CatagoryScreen"
        component={CatagoryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default TabToStackConnector;
