const asyncHandler = require('express-async-handler')
const Medium = require('../models/mediumModel');

const getMedia = asyncHandler(async (req, res) => {
    const types = await Medium.find();
    res.status(200).json(types);
})
const createMedium = asyncHandler(async (req, res) => {
    const {body} = req;
    if (!body.name) {
        res.status(400)
        throw new Error('name required');
    }
    const experience = await Medium.create({
        name: body.name
    });
    res.status(201).json(experience);
})
const getMedium = asyncHandler(async (req, res) => {
    const experience = await Medium.findById(req.params.id);
    res.status(200).json(experience);
})
const updateMedium = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const experience = await Medium.findById(id);
    if (!experience) {
        res.status(400)
        throw new Error(`no experience with id ${id}`)
    }
    const updatedMedium = await Medium.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).json(updatedMedium);
})
const deleteMedium = asyncHandler(async (req, res) => {
    const experience = await Medium.findByIdAndDelete(req.params.id);
    res.status(200).json(experience);
})

module.exports = {getMedia, createMedium, getMedium, updateMedium, deleteMedium};