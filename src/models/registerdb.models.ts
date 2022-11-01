const con = require("../config/connectdb")
import mongoose,{ Schema } from "mongoose"
import {Connectdb} from "../config/connectdb"
const bcrypt = require('bcrypt');
const saltRounds = 10;


Connectdb()

var UserSchema = new Schema({
    userID : {
        type: String,
        index: { unique: true, sparse: true }
    },

    password : {
        type: String
    },

    firsName:{
        type: String
    },

    lastName:{
        type: String
    },
    status:{
        type: String
    }
});

var Register = mongoose.model("User",UserSchema);

export function saveRegister(data:any){

    return new Promise((resolve, reject)=>{
        if( data.userID && data.firsName && data.lastName && data.password  &&data.status   !== null){
            bcrypt.genSalt(saltRounds, function(err : any , salt : any) {
                bcrypt.hash(data.password , salt, function(err : any , hash : any) {
                
                    var register = new Register({
                        "userID" : data.userID,
                        "password" : hash,
                        "firsName" : data.firsName,
                        "lastName" : data.lastName,
                        "status" : data.status
                    });

                    register.save(function(err, user) {
                        if (err) {
                            console.log(err);
                            reject({status : "ERROR", messge: 'Add User FAIL'});
                        }else{
                            resolve ({status : "OK", messge: 'Add User Success '})
                        }
                
                    })
                    
                });
            
            });
    }else{
        reject({status : "ERROR", messge: 'Add User FAIL'});
    }
    })
};


