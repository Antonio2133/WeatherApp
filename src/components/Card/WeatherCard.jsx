import React, { useState } from 'react'
import './WeatherCard.css'

const WeatherCard = ({weather, temp}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeTemperature = ( ) => {
    setIsCelsius(!isCelsius)
  }

  
  return (
    <article className='weather'>
      <h1 className='weather_title'>Weather App</h1>
      <h2 className='weather_country'>{weather?.name}, {weather?.sys.country} </h2>
      <section className='weather_body'>
        <header className='weather_img'>
          <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} className='weather_icon' alt='icono'/>
        </header>
        <article className='weather_condition'>
          <h3 className='weather_description' >{weather?.weather[0].description}</h3>
          <ul className='weather_list' >
            <li className='weather_item'><span className='weather_label'>Wind speed:</span><span className='weather_value'>{weather?.wind.speed} m/s</span></li>
            <li className='weather_item'><span className='weather_label'>Clouds:</span><span className='weather_value'>{weather?.clouds.all} %</span></li>
            <li className='weather_item'><span className='weather_label'>Pressure:</span><span className='weather_value'>{weather?.main.pressure} hPa</span></li>
            <li className='weather_item'><span className='weather_label'>Maximun Temp:</span><span className='weather_value'>{ isCelsius ? `${temp?.tempMaxCelsius} °C` : `${temp?.tempMaxFahrenheit} °F`}</span></li>
          <li className='weather_item'><span className='weather_label'>Minimum Temp:</span><span className='weather_value'>{ isCelsius ? `${temp?.tempMinCelsius} °C` : `${temp?.tempMinFahrenheit} °F`}</span></li>
          </ul>
        </article>
      </section>
      <section className='weather_principal'>
        <h2 className='weather_temp'>{ isCelsius ? `${temp?.celsius} °C` : `${temp?.fahrenheit} °F` } </h2>
      </section>
      <footer className='weather_footer'>
        <button onClick={changeTemperature} className='weather_btn' >Change to °F | °C</button>
      </footer>
    </article>
  )
}

export default WeatherCard