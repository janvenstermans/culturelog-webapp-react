import React from 'react';
import ExperienceSummary from './ExperienceSummary';

const Experiences = ({experiences}) => {
    return <>
    {experiences.map(experience => 
        <ExperienceSummary key={experience.id} experience={experience}></ExperienceSummary>
    )}
    </>  
}

export default Experiences;