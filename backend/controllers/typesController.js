const asyncHandler = require('express-async-handler')
const Type = require('../models/typeModel');

const getTypes = asyncHandler(async (req, res) => {
    const types = await Type.find();
    res.status(200).json(types);
})
const createType = asyncHandler(async (req, res) => {
    const {body} = req;
    if (!body.name) {
        res.status(400)
        throw new Error('name required');
    }
    const experience = await Type.create({
        name: body.name
    });
    res.status(201).json(experience);
})
const getType = asyncHandler(async (req, res) => {
    const experience = await Type.findById(req.params.id);
    res.status(200).json(experience);
})
const updateType = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const experience = await Type.findById(id);
    if (!experience) {
        res.status(400)
        throw new Error(`no experience with id ${id}`)
    }
    const updatedType = await Type.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).json(updatedType);
})
const deleteType = asyncHandler(async (req, res) => {
    const experience = await Type.findByIdAndDelete(req.params.id);
    res.status(200).json(experience);
})

module.exports = {getTypes, createType, getType, updateType, deleteType};