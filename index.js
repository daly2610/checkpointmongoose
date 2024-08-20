const express = require("express")  // import module express
const mongoose = require('mongoose') // import module mongoose
require("dotenv").config() // importer les variable d'environement

const Person = require('./src/models/person')  // import model person

const app = express() // instance de l'application  express 
const  MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
// connect to mongodb
mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})

// check if connection is succefull
const db = mongoose.connection
db.on("error", console.error.bind(console, 'MongoDB connection error:'));
db.once('open',()=>{
    console.log('Connected to MongoDB');
})

// ****** Add New Person
// const newPerson = new Person({
//     name : "Dali",
//     age : 24,
//     favoriteFoods:['Makrouna','Ruzz'],
// })

// newPerson.save()
// .then(person => console.log('Person saved on Data base'))
// .catch(err => console.error(err))

// ***** ADD MORE PERSON
// const arrayOfPersons = [{name:"khaled", age:34, favoriteFoods:["Kosksi","makrouna"]}, {name:"ijlel", age:35, favoriteFoods:["makrouna","pizza"]}, {name:"azyz", age:31}]
// Person.create(arrayOfPersons)
// .then(cratedPersons => console.log('Persons created', cratedPersons))
// .catch(err => console.error(err))


//**** Recherche BY name */
// const searchName = "Dali"
// Person.find({name:searchName})
// .then(foundPerson => console.log(`Person with name ${searchName} :`, foundPerson) )
// .catch(error => console.error(`Person with name ${searchName} is not found`, error))

//**** Recherche BY favoriteFood */
// const searchFood = 'Makrouna'
// Person.findOne({favoriteFoods: searchFood})
// .then(foundPerson => console.log(`Person with  ${searchFood} in favoriteFood :`, foundPerson) )
// .catch(error => console.error(`Person with  ${searchFood} in favoriteFood is not found`, error))

//**** Recherche BY ID */
// const personId = "66c37622a58b88cc3a7bef55"
// Person.findById(personId)
// .then(foundPerson => console.log(`Person with  ID ${personId}  :`, foundPerson) )
// .catch(error => console.error(`Person with ID ${personId}  is not found`, error))

//**** ADD Food to favoriteFood to exisiting personn  */

// const personId = "66c37622a58b88cc3a7bef55"
// console.log("1")
// Person.findById(personId)
// .then(foundPerson => {
//     if (!foundPerson) {
//         console.log(`Person with ID ${personId}  is not found`)
//         return;
//     } else {
//         foundPerson.favoriteFoods.push('Makrouna');
//         console.log(`Person with ID ${personId}  Succes`)
//         return foundPerson.save()
//     }
// } )
// .catch(error => console.error(`Person with ID ${personId}  is not found`, error))


//*** Update Person */
// const newPersonName = "Dali Tawibi"
// Person.findOneAndUpdate(
// { name:'Dali'},
// { name:newPersonName },
// { new:true} // this options returns always the updated documents
// )
// .then(updatedPerson => {
//     if(!updatedPerson) {
//         console.log('Person not found')
//         return;
//     }
//     else {
//         console.log('Person updated ', updatedPerson);
//     }
// })
// .catch(err => console.error(err))
// .finally(()=>{
//     mongoose.connection.close()
// })

//*** Delete Person by ID */

// const personId  = "66c37622a58b88cc3a7bef55"
// Person.findByIdAndDelete(personId)
// .then(deletedPerson => {
//     if(!deletedPerson) {
//         console.log('Person not found')
//         return;
//     }
//     else {
//         console.log('Person deleted  ', deletedPerson);
//     }
// })
// .catch(err => console.error(err))
// .finally(()=>{
//     mongoose.connection.close()
// })

//*** Delete more personn */

// Person.deleteMany({ name: 'daly' })
// .then(result => {
//   console.log(Number of people named 'daly' deleted:, result.deletedCount);
//  })
//  .catch(err => {
//    console.error(err);
//  })
// .finally(() => {
    // Close the MongoDB connection after the operation
//   mongoose.connection.close();
// });

// Chain search query helpers to find people who like burritos
// Person.find({ favoriteFoods: 'burritos' })
//   .sort('name')   // Sort the results by name
//   .limit(2)       // Limit the results to two documents
//   .select('-age') // Hide their age
//   .exec()
//   .then(data => {
//     console.log('People who like burritos:', data);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });