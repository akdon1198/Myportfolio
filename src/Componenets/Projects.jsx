import "./Projects.css";

function Projects() {
  return (
    <div className="headProject">
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/cultFit.PNG"
            className="ProjectLogoImage"
            alt="CultFitLogo"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">CultFit Clone</h3>
          <br />
          <span className="projectDetail">
          It is a collaborative project build by team of 4. For creating this
            project we use HTML,CSS and javascript. user can login to over
            website and also purchase fitness products.
          </span>
          <br />
          <a
            target="_blank"
            href="https://nikhilguptan.github.io/CultFitWithLink/"
          >
            <button className="projectButton">See This Live</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/NikhilGuptan/cult.fit-clone"
          >
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">HTML</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">JavaScript</span>
            <span className="Technologies">Bootstrap</span>
            <span className="Technologies clearClass">LocalStorage</span>
          </div>
        </div>
      </div>
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/olx.PNG"
            className="ProjectLogoImage"
            alt="CultFitLogo"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">OLX.COM Clone</h3>
          <br />
          <span className="projectDetail">
            It is a collaborative project build by team of 4. For creating this
            project we use React,MongoDB and NodeJs. user can login to over
            website and also Add new ads.
          </span>
          <br />
          <a target="_blank" href="https://github.com/cybervirus997/Olx">
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">React</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">JavaScript</span>
            <span className="Technologies">NodeLs</span>
            <span className="Technologies">MongoDB</span>
          </div>
        </div>
      </div>
      <div className="headChild">
        <div className="projectImage">
          <img
            src="./icons/TicTacToe.PNG"
            className="ProjectLogoImage"
            alt="CultFitLogo"
          />
        </div>
        <div className="projectContent">
          <h3 className="projectTitle">Tic-tac-toe Game</h3>
          <br />
          <span className="projectDetail">
            A regular and fully responsive Tic-tac-toe game that can be played
            on a mobile phone also. This is a solo project I have created in 2
            days. For creating this project I mainly focus on React and Css.
          </span>
          <br />
          <a target="_blank" href="https://nikhilguptan.github.io/tic-tac-toe/">
            <button className="projectButton">See This Live</button>
          </a>
          <a target="_blank" href="https://github.com/NikhilGuptan/tic-tac-toe">
            <button className="projectButton">Source Code</button>
          </a>
          <br />
          <div className="technologiesDiv">
            <span className="Technologies">React</span>
            <span className="Technologies">CSS</span>
            <span className="Technologies">JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
