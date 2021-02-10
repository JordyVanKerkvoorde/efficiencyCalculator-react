import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();



export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#666666"
      shifting={true}
      barStyle={{ backgroundColor: '#073498' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Calculate',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}