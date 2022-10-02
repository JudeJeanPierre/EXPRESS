// /////////////// Requirements and Init ///////////////////////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
app.use(express.static('public'));
const Product = require('./models/products')
const Order = require('./models/orders')
const Cart = require('./models/carts')
const User = require('./models/users')
const Home = require('./models/home')
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
// ////////////////// ROUTES /////////////////////////////////

///// Home Routes /////
app.get('/home', (req, res) => {
    Home.find({}, (err, allHome) =>{
        console.log(err)
    
    res.render('IndexHome', {
        home: allHome

    });  
    })
})  
///// Product Routes /////
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
    if(req.body.isProductNew === "on"){
        req.body.isProductNew = true;
        } else{
            req.body.isProductNew = false
        }
    Product.create(req.body, (err, createdProduct) => {
        console.log(err)
        
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
            name: "Philips FX10",
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

///// Order Routes /////
// Index
app.get("/orders", (req, res) => {
    Order.find({}, (err, allOrders) => {
        console.log(err)

        res.render('IndexOrder', {
            orders: allOrders
        });
    });
})
// New
app.get('/orders/new', (req, res) =>{
    res.render('NewOrder', {})
})
// Post
app.post('/orders', (req, res) =>{
    Order.create(req.body, (err, createdOrder) => {
        console.log(err)
        
    })
    res.redirect('/orders')
})
// Edit
app.get('/orders/:id/edit', (req, res) =>{
    Order.findById(req.params.id, (err, foundOrder) =>{
        console.log(err);
        res.render("EditOrder", { order: foundOrder });
    });
})
// Update
app.put("/orders/:id", (req, res) => {
    Order.findByIdAndUpdate(req.params.id, req.body, (err, updatedOrder) => {
        res.redirect(`/orders/${req.params.id}`);
    });
});
// Delete
app.delete('/orders/:id', (req, res) =>{
    Order.findByIdAndRemove(req.params.id, (err, foundOrder) =>{
        console.log("Deleted", foundOrder);
        res.redirect("/orders");
    });
});
// Show
app.get("/orders/:id", (req, res) => {
    Order.findById(req.params.id, (err, foundOrder) => {
        console.log(err);
        console.log("Found", foundOrder);
        res.render("ShowOrder", { order: foundOrder });
    });
});

///// User Routes /////
// Index
app.get("/users", (req, res) => {
    User.find({}, (err, allUsers) => {
        console.log(err)

        res.render('IndexUser', {
            users: allUsers
        });
    });
})
// New
app.get('/users/new', (req, res) =>{
    res.render('NewUser', {})
})
// Post
app.post('/users', (req, res) =>{
    if(req.body.isUserNew === "on"){
        req.body.isUserNew = true;
        } else{
            req.body.isUserNew = false
        }
    User.create(req.body, (err, createdUser) => {
        console.log(err)
        
    })
    res.redirect('/users')
})

// Edit
app.get('/users/:id/edit', (req, res) =>{
    User.findById(req.params.id, (err, foundUser) =>{
        console.log(err);
        res.render("EditUser", { user: foundUser });
    });
})
// Update
app.put("/users/:id", (req, res) => {
    if (req.body.isAdmin === "on") {
        req.body.isAdmin = true;
    } else {
        req.body.isAdmin = false;
    }
    User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
        res.redirect(`/users/${req.params.id}`);
    });
});
// Delete
app.delete('/users/:id', (req, res) =>{
    User.findByIdAndRemove(req.params.id, (err, foundUser) =>{
        console.log("Deleted", foundUser);
        res.redirect("/users");
    });
});
// Show
app.get("/users/:id", (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        console.log(err);
        console.log("Found", foundUser);
        res.render("ShowUser", { user: foundUser });
    });
});

///// Cart Routes /////
// Index
app.get("/carts", (req, res) => {
    Cart.find({}, (err, allCarts) => {
        console.log(err)

        res.render('IndexCart', {
            carts: allCarts
        });
    });
})
// New
app.get('/carts/new', (req, res) =>{
    res.render('NewCart', {})
})
// Post
app.post('/carts', (req, res) =>{
    Cart.create(req.body, (err, createdCart) => {
        console.log(err)
        
    })
    res.redirect('/carts')
})
// Edit
app.get('/carts/:id/edit', (req, res) =>{
    Cart.findById(req.params.id, (err, foundCart) =>{
        console.log(err);
        res.render("EditCart", { cart: foundCart });
    });
})
// Update
app.put("/carts/:id", (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, req.body, (err, updatedCart) => {
        res.redirect(`/carts/${req.params.id}`);
    });
});
// Delete
app.delete('/carts/:id', (req, res) =>{
    Cart.findByIdAndRemove(req.params.id, (err, foundCart) =>{
        console.log("Deleted", foundCart);
        res.redirect("/carts");
    });
});
// Show
app.get("/carts/:id", (req, res) => {
    Cart.findById(req.params.id, (err, foundCart) => {
        console.log(err);
        console.log("Found", foundCart);
        res.render("ShowCart", { cart: foundCart });
    });
});

// //////////// Server Setup ///////////////////
app.listen(port, (req, res) =>{
    console.log(`Server listening on port ${port}`);
});