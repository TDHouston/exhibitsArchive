import React, { useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import "../../stylesheets/desktop.css";
import Home from "../../components/Home";
import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import PlayerObj from "../../utils/PlayerObj";
import PhysicalModel from "../../components/PhysicalModel";
import InstructionsOverlay from "../../components/InstructionsOverlay";

function DExperience() {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <>
      {showInstructions && (
        <InstructionsOverlay onClose={() => setShowInstructions(false)} />
      )}
      <main id="dCanvas">
        {!showInstructions && (
          <Canvas
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace,
            }}
          >
            <ambientLight intensity={3} />
            <Home />
            <Physics>
              <PhysicalModel position={[0, 0, 0]} />
              <PlayerObj
                controls
                position={[55, 7.5, 33]}
                args={[4.8]}
                color="yellow"
              />
            </Physics>
            <PointerLockControls />
          </Canvas>
        )}
      </main>
    </>
  );
}
export default DExperience;
