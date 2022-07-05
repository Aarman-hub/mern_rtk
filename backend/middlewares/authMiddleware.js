const expressJwt = require('express-jwt');


exports.requireSignin = expressJwt({
    secret: process.env.JWTSECRET, 
    algorithms: ["HS256"]
})