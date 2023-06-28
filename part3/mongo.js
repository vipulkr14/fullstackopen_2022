const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const name = process.argv[3]

const number = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.5o8jxzr.mongodb.net/PhonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

if(!name || !number) {
    console.log('phonebook:')

    Phonebook.find({}).then(result => {
        result.forEach(person => {
          console.log(person.name + ' ' + person.number)
        })
        mongoose.connection.close()
      })
} else {
    const person = new Phonebook({
    name: name,
    number: number,
    })

    person.save().then(result => {
    console.log('added ' + name + ' number ' + number +' to phonebook')
    mongoose.connection.close()
    })
}
