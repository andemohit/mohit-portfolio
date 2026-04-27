'use client';

import { useEffect, useState } from 'react';
import { useInView } from './hooks';

interface CounterProps {
  to: number | string;
  suffix?: string;
  duration?: number;
}

function Counter({ to, suffix = '', duration = 1400 }: CounterProps) {
  const [ref, inView] = useInView();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView || typeof to !== 'number') return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round((to as number) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className="stat-num">
      {typeof to === 'number' ? val : to}
      {typeof to === 'number' && <span className="plus">{suffix}</span>}
      {typeof to !== 'number' && <span className="inf">{to}</span>}
    </span>
  );
}

const STATS = [
  { num: 8, suffix: '+', label: 'Years experience' },
  { num: 50, suffix: '+', label: 'Projects shipped' },
  { num: 3, suffix: '', label: 'Companies' },
  { num: '∞' as const, suffix: '', label: 'Lines of code' },
];

export default function StatsBar() {
  return (
    <div className="stats">
      {STATS.map((s, i) => (
        <div key={i} className="stat">
          <Counter to={s.num as number | string} suffix={s.suffix} />
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
