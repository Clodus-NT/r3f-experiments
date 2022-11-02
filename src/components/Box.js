import React from 'react';

export default function Box() {

  return (
    <mesh position={[0, 0, 0]} >
      <boxBufferGeometry attach='geometry'></boxBufferGeometry>
      <meshStandardMaterial attach='material' color='green' />
    </mesh>
  )
}
