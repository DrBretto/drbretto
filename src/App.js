import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Project from "./Components/Project";

import dividend from "./images/dividend.jpg";
import battleship from "./images/battleship.jpg";

function App() {
  return (
    <div className="App light">
      <div className="topBar">
        <Header></Header>
      </div>

      <Intro id="about"></Intro>

      <div id="projects">
        <h2>Projects:</h2>

        <Project
          title="Space Battleship!"
          link="https://github.com/mloldacre/battleship-jmkbh"
          linkText="GutHub Link"
          imageURL={battleship}
          alt="Dividend Calculator preview"
          description="Goal was to design and deploy a fully-featured web app as a part of a team. Space Battleship is a new take on the classic Battleship board game.. in space! Features original music and sound effects, online multiplayer and adaptive, neural network based AI.
          My responsibilities were to design the back-end game logic to meet our current goals as well as set up a framework for adding additional features."
          stack="Full-Stack"
          technology="React, PostrgreSQL, Node"
        ></Project>

        <Project
          title="Dividend Calculator"
          link="https://github.com/DrBretto/dividend-calculator-app"
          linkText="GutHub Link"
          imageURL={dividend}
          alt="Dividend Calculator preview"
          description="Full-Stack application built from the ground up for Thinkful - Allows the user to calculate dividend allocation and save portfolios. This was a solo full-stack project with proper authentication and database setup."
          stack="Full-Stack"
          technology="React, PostrgreSQL, Node"
        ></Project>

        <div className="project dark window">
          <h3>Bonus project: Minecraft Neural Network!</h3>

          <iframe
            title="Minecraft brain"
            width="80%"
            src="https://www.youtube.com/embed/9ucrTAKL3PM"
          ></iframe>

          <p>Tech Stack: Placeholder</p>

          <p>
            This is a fully functioning image recognition neural network modeled
            in Minecraft. It's based on how our own brains recognize images. It
            will "read" what's on the input (retina) and make a guess as to
            which digit is written. For the most part, it will work with just
            about any numerical digit that you will visually recognize.
          </p>
          <p>
            Reverse engineered from{" "}
            <a href="https://github.com/celiasmith/mind_field_stilwell_brain">
              this source code
            </a>{" "}
            and originally written for an episode of YouTube Premium's
            MindField.
          </p>
        </div>
      </div>

      <h2 id="contact">Contact me:</h2>

      <Footer></Footer>
    </div>
  );
}

export default App;
