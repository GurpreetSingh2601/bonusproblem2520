const fs = require('fs');
const parse = require('csv-parse');
const { filterByCountry } = require('./filter-by-country.js');
const { sumProfit } = require('./sum-profit.js');
const zlib = require('zlib');

const csvParser = parse({ columns: true })

fs.createReadStream('data.csv.gz')
    .pipe(zlib.createGunzip())
    .pipe(csvParser)
    .pipe(filterByCountry('Italy'))
    .pipe(sumProfit())
    .pipe(process.stdout)
