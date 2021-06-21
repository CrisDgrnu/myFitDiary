const app = require('./App');
const PORT = 8080;

const db = require('../src/config/database/Connection');

app.listen(PORT, async () => {
    try {
        await db.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
