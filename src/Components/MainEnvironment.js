import React from 'react';
import * as THREE from 'three';
import { Environment } from '@react-three/drei';

export default function MainEnvironment () {
  return (
    <>
      <Environment background={true}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial side={THREE.BackSide} color='#2266cc' />
        </mesh>
      </Environment>
    </>
  )
}
