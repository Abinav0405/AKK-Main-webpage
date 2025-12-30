import { useRef, useMemo, useEffect, Suspense, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Fallback component
function BackgroundFallback() {
  return null
}

function ParticleSystem() {
  const particlesRef = useRef()
  const { mouse, size } = useThree()
  
  const particles = useMemo(() => {
    const count = 150
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 15
      positions[i3 + 1] = (Math.random() - 0.5) * 15
      positions[i3 + 2] = (Math.random() - 0.5) * 15
      
      // Color (orange gradient)
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colors[i3] = 1.0     // R
        colors[i3 + 1] = 0.42 // G
        colors[i3 + 2] = 0.21 // B
      } else if (colorChoice < 0.66) {
        colors[i3] = 0.97    // R
        colors[i3 + 1] = 0.58 // G
        colors[i3 + 2] = 0.12 // B
      } else {
        colors[i3] = 0.27    // R
        colors[i3 + 1] = 0.27 // G
        colors[i3 + 2] = 0.0  // B
      }
      
      // Size
      sizes[i] = Math.random() * 0.1 + 0.05
    }
    
    return { positions, colors, sizes, count }
  }, [])

  useFrame((state) => {
    if (!particlesRef.current) return
    
    const positions = particlesRef.current.geometry.attributes.position.array
    const time = state.clock.elapsedTime
    
    for (let i = 0; i < particles.count; i++) {
      const i3 = i * 3
      
      // Orbital motion
      const radius = 5 + Math.sin(time * 0.1 + i) * 2
      const angle = time * 0.05 + (i / particles.count) * Math.PI * 2
      
      positions[i3] = Math.cos(angle) * radius + Math.sin(time * 0.3 + i) * 0.5
      positions[i3 + 1] = Math.sin(time * 0.2 + i) * 2 + Math.cos(angle) * 0.5
      positions[i3 + 2] = Math.sin(angle) * radius + Math.cos(time * 0.4 + i) * 0.5
      
      // Mouse interaction
      const mouseX = mouse.x * 3
      const mouseY = mouse.y * 3
      const distance = Math.sqrt(
        Math.pow(positions[i3] - mouseX, 2) + 
        Math.pow(positions[i3 + 1] - mouseY, 2)
      )
      
      if (distance < 2) {
        const force = (2 - distance) / 2
        positions[i3] += (positions[i3] - mouseX) * force * 0.02
        positions[i3 + 1] += (positions[i3 + 1] - mouseY) * force * 0.02
      }
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true
    particlesRef.current.rotation.y = time * 0.02
    particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.count}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particles.count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// Connection Lines Component
function ConnectionLines() {
  const linesRef = useRef()
  const { mouse } = useThree()
  
  const nodes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ]
    }))
  }, [])

  useFrame((state) => {
    if (!linesRef.current) return
    
    const positions = linesRef.current.geometry.attributes.position.array
    const time = state.clock.elapsedTime
    
    // Update node positions
    nodes.forEach((node, i) => {
      node.position[0] += node.velocity[0]
      node.position[1] += node.velocity[1]
      node.position[2] += node.velocity[2]
      
      // Boundary check
      if (Math.abs(node.position[0]) > 8) node.velocity[0] *= -1
      if (Math.abs(node.position[1]) > 8) node.velocity[1] *= -1
      if (Math.abs(node.position[2]) > 8) node.velocity[2] *= -1
      
      // Mouse influence
      const distance = Math.sqrt(
        Math.pow(node.position[0] - mouse.x * 3, 2) +
        Math.pow(node.position[1] - mouse.y * 3, 2)
      )
      
      if (distance < 3) {
        const force = (3 - distance) / 3
        node.velocity[0] += (node.position[0] - mouse.x * 3) * force * 0.001
        node.velocity[1] += (node.position[1] - mouse.y * 3) * force * 0.001
      }
    })
    
    // Create connection lines
    let lineIndex = 0
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        )
        
        if (distance < 4) {
          const opacity = 1 - (distance / 4)
          
          // Line from node i to node j
          positions[lineIndex++] = nodes[i].position[0]
          positions[lineIndex++] = nodes[i].position[1]
          positions[lineIndex++] = nodes[i].position[2]
          positions[lineIndex++] = nodes[j].position[0]
          positions[lineIndex++] = nodes[j].position[1]
          positions[lineIndex++] = nodes[j].position[2]
        }
      }
    }
    
    // Fill remaining positions
    while (lineIndex < positions.length) {
      positions[lineIndex++] = 0
      positions[lineIndex++] = 0
      positions[lineIndex++] = 0
    }
    
    linesRef.current.geometry.attributes.position.needsUpdate = true
  })

  const maxLines = nodes.length * (nodes.length - 1) / 2
  const positions = new Float32Array(maxLines * 6) // 2 points per line, 3 coordinates per point

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={maxLines * 2}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#FF6B35"
        transparent={true}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  )
}

export default function InteractiveBackground() {
  const [hasError, setHasError] = useState(false)

  if (hasError) return <BackgroundFallback />

  try {
    return (
      <Suspense fallback={null}>
        <group>
          <ParticleSystem />
          <ConnectionLines />
        </group>
      </Suspense>
    )
  } catch (error) {
    console.error('InteractiveBackground error:', error)
    setHasError(true)
    return <BackgroundFallback />
  }
}
