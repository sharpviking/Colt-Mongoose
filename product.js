const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('could not connect to MongoDB...'));


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Street Bike', price: 115000 })
bike.save()
    .then(data => {
        console.log("It Worked!")
        console.log(data);
    })
    .catch(err => {
        console.log("Oh no Error!")
        console.log(err.error.name.property.message)
    })