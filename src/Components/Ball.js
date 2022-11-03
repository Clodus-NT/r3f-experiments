import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { angleToRadians } from '../Util/angle';

export default function Ball() {
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {

      gsap.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: 'power1.out'
      })
    }
  }, [ballRef.current])

  return (
    <mesh 
      ref={ballRef}
      position={[-2, 0.5, 0]} 
      castShadow
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial 
        color='hotpink' 
        metalness={0.5}
        roughness={0.1}
      />
    </mesh>
  )
}
