import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderNormal from '@/Components/HeaderNormal'
import { useRoute } from '@react-navigation/native'
import { Colors } from '@/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import Clipboard from '@react-native-clipboard/clipboard'
import Toast from 'react-native-toast-message'
// import Share from 'react-native-share'

type Props = {
  data: any
}

const QuoteDetailsScreen = (props: Props) => {
  const route = useRoute<any>()
  const data = route.params?.data
  console.log('data: ', data)

  const onCopy = () => {
    Clipboard.setString(data?.content)
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Copy to clipboard Success',
      onPress: () => {
        Toast.hide()
      },
    })
  }

  const onShare = () => {
    Share.share({
      message: data?.content,
      title: data?.content,
    })
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
      }}
    >
      <HeaderNormal
        title={'Author ' + data?.author}
        containerStyle={{
          backgroundColor: Colors.white,
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 26,
            padding: 20,
            textAlign: 'center',
            fontWeight: '600',
            color: '#fff',
          }}
        >
          {data?.content}
        </Text>
        <Text
          style={{
            textAlign: 'right',
            paddingHorizontal: 20,
            color: Colors.white,
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          _ {data?.author} _
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          onPress={onCopy}
          style={{
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontWeight: '600',
              color: '#000',
            }}
          >
            Copy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onShare}
          style={{
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              fontWeight: '600',
              color: '#000',
            }}
          >
            share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QuoteDetailsScreen

const styles = StyleSheet.create({})
