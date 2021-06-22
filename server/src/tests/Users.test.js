// const supertest = require('supertest');
// const { app, server } = require('../App');


// const connection = require('../config/database/Connection');


// const api = supertest(app);

// const initialUsers = [
//     {
//         "name": "Cristian",
//         "surname": "De Gracia Nuero",
//         "age": 16,
//         "weight": 68.5,
//         "email": "cristian@gmail.com",
//         "password": "12345678"
//     }
// ];

// beforeAll(async () => {
//     await connection.sync({ force: true })
// });


// test('Should respond with 201 (User created)', async () => {
//     const response = await api.post('/users').send({
//         "name": "Cristian",
//         "surname": "De Gracia Nuero",
//         "age": 16,
//         "weight": 68.5,
//         "email": "cristdian@gmail.com",
//         "password": "12345678"
//     });
//     expect(response.statusCode).toBe(201);
//     expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
// });



// afterAll(async () => {
//     await connection.close();
//     server.close();
// });



