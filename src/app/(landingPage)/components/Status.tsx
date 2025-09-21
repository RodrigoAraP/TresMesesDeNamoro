'use client'

import { IconLock, IconLockOpen } from "@tabler/icons-react";
import TimerContext from "../context/TimerContext";
import { useContext } from "react";

export default function Status() {
  const ctx = useContext(TimerContext)
  const aberto = ctx.timer.delta <= 0

  return (
    <>
      <span className="flex font-semibold text-xl items-center text-white/25">
        {aberto ? <IconLockOpen /> : <IconLock />} {aberto ? "Aberto" : "Fechado"}
      </span>
    </>
  )
}