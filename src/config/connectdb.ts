require('dotenv').config();
const mongoose = require('mongoose');


export async function Connectdb(){

  const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

  const {MONGO_USERNAME,MONGO_PASSWORD,LOCAHOST} = process.env;
  const url : string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${LOCAHOST}:5555/myDB?authSource=admin`

  await mongoose.connect(url, options);
  
}

