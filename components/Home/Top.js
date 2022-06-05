import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SampleData } from '../helper/sampleData'
import { height, width , fontSize } from '../Dimentions/Dimention'

const Top = ({cur}) => {
   console.log(cur.main.dt)

    let a = new Date(cur.main.dt * 1000);
    let days = ['jan', 'feb', 'mar', 'april', 'may', 'june', 'july', "au", "sep", "octo", "nov", "dec"];
    let dayOfWeek = days[a.getMonth()]
    const date = a.getDate()
    const urL = `https:${SampleData.current.condition.icon}`

    return (
        <View style={styles.MainBoss}>
            <View style={styles.Left}>
                <Image source={{ uri: urL }} style={styles.Img} />
                <View>
                    <Text style={styles.Location}>Mumbai</Text>
                    <Text>India</Text>
                </View>
            </View>

            <View style={styles.right}>
                <Text style={styles.dates}>{date} </Text>
                <Text>{dayOfWeek} </Text>
            </View>
        </View>
    )
}

export default Top

const styles = StyleSheet.create({
    MainBoss: {
        width,
        height:height/3,
        paddingLeft:10,
        paddingRight:40,
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
    },
    Left:{
        flexDirection:"row",
        alignItems:"center",
    },
    Img:{
        height: height/10, width: height/10 
    },
    Location:{
        fontSize:height/25,
    },
    right:{
        flexDirection:"column-reverse"
    },
    dates:{
        fontSize:height/25
    },
})