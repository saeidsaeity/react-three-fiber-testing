import { useRef, useState } from 'react'
import { Environment, OrbitControls, PointerLockControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box.tsx'
import Floor from './components/Floor.tsx'
import Camera from './components/Camera.tsx'
import { Physics, RigidBody } from '@react-three/rapier'
import Grid from './components/Grid.tsx'
import TileObjects from './components/TileObjects.tsx'
function App() {
  const tiles:any = []
    tiles.fill(0,0,100)
    const meshRef = useRef();

    // Use useDrag hook to make the object draggable
    
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
     
    <ambientLight/>
    <Canvas >
  
    <Environment preset="night" background />
    <pointLight position={[10, 10, 10]} />
    <OrbitControls 
      minDistance={5} // Minimum zoom level
      maxDistance={20} 
      enableRotate={false} 
        />
        <Physics>
    <Grid/>
   <Floor position={[0,0,0]}/>
    <Camera/>
    
    {/*<RigidBody>
    <Box  position={[-0.75, 0.1, 1]} name="A" />
    <Box  position={[0.75, 0.1, 10]} name="B" />
    </RigidBody>*/}
    
    <TileObjects/>
    
    </Physics>
  </Canvas>
  </div>
  
  )
}

export default App
