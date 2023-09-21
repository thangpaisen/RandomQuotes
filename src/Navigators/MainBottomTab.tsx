import { Colors, Texts } from '@/Constants'
import { HomeScreen, ProfileScreen } from '@/Navigators/Stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

type Props = {}

const Tab = createBottomTabNavigator()

const MainBottomTab = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={Texts.HomeScreen}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: Colors.colorA3A9AC,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName = ''
          let focusedColor = focused ? Colors.blue : Colors.colorA3A9AC
          if (route.name === Texts.HomeScreen) {
            iconName = 'home'
          } else if (route.name === Texts.ProfileScreen) {
            iconName = 'person'
          }

          return <Icon name={iconName} size={22} color={focusedColor} />
        },
        // tabBarLabel: ({ focused, color }) => {
        //   return <Text>Hi</Text>
        // },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
      })}
    >
      <Tab.Screen name={Texts.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={Texts.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default MainBottomTab

const styles = StyleSheet.create({})
