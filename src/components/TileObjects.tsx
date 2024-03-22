import { useLoader } from '@react-three/fiber';

import React, { useRef, useState } from 'react'
import * as THREE from 'three';
import { useGLTF,DragControls } from '@react-three/drei'
import { GLTFLoader } from 'three/addons';
import { PropsWithChildren } from 'react'
import {views} from 'react-three/drei'
import { Suspense } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Mesh, ShaderMaterial } from 'three';

function TileObjects(props:PropsWithChildren) {
    const tileA = useLoader(GLTFLoader,'/monastery.gltf')
    const emptytile=[]
    const [selectedTile, setSelectedTile] = useState<any>(null);
    const offset = useRef<THREE.Vector3>(new THREE.Vector3());
    const createGlowMaterial = () => {
      return new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.5,
      });
    };
   

    for(let x=0;x<4;x++){
      for(let y=0;y<4;y++){
        const tileRef = useRef<THREE.Mesh>(null);
        const glowRef = useRef<THREE.Mesh>(null);
        
        console.log(tileRef);
        
        emptytile.push(
        <RigidBody type="dynamic" >
          <DragControls onHover={(hovering)=>{
            console.log(tileA.scene.clone().children[0].material);
            console.log(tileRef.current.material);
            if(hovering && tileRef.current){tileRef.current.material = createGlowMaterial()}
            else if(!hovering && tileRef.current){tileRef.current.material = tileA.scene.clone().children[0].material}}} key={`Rigid-${x}-${y}`} >

              <primitive key={`${x}-${y}`} ref={tileRef} object={tileA.scene.clone()} position={[x * 2.5, 0, y * 2.5]} />
              
          </DragControls>
          </RigidBody>)
        

    }
  }

    return (
      <>
      <ambientLight/>
      
      <Suspense>{emptytile}</Suspense>
      
    
      
  
      

      </>
    )
    
  }

export default TileObjects