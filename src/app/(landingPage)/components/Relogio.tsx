'use client'
import { useEffect, useState } from "react";

export default function Relogio() {
  const [tempo, setTempo] = useState(Timer());

  function Timer() {
    const dataFinal = new Date("2025-09-24T12:00:00");
    const dataAtual = new Date();
    const delta = dataFinal.getTime() - dataAtual.getTime();

    const dias = Math.floor(delta / (1000 * 60 * 60 * 24));
    const horas = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutos = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const segundos = Math.floor((delta % (1000 * 60)) / 1000).toString().padStart(2, '0');

    return { dias, horas, minutos, segundos }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTempo(Timer());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className={`flex items-center justify-center
     text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[1000%] font-bold
     text-[#272727]/75 mix-blend-color-burn`}
    >
      {tempo.dias > 0 && <span className="">{tempo.dias} |</span>}
      {tempo.horas} : {tempo.minutos} : {tempo.segundos}
    </h1>
  )
}