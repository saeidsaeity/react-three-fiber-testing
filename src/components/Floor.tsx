import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { PropsWithChildren } from 'react'


export default function Floor(props:PropsWithChildren){
    
    return (
        <RigidBody type="Static">
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
       
        <meshStandardMaterial color={0x000} /> {/* Adjust the color as needed */}
        
       <planeGeometry args={[100,100]} position={[0,0,0]} ></planeGeometry>
       <gridHelper args={[100, 100, 0xff0000, 'teal']} rotation={[-Math.PI / 2, 0, 0]} />
        
      </mesh>
     
      </RigidBody>
      )
}