const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1/test?directConnection=true';

const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    console.log('ddfdfsf')
}

module.exports = connectToMongo;