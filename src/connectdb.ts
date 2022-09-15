require('dotenv').config();
const mongoose = require('mongoose');
 


export class ConnectDB {
    getName() : any {
        const {MONGO_USERNAME,MONGO_PASSWORD,LOCAHOST} = process.env;
        const url : string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${LOCAHOST}:5555/?authMechanism=DEFAULT`
        mongoose.connect(url);
        const Catt = mongoose.model('lllllllll', { name: String });
        console.log(MONGO_USERNAME)
    }
}