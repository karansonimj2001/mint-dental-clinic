import { Canvas, useFrame } from '@react-three/fiber'
import { Float, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Box3, Group, Sphere, Vector3 } from 'three'
import { assetUrl } from '../data/site'

function FittedModel({
  url,
  targetSize = 1.1,
}: {
  url: string
  targetSize?: number
}) {
  const { scene } = useGLTF(url)

  const fitted = useMemo(() => {
    const clone = scene.clone(true)
    clone.updateMatrixWorld(true)

    const bounds = new Box3().setFromObject(clone)
    const center = bounds.getCenter(new Vector3())
    const sphere = bounds.getBoundingSphere(new Sphere())

    const scale = sphere.radius > 0
      ? targetSize / sphere.radius
      : 1

    return {
      scene: clone,
      scale,
      position: [
        -center.x * scale,
        -center.y * scale,
        -center.z * scale,
      ] as [number, number, number],
    }
  }, [scene, targetSize])

  return (
    <group position={fitted.position} scale={fitted.scale}>
      <primitive object={fitted.scene} />
    </group>
  )
}

function ScrollModels() {
  const stethoscope = useRef<Group>(null)
  const tooth = useRef<Group>(null)
  const equipment = useRef<Group>(null)

  const progress = useRef(0)

  useEffect(() => {
    const update = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      )

      progress.current = Math.min(
        1,
        Math.max(0, window.scrollY / maxScroll),
      )
    }

    update()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useFrame((state, delta) => {
    const p = progress.current
    const vw = state.viewport.width
    const maxX = vw * 0.31

    // xFrom/xTo are fractions of the viewport width so each model stays in
    // its intended visual zone on every screen size. The stethoscope holds
    // the right side of the hero (away from the heading); the others drift
    // gently through their scroll windows. Reverse works automatically
    // because targets are derived from scroll progress.
    const models = [
      { ref: stethoscope, start: 0, end: 0.35, xFrom: 0.28, xTo: 0.15 },
      { ref: tooth, start: 0.35, end: 0.68, xFrom: -0.1, xTo: 0.1 },
      { ref: equipment, start: 0.68, end: 1.01, xFrom: 0.12, xTo: -0.06 },
    ]

    models.forEach(({ ref, start, end, xFrom, xTo }) => {
      const group = ref.current
      if (!group) return

      const active = p >= start && p < end
      group.visible = active

      if (!active) return

      const localProgress = Math.min(
        1,
        Math.max(0, (p - start) / (end - start)),
      )

      const drift = xFrom + (xTo - xFrom) * localProgress
      const targetX = Math.max(-maxX, Math.min(maxX, vw * drift))

      group.position.x +=
        (targetX - group.position.x) * Math.min(1, delta * 5)

      group.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.13

      group.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.45) * 0.14

      group.rotation.z =
        -0.12 + localProgress * 0.24
    })
  })

  return (
    <>
      {/* One Suspense boundary per model so the 82 MB handpiece
          never blocks the 240 KB stethoscope from appearing. */}
      <Suspense fallback={null}>
        <group ref={stethoscope} visible>
          <FittedModel url={assetUrl('models/stethoscope.glb')} />
        </group>
      </Suspense>

      <Suspense fallback={null}>
        <group ref={tooth} visible={false}>
          <FittedModel url={assetUrl('models/tooth.glb')} />
        </group>
      </Suspense>

      <Suspense fallback={null}>
        <group ref={equipment} visible={false}>
          <FittedModel url={assetUrl('models/dental-handpiece.glb')} />
        </group>
      </Suspense>
    </>
  )
}

export default function SharedDentalScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'low-power',
        }}
      >
        <ambientLight intensity={1.8} />

        <directionalLight
          position={[3, 5, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-4, -2, 3]}
          intensity={1.2}
          color="#d8f4e2"
        />

        <Suspense fallback={null}>
          <Float
            speed={0.7}
            rotationIntensity={0.06}
            floatIntensity={0.1}
          >
            <ScrollModels />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  )
}
