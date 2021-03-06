const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const routes = require('./routes')
// const cors = require("cors")
const history = require('connect-history-api-fallback');

const PORT = process.env.PORT || 5000
const app = express()

// app.use(cors())
app.use(history());

app.use(express.static('dist'))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/GameOfThronesDB', {
        useNewUrlParser: true
    }
);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT)
})