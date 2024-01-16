import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./App.css";

// import { Canvas, } from "@react-three/fiber";

function Setup() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      1,
      500
    );
    camera.position.z = 3;
    scene.add(camera);

    // Objects
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const sceneHandler = () => {
      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      window.requestAnimationFrame(sceneHandler);
    };

    sceneHandler();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

function App() {
  return (
    <>
      <Setup />
    </>
  );
}
export default App;
