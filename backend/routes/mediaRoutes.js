const express = require('express');
const {getMedia, createMedium, getMedium, updateMedium, deleteMedium} = require('../controllers/mediaController');
const router = express.Router();

router.route('/').get(getMedia).post(createMedium);
router.route('/:id').get(getMedium).put(updateMedium).delete(deleteMedium);

module.exports = router
