const mongoose = require('mongoose');


exports.connectedDB = async (req, res)=>{
    try {
        const db = process.env.MONGODB_URI
        await mongoose.connect(db, {
            useNewUrlParser: true
         });
        console.log("DB Connected")
    } catch (error) {
        process.exit(1)
    }
}
