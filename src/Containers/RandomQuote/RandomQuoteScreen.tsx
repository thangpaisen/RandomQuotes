import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Texts } from '@/Constants'
import HeaderNormal from '@/Components/HeaderNormal'
import { useRandomQuote } from '@/Hooks/useRandomQuote'
import { useListRandomQuote } from '@/Hooks/useListRandomQuote'
import { SCREEN_WIDTH, randomColor } from '@/Utils/common'
import { Image } from 'react-native'
import { Images } from '@/Assets'
import { StackActions, useNavigation } from '@react-navigation/native'

type Props = {}

const RandomQuoteScreen = (props: Props) => {
  const { data, isFetching } = useListRandomQuote()
  const navigation = useNavigation()
  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        style={styles.viewItem}
        onPress={() => {
          navigation.dispatch(
            StackActions.push(Texts.QuoteDetailsScreen, {
              data: item,
            })
          )
        }}
      >
        <Text style={styles.txtItem}>{item?.content}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <HeaderNormal title='Random Quote' />
      <View style={styles.body}>
        <FlatList
          ListHeaderComponent={() => {
            return (
              <Image
                source={Images.Bg_Detail}
                style={{
                  marginTop: -80,
                  width: SCREEN_WIDTH - 40,
                  height: 200,
                  resizeMode: 'contain',
                }}
              />
            )
          }}
          contentContainerStyle={{
            paddingTop: 20,
          }}
          data={isFetching ? [] : data}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default RandomQuoteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 1,
    backgroundColor: '#FFD2D5',
    paddingHorizontal: 10,
  },
  viewItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  viewStt: {
    borderWidth: 1,
    backgroundColor: Colors.white,
    width: 44,
    height: 44,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  txtStt: {
    fontSize: 16,
    fontFamily: Fonts.ComingSoonRegular,
    color: Colors.black,
  },
  txtItem: {
    fontSize: 16,
    //     fontFamily: Fonts.ComingSoonRegular,
    color: Colors.black,
    textAlign: 'center',
  },
})
