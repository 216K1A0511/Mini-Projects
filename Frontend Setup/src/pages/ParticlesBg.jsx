import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: { value: 80 },
          move: { enable: true },
          opacity: { value: 0.5 },
          size: { value: 3 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3
          }
        }
      }}
      className="absolute inset-0"
    />
  );
}