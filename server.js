const express = require('express');
const app = express();
//console.log(__dirname+"/public");
app.use("/",express.static(__dirname + "/public"));
const PORT = process.env.PORT || 4433;
app.listen(PORT,()=>{
    console.log('http://localhost:4433' + PORT);
})