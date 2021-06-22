// const supertest = require('supertest');
// const api = supertest('http://localhost:8080');
// const { beforeEach } = require('jest');
// const db = require('../config/database/Connection')

// describe('POST /exercises', () => {

//     beforeEach(() => {
//         return initializeCityDatabase();
//       });

//     test('Should respond with 201 (Exercise created)', async () => {
//         const response = await api.post('/exercises').send({
//             "name": "Flexion",
//             "description": "Boca abajo en el suelo levantar el cuerpo de forma horizontal con las manos",
//             "video": "http://www.youtube.com/flexion",
//             "level": 3
//         });
//         expect(response.statusCode).toBe(201);
//         expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
//     });

//     test('Should respond with 400 (No name given)', async () => {
//         const response = await api.post('/exercises').send({
//             "name": "",
//             "description": "Boca abajo en el suelo levantar el cuerpo de forma horizontal con las manos",
//             "video": "http://www.youtube.com/flexion",
//             "level": 3
//         });
//         expect(response.statusCode).toBe(400);
//         expect(response.body.error).toBeDefined();
//         expect(response.body.causes).toBeDefined();
//     });

//     test('Should respond with 400 (Level greater than 3)', async () => {
//         const response = await api.post('/exercises').send({
//             "name": "Flexion",
//             "description": "Boca abajo en el suelo levantar el cuerpo de forma horizontal con las manos",
//             "video": "http://www.youtube.com/flexion",
//             "level": 4
//         });
//         expect(response.statusCode).toBe(400);
//         expect(response.body.error).toBeDefined();
//         expect(response.body.causes).toBeDefined();
//     });

//     test('Should respond with 409 (Exercise already exists)', async () => {
//         const response = await api.post('/exercises').send({
//             "name": "Flexion",
//             "description": "Boca abajo en el suelo levantar el cuerpo de forma horizontal con las manos",
//             "video": "http://www.youtube.com/flexion",
//             "level": 3
//         });
//         expect(response.statusCode).toBe(409);
//         expect(response.body.error).toBeDefined();
//         expect(response.body.name).toBeDefined();
//     });


// });