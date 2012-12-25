# bikesy
get bike directions form the bikesy.com api

## usage

    var bikesy = require('bikesy')

    var origin = {lat: 37.79099655151367, lon: -122.39909362792969}
    var destination = {lat: 37.78794572301525, lon: -122.40700721740723}


    bikesy(
      origin,
      destination,
      function (err, result) {
        console.log(result)
      }
    )


Returns an object that looks like

    { steps:
       [ { direction: 'start northwest',
           location: '1st Street',
           lat: 37.79099655151367,
           lon: -122.39909362792969 },
         { direction: 'left',
           location: 'Market Street',
           lat: 37.79106903076172,
           lon: -122.39918518066406 }, ],
      totalElevation: 0,
      totalDistance: 26.358399790548397 }


## installation
from npm

    $ npm install bikesy

## license
MIT. (c) 2012 jden - Jason Denizac <jason@denizac.org>. http://jden.mit-license.org/2012

## contact
github: jden
email: jason@denizac.org
freenode irc: jden
twitter: @lejden
