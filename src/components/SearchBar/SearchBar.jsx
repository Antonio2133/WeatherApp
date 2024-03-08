import React from 'react'
import './SearchBar.css'
import axios from 'axios'
import Icono from '../../assets/img/cloudy.png'

const SearchBar = ({setWeather}) => {

  const handleBtnForm = (e) => {
    e.preventDefault()
    const cityName = e.target.cityName.value
    const APIKEY = '6af06f9f54522867a1f1836d721d0deb'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`

    axios.get(url)
    .then(({data}) => setWeather(data))
    .catch((err) => console.log(err, "Error: The city is probably not in our registry or make sure you write the city name correctly."))
  }

  //console.log(weather.name)

  return ( 
      <form onSubmit={handleBtnForm} className='searchBar_container'>
        <input 
          type='text' 
          name='cityName'
          placeholder='Search city...' 
          className='placeholder'
          required
        />
        <button  type='submit' value='Submit' className='submit_btn'><img className='btn_icon' src={Icono}/>Search</button>
      </form>
  )
}

export default SearchBar