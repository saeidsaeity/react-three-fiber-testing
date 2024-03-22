import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { PropsWithChildren, useRef } from 'react'


export default function Floor(props:PropsWithChildren){
    const gridRef = useRef();
    
    return (
        <RigidBody type="Static">
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
       
        <meshStandardMaterial color={'blue'} /> {/* Adjust the color as needed */}
        
       <planeGeometry args={[100,100]} position={[0,0,0]} ></planeGeometry>
       <gridHelper args={[100, 50, 0xff0000, 'teal']} rotation={[-Math.PI / 2, 0, 0]} />
        
      </mesh>
     
      </RigidBody>
      )
}