"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[500px] h-[500px] bg-upyb-blue/20 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
}