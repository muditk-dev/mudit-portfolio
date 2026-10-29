import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Track hoverable targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    // Smooth follower loop
    let animationFrameId: number;
    const followLoop = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(followLoop);
    };
    animationFrameId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference">
      {/* Precision Center Dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-acid-lime transition-transform duration-75 ease-out ${
          isClicking ? 'scale-75' : isHovered ? 'scale-150' : 'scale-100'
        }`}
      />
      {/* Outer Magnetic Follower Ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-acid-lime/60 transition-[width,height,background-color,border-color] duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-acid-lime/20 border-acid-lime'
            : isClicking
            ? 'w-6 h-6 -ml-3 -mt-3 border-acid-lime bg-acid-lime/40'
            : ''
        }`}
      >
        {isHovered && (
          <span className="w-1 h-1 rounded-full bg-acid-lime animate-ping" />
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
