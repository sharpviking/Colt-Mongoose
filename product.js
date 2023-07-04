const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('could not connect to MongoDB...'));


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'price must be positive ya kalia!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: String,

    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}


productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();

}

productSchema.methods.greet = function () {
    console.log("Hello!!! HI!! HOWDY!!")
    console.log(`- frm ${this.name}`)
}

productSchema.static.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const findProduct = async () => {
    const foundproduct = await Product.findOne({ name: 'Street Bike' })
    foundproduct.greet();
    await foundproduct.toggleOnSale();
    console.log(foundproduct)
    await foundproduct.addCategory('Outdoors');
    console.log(foundproduct);
}

productSchema.fireSale().then(res => console.log(res));


const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Street Bike', price: 115000, categories: ['City driving', 'highway riding'] })
bike.save()
    .then(data => {
        console.log("It Worked!")
        console.log(data);
    })
    .catch(err => {
        console.log("Oh no Error!")
        console.log(err.error.name.property.message)
    })