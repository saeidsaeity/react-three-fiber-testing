import { useLoader } from '@react-three/fiber';

import React, { useRef, useState } from 'react'
import * as THREE from 'three';
import { useGLTF,DragControls} from '@react-three/drei'
import { GLTFLoader } from 'three/addons';
import { PropsWithChildren } from 'react'
import {views} from 'react-three/drei'
import { Suspense } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Mesh, ShaderMaterial } from 'three';
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'

function TileObjects(props:PropsWithChildren) {
    const tileA = useLoader(GLTFLoader,'/monastery.gltf')
    const emptytile=[]
    const [selectedTile, setSelectedTile] = useState<any>(null);
    const offset = useRef<THREE.Vector3>(new THREE.Vector3());
    const [hovered, setHovered] = useState({});
    const createGlowMaterial = () => {
      return new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.5,
      });
    };
   
    const tileRefs = useRef([]);
    for(let x=0;x<4;x++){
      for(let y=0;y<4;y++){
        
     
        
        
        
        emptytile.push(
        <RigidBody type="dynamic" >
          <DragControls key={`Rigid-${x}-${y}`} >
              <Select enabled={hovered[`${x}-${y}`]}>
              <primitive ref={tileRefs.current[x]} onPointerOver={(event) => {setHovered({[`${x}-${y}`]:true})}}
      onPointerOut={(event) => {setHovered({[`${x}-${y}`]:false})}} key={`${x}-${y}`} object={tileA.scene.clone()} position={[x * 2.5, 0, y * 2.5]} />
            </Select>
          </DragControls>
          </RigidBody>)
        

    }
  }

    return (
      <>
      <ambientLight/>
      
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
          </EffectComposer>
          {emptytile}
          </Selection>
      
    
      
  
      

      </>
    )
    
  }

export default TileObjects