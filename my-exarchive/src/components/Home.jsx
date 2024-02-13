import { useGLTF, useTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import * as THREE from "three";

export default function Home(props) {
  const { nodes, materials } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked.jpg");
  // const benchTexture = useTexture();
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  // Define physics for the floor object
  const [floorRef] = useBox(() => ({
    mass: 0, // Static object
    position: [7.944, 1.31, 0], // Adjust based on the object's position in the scene
    args: [1, 1, 1], // Adjust the size to match the floor object's dimensions
    type: "Static",
  }));

  // Define physics for the hall object
  const [hallRef] = useBox(() => ({
    mass: 0, // Static object
    position: [51.178, 13.743, 32.496], // Adjust based on the object's position
    args: [1, 1, 1], // Adjust the size to match the hall object's dimensions
    type: "Static",
  }));

  return (
    <group {...props} dispose={null}>
      <mesh name="hall" geometry={nodes.hall.geometry} material={textureMaterial} />
      <mesh name="leftFront" geometry={nodes.leftFront.geometry} material={textureMaterial} />
      <mesh name="leftMiddle" geometry={nodes.leftMiddle.geometry} material={textureMaterial} />
      <mesh name="leftBack" geometry={nodes.leftBack.geometry} material={textureMaterial} />
      <mesh name="shelf1" geometry={nodes.shelf1.geometry} material={textureMaterial} />
      <mesh name="shelf2" geometry={nodes.shelf2.geometry} material={textureMaterial} />
      <mesh name="chair" geometry={nodes.chair.geometry} material={textureMaterial} />
      <mesh name="littleBowlLeft" geometry={nodes.littleBowlLeft.geometry} material={textureMaterial} />
      <mesh name="bigBowlLeft" geometry={nodes.bigBowlLeft.geometry} material={textureMaterial} />
      <mesh name="littleBowlRight" geometry={nodes.littleBowlRight.geometry} material={textureMaterial} />
      <mesh name="bigBowlRight" geometry={nodes.bigBowlRight.geometry} material={textureMaterial} />
      <mesh name="bigBowlRight001" geometry={nodes.bigBowlRight001.geometry} material={textureMaterial} />
      <mesh name="leftFront001" geometry={nodes.leftFront001.geometry} material={textureMaterial} />
      <mesh name="leftMiddle001" geometry={nodes.leftMiddle001.geometry} material={textureMaterial} />
      <mesh name="leftBack001" geometry={nodes.leftBack001.geometry} material={textureMaterial} />
      <mesh name="poleOne" geometry={nodes.poleOne.geometry} material={textureMaterial} />
      <mesh name="poleTwo" geometry={nodes.poleTwo.geometry} material={textureMaterial} />
      <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={textureMaterial} />
      <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={textureMaterial} />
      <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={textureMaterial} />
      <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder078" geometry={nodes.Cylinder078.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_1" geometry={nodes.Cylinder078_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_2" geometry={nodes.Cylinder078_2.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_3" geometry={nodes.Cylinder078_3.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_4" geometry={nodes.Cylinder078_4.geometry} material={textureMaterial} />
      <mesh name="Cylinder078_5" geometry={nodes.Cylinder078_5.geometry} material={textureMaterial} />
      <mesh name="Mesh001" geometry={nodes.Mesh001.geometry} material={textureMaterial} />
      <mesh name="Mesh001_1" geometry={nodes.Mesh001_1.geometry} material={textureMaterial} />
      <mesh name="Mesh002" geometry={nodes.Mesh002.geometry} material={textureMaterial} />
      <mesh name="Mesh002_1" geometry={nodes.Mesh002_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder079" geometry={nodes.Cylinder079.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_1" geometry={nodes.Cylinder079_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_2" geometry={nodes.Cylinder079_2.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_3" geometry={nodes.Cylinder079_3.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_4" geometry={nodes.Cylinder079_4.geometry} material={textureMaterial} />
      <mesh name="Cylinder079_5" geometry={nodes.Cylinder079_5.geometry} material={textureMaterial} />
      <mesh name="Cylinder080" geometry={nodes.Cylinder080.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_1" geometry={nodes.Cylinder080_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_2" geometry={nodes.Cylinder080_2.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_3" geometry={nodes.Cylinder080_3.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_4" geometry={nodes.Cylinder080_4.geometry} material={textureMaterial} />
      <mesh name="Cylinder080_5" geometry={nodes.Cylinder080_5.geometry} material={textureMaterial} />
      <mesh name="Cylinder081" geometry={nodes.Cylinder081.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_1" geometry={nodes.Cylinder081_1.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_2" geometry={nodes.Cylinder081_2.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_3" geometry={nodes.Cylinder081_3.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_4" geometry={nodes.Cylinder081_4.geometry} material={textureMaterial} />
      <mesh name="Cylinder081_5" geometry={nodes.Cylinder081_5.geometry} material={textureMaterial} />
      <mesh name="Mesh003" geometry={nodes.Mesh003.geometry} material={textureMaterial} />
      <mesh name="Mesh003_1" geometry={nodes.Mesh003_1.geometry} material={textureMaterial} />
    </group>
  );
}

useGLTF.preload("models/scene.gltf");
