const supertest = require('supertest');
const api = supertest('http://localhost:8080');

describe('POST /exercises', () => {

    describe('Given all the data', () => {
        test('Should respond with 201', async () => {
            const response = await api.post('/exercises').send({
                "name": "Flexin",
                "description": "Boca abajo en el suelo levantar el cuerpo de forma horizontal con las manos",
                "video": "http://www.youtube.com/flexion",
                "level": 3
            });
            expect(response.statusCode).toBe(201);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        });
    });
});