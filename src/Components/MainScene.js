import React from 'react';
// import { Stars } from '@react-three/drei';
import Ball from './Ball';
import Floor from './Floor';
import Camera from './Camera';
import Lighting from './Lighting';
import MainEnvironment from './MainEnvironment';

export default function MainScene() {
  return (
    <>
      <Camera />
      {/* <Stars /> */}
      <MainEnvironment />
      <Ball />
      <Floor />
      <Lighting />
    </>    
  )
}
