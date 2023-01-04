import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import React from 'react'
import MovieCard from './MovieCard'
import { Icon } from 'react-native-elements'
// import { REACT_APP_API_KEY } from './apiKeys'

const SearchScreen = ({navigation}) => {
    const [movieTitle, setMovieTitle] = useState('')
    const [year, setYear] = useState('')
    const [search, setSearch] = useState(false)
    const [searchResults, setSearchResults] = useState({})

    const API_KEY  = process.env.REACT_APP_API_KEY
    useEffect(() => {
        if (movieTitle) {
            const movieTitleArray = `t=${movieTitle.split(' ').join('+')}&`
            fetch(`http://www.omdbapi.com/?${movieTitleArray}${year?? 'y='+year}&apikey=a664ba2a`)
            .then(res => res.json())
            .then(data => setSearchResults(()=> data))
            .catch(err => console.log(err))
        }
    }, [search])


  return (
    <SafeAreaView>
        <View style={styles.header}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Home')}
            style={styles.homeIcon}
            >
            <Icon name='home' />
            </TouchableOpacity>
            <Text style={styles.headerText}>Search</Text>
        </View>
        <View style={styles.container}>
            <View style={styles.input}>
                <Text>Movie Title: </Text>
                <TextInput
                style={styles.textInput}
                placeholder="Search for a movie..."
                value={movieTitle}
                onChangeText={(txt)=> setMovieTitle(txt)}
                />
            </View>
            <View style={styles.input}>
                <Text>Year of Release: </Text>
                <TextInput
                style={styles.yearInput}
                placeholder="year"
                value={year}
                onChangeText={(y)=> setYear(y)}
                keyboardType='numeric'
                />
            </View>
        
            <TouchableOpacity
            style={styles.buttonContainer}
            onPress={()=> setSearch(prevState => !prevState)}
            >
                <Text style={{color: 'white',}}>
                    Search
                </Text>
            </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
            {
                searchResults ?
                <MovieCard
                    movieData={searchResults}
                    key={searchResults.imdbID}
                    id={searchResults.imdbID}
                    title={searchResults.Title}
                    poster={searchResults.Poster}
                    releaseDate={searchResults.Year}
                    type={searchResults.Type}
                    navigation={navigation}
                />
                : <></>
            }
        </View>
        </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        position: 'relative',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
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
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        width: 270,
        height: 50,
        paddingLeft: 10,
        marginLeft: 10,
    },
    yearInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        width: 100,
        height: 50,
        paddingLeft: 10,
        marginLeft: 10,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 50,
        borderRadius: 5,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'green',
    },
    searchButton: {
        alignSelf: 'center',
    },
})