import React from 'react'
import AboutCard from './AboutCard'
import AboutCardClass from './AboutCardClass'

const About = () => {
  return (
    <div>
      This is About Page!
      <AboutCard name="Deepak fn" city="Balrampur fn" contactNumber="7395062924 fn" />
      <p>..................................................</p>
      <AboutCardClass name="Deepak class" city="Balrampur class" contactNumber="7395062924 class"/>
    </div>
  )
}

export default About
