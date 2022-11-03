import React from 'react';
import { angleToRadians } from '../Util/angle';

export default function Floor() {
  return (
    <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color='#1ea3d8' />
    </mesh>
  )
}
