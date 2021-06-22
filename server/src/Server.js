const app = require('./App');
const PORT = 8080;

const server = app.listen(PORT, async () => {
    try {
        console.log('Server running');
    } catch (error) {
        console.log('Server error');
    }
});