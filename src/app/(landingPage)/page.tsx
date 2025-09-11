import Cabecalho from "./components/Cabecalho"
import Principal from "./components/Principal"
import Rodape from "./components/Rodape";
import {TimerProvider} from "./context/TimerContext";

export default function Home() {
  return (
    <div className="flex flex-col justify-between py-32 items-center h-screen w-max-[1440px]">
      <TimerProvider >
        <Cabecalho />
        <Principal />
        <Rodape />
      </TimerProvider>
    </div>
  );
}
