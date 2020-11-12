import React from "react";
export default class Project extends React.Component {
  render() {
    console.log(this.props);

    const image=this.props.imageURL
    return (
      <div className="project dark window">
        <h3>{this.props.title}</h3>
        <a href={this.props.link}>{this.props.linkText}</a>
        <img src={this.props.image} alt={this.props.alt} width="100%" />
        <p>Tech Stack: {this.props.stack}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

/*

http://localhost:3000/images/dividend.jpg

          title="Dividend Calculator"
          link="https://github.com/DrBretto/dividend-calculator-app"
          linkText="GutHub Link"
          image="../images/dividend.jpg"
          alt="Dividend Calculator preview"
          description="description"
          stack="Full Stack"
          technology="React, PostrgreSQL, Node"
*/
