import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000 ;

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
}); 

app.listen(port,()=>{
    console.log(`Server is running on the ${port}`);
})