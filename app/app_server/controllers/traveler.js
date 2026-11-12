
const fs = require('fs');

/* GET travel page */
const travel = (req, res) => {
  // Read trip information from the JSON file
  const trips = JSON.parse(
    fs.readFileSync('./app_server/data/trips.json', 'utf8')
  );

  // Render the travel page with trip data
  res.render('travel', {
    title: 'Travlr Getaways',
    trips: trips
  });
};

module.exports = {
  travel
};