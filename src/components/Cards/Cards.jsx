import React from 'react'
import WeatherCard from '../Card/WeatherCard'

const Cards = ({cities}) => {
  if(cities)
  return (
    <div>
      {
        <WeatherCard/>
      }
    </div>
  )
}

export default Cards