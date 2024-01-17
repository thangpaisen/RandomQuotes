import React from 'react'
import HeaderNormal from '@/Components/HeaderNormal'
import LoadingView from '@/Components/LoadingView'
import { Colors, Fonts, Texts } from '@/Constants'
import { useListTags } from '@/Hooks/useListTags'
import { SCREEN_WIDTH } from '@/Utils/common'
import { StackActions, useNavigation } from '@react-navigation/native'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

type Props = {}

const TagsScreen = (props: Props) => {
  const { data, isFetching } = useListTags()
  const navigation = useNavigation()

  const renderItem = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(
            StackActions.push(Texts.TagsDetailScreen, {
              data: item,
            })
          )
        }}
        style={styles.viewItem}
      >
        <Text style={styles.txtAuthor}>{item?.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <HeaderNormal title='Tag' />
      <View style={styles.body}>
        {isFetching ? (
          <LoadingView />
        ) : (
          <FlatList
            contentContainerStyle={{
              paddingTop: 10,
              marginHorizontal: -5,
            }}
            data={data}
            numColumns={3}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  )
}

export default TagsScreen

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
    width: (SCREEN_WIDTH - 40) / 3,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 5,
    padding: 4,
    paddingVertical: 10,
    backgroundColor: '#E2BEF1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAuthor: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    fontFamily: Fonts.ComingSoonRegular,
  },
})
