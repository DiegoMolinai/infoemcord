"use client";
import { useRef } from "react";
import { useAnimationFrame } from "motion/react";

const AnimatedGear = () => {
  const gearRef = useRef(null);

  useAnimationFrame((t) => {
    if (!gearRef.current) return;

    const rotate = (t / 20) % 360;
    const bounce = Math.sin(t / 500) * 5;

    gearRef.current.style.transform = `translateY(${bounce}px) rotate(${rotate}deg)`;
  });

  return (
    <div
      ref={gearRef}
      style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "radial-gradient(circle at center, #f57c00 30%, #555 70%)",
        border: "2px dashed #333",
        margin: "0 auto 1rem",
        boxShadow: "0 0 12px rgba(0,0,0,0.2)",
      }}
    ></div>
  );
};

export default AnimatedGear;
