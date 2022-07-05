const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.getUser = async (req, res) =>{

}
exports.signup = async (req, res) =>{
    const {username, email, password} = req.body;
    try {
        const alreadyuser = await User.findOne({email});
        if(alreadyuser){
            return res.status(400).json({message:"Email already taken."});
        }

        hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            username,
            email,
            password:hashedPassword
        });


        const secret = process.env.JWTSECRET

        const token = jwt.sign({email:user.email, id: user._id}, secret, {expiresIn:"1d"} )

        return res.status(201).json({token, user})


    } catch (error) {
        res.status(500).json({message: "Something went wrong."})
    }
}
exports.signin = async (req, res) =>{
    const {email, password} = req.body;

    try {
        const oldUser = await User.findOne({email});

        if(!oldUser){
            res.status(401).json({message:"User not found"});
        }
        const comparePassword = await bcrypt.compare(password, oldUser.password);
        if(!comparePassword){
            res.status(401).json({message:"Password not match."});
        }

        const secret = process.env.JWTSECRET

        const token = jwt.sign({email:oldUser.email, id: oldUser._id}, secret, {expiresIn:"1d"} )

        return res.status(201).json({token, oldUser});


    } catch (error) {
        res.status(500).json({message:"Try again"})
    }

}
exports.signout = async (req, res) =>{

}