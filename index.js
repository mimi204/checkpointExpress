const express = require('express');

const path = require('path')
const app = express();

const middletime = app.use(function (req, res, next) {
    var today = new Date();
     var day = today.getDay();
     var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var time = today.getHours();
    console.log(day)
    console.log(time)
    
    if (((8< time <18)) && (0<day<6)) {
         res.sendFile(path.join(__dirname, 'public', 'off.html'))
        // res.send("notwork") 
    }
    else {
     next(); }
 
});

app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 8000;

app.listen(PORT, err => err ? console.log(err) : console.log(`Server is runnig on port ${PORT}`));