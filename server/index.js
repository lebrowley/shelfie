require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      app = express (),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      control = require('./controller');

app.use(express.json());



//---------------------------------------------ENDPOINTS----------------------------------------//

app.get('/api/inventory', control.getProducts);
app.post('/api/product', control.newProduct);
app.delete('/api/product/:id', control.deleteProduct);
app.put('/api/product/:id', control.updateProduct)
app.get('api/product/id', control.getProduct)


//---------------------------------------------DB and Server Connection-------------------------//
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('db connected')
    app.listen(SERVER_PORT, () => {
        console.log(`Server running on port ${SERVER_PORT}`)
    });
}).catch(err => console.log(err));

