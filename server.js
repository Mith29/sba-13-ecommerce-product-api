import express from 'express'
import connectDB from './db/connection.js'
import router from './routes/productRoutes.js';

const app = express();

connectDB();
app.use(express.json());
app.use('/', router);


const port = 3000;
app.listen(port, () =>{
    console.log("Server is listening on port: " + port);
})