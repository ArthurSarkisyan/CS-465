/* GET travel page */
const travel = async (req, res) => {
  try {
    // Retrieve trip information from the API
    const response = await fetch('http://localhost:3000/api/trips');

    if (!response.ok) {
      throw new Error('Unable to retrieve trips');
    }

    const trips = await response.json();

    // Render the travel page with trip data
    res.render('travel', {
      title: 'Travlr Getaways',
      trips: trips
    });

  } catch (err) {
    console.error('Error retrieving trips:', err);

    res.status(500).send('Unable to load travel information');
  }
};

module.exports = {
  travel
};