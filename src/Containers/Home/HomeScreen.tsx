import { Colors, Fonts, Texts } from '@/Constants'
import { useListAuthors } from '@/Hooks/useListAuthors'
import { useRandomQuote } from '@/Hooks/useRandomQuote'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RandomQuoteView from './Components/RandomQuoteView'
import { StackActions, useNavigation } from '@react-navigation/native'
const { width } = Dimensions.get('screen')

const data = [
  {
    name: 'Random Quote',
    type: 'RANDOM',
    screen: Texts.RandomQuoteScreen,
    bgColor: '#F9DED7',
  },
  {
    name: 'Author',
    screen: Texts.AuthorScreen,
    bgColor: '#E2BEF1',
    type: 'AUTHOR',
  },
  {
    name: 'Tags',
    screen: Texts.TagsScreen,
    bgColor: '#FBF7D5',
    type: 'TAGS',
  },
  {
    name: 'Love',
    screen: Texts.TagsScreen,
    bgColor: '#F97B83',
    type: 'LOVE',
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
              name: 'Love',
              slug: 'love',
            },
          })
        )
        break
      default:
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
          {data?.map((item: any) => (
            <CardItem data={item} key={item.name} />
          ))}
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
    marginHorizontal: 20,
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
    fontFamily: Fonts.ComingSoonRegular,
    fontSize: 24,
  },
})
