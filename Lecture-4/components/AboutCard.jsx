import React, { useState } from 'react'

const AboutCard = (props) => {

    const [count]=useState(6);
    const [count2]=useState(7);

  return (
    <div className='user-card'>
       <h1>Count={count}</h1>
       <h1>Count2={count}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: {props.city}</h3>
        <h4>Contact: {props.contactNumber}</h4>
    </div>
  )
}

export default AboutCard
