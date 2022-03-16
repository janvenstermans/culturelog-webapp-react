const asyncHandler = require('express-async-handler')
const experiences = [{id:1, type: 'film', medium:'DVD', name: 'Mephisto', date:'1.3.2022'},
{id:2, type: 'theater', medium:'Pedrolino', name: 'Pierke', date:'5.3.2022'}];

const getExperiences = async (req, res) => {
    res.status(200).json(experiences);
}
const createExperience = (req, res) => {
    const {body} = req;
    console.log('create experience', body)
    if (!body.name) {
        res.status(400)
        throw new Error('name required');
    }
    res.status(201).json(experiences);
}
const getExperience = (req, res) => {
    const {id} = req.params;
    res.status(200).json(experiences);
}
const updateExperience = (req, res) => {
    const {id} = req.params;
    res.status(200).json(experiences);
}
const deleteExperience = (req, res) => {
    const {id} = req.params;
    res.status(200).json(experiences);
}

module.exports = {getExperiences, createExperience, getExperience, updateExperience, deleteExperience};