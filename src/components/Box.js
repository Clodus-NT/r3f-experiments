import React from 'react'

export default function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach='geometry'></boxBufferGeometry>
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  )
}
