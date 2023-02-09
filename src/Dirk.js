/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useMask } from '@react-three/drei'




export default function Dirk(props) {



  const { nodes } = useGLTF('/dirk-transformed.glb')
  const stencil = useMask(props.maskId)

  useLayoutEffect(() => {
    Object.values(nodes).forEach((material) => {
      material.roughness = 0
      Object.assign(material, stencil)
    })
  }, [])






  return (
    <group {...props} dispose={null} position={[3, -1, -3]} rotation={[-Math.PI / 2, -Math.PI, Math.PI / 6]} scale={3}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
      <mesh geometry={nodes.mesh_0_1.geometry} material={nodes.mesh_0_1.material} />
      <mesh geometry={nodes.mesh_0_2.geometry} material={nodes.mesh_0_2.material} />
      <mesh geometry={nodes.mesh_0_3.geometry} material={nodes.mesh_0_3.material} />
      <mesh geometry={nodes.mesh_0_4.geometry} material={nodes.mesh_0_4.material} />
      <mesh geometry={nodes.mesh_0_5.geometry} material={nodes.mesh_0_5.material} />
      <mesh geometry={nodes.mesh_0_6.geometry} material={nodes.mesh_0_6.material} />
      <mesh geometry={nodes.mesh_0_7.geometry} material={nodes.mesh_0_7.material} />
      <mesh geometry={nodes.mesh_0_8.geometry} material={nodes.mesh_0_8.material} />
      <mesh geometry={nodes.mesh_0_9.geometry} material={nodes.mesh_0_9.material} />
      <mesh geometry={nodes.mesh_0_10.geometry} material={nodes.mesh_0_10.material} />
      <mesh geometry={nodes.mesh_0_11.geometry} material={nodes.mesh_0_11.material} />
      <mesh geometry={nodes.mesh_0_12.geometry} material={nodes.mesh_0_12.material} />
      <mesh geometry={nodes.mesh_0_13.geometry} material={nodes.mesh_0_13.material} />
      <mesh geometry={nodes.mesh_0_14.geometry} material={nodes.mesh_0_14.material} />
      <mesh geometry={nodes.mesh_0_15.geometry} material={nodes.mesh_0_15.material} />
      <mesh geometry={nodes.mesh_0_16.geometry} material={nodes.mesh_0_16.material} />
      <mesh geometry={nodes.mesh_0_17.geometry} material={nodes.mesh_0_17.material} />
      <mesh geometry={nodes.mesh_0_18.geometry} material={nodes.mesh_0_18.material} />
      <mesh geometry={nodes.mesh_0_19.geometry} material={nodes.mesh_0_19.material} />
      <mesh geometry={nodes.mesh_0_20.geometry} material={nodes.mesh_0_20.material} />
      <mesh geometry={nodes.mesh_0_21.geometry} material={nodes.mesh_0_21.material} />
      <mesh geometry={nodes.mesh_0_22.geometry} material={nodes.mesh_0_22.material} />
      <mesh geometry={nodes.mesh_0_23.geometry} material={nodes.mesh_0_23.material} />
      <mesh geometry={nodes.mesh_0_24.geometry} material={nodes.mesh_0_24.material} />
      <mesh geometry={nodes.mesh_0_25.geometry} material={nodes.mesh_0_25.material} />
      <mesh geometry={nodes.mesh_0_26.geometry} material={nodes.mesh_0_26.material} />
      <mesh geometry={nodes.mesh_0_27.geometry} material={nodes.mesh_0_27.material} />
      <mesh geometry={nodes.mesh_0_28.geometry} material={nodes.mesh_0_28.material} />
      <mesh geometry={nodes.mesh_0_29.geometry} material={nodes.mesh_0_29.material} />
      <mesh geometry={nodes.mesh_0_30.geometry} material={nodes.mesh_0_30.material} />
      <mesh geometry={nodes.mesh_0_31.geometry} material={nodes.mesh_0_31.material} />
      <mesh geometry={nodes.mesh_0_32.geometry} material={nodes.mesh_0_32.material} />
      <mesh geometry={nodes.mesh_0_33.geometry} material={nodes.mesh_0_33.material} />
      <mesh geometry={nodes.mesh_0_34.geometry} material={nodes.mesh_0_34.material} />
      <mesh geometry={nodes.mesh_0_35.geometry} material={nodes.mesh_0_35.material} />
      <mesh geometry={nodes.mesh_0_36.geometry} material={nodes.mesh_0_36.material} />
      <mesh geometry={nodes.mesh_0_37.geometry} material={nodes.mesh_0_37.material} />
      <mesh geometry={nodes.mesh_0_38.geometry} material={nodes.mesh_0_38.material} />
      <mesh geometry={nodes.mesh_0_39.geometry} material={nodes.mesh_0_39.material} />
      <mesh geometry={nodes.mesh_0_40.geometry} material={nodes.mesh_0_40.material} />
      <mesh geometry={nodes.mesh_0_41.geometry} material={nodes.mesh_0_41.material} />
      <mesh geometry={nodes.mesh_0_42.geometry} material={nodes.mesh_0_42.material} />
      <mesh geometry={nodes.mesh_0_43.geometry} material={nodes.mesh_0_43.material} />
      <mesh geometry={nodes.mesh_0_44.geometry} material={nodes.mesh_0_44.material} />
      <mesh geometry={nodes.mesh_0_45.geometry} material={nodes.mesh_0_45.material} />
      <mesh geometry={nodes.mesh_0_46.geometry} material={nodes.mesh_0_46.material} />
      <mesh geometry={nodes.mesh_0_47.geometry} material={nodes.mesh_0_47.material} />
    </group>
  )
}

useGLTF.preload('/dirk-transformed.glb')
