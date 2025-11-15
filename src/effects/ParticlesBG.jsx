// src/effects/ParticlesBG.jsx
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine) => {
    // Loads the slim bundle → smallest + fastest
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },

          color: { value: "#00eaff" },

          shape: { type: "circle" },

          opacity: {
            value: 0.6,
            anim: { enable: false },
          },

          size: {
            value: { min: 1, max: 4 },
          },

          links: {
            enable: true,
            distance: 140,
            color: "#00eaff",
            opacity: 0.5,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBG;
