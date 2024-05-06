const express = require('express')
const router = express.Router()
const {getAllNews, editEvent, addEvent, removeEvent} = require('../controllers/newsletter')

router.route('/').get(getAllNews).post(addEvent)
router.route('/:id').put(editEvent).delete(removeEvent)

module.exports = router;