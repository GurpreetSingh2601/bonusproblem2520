const through2 = require("through2");
let profit = 0

module.exports = {
    sumProfit : () => {
        return through2.obj((buf, enc, next) => {
            profit = profit + parseFloat(buf.profit);
            next()
        }, (cb) => {                    //flush function
            cb(null, ' The total is : $'+ profit.toFixed(2));
        });
    }
}