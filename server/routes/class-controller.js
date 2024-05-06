const express = require('express')
const router = express.Router()
const {getClass, addClass, editClass, removeClass} = require('../controllers/class')

router.route('/').get(getClass).post(addClass)
router.route('/:id').put(editClass).delete(removeClass)

module.exports = router;