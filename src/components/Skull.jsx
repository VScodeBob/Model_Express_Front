import { useGLTF } from "@react-three/drei";

function Skull() {
  const { scene } = useGLTF("/models/skull.glb");

  return (
    <>
      <primitive object={scene} scale={1} positon={[0, 0, 0]} />
    </>
  );
}

export default Skull;
