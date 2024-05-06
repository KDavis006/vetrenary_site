const express = require('express');
const router = express.Router();

// For User
const { createUser, findUser } = require('./controllers/userController');
router.get('/users', findUser);
router.post('/users', createUser);

// For Newsletter
const { addEvent, editEvent, removeEvent, getAllNews } = require('./controllers/newsletterController');
router.get('/newsletter', getAllNews);
router.post('/newsletter', addEvent);
router.put('/newsletter/:id', editEvent);
router.delete('/newsletter/:id', removeEvent);

// For Class
const { addClass, editClass, removeClass, getClass } = require('./controllers/classController');
router.get('/class', getClass);
router.post('/class', addClass);
router.put('/class/:id', editClass);
router.delete('/class/:id', removeClass);

// For Animals
const { addAnimal, editAnimal, removeAnimal, getAllAnimals } = require('./controllers/animalController');
router.get('/animals', getAllAnimals);
router.post('/animals', addAnimal);
router.put('/animals/:id', editAnimal);
router.delete('/animals/:id', removeAnimal);

module.exports = router;
