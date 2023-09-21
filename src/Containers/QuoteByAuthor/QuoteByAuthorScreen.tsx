import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '@/Constants'
import HeaderNormal from '@/Components/HeaderNormal'
import { useRandomQuote } from '@/Hooks/useRandomQuote'
import { useListRandomQuote } from '@/Hooks/useListRandomQuote'
import { SCREEN_WIDTH, randomColor } from '@/Utils/common'
import { Image } from 'react-native'
import { Images } from '@/Assets'
import { useRoute } from '@react-navigation/native'
import { useListQuoteByTag } from '@/Hooks/useListQuoteByTag'
import { useListQuoteByAuthor } from '@/Hooks/useListQuoteByAuthor'

type Props = {
  data?: any
}

const QuoteByAuthorScreen = (props: Props) => {
  const route = useRoute<any>()
  const data = route.params?.data
  const { data: lsData, isFetching } = useListQuoteByAuthor(data?.slug)

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={styles.viewItem}>
        <View
          style={[
            styles.viewStt,
            {
              borderColor: randomColor(),
            },
          ]}
        >
          <Text style={styles.txtStt}>{index + 1}</Text>
        </View>
        <Text style={styles.txtItem}>{item?.content}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <HeaderNormal title={'Author ' + data?.name} />
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

export default QuoteByAuthorScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 1,
    backgroundColor: '#FFD2D5',
    paddingHorizontal: 20,
  },
  viewItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
    fontFamily: Fonts.ComingSoonRegular,
    color: Colors.black,
  },
})
