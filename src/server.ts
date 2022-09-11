import express,{ Request,Response } from "express";
const mongoose = require('mongoose');
import {ConnectDB} from "../config/connectdb";


var con = new ConnectDB();
con.getName();

const app = express()
app.get("/" , (req,res) => {
    res.json({result : "ok5555"});
});

app.listen(3000, () => {
    console.log("Server is connect....")
});