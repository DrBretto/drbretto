import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App light">
      <div className="topBar">
        <Header></Header>
      </div>

      <Intro></Intro>

      <div id="projects">
        <h2>Projects:</h2>

        <Project
          title="Dividend Calculator"
          link="https://github.com/DrBretto/dividend-calculator-app"
          linkText="GutHub Link"
          imageURL="./images/dividend.jpg"
          alt="Dividend Calculator preview"
          description="description"
          stack="Full Stack"
          technology="React, PostrgreSQL, Node"
        ></Project>

        <Project
          image="url here"
          title="title"
          description="description"
          stack="tech stack"
        ></Project>

        <Project
          image="url here"
          title="title"
          description="description"
          stack="tech stack"
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

      <h2>Contact me:</h2>

      <Footer></Footer>
    </div>
  );
}

export default App;
