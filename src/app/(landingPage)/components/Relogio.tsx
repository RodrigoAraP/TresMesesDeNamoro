'use client'
import { useContext } from "react";
import TimerContext from "../context/TimerContext";

export default function Relogio() {
  const temporizador = useContext(TimerContext);

  return (
    <h1 className={`flex items-center justify-center
     text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[1000%] font-bold
     text-[#272727]/75 mix-blend-color-burn pt-56 pb-1
   `}>
      {temporizador.timer.dias > 0 && <span className="">{temporizador.timer.dias} |</span>}
      {temporizador.timer.horas} : {temporizador.timer.minutos} : {temporizador.timer.segundos}
    </h1>
  )
}