require('./db/mongo_db');
const express = require('express');
const hotelRoutes = require('./routes/hotelRoutes');
const cityRoutes = require('./routes/cityRoutes');

const app = express()
const port = 5000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use("/cities",cityRoutes)
app.use("/hotel-search",hotelRoutes)

app.listen(port,()=>{
    console.log(`App listen on port http://localhost:${port}`);
})