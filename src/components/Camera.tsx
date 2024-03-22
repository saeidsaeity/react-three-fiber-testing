import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
export default function Camera() {
    const { camera } = useThree();
  
   
    camera.position.set(0, 100, 100); // Set camera position
    camera.rotation.set(0, 0.7, Math.PI/2); // Set camera rotation (in radians)
     // Store th  e initial z position
     camera.position.z = 100; // Set the initial z-coordinate

    // Save the initial z-coordinate
   
    // Prevent camera movement along the z-axis during runtime
    

  // Update camera position and rotation
  
    return null; 
  }