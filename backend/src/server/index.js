const express = require('express');
const { MongoClient } = require('mongodb');

const products = require('../data/products.json');

const app = express();
const PORT = 3000;

let databaseObject = {};
let productsCollectionObj = {};
let suppliersCollectionObj = {};

const dbConnection = async () => {
    const uri = 'mongodb+srv://andresbertone:cursofullstack@cluster0.6oxba.mongodb.net/TP-CursoFullStack?retryWrites=true&w=majority';

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();

        databaseObject = await client.db("TP-CursoFullStack");

        productsCollectionObj = await databaseObject.collection("products");
        
        suppliersCollectionObj = await databaseObject.collection("suppliers");
        
        console.log("Cloud DB Connected - Mongo DB");
    } catch (error) {
        console.log(error);
    }
};

dbConnection().catch(console.error);


const mappedProducts = products.map( ( product ) => {
    return {
        ...product,
        image: `http://localhost:${PORT}/${product.image}`
    }
});


app.use(express.static('public'));


app.get('/products', async ( req, res ) => {
    try {
        const allProducts = await productsCollectionObj.find({}).toArray();
        res.status(200).send(allProducts);
    } catch (error) {
        console.log(error);
    }
});

app.get('/products/:id', ( req, res ) => {
    
    const product = mappedProducts.find( ( product ) => product.id === req.params.id );

    if ( !product ) {
        res.status(404).send(`Cannot find the product with id ${req.params.id}`);
    };

    res.status(200).send( product );

});


app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`);
});