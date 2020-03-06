const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const keys = require('./keys');

app.use(cors());
app.use(express.json());


mongoose.connect(keys.mongoConnString, {
     useNewUrlParser: true, 
     useUnifiedTopology: true,
     useCreateIndex: true 
    });
const connection = mongoose.connection;


app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const entryRouter = require('./routes/entries');
app.use('/entries', entryRouter);

const userRouter = require('./routes/users');
app.use('/users', userRouter);

