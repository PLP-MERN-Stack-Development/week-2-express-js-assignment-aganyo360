const express = require("express")
const app = express();
const mongoose = require("mongoose");
const MONGO_URI ="mongodb://localhost:27017/products";
const productRouter = require('./routes/productRoutes');
const PORT = 4000;


app.use(express.json());
//lets connect the db
mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connected to MONGODB"))
.catch(error => console.log(`MongoDB connection error : ${error}`))

// set up middlewares

app.use("/", productRouter);


app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})