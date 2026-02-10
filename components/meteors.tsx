"use client";
import { useEffect, useState } from "react";

export const Meteors = ({ number = 20 }: { number?: number }) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      // On randomise la position verticale (top) entre 0% et 100% de l'écran
      top: Math.floor(Math.random() * 100) + "%", 
      // On randomise aussi la position horizontale
      left: Math.floor(Math.random() * 100) + "%", 
      // Délais et durées aléatoires pour éviter qu'elles tombent toutes en même temps
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={
            "pointer-events-none absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          }
          style={style}
        >
          {/* La traînée lumineuse du météore */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};