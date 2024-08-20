let mongoose = require('mongoose')  // import module mongoose

let personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, // champ obligatoire
        // unique: true // matnajmch tal9a ism met3awed martin
    },
    age : {
        type: Number,
        required:true
    },
    favoriteFoods : {
        type:[String],
        default:[],
    }
})

module.exports = mongoose.model('Person', personSchema)