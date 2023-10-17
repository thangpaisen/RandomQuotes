import { Colors, Fonts, Texts } from '@/Constants'
import { useListAuthors } from '@/Hooks/useListAuthors'
import { useRandomQuote } from '@/Hooks/useRandomQuote'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RandomQuoteView from './Components/RandomQuoteView'
import { StackActions, useNavigation } from '@react-navigation/native'
import { SCREEN_WIDTH } from '@/Utils/common'
const { width } = Dimensions.get('screen')

const data = [
  {
    name: 'Random Quote',
    type: 'RANDOM',
    screen: Texts.RandomQuoteScreen,
    bgColor: 'green',
  },
  {
    name: 'Author',
    screen: Texts.AuthorScreen,
    bgColor: 'green',
    type: 'AUTHOR',
  },
  {
    name: 'Tags',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'TAGS',
  },
  {
    name: 'Age',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'age',
  },
  {
    name: 'Love',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'LOVE',
  },
  {
    name: 'athletics',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'athletics',
  },
  {
    name: 'Business',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'business',
  },
  {
    name: 'Friendship',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'friendship',
  },
  {
    name: 'Family',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'Family',
  },
  {
    name: 'Faith',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'Faith',
  },
  {
    name: 'Ethics',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'Ethics',
  },
  {
    name: 'Education',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'Education',
  },
  {
    name: 'Generosity',
    screen: Texts.TagsScreen,
    bgColor: 'green',
    type: 'Generosity',
  },
]

const HomeScreen = () => {
  const navigation = useNavigation<any>()

  const CardItem = ({ data }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress(data)
        }}
        style={[
          styles.item,
          {
            backgroundColor: data.bgColor,
          },
        ]}
      >
        <Text style={styles.txtItem}>{data.name}</Text>
      </TouchableOpacity>
    )
  }

  const onPress = (data: any) => {
    switch (data.type) {
      case 'RANDOM':
      case 'AUTHOR':
      case 'TAGS':
        navigation.navigate(data?.screen)
        break
      case 'LOVE':
        navigation.dispatch(
          StackActions.push(Texts.TagsDetailScreen, {
            data: {
              name: data.name,
              slug: data.type,
            },
          })
        )
        break
      default:
        navigation.dispatch(
          StackActions.push(Texts.TagsDetailScreen, {
            data: {
              name: data.name,
              slug: data.type,
            },
          })
        )
        break
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <RandomQuoteView />
      <View style={styles.body}>
        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginHorizontal: 10,
            }}
          >
            {data?.map((item: any) => (
              <CardItem data={item} key={item.name} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: -30,
    paddingVertical: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: Colors.white,
  },
  item: {
    width: (SCREEN_WIDTH - 60) / 2,
    marginHorizontal: 10,
    height: 115,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  txtItem: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
})
