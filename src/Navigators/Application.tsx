import { Colors, Texts } from '@/Constants'
import { HomeScreen, LoginScreen, SplashScreen } from '@/Navigators/Stack'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import MainBottomTab from './MainBottomTab'
import { navigationRef } from './utils'
import RandomQuoteScreen from '@/Containers/RandomQuote/RandomQuoteScreen'
import AuthorScreen from '@/Containers/Author/AuthorScreen'
import TagsScreen from '@/Containers/TagsScreen/TagsScreen'
import TagsDetailScreen from '@/Containers/TagsDetailScreen/TagsDetailScreen'
import QuoteByAuthorScreen from '@/Containers/QuoteByAuthor/QuoteByAuthorScreen'
import QuoteDetail from '@/Containers/QuoteDetail/QuoteDetailsScreen'
import QuoteDetailsScreen from '@/Containers/QuoteDetail/QuoteDetailsScreen'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Texts.HomeScreen}>
          <Stack.Screen name={Texts.Splash} component={SplashScreen} />
          <Stack.Screen name={Texts.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={Texts.Login} component={LoginScreen} />
          <Stack.Screen name={Texts.RandomQuoteScreen} component={RandomQuoteScreen} />
          <Stack.Screen name={Texts.AuthorScreen} component={AuthorScreen} />
          <Stack.Screen name={Texts.TagsScreen} component={TagsScreen} />
          <Stack.Screen name={Texts.TagsDetailScreen} component={TagsDetailScreen} />
          <Stack.Screen name={Texts.QuoteByAuthorScreen} component={QuoteByAuthorScreen} />
          <Stack.Screen name={Texts.QuoteDetailsScreen} component={QuoteDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
})

export default ApplicationNavigator
