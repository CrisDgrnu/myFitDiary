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
        username: "mrArcos",
        name: "Marcos",
        surname: "De Gracia Nuero",
        age: 16,
        weight: 85.5,
        email: "marcos@gmail.com",
        password: "1234"
    },
];

test('User created succesfully (201)', async () => {
    const res = await api.post('/users').send(users[0]);

    const createdUser = res.body;

    expect(res.statusCode).toEqual(201);
    expect(createdUser.username).toEqual('Cfres_');
    expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));

});

test('Weight is inserted into an array of pairs (weight,date)', async () => {
    const res = await api.post('/users').send(users[0]);

    const createdUser = res.body;

    expect(res.statusCode).toEqual(201);
    expect(typeof createdUser.weights[0]).toEqual('object');
    expect(createdUser.weights.length).toEqual(1);
    expect(createdUser.weights[0].weight).toEqual(68.5);
    expect(Date(createdUser.weights[0].date).toString().substring(0,10)).toEqual(Date(Date.now()).toString().substring(0,10));
    expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));

});

afterAll(() => {
    db.connection.close();
});;;