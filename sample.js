var bikesy = require('./index')

var origin = {lat: 37.79099655151367, lon: -122.39909362792969}
var destination = {lat: 37.78794572301525, lon: -122.40700721740723}


bikesy(
  origin,
  destination,
  function (err, result) {
    console.log(result)
  }
)