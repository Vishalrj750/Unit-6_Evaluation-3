const mongoose = require('mongoose');

class mongo {
    constructor() {
        this.connectToMongoDB()
    }
    connectToMongoDB() {
        mongoose.connect('mongodb+srv://vishal:eUxk-i8!yqExmXp@cluster0.klngl.mongodb.net/evaluation');
        mongoose.connection.once('open', () => {
            console.log('MongoDB connected successfully');
        })
        mongoose.connection.on('error', () => {
            console.log('Some Error occured on MongoDB connection');
        })
    }
}

module.exports = mongo;