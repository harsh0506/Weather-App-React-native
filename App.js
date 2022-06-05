import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Middle from './components/Home/Middle';
import Top from './components/Home/Top';
import { height, width } from './components/Dimentions/Dimention';
import { useEffect, useState } from 'react';
import { fetchData } from './components/helper/Api';
import Bottom from './components/Home/Bottom';

export default function App() {
  const [cur, setCur] = useState(
    {
      main: {
        dt: "",
        humidity: "",
        temp: "",
        des: "",
        wind_s: ""
      }
    }
  )
  const [forcast, setForecast] = useState()
  let data

  useEffect(async () => {
    try {
      data = await fetchData(19.0760, 72.8777)
      setCur({
        ...cur,
        main: {
          dt: data.current.dt,
          humidity: data.current.humidity,
          temp: data.current.temp,
          des: data.current.weather[0].main,
          wind_s: data.current.wind_speed,
        }
      })
      setForecast(data.daily)
    } catch (error) {
      
    }
  }, [])
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <Top cur={cur} />
        <Middle cur={cur} />

        <Bottom forcast={forcast} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: height,
    backgroundColor: '#fff',
    //alignItems: 'center',
    // justifyContent: 'center',
  },
  SafeArea: {
    height, width
  }
});

