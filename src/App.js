import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import MainScene from './Components/MainScene';
import './App.css';

// When using perspective camera with orbit controls, manipulate the orbit controls props rather than the camera props

function App() {

  return (
    <div id='canvasContainer'>
      <Canvas shadows>
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
