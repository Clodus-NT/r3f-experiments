import React, { useRef } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { angleToRadians } from '../Util/angle';

export default function Camera() {
  const orbitControlRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlRef.current) {
      const { x, y } = state.mouse;
      orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45)); // without '-' the controls would be inverted controls
      orbitControlRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30))
      orbitControlRef.current.update();
    }
  })
  
  return (
    <>
      <PerspectiveCamera 
        position={[0, 1, 5]} 
        makeDefault 
      />
      <OrbitControls 
        ref={orbitControlRef} 
        minPolarAngle={angleToRadians(40)} 
        maxPolarAngle={angleToRadians(80)} 
        enableZoom={false}
      />
    </>
  )
}
