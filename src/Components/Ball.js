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
        duration: 0.5,
        ease: 'power1.in'
      }, '<')
      
      const decayFactor = 0.8
      for (let i = 1; i <= 4; i++) {
        // Going up
        animationTimeline.to(ballRef.current.position, {
          y:  Math.pow( decayFactor, i) * 1.5,
          duration: 0.2,
          ease: 'power2.out'
        }, '>')
        // Coming down
        animationTimeline.to(ballRef.current.position, {
          y: 0.5,
          duration: 0.2,
          ease: 'power2.in'
        }, '>')
      }

      // Play
      animationTimeline.play();
    }
  }, [ballRef.current])

  return (
    <mesh 
      ref={ballRef}
      position={[-2, 1.5, 0]} 
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
