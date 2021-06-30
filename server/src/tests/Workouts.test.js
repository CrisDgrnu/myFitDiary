const supertest = require('supertest');
const app = require('../App');

const db = require('mongoose');
const Workout = require('../api/models/Workout');

const api = supertest(app);

const users = [
    {
        username: "Cfres_",
        name: "Cristian",
        surname: "De Gracia Nuero",
        age: 26,
        weight: 68.5,
        email: "cristian123@gmail.com",
        password: "1234"
    },
];

const workouts = [
    {
        name: "Frontlever",
        exercises: [
            {
                name: "Pull Up",
                exercise_id: "60d469639f59ee085b28327"
            },
            {
                name: "Push Up",
                exercise_id: "60d469639f59ee085b28326"
            }
        ]
    },
    {
        name: "Backlever",
        exercises: [
            {
                name: "Pull Up",
                exercise_id: "60d469639f59ee085b28327"
            },
            {
                name: "Push Up",
                exercise_id: "60d469639f59ee085b28326"
            }
        ]
    },
    {
        name: "Full Planche",
        exercises: [
            {
                name: "Pull Up",
                exercise_id: "60d469639f59ee085b28327"
            },
            {
                name: "Push Up",
                exercise_id: "60d469639f59ee085b28326"
            }
        ]
    }
];

beforeEach(async () => {
    await Workout.deleteMany({});
});

describe('POST', () => {

    describe('Data is ok', () => {

        test('Workout is created succesfully ', async () => {
            const userRes = await api.post('/users').send(users[0]);
            const id = userRes.body.id;
            const workoutRes = await api.post(`/workouts/${id}`).send(workouts[0]);

            const createdWorkout = workoutRes.body;

            expect(workoutRes.statusCode).toEqual(201);

            expect(createdWorkout.exercises.length).toEqual(2);
            expect(createdWorkout.creator).toEqual(id);


            expect(workoutRes.headers['content-type']).toEqual(expect.stringContaining('json'));

        });

    });

});


describe('GET', () => {

    describe('Data is ok', () => {

        test('Find all the workouts of a user by its given id', async () => {
            const userRes = await api.post('/users').send(users[0]);
            const id = userRes.body.id;
            workouts.forEach(async (workout) => await api.post(`/workouts/${id}`).send(workout));

            const workoutsRes = await api.get(`/workouts/${id}`);
            const foundWorkouts = workoutsRes.body;

            expect(workoutsRes.statusCode).toEqual(200);
            expect(foundWorkouts.length).toEqual(3);
            expect(foundWorkouts[1].name).toEqual('Backlever');
        });

    });

});