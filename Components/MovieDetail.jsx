import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements'
import { useRoute } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import { REACT_APP_API_KEY } from './apiKeys'
// import { REACT_APP_API_KEY_2 } from './apiKeys'
// import Video from 'react-native-video';


const MovieDetail = ({navigation}) => {
  const route = useRoute()
  const [dataReq, setDataReq] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  let ratings = []
  let dataHandler = route.params.id ? dataReq : route.params

  useEffect(()=> {
    if (route.params.id){
      fetch(`http://www.omdbapi.com/?i=${route.params.id}&plot=full&apikey=${REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => setDataReq(data))
      .catch(err => console.log(err))
    }
    // fetch(`https://imdb-api.com/en/API/Trailer/${REACT_APP_API_KEY_2}/${route.params.id ? route.params.id : dataReq.imdbID}`)
    // .then(res => res.json())
    // .then(data => setTrailerUrl(data.link))
    // .catch(err => console.log(err))
  }, [route.params])

  if (route.params.id){
    ratings = dataReq.Ratings?.map(item => {
      return(
        <View style={{flexDirection: 'row'}} key={item.Source}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            {item.Source}
          </Text>
          <Text>
            {item.Value}
          </Text>
        </View>
      )
    })
  } else{
    ratings = route.params.Ratings.map(item => {
      return(
        <View style={{flexDirection: 'row'}} key={item.Source}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            {item.Source}
          </Text>
          <Text>
            {item.Value}
          </Text>
        </View>
      )
    })
  }

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'flex-start'}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={()=>route.params.id ? navigation.navigate('Home') : navigation.navigate('search')}
          style={styles.backIcon}
        >
          <Icon
          name='angle-left'
          type='font-awesome'/>
        </TouchableOpacity>
        <Text style={styles.title}>
          Details
        </Text>
        {!route.params.id && <TouchableOpacity
          onPress={()=>navigation.navigate('Home')}
          style={styles.homeIcon}
        >
          <Icon name='home' />
        </TouchableOpacity>}
      </View>

      <ScrollView style={styles.movieDetailContainer}>
        <View style={styles.posterImage}>
          <Image
              style={styles.poster}
              source={{
              uri: dataHandler.Poster,
              }}
            />
            {/* console.log(trailerUrl)
            <Video source={{uri: trailerUrl}}   // Can be a URL or a local file.
              ref={(ref) => {
                player = ref
              }}                                      // Store reference
              onBuffer={onBuffer}                // Callback when remote video is buffering
              onError={videoError}               // Callback when video cannot be loaded
              style={backgroundVideo}
            /> */}
        </View>
        <View>
          <Text style={styles.movieTitle}>
            {dataHandler.Title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Release Date:
            </Text>
            <Text>
              {dataHandler.Released}
            </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Run time:
            </Text>
            <Text>
              {dataHandler.Runtime}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Rated:
            </Text>
            <Text>
              {dataHandler.Rated}
            </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Genre:
            </Text>
            <Text>
              {dataHandler.Genre}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Director:
            </Text>
            <Text>
              {dataHandler.Director}
            </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Write:
            </Text>
            <Text>
              {dataHandler.Writer}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Text style={{marginRight: 5, fontWeight: 'bold'}}>
            Actors:
          </Text>
          <Text>
            {dataHandler.Actors}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Text style={{marginRight: 5, fontWeight: 'bold'}}>
            Plot:
          </Text>
          <Text>
              {dataHandler.Plot}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Language:
            </Text>
            <Text>
              {dataHandler.Language}
            </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
            <Text style={{marginRight: 5, fontWeight: 'bold'}}>
              Country:
            </Text>
            <Text>
              {dataHandler.Country}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Text style={{marginRight: 5, fontWeight: 'bold'}}>
            Awards:
          </Text>
          <Text>
              {dataHandler.Awards}
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
            {dataHandler.Metascore}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            IMDB Rating:
          </Text>
          <Text>
            {dataHandler.imdbRating}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            IMDB Votes:
          </Text>
          <Text>
            {dataHandler.imdbVotes}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Type:
          </Text>
          <Text>
            {dataHandler.Type}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Production:
          </Text>
          <Text>
            {dataHandler.Production}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            DVD:
          </Text>
          <Text>
            {dataHandler.DVD}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Box Office:
          </Text>
          <Text>
            {dataHandler.BoxOffice}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Text style={{ marginRight: 5, fontWeight: 'bold'}}>
            Website:
          </Text>
          <Text>
            {dataHandler.Website}
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
  backIcon: {
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
  homeIcon: {
    position: 'absolute',
    right: 0,
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