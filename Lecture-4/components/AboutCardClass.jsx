// AboutCardClass.js
import React from "react";


class AboutCardClass extends React.Component {
  // Constructor receives props and initializes state
  constructor(props) {
    super(props); // Must call super() to access 'this' in constructor

    // Initial dummy state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        bio: "Dummy Bio",
        location: "Dummy Location",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  // Lifecycle method to fetch real user data after component mounts
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/DEEPAK1164");
    const json = await data.json();

    // Update state with fetched data
    this.setState({
      userInfo: json,
    });
  }

  // This method runs after state or props update
  componentDidUpdate(prevProps, prevState) {
    // Setting up an interval to simulate background work
    this.timer = setInterval(() => {
      console.log("Hello everyone!");
    }, 1000);
  }

  // Clean up any side effects like timers before component unmounts
  componentWillUnmount() {
    clearInterval(this.timer); // Clean up the interval
  }

  // Render method returns JSX UI
  render() {
    return (
      <div className="user-card">
        {/* Avatar Image */}
        <img
          className="avatar"
          alt="profile-pic"
          src={this.state.userInfo.avatar_url}
        />

        {/* User Info */}
        <div className="info">
          <h2>Name: {this.state.userInfo.name}</h2>
          <h3>Location: {this.state.userInfo.location}</h3>
          <h4>Bio: {this.state.userInfo.bio}</h4>
        </div>
      </div>
    );
  }
}

export default AboutCardClass;
