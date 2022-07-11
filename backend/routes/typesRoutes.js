const express = require('express');
const {getTypes, createType, getType, updateType, deleteType} = require('../controllers/typesController');
const router = express.Router();

router.route('/').get(getTypes).post(createType);
router.route('/:id').get(getType).put(updateType).delete(deleteType);

module.exports = router
