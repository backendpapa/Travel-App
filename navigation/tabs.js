import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import {Home,Search,Guide,Trip} from '../screens/Index'

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Guide" component={Guide} />
      <Tab.Screen name="Trip" component={Trip} />
    </Tab.Navigator>
  );
}

export default Tabs;