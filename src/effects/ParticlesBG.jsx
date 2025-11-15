import Particles from "@tsparticles/react";

export default function ParticlesBG() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { speed: 1 }
        }
      }}
      className="fixed inset-0 -z-10"
    />
  );
}
