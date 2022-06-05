import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { width , height } from '../Dimentions/Dimention'

const Bottom = ({forcast}) => {
    return (
        <View style={styles.MainBoss}>
            <FlatList
                contentContainerStyle={styles.flatList}
                data={forcast}
                showsHorizontalScrollIndicator={false} 
                horizontal={true}
                renderItem={({item}) => (
                    <Cards
                        day={new Date(item.dt * 1000).getUTCDate()}
                        climate={item.weather[0].main}
                        temp={item.temp.max}
                    />
                )}
                keyExtractor= {item => item.dt}
            />
        </View>
    )
}

const Cards = ({day,climate,temp}) => {
    return (
        <View style={styles.Cards}>
            <Text style={styles.day}>{day}</Text>
            <Text style={styles.climate}>{climate}</Text>
            <Text style={styles.temp}>{temp}C</Text>
        </View>
    )
}

export default Bottom

const styles = StyleSheet.create({
    MainBoss:{
        width,
        alignItems:"flex-start",
        //marginLeft:30,
        justifyContent:"center",
    },
    flatList:{
        width,
        height:height/7,
        alignItems:"center"
    },
    Cards:{
        width:width/6,
        height:height/9,
        alignItems:"center",
        borderColor:"black",
    },
    climate:{
        fontSize:width/32,
    },
    temp:{
        fontSize:width/36,
    },
    day:{
        fontSize:width/40,
    },
})