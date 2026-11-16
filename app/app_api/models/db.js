const mongoose = require('mongoose');

const host = '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;

const connect = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log(`Mongoose connected to ${dbURI}`);
    } catch (err) {
        console.error('Mongoose connection error:', err);
    }
};

connect();

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});

require('./travlr');
module.exports = mongoose.connection;