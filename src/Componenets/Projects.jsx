import "./Projects.css";

function Projects() {
  return (
    <div className="headProject">
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/netflix.png"
            className="ProjectLogoImage"
            alt="netflixclone"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">netflix Clone</h3>
          <br />
          <span className="projectDetail">
          It is a netflix clone mainly in react css and using local Storage.It also has 
          login and register functionality.When refresh a page random movie appear.
          </span>
          <br />
          <a
            target="_blank"
            href="https://glowing-dodol-fb7f3e.netlify.app/"
          >
            <button className="projectButton">See This Live</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/akdon1198/netflix-clone"
          >
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">React</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">ContextAPI</span>
            <span className="Technologies clearClass">LocalStorage</span>
          </div>
        </div>
      </div>
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/E COMMERCE.PNG"
            className="ProjectLogoImage"
            alt="E COMMERCE"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">E Commerce</h3>
          <br />
          <span className="projectDetail">
           It is an E COMMERCE website.We can view any category item sort on basis of 
           color, size.Add item in the cart and delete item from the cart.
          </span>
          <br />
          <a
            target="_blank"
            href="https://shimmering-sprite-a40649.netlify.app/"
          >
            <button className="projectButton">See This Live</button>
          </a>
          <a target="_blank" href="https://github.com/akdon1198/E-COMMERCE">
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">React</span>
            <span className="Technologies">Reduxtoolkit</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">Express</span>
            <span className="Technologies">MongoDB</span>
          </div>
        </div>
      </div>
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/Textgen.PNG"
            className="ProjectLogoImage"
            alt="textgenerator"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">Text Generator</h3>
          <br />
          <span className="projectDetail">
           This is a Text Generator. We can Generate any text. Add multiple text.
           Lock the text. Delete the text
          </span>
          <br />
          <a target="_blank" href="https://akdon1198.github.io/text-generator/">
            <button className="projectButton">See This Live</button>
          </a>
          <a target="_blank" href="https://github.com/akdon1198/text-generator">
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">HTML</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
