import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface PaintTrail {
  id: number;
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [paintTrails, setPaintTrails] = useState<PaintTrail[]>([]);
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
      
      // Create paint trail
      const newTrail: PaintTrail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };
      
      setPaintTrails(prev => [...prev, newTrail]);
      
      // Remove trail after animation
      setTimeout(() => {
        setPaintTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 2000);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const isClickable = target.closest('a, button, [role="button"], [role="link"], .project-tile');
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
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x - 6,
          top: position.y - 6,
        }}
      />
      
      {/* Paint trails */}
      {paintTrails.map((trail) => (
        <div
          key={trail.id}
          className="paint-trail"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;