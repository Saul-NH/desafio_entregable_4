const express = require('express');
const routerProducts = require('./src/router/products.router');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', routerProducts);

const server = app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

server.on('error', (error) => console.error(error));
