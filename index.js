const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('could not connect to MongoDB...'));

const cinemaSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String

})

const Cinema = mongoose.model('Cinema', cinemaSchema)
const apocalypse = new Cinema({ title: 'Apocalypse Now', year: 1979, score: 9.4, rating: 'A' })




