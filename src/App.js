import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMask, ScrollControls, useScroll, Stage, Float } from '@react-three/drei'
import Phone from './Phone'
import PhoneBackside from './PhoneBackside'
import { DoubleSide } from 'three'
import Dirk from './Dirk'
import Ship from './Ship'

export function App() {
  return (
    <Canvas shadows camera={{ position: [-3, -7.5, -30], fov: 30, zoom: 0.66 }}>
      <color attach="background" args={['#E9D6D8']} />
      <Suspense fallback={null}>
        <ScrollControls pages={2} damping={0.08}>
          <group position-x={-2} position-z={-1}>
            <Stage intensity={0.66} environment="city" adjustCamera={false} shadows="accumulative">
              <group rotation-x={Math.PI / 4} rotation-z={Math.PI / 5}>
                <FrontSide />
                <BackSide />
              </group>
            </Stage>
          </group>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

const FrontSide = () => {
  const ref = useRef()
  const scroll = useScroll()

  useFrame(() => {
    const progress = scroll.range(0, 0.25)
    ref.current.position.z = progress * 10
    ref.current.visible = progress < 1
  })

  return (
    <group>
      <group ref={ref}>
        <Dirk maskId={1} />
        <Ground maskId={2} />
      </group>
      <Phone screenMaskId={2} popoutMaskId={1} />
    </group>
  )
}

const BackSide = () => {
  const ref = useRef()
  const scroll = useScroll()

  useFrame(() => {
    const progress = scroll.range(0.25, 0.75)
    ref.current.position.z = (1 - progress) * 3
    ref.current.visible = progress > 0
  })

  return (
    <group>
      <group ref={ref}>
        <Float scale={0.75} position={[0, 0.65, 0]} rotation={[0, 0.6, 0]}>
          <Ship maskId={1} />
        </Float>
        <Ground maskId={2} position={[0, -1, 0]} />
      </group>
      <PhoneBackside />
    </group>
  )
}

const Ground = ({ color = '#555', maskId, renderOrder = -1, position }) => {
  const ref = useRef()
  const stencil = useMask(maskId, false)

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, 0, 0]} renderOrder={renderOrder} receiveShadow>
        <boxGeometry args={[12, 20, 1]} />
        <meshPhongMaterial color={color} {...stencil} side={DoubleSide} />
      </mesh>
      <mesh position={[0, 10, 0]} renderOrder={renderOrder} rotation-x={Math.PI / 2} receiveShadow>
        <boxGeometry args={[20, 30, 1]} />
        <meshPhongMaterial color={color} {...stencil} side={DoubleSide} />
      </mesh>
      <mesh position={[5.5, 0, 0]} renderOrder={renderOrder} rotation-y={Math.PI / 2} receiveShadow>
        <boxGeometry args={[12, 20, 1]} />
        <meshPhongMaterial color={color} {...stencil} side={DoubleSide} />
      </mesh>
    </group>
  )
}
