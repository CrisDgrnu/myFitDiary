const supertest = require('supertest');
const app = require('../App');

const api = supertest(app);

describe('POST /users', () => {

    describe("Given all the data", () => {

        test('Should respond with 201', async () => {
            const response = await api.post('/users').send({
                "name": "Cristian",
                "surname": "De Gracia Nuero",
                "age": 16,
                "weight": 68.5,
                "email": "cristian@gmail.com",
                "password": "12345678"
            });
            expect(response.statusCode).toBe(201);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        });

        test('Should respond with 400 because password is smaller than 8 characters', async () => {
            const response = await api.post('/users').send({
                "name": "Cristian",
                "surname": "De Gracia Nuero",
                "age": 16,
                "weight": 68.5,
                "email": "cristian@gmail.com",
                "password": "1234567"
            });
            expect(response.statusCode).toBe(400);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            expect(response.body.error).toBeDefined()
            expect(response.body.causes).toBeDefined()
        });

        test('Should respond with 409 because this email already exists', async () => {
            const response = await api.post('/users').send({
                "name": "Cristian",
                "surname": "De Gracia Nuero",
                "age": 16,
                "weight": 68.5,
                "email": "cristian@gmail.com",
                "password": "12345678"
            });
            expect(response.statusCode).toBe(409);
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
            expect(response.body.error).toBeDefined()
            expect(response.body.email).toBeDefined()

        });


    });

});

