import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { MansionModel } from "@/models/MansionModel";

export default function Mansion() {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <MansionModel />
            <OrbitControls />
        </Canvas>
    );
}