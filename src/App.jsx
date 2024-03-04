
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherCard from './components/Card/WeatherCard'
import Nav from './components/Nav/Nav'
import Loader from './components/Loading/Loader'




function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const success = (info) => {
    setCoords({
      lat: info.coords.latitude,
      lon: info.coords.longitude
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  
  useEffect(() => {
    if(coords) {
      const APIKEY = '6af06f9f54522867a1f1836d721d0deb'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}&lang=en`

      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const fahrenheit = ((9/5 * celsius) + 32).toFixed(1) 
          const tempMaxCelsius = (res.data.main.temp_max - 273.15).toFixed(1)
          const tempMinCelsius = (res.data.main.temp_min - 273.15).toFixed(1)
          const tempMaxFahrenheit = ((9/5 * tempMaxCelsius) + 32).toFixed(1) 
          const tempMinFahrenheit = ((9/5 * tempMinCelsius) + 32).toFixed(1) 
          setTemp({
            celsius,
            fahrenheit,
            tempMaxCelsius,
            tempMinCelsius,
            tempMaxFahrenheit,
            tempMinFahrenheit
          }) 
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }, [coords])
  
  return (
    <div className='app'>
      <Nav/>
      {
        isLoading 
        ? <Loader/> 
        :<WeatherCard weather={weather} temp={temp} />
      }
    </div>
  )
}

export default App
