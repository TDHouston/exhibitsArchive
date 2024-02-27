import { useState, useEffect } from "react";

/*****************
 * Player Controls
 ****************/
export const MovementControls = () => {
  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    ArrowUp: "forward", // Added arrow key for moving forward
    ArrowDown: "backward", // Added arrow key for moving backward
    ArrowLeft: "left", // Added arrow key for moving left
    ArrowRight: "right", // Added arrow key for moving right
  };

  const moveFieldByKey = (key) => keys[key];

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (keys[e.code]) {
        setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
      }
    };
    const handleKeyUp = (e) => {
      if (keys[e.code]) {
        setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
};
