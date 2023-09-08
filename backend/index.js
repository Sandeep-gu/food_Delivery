const express= require('express');
const app = express();
const port = 5000;
const mongodb = require('./db');
const cors = require('cors');

/*app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    next();
})*/
mongodb();
app.use(cors());
app.use(express.json());
app.use('/api',require('./routers/createUser'));
app.use('/api',require('./routers/DisplayData'));
app.use('/api',require('./routers/OrderData'));
app.get('/',(req,res)=>{
    res.send("Hello World!");
    console.log("hello world");
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});