import { View, ScrollView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { search } from '../mockData'
import MovieCard from './MovieCard'
import { Icon } from 'react-native-elements'
import { useState } from 'react'

export default function HomeScreen({navigation}) {
  const [searchIcon, setSearchIcon] = useState(false)

  const movieCard = search.Search.map(item => {
    return (
      <MovieCard
      key={item.imdbID}
      title={item.Title}
      poster={item.Poster}
      releaseDate={item.Year}
      type={item.Type}
      navigation={navigation}
      />
    )
  })
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Home
        </Text>
        <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => setSearchIcon(true)}
        >
          <Icon name="search" />
        </TouchableOpacity>
      </View>
      {
        searchIcon && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search for movie"
            onSubmitEditing={() => {
              console.log('Search for movie...')
              setSearchIcon(false)
            }}
          />
        )
      }
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {movieCard}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    position: 'relative',
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingTop: 5,
    paddingLeft: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 4,
  },
  searchInput: {
    width: 400,
    height: 40,
    borderWidth: 1,
    borderColor: '#DFDFDE',
    borderRadius: 5,
    margin: 5,
    paddingLeft: 10,
  },
})