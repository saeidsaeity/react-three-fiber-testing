import { useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box.tsx'
import Floor from './components/Floor.tsx'
import Camera from './components/Camera.tsx'
import { Physics, RigidBody } from '@react-three/rapier'
function App() {
  const tiles:any = []
    tiles.fill(0,0,100)
    const meshRef = useRef();

    // Use useDrag hook to make the object draggable
    
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
       
    <Canvas >
    <OrbitControls 
      minDistance={5} // Minimum zoom level
      maxDistance={20} 
      enableRotate={true} 
     
        
        />
        <Physics>

   <Floor position={[0,0,0]}/>
    <Camera/>
    
    <RigidBody>
    <Box  position={[-0.75, 0.1, 1]} name="A" />
    <Box  position={[0.75, 0.1, 10]} name="B" />
    </RigidBody>
    </Physics>
  </Canvas>
  </div>
  
  )
}

export default App
