const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { connectedDB } = require('./config/db');
require('dotenv').config();

const authRoute = require('./routes/auth');


const app = express();
connectedDB();



app.use(cors());
app.use(morgan('tiny'));
app.use(express.json({ limit:"30mb", extended:true}));
app.use(express.urlencoded({extended:true, limit:"30mb"}));


// const express = require('express');

app.use('/api/user', authRoute)



const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server is runnig on port ${port}`);
})


