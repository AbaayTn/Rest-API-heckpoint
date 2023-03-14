const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/DatabaseMongoose")
    console.log('connected')
    }
    catch(error) {
        console.log(error)
    }
};

module.exports = dbConnect;