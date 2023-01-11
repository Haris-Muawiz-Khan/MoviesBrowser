import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MovieCard from './MovieCard'
import { Icon } from 'react-native-elements'
import { useState, useEffect, useRef } from 'react'
import { REACT_APP_API_KEY_2 } from './apiKeys'

export default function HomeScreen({navigation}) {
  const [loadMovies, setLoadMovies] = useState([])
  const drawer = useRef(null);
  let moviesData = []

  useEffect(() => {
   fetch(`https://imdb-api.com/en/API/MostPopularMovies/${REACT_APP_API_KEY_2}`)
     .then(res => res.json())
     .then(data => setLoadMovies(()=> data.items))
     .catch(err => console.log(err))
 }, [])
  
  if (loadMovies.length>0){
    moviesData = (item) => {
      return (
        <MovieCard
        ey={item.item.id}
        id={item.item.id}
        title={item.item.title}
        poster={item.item.image}
        releaseDate={item.item.year}
        type={'movie'}
        navigation={navigation}
        />
      )
    }
  }

  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Home
          </Text>
          <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => navigation.navigate('search')}
          >
            <Icon name="search" />
          </TouchableOpacity>
        </View>
        {loadMovies.length>0 ? <FlatList
        data={loadMovies}
        renderItem={moviesData}
        numColumns={2}
        />: <></>}
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
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  drawerIcon: {
    position: 'absolute',
    left: 10,
  },
})