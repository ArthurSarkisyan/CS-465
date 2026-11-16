const mongoose = require('mongoose');
const Trip = require('./travlr');
const trips = require('../../app_server/data/trips.json');

const dbURI = 'mongodb://127.0.0.1/travlr';

const seedDatabase = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log(`Mongoose connected to ${dbURI}`);

        // Remove existing trip records
        await Trip.deleteMany({});

        // Insert the sample trips
        await Trip.insertMany(trips);

        console.log(`${trips.length} trips added successfully`);
    } catch (err) {
        console.error('Database seeding error:', err);
        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
        console.log('Mongoose disconnected');
    }
};

seedDatabase();