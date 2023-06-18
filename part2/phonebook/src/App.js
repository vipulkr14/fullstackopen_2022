import { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personform'
import Persons from './components/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: "040-1234567" , id: 1 },
    { name: "Ada Lovelace", phoneNumber: "39-44-5323523", id: 2  },
    { name: "Dan Abramov", phoneNumber: "12-43-234345", id: 3  },
    { name: "Mary Poppendieck", phoneNumber: "39-23-6423122'", id: 4  }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    console.log("Button clicked", event.target);
    const newPerson = {
      name: newName,
      phoneNumber: newPhoneNumber, 
    }
    const checkDuplicateName = persons.find(props => props.name.toLowerCase() === newPerson.name.toLowerCase())
    if(checkDuplicateName) {
      window.alert(`${newName} is already present in the phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson));
    }
    setNewName("");
    setNewPhoneNumber("");
  }

  const handleNameAddition = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handlePhoneNumberAddition = (event) => {
    console.log(event.target.value);
    setNewPhoneNumber(event.target.value);
  }

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchName(event.target.value);
  }

  const searched = persons.map(props => props.name.toLowerCase().includes(searchName.toLowerCase())) ?
  persons.filter(props => props.name.toLowerCase().includes(searchName.toLowerCase())): persons

  const searchResult = searched.map((person) => <p>{person.name} {person.phoneNumber}</p>)

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter textLabel="Filter shown with:" value={searchName} handleChange={handleSearch}/>

      <h3>Add A New </h3>

      <PersonForm onSubmitHandle={addPerson} newName={newName} newPhoneNumber={newPhoneNumber} handleChangeName={handleNameAddition} handleChangeNumber={handlePhoneNumberAddition} />

      <h2>Numbers</h2>

      <Persons searchResult={searchResult} />

    </div>
  )
}

export default App