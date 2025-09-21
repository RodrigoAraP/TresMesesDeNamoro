import Status from "./Status";
import AnaRodrigo from "@/app/shared/AnaRodrigo";

export default function Cabecalho() {
  return (
    <header className="flex flex-col sm:flex-row gap-7 justify-between items-center w-full">
      <Status />
      <AnaRodrigo />
    </header>
  )
}