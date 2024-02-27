// InstructionsOverlay.jsx
import React from "react";
import "../stylesheets/InstructionsOverlay.css"; // Adjust the path as necessary

const InstructionsOverlay = ({ onClose }) => {
  return (
    <div className="instructionsOverlay">
      <div className="instructionsContent">
        <h1>Welcome</h1>
        <p>
          Hello, my name is Julian Houston. I am a full-stack developer
          specializing in the innovative field of Extended Reality (XR), where I
          create immersive digital experiences, products and campaigns.
        </p>
        <p>
          Thanks for stopping by and checking out the gallery. You'll find my
          projects and some interactive experiences during your visit.
        </p>
        <p>
          This is more than just a portfolio site, it is the birth of an
          evolving digital showcase.
        </p>
        <p>Enjoy :)</p>
        <br></br>
        <h2>Controls</h2>
        <ul>
          <li>Move: WASD or Arrow Keys</li>
          <li>Look: Click once then drag mouse/touchpad</li>
          <li>Frames: ESC key once then drag mouse/touchpad</li>
        </ul>
        <button onClick={onClose} className="instructionsButton">
          Got it!
        </button>
      </div>
    </div>
  );
};

export default InstructionsOverlay;
