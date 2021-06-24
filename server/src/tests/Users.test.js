const supertest = require('supertest');
const app = require('../App');

const db = require('mongoose');
const User = require('../api/models/User');

const api = supertest(app);

beforeEach(async () => {
    await User.deleteMany({});
});

const users = [
    {
        username: "Cfres_",
        name: "Cristian",
        surname: "De Gracia Nuero",
        age: 26,
        weight: 68.5,
        email: "cristian@gmail.com",
        password: "1234"
    },
    {
        username: "mrarcos",
        name: "Marcos",
        surname: "De Gracia Nuero",
        age: 16,
        weight: 85.5,
        email: "marcos@gmail.com",
        password: "1234"
    },
];

const weights = [
    { weight: 93.7 },
    {}
];
describe('POST', () => {

    describe('Data is ok', () => {

        test('User is created succesfully ', async () => {
            const res = await api.post('/users').send(users[0]);

            const createdUser = res.body;

            expect(res.statusCode).toEqual(201);

            expect(createdUser.name).toEqual('Cristian');
            expect(createdUser.surname).toEqual('De Gracia Nuero');
            expect(createdUser.username).toEqual('Cfres_');
            expect(createdUser.email).toEqual('cristian@gmail.com');

            expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));

        });
    });

    describe('Data is wrong', () => {

        test('Email already exists', async () => {
            await api.post('/users').send(users[0]);
            const res = await api.post('/users').send(users[0]);

            const body = res.body;
            expect(res.statusCode).toEqual(409);
            expect(body.message).toEqual('Duplicated email');
        });
    });

});

describe('GET', () => {

    describe('Data is ok', () => {
        test('Find a user by a given id', async() => {
            let res = await api.post('/users').send(users[0]);
            const id = res.body.id;
            res = await api.get(`/users/${id}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body.id).toEqual(id);
            expect(res.body.username).toEqual(users[0].username);
            expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));
        })
    });

    describe('Data is wrong', () => {
        test('Id has incorrect form', async() => {
            const res = await api.get('/users/asdsadfs');

            expect(res.statusCode).toEqual(400);
            expect(res.body.message).toEqual('Malformed id');
        });

        test('Id not found', async() => {
            const res = await api.get('/users/60d4deace2b2670c5a2c68ba');

            expect(res.statusCode).toEqual(404);
            expect(res.body.message).toEqual('User with this id wasn\'t found');
        })
    });
});

describe('PUT', () => {

    describe('Data is ok', () => {

        test('Weight is inserted into an array of pairs (weight,date)', async () => {
            const res = await api.post('/users').send(users[0]);
            const createdUser = res.body;

            expect(res.statusCode).toEqual(201);

            expect(typeof createdUser.weights[0]).toEqual('object');
            expect(createdUser.weights.length).toEqual(1);
            expect(createdUser.weights[0].weight).toEqual(68.5);
            expect(Date(createdUser.weights[0].date).toString().substring(0, 10)).toEqual(Date(Date.now()).toString().substring(0, 10));
            expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));

        });

    });

    describe('Data is wrong', () => {

        test('No weight suplied', async () => {
            let res = await api.post('/users').send(users[0]);
            const id = res.body.id;
            console.log(id);
            res = await api.put(`/users/${id}/weight`).send(weights[1]);

            const body = res.body;
            expect(res.statusCode).toEqual(400);
            expect(body.message).toEqual('No weight suplied');
        });

        test('Not existing id given when the weight is inserted', async () => {
            let res = await api.post('/users').send(users[0]);
            res = await api.put('/users/60d4deace2b2670c5a2c68ba/weight').send(weights[0]);

            const body = res.body;
            expect(res.statusCode).toEqual(404);
            expect(body.message).toEqual('Id not found');
        });

        test('Wrong id given when the weight is inserted', async () => {
            let res = await api.post('/users').send(users[0]);
            res = await api.put('/users/fdgdgd/weight').send(weights[1]);

            const body = res.body;
            expect(res.statusCode).toEqual(400);
            expect(body.message).toEqual('Malformed id');
        });

    });

});





afterAll(() => {
    db.connection.close();
});;;