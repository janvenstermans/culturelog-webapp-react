const asyncHandler = require('express-async-handler')
const Experience = require('../models/experienceModel');

const experiences = [{id:1, type: 'film', medium:'DVD', name: 'Mephisto', date:'1.3.2022'},
{id:2, type: 'theater', medium:'Pedrolino', name: 'Pierke', date:'5.3.2022'}];

const getExperiences = asyncHandler(async (req, res) => {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
})
const createExperience = asyncHandler(async (req, res) => {
    const {body} = req;
    console.log('create experience', body)
    if (!body.name) {
        res.status(400)
        throw new Error('name required');
    }
    const experience = await Experience.create({
        name: body.name
    });
    res.status(201).json(experience);
})
const getExperience = asyncHandler(async (req, res) => {
    const {id} = req.params;
    res.status(200).json(experiences);
})
const updateExperience = asyncHandler(async (req, res) => {
    const {id} = req.params;
    res.status(200).json(experiences);
})
const deleteExperience = asyncHandler(async (req, res) => {
    const {id} = req.params;
    res.status(200).json(experiences);
})

module.exports = {getExperiences, createExperience, getExperience, updateExperience, deleteExperience};