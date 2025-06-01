import React from 'react'
import AboutCardClass from './AboutCardClass'


class About extends React.Component{

constructor(props){
  super(props);

// console.log("parent constructor called!");
}

componentDidMount(){
  // console.log("Parent componentDidMount");


}


    render(){
      // console.log("Parent Render Called!");


      return(
        <div>
     
      <AboutCardClass name="Deepak class" city="Balrampur class" contactNumber="7395062924 class"/>
      {/* <AboutCardClass name="Alok class" city="Balrampur class" contactNumber="7395062924 class"/> */}
    </div>
      )
    }
}



export default About
