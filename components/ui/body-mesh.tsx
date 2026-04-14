'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type Phase = 'scanning' | 'rotating-side' | 'holding' | 'rotating-front' | 'resetting'

const easeOutCubic = (t: number) => 1 - Math.pow(1 - Math.min(t, 1), 3)

export default function BodyMesh({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = mount.clientWidth
    const h = mount.clientHeight

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Scene + Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.01, 50)
    camera.position.set(0, 0, 3.2)
    camera.lookAt(0, 0, 0)

    // ── Lighting ──────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.28))

    const key = new THREE.DirectionalLight(new THREE.Color('#f5ede2'), 1.6)
    key.position.set(-2, 4, 2)
    scene.add(key)

    const fill = new THREE.DirectionalLight(new THREE.Color('#c8d4ff'), 0.38)
    fill.position.set(3, 0, 1)
    scene.add(fill)

    const rim = new THREE.DirectionalLight(new THREE.Color('#8B5CF6'), 0.85)
    rim.position.set(0, 1, -3)
    scene.add(rim)

    // ── Body material ─────────────────────────────────────────────────────────
    const bodyMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color('#1c1610'),
      specular: new THREE.Color('#5a4d3a'),
      shininess: 22,
      emissive: new THREE.Color('#EBDCCB'),
      emissiveIntensity: 0.035,
    })

    // ── Body group ────────────────────────────────────────────────────────────
    const body = new THREE.Group()
    scene.add(body)

    type Rot = [number, number, number]
    type Pos = [number, number, number]

    const add = (
      geo: THREE.BufferGeometry,
      pos: Pos,
      scl?: Rot,
      rot?: Rot,
    ) => {
      const mesh = new THREE.Mesh(geo, bodyMat)
      mesh.position.set(...pos)
      if (scl) mesh.scale.set(...scl)
      if (rot) mesh.rotation.set(...rot)
      body.add(mesh)
    }

    // HEAD — slightly tall ellipsoid
    add(new THREE.SphereGeometry(0.115, 20, 16),   [0, 0.82, 0],       [0.88, 1.18, 0.88])

    // NECK
    add(new THREE.CylinderGeometry(0.050, 0.060, 0.12, 14), [0, 0.70, 0])

    // TORSO — three stacked tapered cylinders
    add(new THREE.CylinderGeometry(0.210, 0.188, 0.28, 20), [0,  0.52, 0], [1.22, 1, 0.76])
    add(new THREE.CylinderGeometry(0.178, 0.172, 0.24, 20), [0,  0.27, 0], [1.18, 1, 0.78])
    add(new THREE.CylinderGeometry(0.168, 0.162, 0.16, 20), [0,  0.07, 0], [1.20, 1, 0.80])

    // HIPS
    add(new THREE.CylinderGeometry(0.188, 0.148, 0.26, 20), [0, -0.10, 0], [1.14, 1, 0.84])

    // SHOULDERS
    add(new THREE.SphereGeometry(0.082, 14, 10), [-0.27, 0.60, 0], [1.0, 1.0, 0.85])
    add(new THREE.SphereGeometry(0.082, 14, 10), [ 0.27, 0.60, 0], [1.0, 1.0, 0.85])

    // UPPER ARMS — A-pose: slight outward lean
    add(new THREE.CapsuleGeometry(0.058, 0.24, 4, 12), [-0.32, 0.42, 0.03], [0.90, 1, 0.88], [0, 0,  0.26])
    add(new THREE.CapsuleGeometry(0.058, 0.24, 4, 12), [ 0.32, 0.42, 0.03], [0.90, 1, 0.88], [0, 0, -0.26])

    // ELBOWS
    add(new THREE.SphereGeometry(0.052, 12, 9), [-0.36, 0.26, 0.05])
    add(new THREE.SphereGeometry(0.052, 12, 9), [ 0.36, 0.26, 0.05])

    // FOREARMS
    add(new THREE.CapsuleGeometry(0.044, 0.22, 4, 10), [-0.39, 0.09, 0.06], [0.85, 1, 0.82], [0.06, 0,  0.14])
    add(new THREE.CapsuleGeometry(0.044, 0.22, 4, 10), [ 0.39, 0.09, 0.06], [0.85, 1, 0.82], [0.06, 0, -0.14])

    // HANDS
    add(new THREE.SphereGeometry(0.040, 10, 8), [-0.41, -0.04, 0.07], [1.0, 0.65, 0.55])
    add(new THREE.SphereGeometry(0.040, 10, 8), [ 0.41, -0.04, 0.07], [1.0, 0.65, 0.55])

    // THIGHS
    add(new THREE.CapsuleGeometry(0.090, 0.28, 4, 14), [-0.11, -0.28, 0], [1.0, 1, 0.88])
    add(new THREE.CapsuleGeometry(0.090, 0.28, 4, 14), [ 0.11, -0.28, 0], [1.0, 1, 0.88])

    // KNEES
    add(new THREE.SphereGeometry(0.068, 12, 10), [-0.11, -0.44, 0.02], [1.0, 1.0, 0.86])
    add(new THREE.SphereGeometry(0.068, 12, 10), [ 0.11, -0.44, 0.02], [1.0, 1.0, 0.86])

    // CALVES — tapered, slight forward angle
    add(new THREE.CapsuleGeometry(0.068, 0.25, 4, 12), [-0.11, -0.60, 0.02], [0.84, 1, 0.78])
    add(new THREE.CapsuleGeometry(0.068, 0.25, 4, 12), [ 0.11, -0.60, 0.02], [0.84, 1, 0.78])

    // ANKLES
    add(new THREE.SphereGeometry(0.044, 10, 8), [-0.11, -0.76, 0.02])
    add(new THREE.SphereGeometry(0.044, 10, 8), [ 0.11, -0.76, 0.02])

    // FEET
    add(new THREE.BoxGeometry(0.10, 0.052, 0.22), [-0.11, -0.83, 0.06])
    add(new THREE.BoxGeometry(0.10, 0.052, 0.22), [ 0.11, -0.83, 0.06])

    // ── Clothing wireframes ───────────────────────────────────────────────────
    const makeClothMat = () => new THREE.MeshBasicMaterial({
      color: new THREE.Color('#EBDCCB'),
      wireframe: true,
      transparent: true,
      opacity: 0,
    })

    const shirtMat = makeClothMat()
    const shirtMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.215, 0.175, 0.58, 16, 4, true),
      shirtMat,
    )
    shirtMesh.position.set(0, 0.36, 0)
    shirtMesh.scale.set(1.22, 1, 0.76)
    body.add(shirtMesh)

    const pantsLMat = makeClothMat()
    const pantsL = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.088, 0.58, 4, 12),
      pantsLMat,
    )
    pantsL.position.set(-0.11, -0.36, 0.01)
    pantsL.scale.set(1.0, 1, 0.86)
    body.add(pantsL)

    const pantsRMat = makeClothMat()
    const pantsR = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.088, 0.58, 4, 12),
      pantsRMat,
    )
    pantsR.position.set(0.11, -0.36, 0.01)
    pantsR.scale.set(1.0, 1, 0.86)
    body.add(pantsR)

    const clothMats = [shirtMat, pantsLMat, pantsRMat]

    // ── Scan beam ─────────────────────────────────────────────────────────────
    const SCAN_BOT = -0.90
    const SCAN_TOP = 0.92

    const scanLineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#8B5CF6'), transparent: true, opacity: 0.95,
    })
    const scanGlowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8B5CF6'), transparent: true, opacity: 0.05, side: THREE.DoubleSide,
    })

    const scanLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-0.80, 0, 0),
        new THREE.Vector3( 0.80, 0, 0),
      ]),
      scanLineMat,
    )
    scene.add(scanLine)

    const scanGlow = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.10), scanGlowMat)
    scene.add(scanGlow)

    // ── Floor grid ────────────────────────────────────────────────────────────
    const gVerts: number[] = []
    const GDIV = 14, GSIZE = 3.2
    for (let i = 0; i <= GDIV; i++) {
      const p = (i / GDIV - 0.5) * GSIZE
      gVerts.push(p, 0, -GSIZE / 2, p, 0, GSIZE / 2)
      gVerts.push(-GSIZE / 2, 0, p, GSIZE / 2, 0, p)
    }
    const gGeo = new THREE.BufferGeometry()
    gGeo.setAttribute('position', new THREE.Float32BufferAttribute(gVerts, 3))
    const gMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#1d1a2e'), transparent: true, opacity: 0.5,
    })
    const grid = new THREE.LineSegments(gGeo, gMat)
    grid.position.y = -0.88
    scene.add(grid)

    // ── Animation state ───────────────────────────────────────────────────────
    let scanY = SCAN_BOT
    let phase: Phase = 'scanning'
    let phaseT = 0
    let clothAlpha = 0
    let elapsed = 0

    const ROT_DUR  = 1.8
    const HOLD_DUR = 2.8

    const onResize = () => {
      const nw = mount.clientWidth
      const nh = mount.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    // ── Loop ──────────────────────────────────────────────────────────────────
    let raf: number

    const tick = () => {
      raf = requestAnimationFrame(tick)
      elapsed += 0.010
      phaseT  += 0.010

      // Breathing
      body.scale.y = 1 + Math.sin(elapsed * 0.95) * 0.004

      switch (phase) {
        case 'scanning': {
          body.rotation.y = Math.sin(elapsed * 0.18) * 0.07
          scanY += 0.009
          scanLine.position.y = scanY
          scanGlow.position.y = scanY
          if (scanY >= SCAN_TOP) {
            phase = 'rotating-side'
            phaseT = 0
            scanLineMat.opacity = 0
            scanGlowMat.opacity = 0
          }
          break
        }
        case 'rotating-side': {
          body.rotation.y = easeOutCubic(phaseT / ROT_DUR) * (Math.PI / 2)
          if (phaseT >= ROT_DUR) { phase = 'holding'; phaseT = 0 }
          break
        }
        case 'holding': {
          body.rotation.y = Math.PI / 2
          clothAlpha = Math.min(clothAlpha + 0.006, 0.50)
          clothMats.forEach(m => { m.opacity = clothAlpha })
          if (phaseT >= HOLD_DUR) { phase = 'rotating-front'; phaseT = 0 }
          break
        }
        case 'rotating-front': {
          body.rotation.y = (Math.PI / 2) * (1 - easeOutCubic(phaseT / ROT_DUR))
          clothAlpha = Math.max(clothAlpha - 0.007, 0)
          clothMats.forEach(m => { m.opacity = clothAlpha })
          if (phaseT >= ROT_DUR) { phase = 'resetting'; phaseT = 0 }
          break
        }
        case 'resetting': {
          body.rotation.y = 0
          if (phaseT >= 0.8) {
            scanY = SCAN_BOT
            phase = 'scanning'
            phaseT = 0
            scanLineMat.opacity = 0.95
            scanGlowMat.opacity = 0.05
          }
          break
        }
      }

      renderer.render(scene, camera)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      bodyMat.dispose()
      clothMats.forEach(m => m.dispose())
      scanLineMat.dispose()
      scanGlowMat.dispose()
      gMat.dispose()
      gGeo.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className={className ?? 'w-full h-full'} />
}
