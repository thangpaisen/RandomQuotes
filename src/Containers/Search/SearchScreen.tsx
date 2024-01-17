import React, { useCallback } from 'react'
import { View } from 'react-native'
import { Text, TextInput, Icon, List, Avatar } from 'react-native-paper'

const useSearchScreen = () => {
  const onChangedSearchText = useCallback(() => {}, [])

  return { onChangedSearchText }
}
export const SearchScreen = () => {
  const { onChangedSearchText } = useSearchScreen()
  return (
    <View style={{ paddingLeft: 12, paddingRight: 12 }}>
      {/* Page heading */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          variant='headlineLarge'
          style={{
            fontWeight: 'bold',
          }}
        >
          Search
        </Text>
        <Icon source={'information-outline'} size={24}></Icon>
      </View>
      {/* Page heading ends */}

      {/* Search input */}
      <View
        style={{
          padding: 32,
        }}
      >
        <TextInput
          theme={{
            roundness: 40,
          }}
          placeholder={'Search'}
          inputMode='text'
          mode='outlined'
          left={<TextInput.Icon icon={'magnify'} color='black' />}
        />
      </View>
      {/* Search input ends */}

      {/* Authors */}
      <View>
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
            <Avatar.Image {...props} size={64} source={require('../../../assets/favicon.png')} />
          )}
          right={(props) => <List.Icon {...props} color='red' icon='heart-outline' />}
        />
      </View>
    </View>
  )
}
