const locations = require("./locationData.js");
const csv = require("csv-parser");
const fs = require("fs");
const { count } = require("console");
const { compileFunction } = require("vm");
const usData = [];
var start_time = new Date().getTime() / 1000;
points = {};
totalCases = 0;
// UsArea=154	# I just took a rough sample of (45,-114) to(36,-100)
const topleftx = 36.0,
  toplefty = 45.0,
  bottomrightx = -114,
  bottomrighty = -100.0;

const number_of_iteration = 100;
const number_of_cluster = 2; // K

fs.createReadStream("us-counties.csv")
  .pipe(csv())
  .on("data", (data) => usData.push(data))
  .on("end", () => {
    locations.map((location, index) => {
      var coordinate = location.Location.split(",");
      const transCoord = [];
      transCoord.push(parseFloat(coordinate[0]));
      transCoord.push(parseFloat(coordinate[1]));

      if (
        !(
          topleftx <= transCoord[0] &&
          transCoord[0] <= toplefty &&
          bottomrightx <= transCoord[1] &&
          transCoord[1] <= bottomrighty
        )
      ) {
      } else {
        points[location.CountyGeoId] = [transCoord, 0];
      }
    });

    usData.map((county) => {
      if (county.date === "2020-02-07") {
        if (points.hasOwnProperty(county.fips))
          points[county.fips][1] -= parseInt(county.cases);
      }
      if (county.date === "2020-09-05") {
        // console.log(county);
        if (points.hasOwnProperty(county.fips)) {
          points[county.fips][1] += parseInt(county.cases);
          if (points[county.fips][1] < 0) {
            points[county.fips][1] = 0;
          }
          totalCases += points[county.fips][1];
        }
      }
    });
    //

    console.log("Reading Data completed.");
    console.log(
      "Time taken",
      new Date().getTime() / 1000 - start_time,
      "seconds."
    );
    console.log("Total cases:", totalCases);
    console.log("Total counties considered:", Object.keys(points).length);
  });
