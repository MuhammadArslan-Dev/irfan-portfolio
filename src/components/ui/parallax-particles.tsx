import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
}

interface ParallaxParticlesProps {
  density?: number;
  className?: string;
}

const ParallaxParticles = ({ density = 50, className = "" }: ParallaxParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show static particles for reduced motion
      const staticParticles = Array.from({ length: density / 3 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: 0,
        color: Math.random() > 0.5 ? 'neon-cyan' : 'neon-magenta',
      }));
      setParticles(staticParticles);
      return;
    }

    // Generate dynamic particles
    const generateParticles = () => {
      const newParticles = Array.from({ length: density }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        color: ['neon-cyan', 'neon-magenta', 'accent'][Math.floor(Math.random() * 3)],
      }));
      setParticles(newParticles);
    };

    generateParticles();

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Particle animation
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: (particle.y + particle.speed) % 100,
        x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.1,
      })));
    };

    const animationInterval = setInterval(animateParticles, 50);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(animationInterval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [density]);

  return (
    <div className={`parallax-particles ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`parallax-particle`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: `hsl(var(--${particle.color}) / 0.6)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(var(--${particle.color}) / 0.4)`,
            transform: `translate(${(mousePosition.x - 50) * particle.speed * 0.1}px, ${(mousePosition.y - 50) * particle.speed * 0.1}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxParticles;