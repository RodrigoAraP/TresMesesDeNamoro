'use client'
import { createContext, useEffect, useState } from "react"

interface TimerContextType {
  timer: {
    dias: number;
    horas: string;
    minutos: string;
    segundos: string;
    delta: number;
  }
}

const TimerContext = createContext({} as TimerContextType)

function Timer() {
  const dataFinal = new Date("2025-09-24T18:00:00");
  const dataAtual = new Date();
  const delta = dataFinal.getTime() - dataAtual.getTime();

  const dias = Math.floor(delta / (1000 * 60 * 60 * 24));
  const horas = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  const minutos = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const segundos = Math.floor((delta % (1000 * 60)) / 1000).toString().padStart(2, '0');

  return { dias, horas, minutos, segundos, delta }
}

export function TimerProvider(props: React.PropsWithChildren) {
  const [timer, setTimer] = useState(Timer());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(Timer());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <TimerContext.Provider value={{ timer }}>
      {props.children}
    </TimerContext.Provider>
  )
}

export default TimerContext