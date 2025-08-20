export default function Background(){
  return (
    <div className="relative">
      <div className="flex overflow-hidden h-screen w-screen">
        <div className="w-1/2 h-[140%] mix-blend-plus-lighter
          bg-conic-90 from-[#0c0c0c] via-[#353535] via-[30%] to-[#CCCCCC]
        "/>
        <div className="w-1/2 h-[140%] mix-blend-plus-lighter
         bg-conic-270 from-[#CCCCCC] via-[#353535] via-[70%] to-[#0c0c0c]
        "/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full
        bg-gradient-to-b/10 from-0% via-70% to-100%
        from-[#2C1966] via-[#2C1966] to-[#2C1966]
      "/>
    </div>
  );
}