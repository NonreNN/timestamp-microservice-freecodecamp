const moment = require('moment');
const express = require('express');
const app = express();

//  "unix": 1450137600, "natural": "December 15, 2015"

app.get('/', function (req, res) {
    res.json({unix : null , natural: null});
});

app.get('/:date', function (req, res) {
    if (req.params.date.length == 10) {
        let unixToNatural = moment.unix(req.params.date).format('MMMM DD, YYYY');
        let naturalToUnix = moment(unixToNatural, 'MMMM D, YYYY').format('X');
        res.json({unix : naturalToUnix , natural: unixToNatural });
    } else {
        let naturalToUnix = moment(req.params.date, 'MMMM D, YYYY').format('X');
        let unixToNatural = moment.unix(naturalToUnix).format('MMMM DD, YYYY');
        res.json({unix : naturalToUnix , natural: unixToNatural });
    }
});

app.listen(3000);
