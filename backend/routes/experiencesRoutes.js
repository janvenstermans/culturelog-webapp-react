const express = require('express');
const {getExperiences, createExperience, getExperience, updateExperience, deleteExperience} = require('../controllers/experiencesController');
const router = express.Router();

router.route('/').get(getExperiences).post(createExperience);
router.route('/:id').get(getExperience).put(updateExperience).delete(deleteExperience);

module.exports = router
