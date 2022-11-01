import express,{ Request,Response } from "express";
import {saveRegister} from "./models/registerdb.models";
import {Login} from "./models/login";

var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
var jsonParser = bodyParser.json();
app.use(cors());
app.set('port', (process.env.PORT || 4000));

var http = require('http');
var server = http.Server(app);

// const { Server } = require("socket.io");
// const io = new Server(Server);

const lineNotify = require('line-notify-nodejs')('4tUCFDRyczrHdoh0fmxk2JDFVZegPPMXOL77rHod8uW');



app.post("/" , (req,res) => {
    res.json({test : "oh!!!"});
    console.log("5555")

});

app.post("/add" ,jsonParser, (req,res) => {
    saveRegister(req.body)
    .then(value => {
        res.json(value);
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

app.post("/login" ,jsonParser, (req,res) => {
    console.log(req.body["userID"]);
    Login(req.body)
    .then(value => {
        res.json(value);
    })
    .catch(err => {
        res.status(404).send("error");
    });
    
});

app.post("/esp8266" ,jsonParser, (req,res) => {
   console.log(req.body.raw[0])
   res.json({test : "oh!!!"});
   
   if(String(req.body.raw[0]) === "1"){
    setTimeout(() => {
        lineNotify.notify({
            message: 'ไฟใหม้',
        }).then(() => {
            console.log('send completed!');
        });
    },3000)
 
}
})

server.listen(app.get('port'), jsonParser,() => {
    console.log("Server is connect....")
});