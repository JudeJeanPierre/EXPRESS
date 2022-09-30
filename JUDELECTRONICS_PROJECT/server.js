// /////////////// Requirements and Init ///////////////////////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.static('public'));
const Product = require('./models/products')
const Billing = require('./models/billing')
const Order = require('./models/orders')
const Cart = require('./models/cart')
const User = require('./models/users')
const port = 3000;
const methodOverride = require('method-override');
// Jsx
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// Parser
app.use(express.urlencoded({ extended: false }));
// Middleware
app.use((req, res, next) =>{
    console.log("I am here to run all the routes");
    next();
});
app.use(methodOverride("_method"));
// Connection to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () =>{
    console.log("Connected to Mongo");
});
// ////////////////// Routes /////////////////////////////////

// Index
app.get("/products", (req, res) => {
    Product.find({}, (err, allProducts) => {
        console.log(err)

        res.render('IndexProduct', {
            products: allProducts
        });
    });
})
// New
app.get('/products/new', (req, res) =>{
    res.render('NewProduct', {})
})
// Post
app.post('/products', (req, res) =>{
    Product.create(req.body, (err, createdProduct) => {
        console.log(err)
        console.log("Successfully added:", createdProduct)
    })
    res.redirect('/products')
})


// ///////////////// Seeds /////////////////////
app.get('/products/seed', (req, res) =>{
    Product.create([
        {
            name: "Pavilion 15",
            image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07961089.png",
            brand: "HP",
            price: "$549",
            product_details: "HD:1TB, 8GB RAM, Screen: 16in, OS: Windows 11",
            category: "computer",
            product_id: "comp04",
            inStock: 10,
            isProductNew: true
        },
        {
            name: "Galaxy s22 Ultra",
            image: "https://cdn1-production-images-kly.akamaized.net/aXCAN7Icui3lkDiFWblRHAVZIy8=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3666794/original/077611000_1639367963-galaxy_S22_Ultra.jpg",
            brand: "Samsung",
            price: "$800",
            product_details: "Memory: 128GB, front cam: 12MP, back cam:40MP, Tech: 5G, Unlocked ",
            category: "cellphone",
            product_id: "phone07",
            inStock: 20,
            isProductNew: true
        },
        {
            name: "PHILIPS FX10",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCaWRsOuzZgnAgdfkGKyRLjrsz_B3oTe1tJXecfyhZ5PXoql4XJi_tsePjMD6sg4R3ug&usqp=CAU",
            brand: "Philips",
            price: "$150",
            product_details: "With CD Player, Bluetooth, Wireless Streaming, MP3, USB, Audio in, FM Radio, 15W, Micro Music Sound System",
            category: "radio",
            product_id: "radio06",
            inStock: 10,
            isProductNew: true
        },
        {
            name: "Samsung Class 7 Series",
            image: "https://images.samsung.com/is/image/samsung/au-ru7100-ua75ru7100wxxy-rperspectiveblack-152560930?$720_576_PNG$",
            brand: "Samsung",
            price: "$1,250",
            product_details: "Dimension: 75-inch, HD LED Smart Android TV",
            category: "television",
            product_id: "tv08",
            inStock: 10,
            isProductNew: true
        }
    ], (err, data) =>{
        res.redirect('/products')
    });
})

// Edit
app.get('/products/:id/edit', (req, res) =>{
    Product.findById(req.params.id, (err, foundProduct) =>{
        console.log(err);
        res.render("EditProduct", { product: foundProduct });
    });
})
// Update
app.put("/products/:id", (req, res) => {
    if (req.body.isProductNew === "on") {
        req.body.isProductNew = true;
    } else {
        req.body.isProductNew = false;
    }
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
        res.redirect(`/products/${req.params.id}`);
    });
});
// Delete
app.delete('/products/:id', (req, res) =>{
    Product.findByIdAndRemove(req.params.id, (err, foundProduct) =>{
        console.log("Deleted", foundProduct);
        res.redirect("/products");
    });
});
// Show
app.get("/products/:id", (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        console.log(err);
        console.log("Found", foundProduct);
        res.render("ShowProduct", { product: foundProduct });
    });
});


// //////////// Server Setup ///////////////////
app.listen(port, (req, res) =>{
    console.log(`Server listening on port ${port}`);
});