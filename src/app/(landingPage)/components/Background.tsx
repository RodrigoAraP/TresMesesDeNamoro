export default function Background(){
  return (
    <div className="relative">
      <div className="flex overflow-hidden h-screen w-screen">
        <div className="w-1/2 h-[135%] lg:h-[130%] mix-blend-plus-lighter
          bg-[conic-gradient(from_90deg,#0c0c0c_0deg,#353535_110deg,#CCCCCC_360deg)]
        "/>
        <div className="w-1/2 h-[135%] lg:h-[130%] mix-blend-plus-lighter
         bg-[conic-gradient(from_270deg,#CCCCCC_0deg,#353535_250deg,#0c0c0c_360deg)]
        "/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full
        bg-gradient-to-b/10 from-0% via-70% to-100%
        from-[#2C1966] via-[#2C1966] to-[#2C1966]
      "/>
    </div>
  );
}
