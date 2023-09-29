import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRandomQuote } from '@/Hooks/useRandomQuote'
import { useRefetchOnFocus } from '@/Hooks/useRefetchOnFocus'
import { ImageBackground } from 'react-native'
import { Images } from '@/Assets'
import { Colors } from '@/Constants'

type Props = {}

const RandomQuoteView = (props: Props) => {
  const { data: randomQuote, refetch } = useRandomQuote()

  useRefetchOnFocus(refetch)

  return (
    <ImageBackground source={Images.Bg} style={styles.container}>
      {randomQuote && (
        <>
          <Text style={styles.txt}>"{randomQuote?.content}"</Text>
          <Text style={styles.txtAuthor}>_ {randomQuote?.author} _</Text>
        </>
      )}
    </ImageBackground>
  )
}

export default RandomQuoteView

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    minHeight: 200,
    justifyContent: 'center',
    paddingBottom: 30,
  },
  txt: {
    color: Colors.white,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  txtAuthor: {
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'bold',
    color: Colors.white,
  },
})
