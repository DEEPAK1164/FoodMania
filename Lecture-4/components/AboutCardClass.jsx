
import React from "react"

class AboutCardClass extends React.Component{
   
    //this class has constructor which receive the props
     constructor(props){

        //why super props is used?
        super(props);
        console.log(props);
     }
   


    //this class has render method inside it which returns some piece of jsx which get displayed on UI
    render(){
        return (<div className='user-card'>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.city}</h3>
        <h4>Contact: {this.props.contactNumber}</h4>
    </div>)
    }
}

export default AboutCardClass;