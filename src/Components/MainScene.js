import React from 'react';
// import { angleToRadians } from '../Util/angle';
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Stars } from '@react-three/drei';
import Ball from './Ball';
import Floor from './Floor';
import Camera from './Camera';

export default function MainScene() {
  return (
    <>
      {/* <PerspectiveCamera position={[0, 1, 5]} makeDefault />
      <OrbitControls /> */}
      <Camera />
      <Stars />
      <Ball />
      <Floor />
      <ambientLight args={['#ffffff', 1]} />
    </>    
  )
}
