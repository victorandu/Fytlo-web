'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ── Skeleton joint positions (A-pose, body centered at world origin) ──────────
const J: Record<string, [number, number, number]> = {
  head:   [0,      0.88,  0   ],
  neck:   [0,      0.70,  0   ],
  chest:  [0,      0.48,  0   ],
  belly:  [0,      0.22,  0   ],
  hips:   [0,      0.00,  0   ],
  shldrL: [-0.26,  0.58,  0   ],
  shldrR: [ 0.26,  0.58,  0   ],
  elbowL: [-0.38,  0.26,  0.04],
  elbowR: [ 0.38,  0.26,  0.04],
  wristL: [-0.42, -0.10,  0.06],
  wristR: [ 0.42, -0.10,  0.06],
  hipL:   [-0.12, -0.08,  0   ],
  hipR:   [ 0.12, -0.08,  0   ],
  kneeL:  [-0.13, -0.44,  0   ],
  kneeR:  [ 0.13, -0.44,  0   ],
  ankleL: [-0.13, -0.82,  0   ],
  ankleR: [ 0.13, -0.82,  0   ],
}

const BONES: [string, string][] = [
  ['head',  'neck'],  ['neck',  'chest'], ['chest', 'belly'], ['belly', 'hips'],
  ['neck',  'shldrL'], ['shldrL', 'elbowL'], ['elbowL', 'wristL'],
  ['neck',  'shldrR'], ['shldrR', 'elbowR'], ['elbowR', 'wristR'],
  ['hips',  'hipL'],  ['hips',  'hipR'],  ['hipL',  'hipR'],
  ['hipL',  'kneeL'], ['kneeL', 'ankleL'],
  ['hipR',  'kneeR'], ['kneeR', 'ankleR'],
]

type Phase = 'scanning' | 'holding' | 'fading'

export default function BodyMesh({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Renderer ────────────────────────────────────────────────────────────
    const w = mount.clientWidth
    const h = mount.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Scene & Camera ───────────────────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(46, w / h, 0.01, 50)
    camera.position.set(0, 0.04, 2.9)
    camera.lookAt(0, 0.04, 0)

    // ── Materials ────────────────────────────────────────────────────────────
    const accent = new THREE.Color('#EBDCCB')
    const violet = new THREE.Color('#8B5CF6')

    const wireMat = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.55 })
    const jointMat = new THREE.MeshBasicMaterial({ color: accent })
    const scanLineMat = new THREE.LineBasicMaterial({ color: violet, transparent: true, opacity: 0.95 })
    const scanGlowMat = new THREE.MeshBasicMaterial({ color: violet, transparent: true, opacity: 0.05, side: THREE.DoubleSide })

    // ── Body group ───────────────────────────────────────────────────────────
    const body = new THREE.Group()
    scene.add(body)

    // Skeleton bones
    BONES.forEach(([a, b]) => {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...J[a]),
        new THREE.Vector3(...J[b]),
      ])
      body.add(new THREE.Line(geo, wireMat))
    })

    // Joint spheres
    Object.values(J).forEach(([x, y, z]) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.020, 8, 6), jointMat)
      mesh.position.set(x, y, z)
      body.add(mesh)
    })

    // Head wireframe
    const headEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.SphereGeometry(0.118, 10, 8)),
      wireMat.clone(),
    )
    headEdge.position.set(...J.head)
    body.add(headEdge)

    // Torso cage
    const torsoCage = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.21, 0.175, 0.56, 10, 2, true)),
      wireMat.clone(),
    )
    torsoCage.position.set(0, 0.29, 0)
    body.add(torsoCage)

    const pelvisCage = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.165, 0.145, 0.18, 10, 1, true)),
      wireMat.clone(),
    )
    pelvisCage.position.set(0, -0.01, 0)
    body.add(pelvisCage)

    // ── Floor grid (manual LineSegments to avoid GridHelper material typing) ─
    const gridVerts: number[] = []
    const GDIV = 16
    const GSIZE = 3.0
    for (let i = 0; i <= GDIV; i++) {
      const p = (i / GDIV - 0.5) * GSIZE
      gridVerts.push(p, 0, -GSIZE / 2, p, 0, GSIZE / 2)
      gridVerts.push(-GSIZE / 2, 0, p, GSIZE / 2, 0, p)
    }
    const gridGeo = new THREE.BufferGeometry()
    gridGeo.setAttribute('position', new THREE.Float32BufferAttribute(gridVerts, 3))
    const gridMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#1d1a2e'), transparent: true, opacity: 0.55,
    })
    const grid = new THREE.LineSegments(gridGeo, gridMat)
    grid.position.y = -0.86
    scene.add(grid)

    // ── Scan beam ────────────────────────────────────────────────────────────
    const SCAN_BOT = -0.91
    const SCAN_TOP = 0.92

    const scanLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-0.70, 0, 0),
        new THREE.Vector3( 0.70, 0, 0),
      ]),
      scanLineMat,
    )
    scene.add(scanLine)

    const scanGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 0.09),
      scanGlowMat,
    )
    scene.add(scanGlow)

    // ── Clothing wireframes (invisible until scan completes) ─────────────────
    const shirtMat   = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0 })
    const pantsLMat  = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0 })
    const pantsRMat  = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0 })

    const shirt = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.218, 0.182, 0.58, 12, 3, true)),
      shirtMat,
    )
    shirt.position.set(0, 0.29, 0)
    body.add(shirt)

    const pantsL = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.098, 0.078, 0.74, 8, 3, true)),
      pantsLMat,
    )
    pantsL.position.set(-0.13, -0.40, 0)
    body.add(pantsL)

    const pantsR = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.098, 0.078, 0.74, 8, 3, true)),
      pantsRMat,
    )
    pantsR.position.set(0.13, -0.40, 0)
    body.add(pantsR)

    // ── Animation state ──────────────────────────────────────────────────────
    let scanY = SCAN_BOT
    let phase: Phase = 'scanning'
    let holdT = 0
    let clothAlpha = 0
    let elapsed = 0

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      const nw = mount.clientWidth
      const nh = mount.clientHeight
      camera.aspect = nw / nh
      camera.updateProjectionMatrix()
      renderer.setSize(nw, nh)
    }
    window.addEventListener('resize', onResize)

    // ── Loop ─────────────────────────────────────────────────────────────────
    let raf: number

    const tick = () => {
      raf = requestAnimationFrame(tick)
      elapsed += 0.010

      // Gentle sway + breath
      body.rotation.y = Math.sin(elapsed * 0.20) * 0.28
      body.scale.y = 1 + Math.sin(elapsed * 1.0) * 0.004

      if (phase === 'scanning') {
        scanY += 0.009
        scanLine.position.y = scanY
        scanGlow.position.y = scanY
        if (scanY >= SCAN_TOP) phase = 'holding'

      } else if (phase === 'holding') {
        // Fade out scan beam
        scanLineMat.opacity = Math.max(scanLineMat.opacity - 0.025, 0)
        scanGlowMat.opacity = Math.max(scanGlowMat.opacity - 0.003, 0)
        // Fade in clothing
        clothAlpha = Math.min(clothAlpha + 0.005, 0.50)
        shirtMat.opacity  = clothAlpha
        pantsLMat.opacity = clothAlpha * 0.80
        pantsRMat.opacity = clothAlpha * 0.80
        holdT += 0.010
        if (holdT > 4.0) phase = 'fading'

      } else if (phase === 'fading') {
        clothAlpha = Math.max(clothAlpha - 0.004, 0)
        shirtMat.opacity  = clothAlpha
        pantsLMat.opacity = clothAlpha * 0.80
        pantsRMat.opacity = clothAlpha * 0.80
        if (clothAlpha <= 0) {
          // Reset for next cycle
          scanY = SCAN_BOT
          phase = 'scanning'
          holdT = 0
          scanLineMat.opacity = 0.95
          scanGlowMat.opacity = 0.05
        }
      }

      renderer.render(scene, camera)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      wireMat.dispose()
      jointMat.dispose()
      scanLineMat.dispose()
      scanGlowMat.dispose()
      shirtMat.dispose()
      pantsLMat.dispose()
      pantsRMat.dispose()
      gridMat.dispose()
      gridGeo.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className={className ?? 'w-full h-full'} />
}
