import Cabecalho from "./components/Cabecalho"
import Principal from "./components/Principal"
import Rodape from "./components/Rodape";

export default function Home() {
  return (
    <div className="flex flex-col justify-between py-32 items-center h-screen w-[1920px]">
      <Cabecalho/>
      <Principal/>
      <Rodape/>
    </div>
  );
}
