import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface NeonTrail {
  id: number;
  x: number;
  y: number;
}

const CyberCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [neonTrails, setNeonTrails] = useState<NeonTrail[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Only show on desktop
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    setIsVisible(true);

    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create neon trail
      const newTrail: NeonTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };
      
      setNeonTrails(prev => [...prev, newTrail]);
      
      // Remove trail after animation
      setTimeout(() => {
        setNeonTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 1500);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const isClickable = target.closest('a, button, [role="button"], [role="link"], .project-tile, .card-3d');
      setIsHovering(!!isClickable);
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`cyber-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      />
      
      {/* Neon trails */}
      {neonTrails.map((trail) => (
        <div
          key={trail.id}
          className="neon-trail"
          style={{
            left: trail.x - 1.5,
            top: trail.y - 1.5,
          }}
        />
      ))}
    </>
  );
};

export default CyberCursor;