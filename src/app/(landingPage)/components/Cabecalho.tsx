import { IconHeart, IconLock } from "@tabler/icons-react";
import Status from "./Status";

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center w-full">
      <Status />
      <div className="flex items-center gap-2 text-white/60 font-semibold text-xl">
        <span>Ana Clara</span>
        <IconHeart stroke={3}/>
        <span>Rodrigo</span>
      </div>
    </header>
  )
}