import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import './App.css';

function App() {
  return (
    <div id='canvasContainer'>
      <Canvas id='canvas'>
        <Box></Box>
      </Canvas>
    </div>
  );
}

export default App;
