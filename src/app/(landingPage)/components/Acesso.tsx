import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function Acesso() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xl text-black/90">Finalmente a espera acabou!!!</p>
        <p className="text-xl text-black/90">Vamos ver o que acontece agora...</p>
      </div>
      <div className="flex justify-center">
        <button className="flex bg-white/70 hover:bg-zinc-300 text-black/70 p-2 pl-4 gap-2 rounded-full">
          Continuar
          <div className="flex items-center justify-center p-1 rounded-full bg-black">
            <IconArrowRight size={16} stroke={3} color="white" />
          </div>
        </button>
      </div>
    </div>
  )
}