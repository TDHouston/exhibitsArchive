import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

export const MovementControls = () => {
  // Setup for StateKey presses
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  // Event Listeners for Keyboard Events
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          setMovement((m) => ({ ...m, forward: true }));
          break;
        case "ArrowDown":
        case "s":
          setMovement((m) => ({ ...m, backward: true }));
          break;
        case "ArrowLeft":
        case "a":
          setMovement((m) => ({ ...m, left: true }));
          break;
        case "ArrowRight":
        case "d":
          setMovement((m) => ({ ...m, right: true }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          setMovement((m) => ({ ...m, forward: false }));
          break;
        case "ArrowDown":
        case "s":
          setMovement((m) => ({ ...m, backward: false }));
          break;
        case "ArrowLeft":
        case "a":
          setMovement((m) => ({ ...m, left: false }));
          break;
        case "ArrowRight":
        case "d":
          setMovement((m) => ({ ...m, right: false }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Movement Logic
  useFrame((state, delta) => {
    const speed = 5;
    const moveDistance = speed * delta;

    if (movement.forward) state.camera.position.z -= moveDistance;
    if (movement.backward) state.camera.position.z += moveDistance;
    if (movement.left) state.camera.position.x -= moveDistance;
    if (movement.right) state.camera.position.x += moveDistance;
  });
};
