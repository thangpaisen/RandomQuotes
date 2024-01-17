import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { PlaceholderScreen } from '@/Containers/PlaceholderScreen'
import { AuthorList } from './AuthorList'

const Tab = createMaterialTopTabNavigator()

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#265CDF',
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
        tabBarItemStyle: {},
      }}
    >
      <Tab.Screen name='Authors' component={AuthorList} options={{}} />
      <Tab.Screen name='Tags' component={PlaceholderScreen} />
    </Tab.Navigator>
  )
}
