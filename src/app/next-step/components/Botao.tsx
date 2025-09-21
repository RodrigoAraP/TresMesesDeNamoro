import Link from "next/link";

interface BotaoProps {
  href: string;
  text: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Botao(props: BotaoProps) {
  return (
    <Link href={props.href} className="flex items-center 
    px-8 py-3 gap-5 rounded-full font-bold text-lg
    text-white bg-sky-300 hover:bg-sky-500
      shadow-lg hover:shadow-xl
    ">
      {props.icon && <span>{props.icon}</span>}
      <span>{props.text}</span>
    </Link>
  )
}