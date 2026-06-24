"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 3200,
    suffix: "+",
    label: "Matters Resolved",
    description: "Successfully completed legal matters across all practice areas",
  },
  {
    value: 500,
    suffix: "+",
    label: "Qualified Experts",
    description: "Vetted professionals spanning medicine, finance, and technology",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Law firms and organizations that return engagement after engagement",
  },
  {
    value: 15,
    suffix: "+",
    label: "Practice Areas",
    description: "Specialized disciplines from IME networks to AI governance",
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const totalFrames = Math.max(1, Math.round(duration / 16));

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(target * eased));

      if (progress === 1) {
        setCount(target);
        window.clearInterval(timer);
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
  active,
}: {
  stat: (typeof stats)[number];
  index: number;
  active: boolean;
}) {
  const count = useCountUp(stat.value, 1400 + index * 120, active);

  return (
    <article className="border border-[#E5EAF1] bg-white p-6 sm:p-7">
      <div className="mb-4 flex items-baseline gap-1">
        <span className="font-serif text-[clamp(2.25rem,3.4vw,3.35rem)] font-light leading-none tracking-[-0.02em] text-[#0B1F3A]">
          {active ? count.toLocaleString() : "0"}
        </span>
        <span className="font-serif text-[1.75rem] font-light leading-none text-[#C09B5B]">
          {stat.suffix}
        </span>
      </div>

      <div className="mb-4 h-px w-9 bg-[#C09B5B]" />

      <p className="mb-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#0B1F3A]">
        {stat.label}
      </p>

      <p className="text-[13px] leading-relaxed text-[#6B82A0]">
        {stat.description}
      </p>
    </article>
  );
}

export default function HomeStats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="border-y border-[#E5EAF1] bg-[#F7F9FC] py-16 sm:py-18 lg:py-20"
      aria-label="Key metrics"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}