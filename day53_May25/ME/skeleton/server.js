/* Scraper Template  (18.10)
 * ========================= */


// Students: Using this skeleton, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save it in a result array, and log it to the console.


// Dependencies:
var request = require('request'); // Snatches html from urls
var cheerio = require('cheerio'); // Scrapes our html

console.log("\n******************************************\n" +
            "Reads title and img link from reddit EDC \n" +
on            "\n******************************************\n")

// Make a request call to grab the html body from the site of your choice
// Notice: the page's html gets saved as the callback's third arg
request('https://www.reddit.com/r/EDC/', function (error, response, html) {

	// Load the html into cheerio and save it to a var.
  // '$' becomes a shorthand for cheerio's selector commands,
  //  much like jQuery's '$'.
  var $ = cheerio.load(html);

  // an empty array to save the data that we'll scrape
  var result = [];

  // Select each instance of the html body that you want to scrape.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works.
  $('p.title').each(function(i, element){

    // Scrape information from the web page, put it in an object
    // and add it to the result array.

      var title = $(this).text();
      var link = $(element).children().attr('href');

      result.push({
        title:title,
        link:link
      });

    });
  console.log(result);
});
