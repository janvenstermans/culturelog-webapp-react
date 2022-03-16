const asyncHandler = require('express-async-handler')
const Experience = require('../models/experienceModel');

const getExperiences = asyncHandler(async (req, res) => {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
})
const createExperience = asyncHandler(async (req, res) => {
    const {body} = req;
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
    const experience = await Experience.findById(req.params.id);
    res.status(200).json(experience);
})
const updateExperience = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const experience = await Experience.findById(id);
    if (!experience) {
        res.status(400)
        throw new Error(`no experience with id ${id}`)
    }
    const updatedExperience = await Experience.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).json(updatedExperience);
})
const deleteExperience = asyncHandler(async (req, res) => {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    res.status(200).json(experience);
})

module.exports = {getExperiences, createExperience, getExperience, updateExperience, deleteExperience};