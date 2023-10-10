import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Texts } from '@/Constants'
import HeaderNormal from '@/Components/HeaderNormal'
import { useRandomQuote } from '@/Hooks/useRandomQuote'
import { useListRandomQuote } from '@/Hooks/useListRandomQuote'
import { SCREEN_WIDTH, randomColor } from '@/Utils/common'
import { Image } from 'react-native'
import { Images } from '@/Assets'
import { StackActions, useNavigation, useRoute } from '@react-navigation/native'
import { useListQuoteByTag } from '@/Hooks/useListQuoteByTag'

type Props = {
  data?: any
}

const TagsDetailScreen = (props: Props) => {
  const route = useRoute<any>()
  const data = route.params?.data
  const { data: lsData, isFetching } = useListQuoteByTag(data?.slug)
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
        {/* <View
          style={[
            styles.viewStt,
            {
              borderColor: randomColor(),
            },
          ]}
        >
          <Text style={styles.txtStt}>{index + 1}</Text>
        </View> */}
        <Text style={styles.txtItem} numberOfLines={3}>
          {item?.content}
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <HeaderNormal title={data?.name} />
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
          data={isFetching ? [] : lsData}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default TagsDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.pink,
    paddingHorizontal: 10,
  },
  viewItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    paddingHorizontal: 20,
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
