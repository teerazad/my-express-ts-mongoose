const User = require('mongoose').model('User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2021'

export function Login(user:any){ 

    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            User.find({userID : user.userID })
            .exec((err:any , data:any)=>{
                try {
                var token = jwt.sign({user: data[0].userID,firsName: data[0].firsName,lastName: data[0].lastName},secret,{ expiresIn: '12h' });
                if (data[0] === undefined){
                    resolve ({status : "FAILU", messge: 'login FAIL'});
                } else if(err){
                    reject (err);
                }else{
                    bcrypt.compare(user.password , data[0].password , function(err:any, result:any) {
                        if(result && (data[0].status === "user")){
                            resolve ({status : "OK_User", messge: 'login Success User',token});
                        }else if(result && (data[0].status === "admin")){
                            resolve ({status : "OK_Admin", messge: 'login Success admin',token});
                        }else if(err){
                            reject (err);
                        }else{
                            resolve ({status : "FAILP", messge: 'login FAIL '});
                        }
                
                    });
                }
                } catch (e) {
                    resolve ({status : "FAILP", messge: 'login FAIL'});
                    console.log("Something went wrong", e);
                }
            }, 1000);

        });
    })
};