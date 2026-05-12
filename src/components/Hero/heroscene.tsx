'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingBox({
    position,
    rotation,
    scale,
    speed = [0, 0.003, 0.002],
    edgeOpacity = 0.38,
}: {
    position: [number, number, number]
    rotation: [number, number, number]
    scale: [number, number, number]
    speed?: [number, number, number]
    edgeOpacity?: number
}) {
    const groupRef = useRef<THREE.Group>(null)

    const edgesGeo = useMemo(() => {
        const box = new THREE.BoxGeometry(1, 1, 1)
        const edges = new THREE.EdgesGeometry(box)
        box.dispose()
        return edges
    }, [])

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.x += speed[0]
            groupRef.current.rotation.y += speed[1]
            groupRef.current.rotation.z += speed[2]
        }
    })

    return (
        <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
            <mesh castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color="#a78bfa"
                    emissive="#7c3aed"
                    emissiveIntensity={0.06}
                    transparent
                    opacity={0.04}
                    roughness={0.2}
                    metalness={0.5}
                    depthWrite={false}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <lineSegments>
                <primitive object={edgesGeo} attach="geometry" />
                <lineBasicMaterial color="#a78bfa" transparent opacity={edgeOpacity} />
            </lineSegments>
        </group>
    )
}

function RotatingCubeGroup() {
    const outerRef = useRef<THREE.Group>(null)
    const innerRef = useRef<THREE.Group>(null)

    const outerEdgesGeo = useMemo(() => {
        const box = new THREE.BoxGeometry(1, 1, 1)
        const edges = new THREE.EdgesGeometry(box)
        box.dispose()
        return edges
    }, [])

    const innerEdgesGeo = useMemo(() => {
        const octa = new THREE.OctahedronGeometry(0.52, 0)
        const edges = new THREE.EdgesGeometry(octa)
        octa.dispose()
        return edges
    }, [])

    useFrame(() => {
        if (outerRef.current) {
            outerRef.current.rotation.y += 0.004
            outerRef.current.rotation.z += 0.002
        }
        if (innerRef.current) {
            innerRef.current.rotation.x += 0.007
            innerRef.current.rotation.y -= 0.005
            innerRef.current.rotation.z += 0.003
        }
    })

    return (
        <group position={[-2, 1.4, 0.0]}>
            <group ref={outerRef} scale={[1.5, 1.5, 1.5]}>
                <mesh castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial
                        color="#a78bfa"
                        emissive="#7c3aed"
                        emissiveIntensity={0.08}
                        transparent
                        opacity={0.04}
                        roughness={0.15}
                        metalness={0.4}
                        depthWrite={false}
                        side={THREE.DoubleSide}
                    />
                </mesh>
                <lineSegments>
                    <primitive object={outerEdgesGeo} attach="geometry" />
                    <lineBasicMaterial color="#a78bfa" transparent opacity={0.52} />
                </lineSegments>
            </group>

            <group ref={innerRef}>
                <mesh>
                    <octahedronGeometry args={[0.52, 0]} />
                    <meshStandardMaterial
                        color="#c4b5fd"
                        emissive="#7c3aed"
                        emissiveIntensity={0.4}
                        transparent
                        opacity={0.12}
                        roughness={0.1}
                        metalness={0.6}
                        depthWrite={false}
                        side={THREE.DoubleSide}
                    />
                </mesh>
                <lineSegments>
                    <primitive object={innerEdgesGeo} attach="geometry" />
                    <lineBasicMaterial color="#7c3aed" transparent opacity={0.5} />
                </lineSegments>
            </group>
        </group>
    )
}

function GlowOrb() {
    return (
        <group position={[0.2, 2.5, 0.5]}>
            <mesh>
                <sphereGeometry args={[0.18, 64, 64]} />
                <meshStandardMaterial
                    color="#a78bfa"
                    emissive="#7c3aed"
                    emissiveIntensity={1.5}
                    roughness={0.18}
                    metalness={0.35}
                />
            </mesh>
            <pointLight
                color="#7c3aed"
                intensity={80}
                distance={12}
                decay={2}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
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
            <ambientLight intensity={0.08} />
            <directionalLight
                position={[-5, 8, -3]}
                intensity={1.2}
                color="#1a3a6e"
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={0.5}
                shadow-camera-far={30}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />

            <GlowOrb />

            <RotatingCubeGroup />
                
            <FloatingBox position={[5.0, 2, -4]} rotation={[0.4, 1.1, -0.3]} scale={[1, 1, 1]} speed={[0.001, -0.002, 0.001]} edgeOpacity={0.20} />

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
