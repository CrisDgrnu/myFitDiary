const mongoose = require('mongoose');

const { NODE_ENV, MONGODB_CONNECTION, MONGODB_CONNECTION_TEST } = process.env;
const connectionString = NODE_ENV === 'test' ? MONGODB_CONNECTION_TEST : MONGODB_CONNECTION;


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to the database');
}).catch(() => {
    console.log('Error connecting to the database');
});

