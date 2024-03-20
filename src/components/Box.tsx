import { OrbitControls } from '@react-three/drei'
import { PropsWithChildren } from 'react'
import { RigidBody } from '@react-three/rapier'

export default function Box(props:PropsWithChildren) {
  return (
    <mesh {...props}>
      
      <ambientLight/>
      <boxGeometry />
     
      <meshBasicMaterial color={0x00ff00} wireframe />
      <meshStandardMaterial color={"purple"}/>
      
    </mesh>
  )
}