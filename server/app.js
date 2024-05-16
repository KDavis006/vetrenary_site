const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const connectDB = require("./db/connect");
const userRoute = require('./routes/people-controller')
const animalRoute = require('./routes/animal-controller')

// Middleware
app.use(bodyParser.json());
require('dotenv').config({path: './server/.env'})

// For User

app.use('/users', userRoute);
app.use('/animals', animalRoute)

// // For Newsletter
// const { addEvent, editEvent, removeEvent, getAllNews } = require('./routes/controllers/newsletterController');
// router.get('/newsletter', getAllNews);
// router.post('/newsletter', addEvent);
// router.put('/newsletter/:id', editEvent);
// router.delete('/newsletter/:id', removeEvent);

// // For Class
// const { addClass, editClass, removeClass, getClass } = require('./routes/class-controller');
// router.get('/class', getClass);
// router.post('/class', addClass);
// router.put('/class/:id', editClass);
// router.delete('/class/:id', removeClass);

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, error: 'Server Error' });
// });

// // Not found middleware
// app.use((req, res) => {
//   res.status(404).json({ success: false, error: 'Not Found' });
// });

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