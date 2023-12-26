import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Splat, Float, CameraControls, StatsGl, Effects } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas dpr={1.5} gl={{ antialias: false }} camera={{ position: [0, 0, 3] }}>
        <CameraControls makeDefault />
        {/* <StatsGl /> */}
        <Splat alphaTest={0.1} src={`/manos.splat`} scale={0.5} position={[0, 0, 0]} />
      </Canvas>
    </>
  )
}

export default App
