import Icons from '@/Assets/Icons'
import IconSvgView from '@/Components/IconSvgView'
import { Texts } from '@/Constants'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

const SplashScreen = () => {
  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, 1000)
    )
    navigateAndSimpleReset(Texts.HomeScreen)
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={styles.container}>
      <IconSvgView source={Icons.Logo} size={150} color='red' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
})

export default SplashScreen
