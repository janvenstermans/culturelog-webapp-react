import React, {useState} from 'react';
import ExperienceSummary from './ExperienceSummary';

const Experiences = () => {
    const [experiences, setExperiences] = useState([
        {id:1, type: 'film', medium:'DVD', name: 'Mephisto', date:'1.3.2022'},
        {id:2, type: 'theater', medium:'Pedrolino', name: 'Pierke', date:'5.3.2022'},
      ]);
    return <>
        <div className='list-group'>

        {experiences.map(experience => 
            <ExperienceSummary key={experience.id} experience={experience}></ExperienceSummary>
            )}
        </div>
    </>  
}

export default Experiences;