import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MovieCard(props) {
    const params = props.movieData ? props.movieData : {id: props.id}
  return (
    <TouchableOpacity
    onPress={()=> props.navigation.navigate('Details', params)}
    >
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                    uri: props.poster,
                    }}
                />
            </View>
            <View>
                <Text
                style={{fontSize: 14, fontWeight: 'bold', width: 150, textAlign: 'center'}}
                >
                    {props.title}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'gray', marginLeft: 0}}>
                    {props.type}
                </Text>
                <Text style={{color: 'gray', fontSize: 18, marginLeft: 5}}>
                {"\u00B7"}
                </Text>
                <Text style={{color: 'gray', marginLeft: 5}}>
                    {props.releaseDate}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        alignItems: 'center',
        marginLeft:7,
        marginRight:7,
        marginBottom: 15,
        marginTop: 15,
        width: 190,
        borderRadius: 5,
    },
    logo: {
      flex: 1,
      resizeMode: 'cover',
    },
    logoContainer: {
        paddingTop: 0,
        width: 150,
        height: 200,
        borderRadius: 5,
        overflow: 'hidden',
    }
  });