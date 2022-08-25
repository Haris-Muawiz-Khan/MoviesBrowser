import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import { useRoute } from '@react-navigation/native'
import { movie } from '../mockData'

const MovieDetail = ({navigation}) => {
  const route = useRoute()
  const ratings = movie.Ratings.map(item => {
    return(
      <View style={{flexDirection: 'row'}}>
        <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
          {item.Source}
        </Text>
        <Text>
          {item.Value}
        </Text>
      </View>
    )
  })
  
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'flex-start'}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Home')}
          style={styles.homeIcon}
        >
          <Icon name='home' />
        </TouchableOpacity>
        <Text style={styles.title}>
          Details
        </Text>
      </View>

      <ScrollView style={styles.movieDetailContainer}>
        <View style={styles.posterImage}>
          <Image
              style={styles.poster}
              source={{
              uri: movie.Poster,
              }}
            />
        </View>
        <View>
          <Text style={styles.movieTitle}>
            {movie.Title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Release Date:
            </Text>
            <Text>
              {movie.Released}
            </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Run time:
            </Text>
            <Text>
              {movie.Runtime}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Rated:
            </Text>
            <Text>
              {movie.Rated}
            </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Genre:
            </Text>
            <Text>
              {movie.Genre}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Director:
            </Text>
            <Text>
              {movie.Director}
            </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Write:
            </Text>
            <Text>
              {movie.Writer}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Text style={{marginRight: 5, fontWeight: 'bold'}}>
            Actors:
          </Text>
          <Text>
            {movie.Actors}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Text style={{marginRight: 5, fontWeight: 'bold'}}>
            Plot:
          </Text>
          <Text>
              {movie.Plot}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Language:
            </Text>
            <Text>
              {movie.Language}
            </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Country:
            </Text>
            <Text>
              {movie.Country}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Text style={{marginRight: 5, fontWeight: 'bold'}}>
            Awards:
          </Text>
          <Text>
              {movie.Awards}
          </Text>
        </View>
        <View>
          <Text>Ratings:</Text>
          {ratings}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Meta score:
          </Text>
          <Text>
            {movie.Metascore}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            IMDB Rating:
          </Text>
          <Text>
            {movie.imdbRating}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            IMDB Votes:
          </Text>
          <Text>
            {movie.imdbVotes}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Type:
          </Text>
          <Text>
            {movie.Type}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Production:
          </Text>
          <Text>
            {movie.Production}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            DVD:
          </Text>
          <Text>
            {movie.DVD}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Box Office:
          </Text>
          <Text>
            {movie.BoxOffice}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Website:
          </Text>
          <Text>
            {movie.Website}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MovieDetail

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    position: 'relative',
    width: '100%',
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
    textTransform: 'uppercase'
  },
  homeIcon: {
    position: 'absolute',
    left: 0,
    width: 35,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
    margin: 5,
  },
  movieDetailContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    padding: 10,
  },
  posterImage: {
    alignSelf: 'center',
    width: '95%',
    height: 350,
    borderRadius: 30,
    overflow: 'hidden',
    resizeMode: 'cover',
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginBottom: 10,
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
})