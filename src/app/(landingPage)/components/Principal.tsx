'use client'
import { useContext } from "react";
import Acesso from "./Acesso";
import MenuCard from "./MenuCard";
import Relogio from "./Relogio";
import TimerContext from "../context/TimerContext";

export default function Principal() {
  const temporizador = useContext(TimerContext);

  return (
    <div className="overflow-scroll scroll-hidden
    flex flex-col items-center justify-start
    p-4 gap-y-20 lg:gap-y-28 h-[40vh] lg:h-[39vh] py-6 lg:py-20   
   ">
      <div className={`${temporizador.timer.delta <= 0 && `hidden`}`}>
        <Relogio />
      </div>
      <MenuCard />
      <div className={`${temporizador.timer.delta > 0 && `hidden`}`}>
        <Acesso />
      </div>
    </div>
  )
}