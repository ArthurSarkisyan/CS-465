const Trip = require('../models/travlr');

// Retrieve all trips from MongoDB
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});

        return res.status(200).json(trips);
    } catch (err) {
        console.error('Error retrieving trips:', err);

        return res.status(500).json({
            message: 'Error retrieving trip data'
        });
    }
};

module.exports = {
    tripsList
};