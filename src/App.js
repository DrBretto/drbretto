import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Project from "./Components/Project";

import dividend from "./images/dividend.jpg";
import battleship from "./images/BattleshipAI.gif";
import wordistry from "./images/wordistry.jpg";

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
          liveLink="https://spacebattleship.vercel.app/"
          gitLink="https://github.com/mloldacre/battleship-jmkbh"
          apiLink="https://github.com/mloldacre/battleship-server-jmkbh"
          imageURL={battleship}
          alt="Space Battleship"
          whoFor="People who like board games, video games and Artificial Intelligence"
          description="Space Battleship is a new take on the classic Battleship board game.. in space! 
          Features original music and sound effects, online multiplayer and adaptive, neural network based AI.
          Goal was to design and deploy a fully-featured web app as a part of a team. 
          My responsibilities were to design the back-end game logic to meet our current goals as well as set up a 
          framework for adding additional features."
          stack="Full-Stack"
          technology="React, PostrgreSQL, Node"
        ></Project>

        <Project
          title="Dividend Calculator"
          liveLink="https://dividend-calculator-app.vercel.app/"
          gitLink="https://github.com/DrBretto/dividend-calculator-app"
          apiLink="https://github.com/DrBretto/dividend-calculator-api"
          imageURL={dividend}
          alt="Dividend Calculator preview"
          whoFor="Investors looking to experiment with different dividend portfolios"
          description="Full-Stack application built from the ground up for Thinkful - Allows the user to 
          calculate dividend allocation and save portfolios. 
          This was a solo full-stack project with proper authentication and database setup."
          stack="Full-Stack"
          technology="React, PostrgreSQL, Node"
        ></Project>

        <Project
          title="Wordistry"
          liveLink="https://spaced-repetition-matthew-brett-client.vercel.app/"
          gitLink="https://github.com/thinkful-ei-quail/spaced-repetition-matthew-brett-client"
          apiLink="https://github.com/thinkful-ei-quail/spaced-repetition-matthew-brett-api"
          imageURL={wordistry}
          alt="Wordistry"
          whoFor="Anyone who wants to learn a new language"
          description="Wordistry is a spaced repetition learning app. The app will ask you to translate words from
          your language of choice. Words you answer correctly bubble back to the top of the list. Words you struggle
          with come up more often.
          
          This project was intended to demonstrate an understanding of algorithms and data structures."
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
