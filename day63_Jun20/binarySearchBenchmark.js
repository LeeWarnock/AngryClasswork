'use strict';

// Benchmark is a library that times 
var Benchmark = require('benchmark'),
 stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514],
 random_value = stuff[ Math.ceil( Math.random() * 14 ) ];

// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite

  // Add the function 'linear_search' to the suite.
var result = binarySearch( [1,23,43,56,77,89,211,212,789,972,1001,4567,4599,83784], 77        );

console.log( result );

function binarySearch(stuff, searchElement) {

    // Set some starting values.
    var minIndex = 0,
        maxIndex = stuff.length - 1,
        currentIndex,
        currentElement;


    // This is the main loop.
    while (minIndex <= maxIndex) {


        // Get a position near the middle.
        currentIndex = Math.floor( (minIndex + maxIndex) / 2 );

        // Get that element.
        currentElement = stuff[currentIndex];


        // Test it.
        if (currentElement < searchElement) {
            //if it's less than we are looking for, look *above* this value.
            minIndex = currentIndex + 1;

        }


        else if (currentElement > searchElement) {

            // If it's more than we are looking for, look *below* this value.
            maxIndex = currentIndex - 1;

        }

        else {

            // We found it; return the index.
            return currentIndex;

        }

    }

    return false;

}

  // On 'start', run the 'start' function.
  .on('start', function start () {
    console.log('Beginning benchmark...');
  })

  // On the 'complete' event, run the 'report' function.
  .on('complete', function report () {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, 'successful')[0];

    console.log('On average, ' + benchmark.name + ' took ' + benchmark.stats.mean + ' seconds to complete.');
  })

  // Run the test!
  .run();
