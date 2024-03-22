import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BoxGeometry, Mesh, MeshBasicMaterial, Vector3 } from "three";

export default function Grid() {
    const gridSize = 10; // Number of tiles in each direction
    const tileSize = 2; // Size of each tile
    const borderThickness = 0.05; // Thickness of the borders
    const tilesRef = useRef(0);
    const [hovered, setHovered] = useState(false);
    const grid = [];

    useFrame(() => {
        // Any animation logic you want to add can go here
    });

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            // Create the tile
            const position = new Vector3(i, 0, j)
            const tile = (
                <mesh
                    key={`${i}-${j}-tile`}
                    onClick={()=>{console.log(position);
                    }}
                    position={[i * tileSize, 0, j * tileSize]}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <boxGeometry args={[tileSize, 0.1, tileSize]} />
                    <meshBasicMaterial color={hovered ? 0x808080 : 0xffffff} />
                </mesh>
            );

            // Create borders around the tile
            const borders = [
                // Left border
                <mesh
                    key={`${i}-${j}-left-border`}
                    position={[i * tileSize - tileSize / 2 - borderThickness / 2, 0, j * tileSize]}
                    scale={[borderThickness, 1, tileSize]} // Thickness and height
                >
                    <boxGeometry args={[borderThickness, 0.1, tileSize]} />
                    <meshBasicMaterial color={0x000000} />
                </mesh>,
                // Right border
                <mesh
                    key={`${i}-${j}-right-border`}
                    position={[i * tileSize + tileSize / 2 + borderThickness / 2, 0, j * tileSize]}
                    scale={[borderThickness, 1, tileSize]} // Thickness and height
                >
                    <boxGeometry args={[borderThickness, 0.1, tileSize]} />
                    <meshBasicMaterial color={0x000000} />
                </mesh>,
                // Top border
                <mesh
                    key={`${i}-${j}-top-border`}
                    position={[i * tileSize, 0, j * tileSize - tileSize / 2 - borderThickness / 2]}
                    scale={[tileSize, 1, borderThickness]} // Thickness and width
                >
                    <boxGeometry args={[tileSize, 0.1, borderThickness]} />
                    <meshBasicMaterial color={0x000000} />
                </mesh>,
                // Bottom border
                <mesh
                    key={`${i}-${j}-bottom-border`}
                    position={[i * tileSize, 0, j * tileSize + tileSize / 2 + borderThickness / 2]}
                    scale={[tileSize, 1, borderThickness]} // Thickness and width
                >
                    <boxGeometry args={[tileSize, 0.1, borderThickness]} />
                    <meshBasicMaterial color={0x000000} />
                </mesh>
            ];

            grid.push(tile, ...borders);
        }
    }

    return <>{grid}</>;
}
