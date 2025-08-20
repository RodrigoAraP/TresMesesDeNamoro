import Background from "./components/Background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#193466]">
      <Background />
      <div className="absolute inset-0 mx-auto
        flex items-center justify-center
      ">
        {children}
      </div>
    </div>
  )
}