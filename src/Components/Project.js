import React from "react";
export default class Project extends React.Component {
  render() {
    const image = this.props.imageURL;
    return (
      <div className="project dark window">
        <h3>{this.props.title}</h3>
        <img src={image} alt={this.props.alt} width="80%" />
        <a href={this.props.liveLink} target="_blank" rel="noreferrer">
          Live Link
        </a>
        <p>Tech Stack: {this.props.stack}</p>
        <p>Who this app is for: {this.props.whoFor}</p>
        <p>Description:</p>
        <p>{this.props.description}</p>
        <p>Purpose:</p>
        <p>{this.props.purpose}</p>
        <div>
          <a href={this.props.gitLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" / "}
          <a href={this.props.apiLink} target="_blank" rel="noreferrer">
            API
          </a>
        </div>
        <p>Technology used: {this.props.technology}</p>
      </div>
    );
  }
}
