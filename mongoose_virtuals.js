const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('could not connect to MongoDB...'));

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return ` ${this.first} ${this.last}`

    personSchema.pre('save', async function () {
        this.first = 'Yo';
        this.last = 'Kalia';
        console.log("About to save!!!")
    });
    personSchema.post('save', async function () {
        console.log("Just saved!!!")
    });

    const Person = mongoose.model('Person', personSchema)
})


