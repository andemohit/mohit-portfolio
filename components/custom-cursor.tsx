'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dx = 0, dy = 0, rx = 0, ry = 0, mx = 0, my = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const onOver = (e: MouseEvent) => {
      const tgt = (e.target as Element).closest('a, button, input, textarea, [role="button"]');
      if (ring.current) {
        ring.current.style.width = tgt ? '52px' : '32px';
        ring.current.style.height = tgt ? '52px' : '32px';
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
