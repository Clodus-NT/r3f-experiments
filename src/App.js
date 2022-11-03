import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { Stars } from '@react-three/drei';

// When using perspective camera with orbit controls, manipulate the orbit controls props rather than the camera props

function App() {

  return (
    <div id='canvasContainer'>
      <Canvas>
        <Stars />
      </Canvas>
    </div>
  );
}

export default App;
