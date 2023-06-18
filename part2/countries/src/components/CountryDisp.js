import { useState, useEffect } from "react"
import axios from 'axios'

const CountryDisp = ({country}) => {
    
    const [weather, setWeather] = useState('')

    const api_key = process.env.REACT_APP_API_KEY
    
    useEffect(() => {
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`)
          .then(response => {
            setWeather(response.data)
          })
      }, [country.capital, api_key])
    
      if(weather){
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital : {country.capital}</p>
                <p>Population : {country.population}</p>
                <h2>Languages :</h2>  
                <ul>
                    {Object.values(country.languages).map((x, i) => <li key={i}>{x}</li>)}
                </ul>              
                <img src={country.flags.png} alt="flag"></img>
                <h3>Weather at {country.capital}</h3>
                <p>temperature: {weather.main.temp} Celcius</p>
                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather_icon" height="100" />
                <p>wind: {weather.wind.speed}</p>
            </div>
        )
      }
      return (
        <div>

        </div>
      )
   
}

export default CountryDisp