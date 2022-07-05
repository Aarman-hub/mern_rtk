const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.user = async (req, res) =>{

}
exports.signup = async (req, res) =>{
    const {username, email, password} = req.body;
}
exports.signin = async (req, res) =>{
    const {email, password} = req.body;

}
exports.signout = async (req, res) =>{

}