import React from 'react';

export default function Plane() {

  return (
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} >
        <planeBufferGeometry attach='geometry' args={[10, 10]} ></planeBufferGeometry>
        <meshLambertMaterial attach='material' color='gray' />
      </mesh>
  )
}