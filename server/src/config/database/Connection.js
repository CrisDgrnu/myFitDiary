const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_CONNECTION;


mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to the database');
}).catch(() => {
    console.log('Error connecting to the database');
});

