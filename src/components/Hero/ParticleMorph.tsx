// components/HeroScene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function FloatingBox({
    position,
    rotation,
    scale,
}: {
    position: [number, number, number]
    rotation: [number, number, number]
    scale: [number, number, number]
}) {
    return (
        <mesh position={position} rotation={rotation} scale={scale} castShadow receiveShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color="#1a1f2e"
                roughness={0.3}
                metalness={0.6}
            />
        </mesh>
    )
}

function GlowOrb() {
    return (
        <group position={[1.8, 2.2, 0.5]}>
            {/* esfera visível */}
            <mesh>
                <sphereGeometry args={[0.18, 32, 32]} />
                <meshStandardMaterial
                    color="#ff6b2b"
                    emissive="#ff4500"
                    emissiveIntensity={3}
                    roughness={0}
                    metalness={0}
                />
            </mesh>
            {/* luz que ela emite */}
            <pointLight
                color="#ff6b2b"
                intensity={80}
                distance={12}
                decay={2}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />
        </group>
    )
}

function Floor() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]} receiveShadow>
            <planeGeometry args={[40, 40]} />
            <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={512}
                mixBlur={1}
                mixStrength={15}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050810"
                metalness={0.5}
                mirror={0}
            />
        </mesh>
    )
}

function Scene() {
    return (
        <>
            {/* Luz ambiente muito fraca para não destruir o contraste */}
            <ambientLight intensity={0.08} />

            {/* Luz direcional fria vinda de cima/esquerda — dá o tom azulado nas faces */}
            <directionalLight
                position={[-5, 8, -3]}
                intensity={1.2}
                color="#1a3a6e"
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-camera-near={0.5}
                shadow-camera-far={30}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />

            {/* Orbe laranja com pointLight embutida */}
            <GlowOrb />

            {/* Cubos — posições baseadas na composição da imagem 1 */}
            <FloatingBox
                position={[0.4, 0.3, 0]}
                rotation={[0.3, 0.8, 0.2]}
                scale={[2.2, 2.2, 2.2]}
            />
            <FloatingBox
                position={[2.2, -0.6, -1.5]}
                rotation={[-0.2, 1.2, 0.4]}
                scale={[1.6, 1.6, 1.6]}
            />
            <FloatingBox
                position={[-1.0, -0.2, -2]}
                rotation={[0.5, 0.4, -0.3]}
                scale={[1.4, 1.4, 1.4]}
            />
            <FloatingBox
                position={[1.0, 1.6, -1]}
                rotation={[0.8, 0.6, 0.1]}
                scale={[1.0, 1.0, 1.0]}
            />

            {/* Plano de chão reflexivo */}
            <Floor />
        </>
    )
}

export default function HeroScene() {
    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}
        >
            <Canvas
                shadows
                camera={{ position: [0, 1, 7], fov: 55 }}
                gl={{
                    antialias: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 0.9,
                }}
                style={{ background: '#070c18' }}
            >
                <Scene />
            </Canvas>
        </div>
    )
}