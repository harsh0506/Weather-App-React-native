import * as Location from 'expo-location';

export async function Locat() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
        return;
    }

    let location = await Location.getCurrentPositionAsync({});
    let latitude = location.coords.latitude
    let longitude = location.coords.longitude
    let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
    let address
      for (let item of response) {
        address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
      }

    return [location , address]
}
