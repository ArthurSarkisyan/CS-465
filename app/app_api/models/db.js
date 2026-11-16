const mongoose = require('mongoose');

const host = '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

// Connect to MongoDB
const connect = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log(`Mongoose connected to ${dbURI}`);
    } catch (err) {
        console.error('Mongoose connection error:', err);
    }
};

connect();

// Handle MongoDB disconnection
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

// Handle MongoDB errors
mongoose.connection.on('error', (err) => {
    console.error('Mongoose database error:', err);
});

// Close MongoDB connection when application stops
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});

// Register the Trip model
require('./travlr');

// Export the database connection
module.exports = mongoose.connection;