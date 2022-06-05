import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SampleData } from '../helper/sampleData'
import { width, height } from '../Dimentions/Dimention'

const Middle = ({cur}) => {
    const urL = `https:${SampleData.current.condition.icon}`

    return (
        <View style={styles.MainBoss}>
            {/*top*/}
            <View style={styles.ImgContainer}>
                <Image source={{ uri: urL }} style={styles.Img} />
                <Text style={{fontSize:height/25}}>{cur.main.des}</Text>
            </View>
            {/* bottom */}
            <View style={styles.Cards}>
                <View style={styles.child} >
                    <Text>humidity</Text>
                    <Text style={styles.num}>{cur.main.humidity}</Text>
                </View>
                <View style={styles.child} >
                    <Text>Temp</Text>
                    <Text style={styles.num} >{cur.main.temp}</Text>
                </View>
                <View style={styles.child} >
                    <Text>wind</Text>
                    <Text style={styles.num} >{cur.main.wind_s}</Text>
                </View>
            </View>
        </View>
    )
}

export default Middle

const styles = StyleSheet.create({
    MainBoss: {
        width,
        alignItems: 'center',
        //paddingTop: 20,
        height:height/2.5,
    },

    Img:{
        height:height/5,
        width: height/5,
       
    },
    ImgContainer:{
        alignItems:"center",
        justifyContent:"center",
        width
    },
    Cards:{
        flexDirection:"row",
        width,
        height:height/8,
        alignItems:"center",
        justifyContent:"space-evenly",
        paddingTop:10,
    },
    child:{
        alignItems:"center",
    },
    num:{
        fontSize:height/25
    }
})