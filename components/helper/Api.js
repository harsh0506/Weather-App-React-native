export const fetchData = async (Lat, long) => {
  try {
    const oneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${Lat}&lon=${long}&exclude=hourl&appid=bb471eabde0feda3a85cd98f18f1442f`
    const data = await (await fetch(oneCall)).json()
    return data;
  } catch (error) {
    console.log(error)
  }

}
