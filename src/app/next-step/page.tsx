import { IconBook, IconCamera, IconGift } from "@tabler/icons-react";
import Botao from "./components/Botao";

export default function NextStep() {
  return (
    <div>
      <ul className="flex sm:flex-row flex-col gap-16 
      h-screen w-full flex-center 
      bg-radial from-white/80 via-blue-300  to-blue-300">
        <li><Botao href="/next-step/letter" text="Carta" icon={<IconBook />} /></li>
        <li><Botao href="/next-step/photos" text="Fotos" icon={<IconCamera />} /></li>
      </ul>
    </div>
  )
}