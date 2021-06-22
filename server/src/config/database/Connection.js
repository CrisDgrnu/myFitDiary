const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://cfres:rJYbtYzM67EMRtb@cluster0.4vbrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


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

