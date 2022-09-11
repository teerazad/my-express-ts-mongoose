require('dotenv').config();

const mongoose = require('mongoose');
 


export class ConnectDB {
    getName() : any {
        const {modo} = process.env;
        const url : string = 'mongodb://root:password@localhost:5555/?authMechanism=DEFAULT'
        mongoose.connect(url);
        const Catt = mongoose.model('tttttttt', { name: String });
        console.log(modo)
    }
}

// const kitty = new Catt({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
