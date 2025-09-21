import Foto from "./Foto";

interface SecaoProps {
  reverse?: boolean;
  src: string;
  titulo: string;
  subtitulo?: string;
  descricao: string;
}

export default function Secao(props: SecaoProps) {
  return (
    <div className={`flex items-center justify-evenly gap-10 ${props.reverse ? 'flex-row-reverse' : ''}`}>
      <div className="">
        <Foto src={props.src} titulo={props.titulo} subtitulo={props.subtitulo} />
      </div>
      <div className="w-2/5">
        <p className="text-wrap">{props.descricao}</p>
      </div>
    </div>
  )
}