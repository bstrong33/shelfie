require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');


const app = express();

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log('Massive connection');
    app.set('db', dbInstance);
})

app.get('/api/inventory', controller.getInventory)
app.post('/api/inventory', controller.postProduct)
app.delete('/api/inventory/:id', controller.deleteProduct)
app.put('/api/inventory/:id', controller.putProduct)


let port = process.env.port

app.listen(port, () => {
    console.log(`Ye maiden voyage has docked on port: ${port}`)
})