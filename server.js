import express from 'express'
import connectDB from './db/connection.js'

const app = express();

connectDB();
app.use(express.json());
//app.use('/api/products',router);


const port = 3000;
app.listen(port, () =>{
    console.log("Server is listening on port: " + port);
})