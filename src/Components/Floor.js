import React from 'react';
import { angleToRadians } from '../Util/angle';

export default function Floor() {
  return (
    <mesh rotation={[-(angleToRadians(90)), 0, 0]} >
      <planeGeometry args={[7, 7]} />
      <meshStandardMaterial color='rgb(129, 193, 199)' />
    </mesh>
  )
}
