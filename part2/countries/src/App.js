import {useState, useEffect} from 'react'
import axios from 'axios';
import AllCountries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([])

  const SearchCountry = event => {
    setFiltered(countries.filter(country => (country.name.common.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 )))
    console.log(filtered)
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  return (
    <div className="App">
      find countries &nbsp; 
      <input type='textbox' onChange={SearchCountry}/>
      <AllCountries countries={filtered}/>
    </div>
  );
}

export default App;