import Image from "next/image";
import Link from "next/link";
import Separator from "./Separator";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#F3F0E8] flex flex-col">
      {/* Header */}
      <header className="container mx-auto w-[90%] sm:py-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div>
              <Image 
                src="/logo.png" 
                alt="Jennifer Hahm, Ph.D. - Psychological Services" 
                width={210} 
                height={120} 
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content with hero image */}
      <div className="flex-1 flex justify-center items-center w-full pb-20">
        <div 
          className="w-11/12 flex flex-col items-center justify-center text-center relative rounded-sm overflow-hidden"
          style={{ 
            height: "calc(85vh - 20px)" // Adjust height to allow background to extend
          }}
        >
          {/* Hero image with Next.js Image component */}
          <div className="absolute inset-0">
            <Image 
              src="/images/hero.jpg"
              alt="Therapy and counseling services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 85vw"
              quality={90}
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-20 z-[1]"></div>
          
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
                {/* Egg-shaped background */}
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
