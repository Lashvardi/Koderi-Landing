import { useEffect, useState, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBg({ id = 'particles', className = '' }) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const options = useMemo(() => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 900 },
      },
      color: { value: '#007ACC' },
      links: {
        enable: true,
        distance: 140,
        color: '#007ACC',
        opacity: 0.08,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        outModes: { default: 'bounce' },
      },
      opacity: {
        value: { min: 0.1, max: 0.3 },
      },
      size: {
        value: { min: 1, max: 2 },
      },
      shape: { type: 'circle' },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: { opacity: 0.2 },
        },
      },
    },
    detectRetina: true,
  }), [])

  if (!init) return null

  return (
    <Particles
      id={id}
      options={options}
      className={`absolute inset-0 ${className}`}
    />
  )
}
