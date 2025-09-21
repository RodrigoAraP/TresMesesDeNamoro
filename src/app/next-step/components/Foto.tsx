import Image from "next/image";

interface FotoProps {
  src: string;
  titulo: string;
  subtitulo?: string;
}

export default function Foto(props: FotoProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/90 shadow-2xl p-4 gap-2 rounded-lg">
      <Image src={props.src} alt="Foto" width={250} height={250} />
      <div className="flex flex-col items-end">
        <h1 className="text-lg font-semibold">{props.titulo}</h1>
        <p className="text-sm text-gray-500">{props.subtitulo}</p>
      </div>
    </div>
  )
}