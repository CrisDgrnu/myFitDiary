const supertest = require('supertest');
const app = require('../App');

const db = require('mongoose');
const Exercise = require('../api/models/Exercise');

const api = supertest(app);

const exercises = [
    {
        name: "Pull up",
        description: "Pull your weight on the bar",
        video: "https://www.youtube.com/pullup",
        level: 2
    },
    {
        name: "Push up",
        description: "Push your weight off of the ground",
        video: "https://www.youtube.com/pushup",
        level: 2
    }
];

beforeEach(async () => {
    await Exercise.deleteMany({});
});

describe('POST', () => {

    describe('Data is ok', () => {

        test('Exercise is created succesfully ', async () => {
            const exerciseRes = await api.post('/exercises').send(exercises[0]);


            expect(exerciseRes.statusCode).toEqual(201);
            expect(exerciseRes.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(exerciseRes.body.name).toEqual('Pull up');

        });

    });

});


describe('GET', () => {

    describe('Data is ok', () => {

        test('Find all the workouts in the database ', async () => {
            await api.post('/exercises').send(exercises[0]);
            await api.post('/exercises').send(exercises[1]);

            const exerciseRes = await api.get('/exercises');



            expect(exerciseRes.statusCode).toEqual(200);
            expect(exerciseRes.headers['content-type']).toEqual(expect.stringContaining('json'));
            expect(exerciseRes.body.length).toEqual(2);


        });

    });

});

