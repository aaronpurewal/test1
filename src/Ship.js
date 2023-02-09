import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF, useMask } from '@react-three/drei'

// One-click copy/paste from the poimandres market: https://market.pmnd.rs/model/low-poly-spaceship
const Ship = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf')
  const stencil = useMask(props.maskId)

  useLayoutEffect(() => {
    Object.values(materials).forEach((material) => {
      material.roughness = 0
      Object.assign(material, stencil)
    })
  }, [])

  return (
    <group ref={ref} {...props} dispose={null} position={[3, -1, -3]} rotation={[-Math.PI / 2, -Math.PI, Math.PI / 6]} scale={3}>
      <mesh castShadow receiveShadow geometry={nodes.Cube005.geometry} material={materials.Mat0} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_1.geometry} material={materials.Mat1} material-color="black" />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_2.geometry} material={materials.Mat2} material-envMapIntensity={0.2} material-color="black" />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_3.geometry} material={materials.Window_Frame} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_4.geometry} material={materials.Mat4} />
      <mesh castShadow receiveShadow geometry={nodes.Cube005_6.geometry} material={materials.Window} />
    </group>
  )
})

export default Ship
