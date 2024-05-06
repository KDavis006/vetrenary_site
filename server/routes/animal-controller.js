const express = require('express')
const router = express.Router()
const {getAllAnimals, editAnimal, addAnimal, removeAnimal, getAnimal} = require('../controllers/animals')

router.route('/').get(getAllAnimals).post(addAnimal)
router.route('/:id').get(getAnimal).put(editAnimal).delete(removeAnimal)

module.exports = router;