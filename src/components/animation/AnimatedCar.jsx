import { useRef } from "react";
import { useAnimationFrame } from "motion/react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const AnimatedCar = () => {
  const carRef = useRef(null);

  useAnimationFrame((t) => {
    if (!carRef.current) return;

    const x = Math.sin(t / 1000) * 120; // movimiento horizontal
    const flip = Math.sin(t / 1000) < 0 ? "scaleX(-1)" : "scaleX(1)";

    carRef.current.style.transform = `translateX(${x}px) ${flip}`;
  });

  return (
    <div
      style={{
        height: "80px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        ref={carRef}
        style={{
          position: "absolute",
          top: 0,
          left: "calc(50% - 24px)", // centrado inicial (icono 48px aprox)
        }}
      >
        <DirectionsCarIcon
          sx={{
            fontSize: 48,
            color: "#f57c00",
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedCar;
