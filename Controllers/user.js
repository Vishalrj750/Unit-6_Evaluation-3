const userModel = require('../Models/user');
const bookModel = require('../Models/book');
const commentModel = require('../Models/comment');
const userLoginModel = require('../Models/userLogin');

async function createUser (req, res, next) {
    try {
        const response = await userModel.insertMany([req.body]);
        res.status(200).json({status: true});
    } catch (error) {
        res.status(400).send(error);
    }
}

async function createBook (req, res, next) {
    try {
        const response = await bookModel.insertMany([req.body]);
        res.status(200).json({status: true});
    } catch (error) {
        res.status(400).send(error);
    }
}

async function createComment (req, res, next) {
    try {
        const response = await commentModel.insertMany([req.body]);
        res.status(200).json({status: true});
    } catch (error) {
        res.status(400).send(error);
    }
}

async function userLogin (req, res, next) {
    try {
        const response = await userModel.find({email: req.email});
        console.log(response);
        (response.email === req.email) && (response.password === req.password) ? res.status(200).json({status: true}) : res.status(201).send("email id or password is incorrect");
        
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    createUser,
    createBook,
    createComment,
    userLogin
}