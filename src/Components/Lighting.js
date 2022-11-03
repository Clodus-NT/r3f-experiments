import React from 'react';
import { angleToRadians } from '../Util/angle';

export default function Lighting() {
  return (
    <>
      <ambientLight  args={['#ffffff', 0.25]}  />
      <pointLight 
        args={['#ffffff', 1.5, 10, angleToRadians(60), 0.85]}
        position={[-3, 1, 0]}
        castShadow
      />
    </>
  )
}
