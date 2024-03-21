import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

import { useLoader } from '@react-three/fiber'

export default function Grid() {
    const gridSize = 10; // Number of tiles in each direction
    const tileSize = 10; // Size of each tile
    const tilesRef = useRef(0);
    const [hovered, setHovered] = useState(false);
    const grid = [];
    
   

    useFrame(() => {
     
    
      
    });
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        grid.push(
          <mesh  onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)} key={`${i}-${j}`} position={[i * tileSize, 0, j * tileSize]}>
            <boxGeometry args={[tileSize, 0.1, tileSize]} />
            <meshStandardMaterial color={hovered ? 0x808080 : 0xffffff} />
          </mesh>
        );
      }
    }
  
    return (
    <>{grid}</>
    )
  }