import CountryDisp from './CountryDisp.js'
import { useEffect, useState } from 'react'

const AllCountries = ({countries}) => {
    const [country,setCountry] = useState('')

    const showCountry = country => {
        setCountry(country)
    }

    useEffect(() => {
        if(countries.length == 1){
            setCountry(countries[0])
        }else{
            setCountry('')
        }
       
    }, [countries.length])

    return(
        <div>
            {countries.length != 0 && countries.length > 10 && <p>Too many matches, specify another filter</p>}
            {countries.length < 10 && countries.length !== 1 && countries.map((country) => <div key={country.name.common}>{country.name.common}<button onClick={() => showCountry(country)}>show</button></div>)}
            {Object.keys(country).length != 0  && <CountryDisp country={country}/>}
        </div>
    )
}

export default AllCountries