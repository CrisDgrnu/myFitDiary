// const supertest = require('supertest');
// const api = supertest('http://localhost:8080');

// describe('POST /workouts', () => {


//     test('Should respond with 201 (Workout created)', async () => {

//         const exercise1 = await api.post('/exercises').send({
//             "name": "Sentadilla",
//             "description": "Descripcion de la sentadilla",
//             "video": "http://www.youtube.com/sentadilla",
//             "level": 3
//         });

//         const exercise2 = await api.post('/exercises').send({
//             "name": "Zancada",
//             "description": "Descripcion de la zancada",
//             "video": "http://www.youtube.com/zancada",
//             "level": 2
//         });

//         const exercise3 = await api.post('/exercises').send({
//             "name": "Abdominales",
//             "description": "Descripcion de abdominales",
//             "video": "http://www.youtube.com/abdominales",
//             "level": 1
//         });

//         const response = await api.post('/workouts').send({
//             "name": "Back-Lever Workout",
//             "exercises": [1, 2, 3]
//         });
//         expect(response.statusCode).toBe(201);
//         expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
//     });

// });