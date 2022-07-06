

//==============================================================
// DEPENDENCIES
//==============================================================

const express = require('express');
const app = express();
const path = require('path');
const port =  process.env.PORT || 8000;
// const bodyParser = require('body-parser'); // reads post contents
// const morgan = require('morgan'); // logs all requests to console

console.log("process.env", process.env)

try {
    console.log("process.env", JSON.stringify(process.env))

} catch (e) {
    console.log("couldnt stringify")
}



//==============================================================
// CONFIG
//=============================================================


//==============================================================
// API
//==============================================================


// handle CORS requests(cross origin resource sharing)
// app.use((req,res,next){
// 	res.setHeader('Access-Control-Allow-Origin','*');
// 	res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
// 	res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
// 	next();
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// log all requests to console
// app.use(morgan('dev'));


// require('dotenv').config()


app.get('/', (req, res) => {
    console.log("process.env", process.env)
    res.json({health: 'okk', process_env: process.env})
});


app.get('/env', (req, res) => {
    console.log("process.env", process.env)
    res.send(process.env)
});

app.get('/port', (req, res) => {
    console.log("process.env.PORT", process.env.PORT)
    res.send(process.env.PORT)
});

app.get('/process', (req, res) => {
    console.log("process.env", process.env)
    console.log(req.query)

    if(req.query.param)  {
        console.log("req.query.param: ", req.query.param)
        res.json({param: req.query.param, value: process.env[req.query.param]})
        console.log('process.env[req.query.param]:', process.env[req.query.param])
        // console.log('process.env',process.env)

    } else {
        res.send(process.env)
         console.log('process.env',process.env)

    }

});



//==============================================================
// SERVER START
//==============================================================


app.listen(port, () =>{
	console.log("listening on port: " + port);
});


