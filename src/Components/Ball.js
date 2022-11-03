import React from 'react';
// import { angleToRadians } from '../Util/angle';

export default function Ball() {
  return (
    <mesh position={[0, 0.5, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color='gray' />
    </mesh>
  )
}
