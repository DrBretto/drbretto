import React from "react";
import NavBar from "./NavBar";

import profilePic from "../images/drbretto.jpg";

export default class Header extends React.Component {
  render() {
    return (
      <div className="topBar">
        {/* <img src={profilePic} alt={"DrBretto"} width="100px"/> */}
        <h1>Brett Westerlund - Full Stack Software Engineer</h1>
        <NavBar></NavBar>
        <iframe
         
          width="400px"
          height="300px"
          title="quick introduction"
          src="https://youtube.com/embed/1UExypQQCK8"
        >
          {" "}
        </iframe>
      </div>
    );
  }
}
