import Image from "next/image";

export default function Seta() {
  return (
    <div className="relative flex items-center justify-center ">
      <div>
        <Image src='/Circulo.svg' alt='Circulo' width={150} height={150} />
      </div>
      <div className="absolute">
        <Image src='/SetaG.svg' alt='Seta' width={60} height={60} />
      </div>
    </div>
  )
}