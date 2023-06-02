const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: () => true }));

// ... everything we have above goes here ...
//Request Data Transformation
app.use((req, res, next) => {
    if (/\/xml$/.test(req.headers['content-type'])) {
        req.body = parser.toJson(req.body.toString(), { object: true });
    }
    next();
});

//Response Data Transformation
app.use(mung.json((body, req, res) => {
    if (/\.xml$/.test(req.url)) {
        return parser.toXml(body);
    }
}));

app.use(mung.headers((req, res) => {
    if (/\.xml$/.test(req.url)) {
        res.set('Content-Type', 'text/xml');
    }
}));