import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "../../stylesheets/mobile.css";
import { useEffect, useRef, useMemo, useState } from "react";

const objectDistance = 4.75;
// Define a separate component for your animated meshes
function AnimatedMesh({ geometry, material, positionY, index }) {
  // This ref will point to the mesh instance
  const meshRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = elapsedTime * 0.1;
      meshRef.current.rotation.y = elapsedTime * 0.12;
    }
  });

  // Return the mesh component with geometry and material props applied
  return (
    <mesh ref={meshRef} position={[0, positionY, 0]}>
      {geometry}
      {material}
    </mesh>
  );
}

function Camera() {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Optionally, directly adjust camera properties here
      // But be cautious about performance implications
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    // Example: Adjust the camera position based on scrollY
    // This mapping depends on your specific needs
    camera.position.y = (-scrollY / window.innerHeight) * objectDistance;
  });

  // Your rendering logic remains here
  return null; // This component does not render anything itself
}

function MExperience() {
  const sectionMeshes = useMemo(
    () => [
      //{}, // Keeping the empty object
      {
        key: "cone",
        geometry: <coneGeometry args={[1, 2, 32]} />,
        material: <meshToonMaterial color="hotpink" />,
      },
      {
        key: "torusKnot",
        geometry: <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />,
        material: <meshToonMaterial color="hotpink" />,
      },
      {
        key: "torus",
        geometry: <torusGeometry args={[0.5, 0.2, 16, 100]} />,
        material: <meshToonMaterial color="hotpink" />,
      },
    ],
    []
  );

  return (
    <>
      <main id="main">
        <Canvas id="mCanvas" gl={{ alpha: false }}>
          <Camera />
          {sectionMeshes.map((mesh, index) => {
            if (!mesh.geometry || !mesh.material) return null; // Skip rendering for the empty object
            return (
              <AnimatedMesh
                key={mesh.key || index}
                geometry={mesh.geometry}
                material={mesh.material}
                positionY={-objectDistance * index}
                index={index} // Pass index if needed for further customization
              />
            );
          })}
          <directionalLight position={[0, 0, 5]} />
        </Canvas>

        {/* <section className="section"></section> */}
        <section className="section">
          <h1>About</h1>
        </section>
        <section className="section">
          <h2>My projects</h2>
        </section>
        <section className="section">
          <h2>Contact me</h2>
        </section>
      </main>
    </>
  );
}

export default MExperience;
