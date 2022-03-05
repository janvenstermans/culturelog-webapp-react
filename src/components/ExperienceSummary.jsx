import React from 'react'

const ExperienceSummary = ({experience}) => {
    const {type, medium, name, date} = experience;
    return (<div style={{display:'flex'}}>
        <div>{type}</div>
        <div>{medium}</div>
        <div>{name}</div>
        <div>{date}</div>
    </div> );
}

export default ExperienceSummary;