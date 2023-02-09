/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { Mask, useGLTF, useScroll } from '@react-three/drei'
import { BackSide, FrontSide } from 'three'
import { useFrame } from '@react-three/fiber'
import { Geometry, Base, Subtraction } from '@react-three/csg'

export default function Phone(props) {
  const ref = useRef()
  const wallMask = useRef()
  const { nodes, materials } = useGLTF('/phone.gltf')

  const scroll = useScroll()

  useFrame(() => {
    const progress = scroll.range(0, 1)
    const progress2 = scroll.range(0, 0.25)
    ref.current.rotation.y = -progress * Math.PI
    wallMask.current.scale.x = 1 - progress2
    wallMask.current.position.z = (1 - progress2) * -44
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={0.2}>
        <mesh position={[0, 0, -1.96]}>
          <meshStandardMaterial color="black" />
          <Geometry>
            <Base geometry={nodes.Rectangle.geometry} />
            <Subtraction geometry={nodes.Rectangle.geometry} position={[0, 0, 0]} scale={[0.977, 0.977, 1.1]}></Subtraction>
          </Geometry>
        </mesh>
        <Mask
          id={1}
          geometry={nodes.Rectangle_2.geometry}
          position={[-0.02, 0.08, -2.08]}
          rotation-y={Math.PI}
          // colorWrite
          // depthWrite
        >
          <meshBasicMaterial color="pink" side={FrontSide} />
        </Mask>
        <Mask
          id={1}
          ref={wallMask}
          position={[-22, 0, 0]}
          rotation-y={[Math.PI / 2]}
          colorWrite={true}
          //depthWrite={true}
        >
          <planeGeometry args={[88, 150]} />
          <meshBasicMaterial color="red" side={BackSide} />
        </Mask>
        <Mask id={2} geometry={nodes.Rectangle_2.geometry} position={[-0.02, 0.08, -2.08]}>
          <meshBasicMaterial color="green" side={BackSide} />
        </Mask>
      </group>
    </group>
  )
}

useGLTF.preload('/phone.gltf')
