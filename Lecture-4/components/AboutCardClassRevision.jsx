
import React from "react"

class AboutCardClassRevision extends React.Component{
   
    //this class has constructor which receive the props
     constructor(props){
     
        //why super props is used?
        super(props);
        // console.log(props);

        //creating state variable
        //all the state variable are declared in this whole big object ie this.state
          this.state={
        //   count:6,
          userInfo:{
            name:"Dummy Name",
            bio:"Dummy Bio",
            location:"Dummy Location",
            avatar_url:"http://dummy-photo.com"
          }
          
        };
        //  console.log(this.props.name+" child constructor called!");

     }
   

     
async componentDidMount(){
//   console.log(this.props.name+" Child componentDidMount");
  //Note: componentDidMount is used to make API calls
   const data=await fetch("https://api.github.com/users/DEEPAK1164");
   const json=await data.json();
   this.setState({
    userInfo:json,
   })
   
}
componentDidUpdate(prevProps,prevState){
   
    this.timer=setInterval(()=>{
        console.log("Hello everyone!");
    },1000);


     //console.log(this.props.name+" Child componentDidUpdate")
}

componentWillUnmount(){
    //console.log(this.props.name+" Child componentWillUnmount")
    //componentWillUnmount used for cleanup the component befor leave the page
    clearInterval(this.timer);
}

    //this class has render method inside it which returns some piece of jsx which get displayed on UI
    render(){
       //console.log(this.props.name+" Child Render Called!");
        

        return (<div className='user-card'>


         {/* <h1>Count={this.state.count}</h1> */}
         {/* <button onClick={()=>{
            //we cant update state variables directly like below
             //this.state.count=this.state.count+1;

             //so react give important fn this.setState() in which we pass an object which contains updated value of state ariable  which can be used anywhere inside the class
            //    this.setState({
            //     count:this.state.count+1
            //    })
         }}>Count Increase</button> */}

       <img alt="profile-pic" src={this.state.userInfo.avatar_url} />

        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Bio: {this.state.userInfo.bio}</h4>
    </div>)
    }
}

export default AboutCardClassRevision;