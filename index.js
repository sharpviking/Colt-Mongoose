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



Cinema.insertMany([
    { title: 'Apocalypse Now', year: 1979, score: 9.4, rating: 'A' },
    { title: 'The Covenant', year: 2023, score: 7.9, rating: 'R' },
    { title: 'Kantara', year: 2023, score: 8.3, rating: 'R' },
    { title: "RRR", year: 2022, score: 9.1, rating: 'R' }

])
    .then(data => {
        console.log('It Worked!')
        console.log(data);
    })

