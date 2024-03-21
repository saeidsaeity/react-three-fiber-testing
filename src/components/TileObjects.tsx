import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from 'three/addons';
import { PropsWithChildren } from 'react'
import {views} from 'react-three/drei'
import { Suspense } from 'react';
function TileObjects(props:PropsWithChildren) {
    const tileA = useLoader(GLTFLoader,'/monastery.gltf')
    const emptytile=[]
    
    for(let x=0;x<4;x++){
      for(let y=0;y<4;y++){
        emptytile.push(<primitive key={`${x}-${y}`} object={tileA.scene.clone()} position={[x * 2.5, 0, y * 2.5]}/>)


    }
  }
  console.log(emptytile);
  
    return (
      <>
      <ambientLight/>
      
      <Suspense>{emptytile}</Suspense>
    
      

      </>
    )
    
  }

export default TileObjects