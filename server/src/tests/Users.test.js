const supertest = require('supertest');
const app = require('../App');

const db = require('mongoose');
const User = require('../api/models/User');

const api = supertest(app);

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

beforeEach(async () => {
    await User.deleteMany({});
});

describe('POST', () => {

    describe('Data is ok', () => {

        test('User is created succesfully ', async () => {
            const userRes = await api.post('/users').send(users[0]);

            const createdUser = userRes.body;

            expect(userRes.statusCode).toEqual(201);

            expect(createdUser.name).toEqual('Cristian');
            expect(createdUser.surname).toEqual('De Gracia Nuero');
            expect(createdUser.username).toEqual('Cfres_');
            expect(createdUser.email).toEqual('cristian@gmail.com');

            expect(userRes.headers['content-type']).toEqual(expect.stringContaining('json'));

        });
    });

    describe('Data is wrong', () => {

        test('Email already exists', async () => {
            await api.post('/users').send(users[0]);
            const userRes = await api.post('/users').send(users[0]);

            const body = userRes.body;
            expect(userRes.statusCode).toEqual(409);
            expect(body.message).toEqual('Duplicated email');
        });
    });

});

describe('GET', () => {

    describe('Data is ok', () => {

        test('Find a user by a given id', async () => {
            let userRes = await api.post('/users').send(users[0]);
            const id = userRes.body.id;
            userRes = await api.get(`/users/${id}`);

            expect(userRes.statusCode).toEqual(200);
            expect(userRes.body.id).toEqual(id);
            expect(userRes.body.username).toEqual(users[0].username);
            expect(userRes.headers['content-type']).toEqual(expect.stringContaining('json'));
        });
    });

    test('Find all users', async () => {
        users.forEach(async (user) => await api.post('/users').send(user));
        const userRes = await api.get('/users');

        expect(userRes.statusCode).toEqual(200);
        expect(userRes.body.length).toEqual(2);
        expect(userRes.headers['content-type']).toEqual(expect.stringContaining('json'));
    });
});

describe('Data is wrong', () => {
    test('Id has incorrect form', async () => {
        const userRes = await api.get('/users/asdsadfs');

        expect(userRes.statusCode).toEqual(400);
        expect(userRes.body.message).toEqual('Malformed id');
    });

    test('Id not found', async () => {
        const userRes = await api.get('/users/60d4deace2b2670c5a2c68ba');

        expect(userRes.statusCode).toEqual(404);
        expect(userRes.body.message).toEqual('User with this id wasn\'t found');
    });
});


describe('PUT', () => {

    describe('Data is ok', () => {

        test('Weight is inserted into an array of pairs (weight,date)', async () => {
            const userRes = await api.post('/users').send(users[0]);
            const createdUser = userRes.body;

            expect(userRes.statusCode).toEqual(201);

            expect(typeof createdUser.weights[0]).toEqual('object');
            expect(createdUser.weights.length).toEqual(1);
            expect(createdUser.weights[0].weight).toEqual(68.5);
            expect(Date(createdUser.weights[0].date).toString().substring(0, 10)).toEqual(Date(Date.now()).toString().substring(0, 10));
            expect(userRes.headers['content-type']).toEqual(expect.stringContaining('json'));

        });

    });

    describe('Data is wrong', () => {

        test('No weight suplied', async () => {
            let userRes = await api.post('/users').send(users[0]);
            const id = userRes.body.id;
            console.log(id);
            userRes = await api.put(`/users/${id}/weight`).send(weights[1]);

            const body = userRes.body;
            expect(userRes.statusCode).toEqual(400);
            expect(body.message).toEqual('No weight suplied');
        });

        test('Not existing id given when the weight is inserted', async () => {
            let userRes = await api.post('/users').send(users[0]);
            userRes = await api.put('/users/60d4deace2b2670c5a2c68ba/weight').send(weights[0]);

            const body = userRes.body;
            expect(userRes.statusCode).toEqual(404);
            expect(body.message).toEqual('Id not found');
        });

        test('Wrong id given when the weight is inserted', async () => {
            let userRes = await api.post('/users').send(users[0]);
            userRes = await api.put('/users/fdgdgd/weight').send(weights[1]);

            const body = userRes.body;
            expect(userRes.statusCode).toEqual(400);
            expect(body.message).toEqual('Malformed id');
        });

    });

});





afterAll(() => {
    db.connection.close();
});;;