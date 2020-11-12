import React from "react";
export default class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul id="menu">
          <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
