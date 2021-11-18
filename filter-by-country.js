const through2 = require("through2");

//filtering records match by country
module.exports = {
    filterByCountry : (country) => {
        return through2.obj((buf, enc, next) => {
            if (buf.country == country){
                return next(null, buf);
            }
            return next();
        });
    }
}