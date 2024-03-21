import { Canvas, useThree } from '@react-three/fiber';
export default function Camera() {
    const { camera } = useThree();
  
   
    camera.position.set(0, 100, 100); // Set camera position
    camera.rotation.set(0, 0.7, Math.PI/2); // Set camera rotation (in radians)
  
    return null; 
  }