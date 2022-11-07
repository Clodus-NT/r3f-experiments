import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { angleToRadians } from '../Util/angle';

export default function Ball() {
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {

      // Timeline
      const animationTimeline = gsap.timeline({ paused: true });
      
      // x-axis motion
      animationTimeline.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: 'power1.out'
      })
      // y-axis motion
      animationTimeline.to(ballRef.current.position, {
        y: 0.5,
        duration: 0.75,
        ease: 'power1.in'
      }, '<')

      // Play
      animationTimeline.play();
    }
  }, [ballRef.current])

  return (
    <mesh 
      ref={ballRef}
      position={[-2, 1, 0]} 
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
