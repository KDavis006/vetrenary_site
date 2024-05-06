const express = require('express')
const router = express.Router()
const {findUser, createUser} = require('../controllers/people')

router.route('/').post(createUser)
router.route('/:id').get(findUser)

module.exports = router;