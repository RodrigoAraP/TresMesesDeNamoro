import { IconLock, IconLockOpen } from "@tabler/icons-react";

export interface StatusProps {
  aberto?: boolean;
}

export default function Status({ aberto = false }: StatusProps) {
  return (
    <>
      <span className="flex font-semibold text-xl items-center text-white/25">
        {aberto ? <IconLockOpen /> : <IconLock />} {aberto ? "Aberto" : "Fechado"}
      </span>
    </>
  )
}