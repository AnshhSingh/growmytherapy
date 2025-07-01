import Image from "next/image";
import Link from "next/link";
// import Separator from "./Separator";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#F3F0E8] flex flex-col">
=
      <header className="container mx-auto w-[90%] sm:py-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L26.7 13.3L40 20L26.7 26.7L20 40L13.3 26.7L0 20L13.3 13.3L20 0Z" fill="#A2C4C4" fillOpacity="0.8"/>
            </svg>
          </div>
          <div>
            <h3 className="text-slate-800 font-bold text-xl md:text-2xl font-cormorant">Jennifer Hahm, Ph.D.</h3>
            <p className="text-slate-600 text-base" style={{ lineHeight: '35px' }}>Psychological Services</p>
          </div>
        </div>
      </header>

    
      <div className="flex-1 flex justify-center items-center w-full pb-20">
        <div 
          className="w-11/12 flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat relative rounded-sm overflow-hidden"
          style={{ 
            backgroundImage: "url('/images/hero.jpg')",
            backgroundPosition: "center",
            height: "calc(85vh - 20px)"
          }}
        >
=
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight font-cormorant" style={{ fontWeight: 700 }}>
              Begin Your Journey to<br />
              <span className="mt-2 block">Healing and Self-Discovery</span>
            </h1>
            
            <h2 className="text-white mb-8 md:mb-12 max-w-3xl mx-auto px-4 md:px-0 font-cormorant text-lg sm:text-2xl md:text-2xl lg:text-[1.6rem] leading-relaxed">
              Compassionate therapy for individuals seeking growth, resilience, and emotional wellness.
              <span className="block mt-2 md:mt-3">Available online with judgment-free safe environment</span>
            </h2>
            
            <div className="flex justify-center w-full">
              <Link 
                href="/schedule" 
                className="inline-block text-white uppercase tracking-wider hover:opacity-90 transition-all"
                style={{
                  width: "340px",
                  maxWidth: "90%",
                  textAlign: "center",
                  letterSpacing: "1px",
                  fontWeight: 500,
                  position: "relative",
                  height: "54px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0",
                  margin: "0 auto"
                }}
              >
               
                <div 
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "#A2C4C4",
                    borderRadius: "120px / 54px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                  }}
                  className="hover:bg-[#8BAEAE] transition-colors"
                />
                <span className="drop-shadow-md relative z-10 px-4">SCHEDULE A CONSULTATION</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
