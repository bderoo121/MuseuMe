import { CameraControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Floor } from './components/Floor'

export const App = () => {
  return (
    <Canvas>
      <color attach="background" args={['#ffbf40']} />
      <CameraControls makeDefault />
      <pointLight position={[10, 10, 10]} />
      <Floor length={5} width={8} position={[0, 0, 0]} />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}
