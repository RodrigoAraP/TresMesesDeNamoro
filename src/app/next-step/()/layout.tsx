import Header from "./layout/Header";
import Menu from "./layout/Menu";
import MenuSm from "./layout/MenuSm";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full flex '>
      <div className="hidden sm:flex">
        <Menu />
      </div>
      <div className="flex flex-col flex-1 items-center
        bg-gradient-to-t from-white/30 via-blue-200 via-30% to-blue-300 
      ">
        <Header />
        <div className="flex flex-1 items-center justify-center pb-12">
          {children}
        </div>
        <MenuSm />
      </div>
    </div>
  )
}