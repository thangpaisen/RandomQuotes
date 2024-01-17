import React from 'react'
import { View } from 'react-native'
import { Avatar, List } from 'react-native-paper'

export const AuthorList = () => {
  return (
    <View
      style={{
        paddingTop: 16,
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <List.Item
        title='Dale Carnegie'
        description='Nobel Prize Winner'
        titleStyle={{
          fontWeight: 'bold',
        }}
        descriptionStyle={{
          fontWeight: '300',
        }}
        contentStyle={{ gap: 4 }}
        left={(props) => (
          <Avatar.Image {...props} size={64} source={require('../../../../assets/favicon.png')} />
        )}
        right={(props) => <List.Icon {...props} color='red' icon='heart-outline' />}
      />
    </View>
  )
}
