import React, { useRef, useState } from 'react'
import { Vector3 } from 'three'
import { FloorProps } from '../models/Space'

export const Floor = (props: FloorProps) => {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hover, setHover] = useState(false)

  const position = new Vector3(...props.position)
  const demoColor = hover ? 'red' : 'green'

  return (
    <mesh
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      position={position}>
      <boxGeometry args={[props.width, 0.1, props.length]} />
      <meshStandardMaterial color={demoColor} />
    </mesh>
  )
}
