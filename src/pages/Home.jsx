import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Skull from "../components/Skull";

function Home() {
  return (
    <section>
      <h1>Skull</h1>
      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Skull />

          <Environment preset="studio" />

          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
}

export default Home;
