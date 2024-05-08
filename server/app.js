// app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const connectDB = require("./db/connect");

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Server Error' });
});

// Not found middleware
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not Found' });
});

const PORT = process.env.PORT || 5000;

const initServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};
initServer();