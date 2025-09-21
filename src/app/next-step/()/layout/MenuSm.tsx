import { IconHome, IconPhoto, IconFileDescription } from "@tabler/icons-react";
import MenuItems from "./MenuItems";

export default function MenuSm() {
  return (
    <nav className="flex sm:hidden bg-gray-200 w-full p-3 justify-around fixed bottom-0 left-0">
      <MenuItems href="/next-step/letter" text="Carta" icon={<IconFileDescription />} />
      <MenuItems href="/next-step" text="Inicio" icon={<IconHome />} />
      <MenuItems href="/next-step/photos" text="Fotos" icon={<IconPhoto />} />
    </nav>
  )
}