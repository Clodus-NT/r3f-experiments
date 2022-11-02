import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Box from './components/Box';
import Plane from './components/Plane';
import './App.css';

function App() {
  return (
    <div id='canvasContainer'>
      <Canvas id='canvas'>
        <PerspectiveCamera makeDefault position={[0, 1, -5.75]} />
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.25} />
        <spotLight position={[10, 15, 10]} angle={0.3} intensity={1} />
        <Box />
        <Plane />
      </Canvas>
    </div>
  );
}

export default App;
