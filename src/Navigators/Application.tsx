import { Colors, Texts } from '@/Constants'
import { HomeScreen } from '@/Navigators/Stack'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { navigationRef } from './utils'
import RandomQuoteScreen from '@/Containers/RandomQuote/RandomQuoteScreen'
import AuthorScreen from '@/Containers/Author/AuthorScreen'
import TagsScreen from '@/Containers/TagsScreen/TagsScreen'
import TagsDetailScreen from '@/Containers/TagsDetailScreen/TagsDetailScreen'
import QuoteByAuthorScreen from '@/Containers/QuoteByAuthor/QuoteByAuthorScreen'
import QuoteDetailsScreen from '@/Containers/QuoteDetail/QuoteDetailsScreen'
import { MainBottomNavigation } from './MainBottomNavigation'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainBottomNavigation />
      {/* <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Texts.HomeScreen}>
        <Stack.Screen name={Texts.RandomQuoteScreen} component={RandomQuoteScreen} />
        <Stack.Screen name={Texts.AuthorScreen} component={AuthorScreen} />
        <Stack.Screen name={Texts.TagsScreen} component={TagsScreen} />
        <Stack.Screen name={Texts.TagsDetailScreen} component={TagsDetailScreen} />
        <Stack.Screen name={Texts.QuoteByAuthorScreen} component={QuoteByAuthorScreen} />
        <Stack.Screen name={Texts.QuoteDetailsScreen} component={QuoteDetailsScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default ApplicationNavigator
