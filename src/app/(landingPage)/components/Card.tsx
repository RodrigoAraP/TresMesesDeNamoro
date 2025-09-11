interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div>
      <div className="relative">
        <div className="absolute -right-2 -top-3
          w-11 h-11 flex items-center justify-center rounded-full
          bg-[radial-gradient(circle_at_center,#8C8CFF,#31318F)]
          ">
            {props.icon}
        </div>
        <div className=" px-4 py-5 gap-2 xl:w-[415px] w-80 h-36
          border border-white/10 rounded-3xl shadow-lg inset-shadow-sm
          bg-gradient-to-br from-white/5 to-white/30
          ">
          <h2 className="text-2xl text-black/80 font-semibold">{props.title}</h2>
          <p className="text-black/60 text-sm xl:text-base">{props.description}</p>
        </div>
      </div>
    </div>
  )
}