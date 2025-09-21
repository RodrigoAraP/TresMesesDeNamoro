import { IconFileDescription, IconHome, IconPhoto } from "@tabler/icons-react";
import MenuItems from "./MenuItems";

export default function Menu() {
  return (
    <nav className='bg-gray-200 sm:w-36 md:w-64 h-full'>
      <div className="
        fixed top-0 left-0 
        flex flex-col p-8 gap-8
        text-xl font-medium
      ">
      <MenuItems href="/next-step" text="Inicio" icon={<IconHome />} />
      <MenuItems href="/next-step/letter" text="Carta" icon={<IconFileDescription />} />
      <MenuItems href="/next-step/photos" text="Fotos" icon={<IconPhoto />} />
      </div>
    </nav>
  )
}