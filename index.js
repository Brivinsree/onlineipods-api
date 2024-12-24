import express from "express";
import mainrouter from './router/index.js'
import cors from 'cors'
const app = express(); //Create server
const port = process.env.PORT;



//Middleware to parse bodies
app.use(express.json())
app.use(cors());

app.use('/api/v1', mainrouter);

app.listen(port, () => { //Server listening
    console.log(`Server listening on port ${port}`)
})