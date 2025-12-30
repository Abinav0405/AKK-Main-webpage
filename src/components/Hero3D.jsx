import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Fallback component for when 3D fails
function Fallback3D() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-akk-orange text-2xl font-bold">AKK Engineering</div>
    </div>
  )
}

// Interactive Engineering Tool Component
function EngineeringTool({ position, rotation, type, color }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  const geometry = type === 'gear' ? 
    new THREE.CylinderGeometry(0.5, 0.5, 0.2, 8) :
    new THREE.BoxGeometry(0.3, 0.3, 0.8)

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      geometry={geometry}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <meshStandardMaterial 
        color={color} 
        metalness={0.8}
        roughness={0.2}
        emissive={hovered ? color : '#000000'}
        emissiveIntensity={hovered ? 0.3 : 0}
      />
    </mesh>
  )
}

// Particle Field Component
function ParticleField() {
  const particlesRef = useRef()
  const { mouse } = useThree()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      
      // Mouse interaction
      particlesRef.current.position.x = mouse.x * 0.5
      particlesRef.current.position.y = mouse.y * 0.5
    }
  })

  const particles = Array.from({ length: 100 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    ],
    scale: Math.random() * 0.02 + 0.01
  }))

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial 
            color="#FF6B35" 
            emissive="#FF6B35"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

// 3D Text Component using 3D geometry
function AnimatedText() {
  const textRef = useRef()

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={textRef}>
        {/* Create 3D text using boxes */}
        <group position={[-1.5, 0, 0]}>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[0.8, 1.2, 0.3]} />
            <meshStandardMaterial 
              color="#FF6B35"
              metalness={0.8}
              roughness={0.2}
              emissive="#FF6B35"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
        <group position={[0, 0, 0]}>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[0.8, 1.2, 0.3]} />
            <meshStandardMaterial 
              color="#F7931E"
              metalness={0.8}
              roughness={0.2}
              emissive="#F7931E"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
        <group position={[1.5, 0, 0]}>
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[0.8, 1.2, 0.3]} />
            <meshStandardMaterial 
              color="#FF8C42"
              metalness={0.8}
              roughness={0.2}
              emissive="#FF8C42"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

// Main 3D Scene Component
function Scene3D() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#FFF8F0" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF6B35" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#F7931E" angle={0.3} penumbra={1} />

      {/* Stars Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Particle Field */}
      <ParticleField />

      {/* 3D Text */}
      <AnimatedText />

      {/* Engineering Tools */}
      <EngineeringTool 
        position={[-2, 1, 0]} 
        rotation={[0, 0, 0]} 
        type="gear" 
        color="#FF6B35" 
      />
      <EngineeringTool 
        position={[2, 1, 0]} 
        rotation={[0, Math.PI / 4, 0]} 
        type="beam" 
        color="#F7931E" 
      />
      <EngineeringTool 
        position={[0, -1, 2]} 
        rotation={[Math.PI / 4, 0, 0]} 
        type="gear" 
        color="#FF8C42" 
      />
      <EngineeringTool 
        position={[-1.5, -0.5, -2]} 
        rotation={[0, Math.PI / 2, Math.PI / 4]} 
        type="beam" 
        color="#FF4500" 
      />
      <EngineeringTool 
        position={[1.5, -0.5, -2]} 
        rotation={[Math.PI / 6, Math.PI / 3, 0]} 
        type="gear" 
        color="#F7931E" 
      />
    </>
  )
}

// Main Component
export default function Hero3D() {
  const [mounted, setMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  if (hasError) return <Fallback3D />

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>
    </div>
  )
}
