const app = require('./App');
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    try {
        console.log('Server running');
    } catch (error) {
        console.log('Server error');
    }
});