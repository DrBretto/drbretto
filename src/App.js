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

      {/* <Intro id="about"></Intro> */}

      <div id="projects">
        <h2>Projects:</h2>

        <Project
          title="Dividend Calculator"
          liveLink="https://dividend-calculator-app.vercel.app/"
          gitLink="https://github.com/DrBretto/dividend-calculator-app"
          apiLink="https://github.com/DrBretto/dividend-calculator-api"
          imageURL={dividend}
          alt="Dividend Calculator preview"
          whoFor="Investors looking to experiment with different dividend portfolios"
          description="A dividend strategy calculator. Allows the user to 
          calculate dividend allocation strategies and save portfolios to a server securely."
          purpose="This project was intended to be a complete, full stack project built from the ground up. It demonstrates good coding practices and structure."
          stack="Full-Stack"
          technology="React, PostrgreSQL, Node"
        ></Project>

        <Project
          title="Space Battleship!"
          liveLink="https://spacebattleship.vercel.app/"
          gitLink="https://github.com/mloldacre/battleship-jmkbh"
          apiLink="https://github.com/mloldacre/battleship-server-jmkbh"
          imageURL={battleship}
          alt="Space Battleship"
          whoFor="People who like board games, video games and Artificial Intelligence"
          purpose="This project was to demonstrate teamwork. It was an exercise meant to emulate an agile development cycle. 

           My responsibilities were to architect the back-end game logic to meet our current goals as well as set up a 
           framework for adding additional features. I also ended up taking over most of the interactive pieces on the front 
           end, and designed a neural network from scratch, in javascript so I would have to write it from understanding 
           instead of copying and pasting. Unfortunately, the bot is unplayable publicly due to issues that arise from 
           writing it in a language that's not meant for it. It was, however, an amazing experience when I got it to work. 
           It will beat randomly generated moves within a simulated game or two about 85% of the time. After around 10,000 games, it will 
           win up to 99.7% and challenge human intelligence. "
          description="Space Battleship is a new take on the classic Battleship board game.. in space! 
          Features original music and sound effects, online multiplayer and adaptive, neural network based AI (pictured above). 
          The project itself is quite small, but was produced from planning to completion with 5 strangers in 3 weeks. 
          I was particularly enthusiastic and that infected the whole group. Everyone brought their A-game and
           we had an absolute blast completing it.  
  
          "
          stack="Full-Stack"
          technology="React, PostrgreSQL, Node"
        ></Project>

        {/* <Project
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
        ></Project> */}

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
            will "read" what's on the input like a retina and make a guess as to
            which digit is written. For the most part, it will work with just
            about any numerical digit that you will visually recognize.
          </p>
          <p>
            I found this to be the best way to learn the inner workings of a neural network.
            It took over 300 hours of hand placing every piece. I spent the time contemplating
            the networks from every angle. Dreamt of all the ways I could use these principles 
            to solve unsolvable problems. A purpose was born. 
          </p>
          <p>
            Reverse engineered from{" "}
            <a href="https://github.com/celiasmith/mind_field_stilwell_brain">
              this source code
            </a>{" "}
            and originally written for an episode of YouTube Premium's
            MindField. It was built for educational purposes. I learned a lot.
          </p>
        </div>
      </div>

      <h2 id="contact">Contact me:</h2>

      <Footer></Footer>
    </div>
  );
}

export default App;
