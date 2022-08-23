import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements'

const MovieDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Movie Details</Text>
      <Button onPress={()=>navigation.navigate('Home')} title='Back to Home Screen'/>
    </SafeAreaView>
  )
}

export default MovieDetail