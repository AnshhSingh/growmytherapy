import Image from "next/image";
import Separator from "./Separator";

export default function About() {
  return (
    <div className="w-full bg-[#FEFEFE] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 w-full lg:max-w-[75%]">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-4xl lg:text-3xl text-[#7E7E6B] mb-8 font-cormorant" style={{ fontWeight: 700, fontSize: '35px', lineHeight: '48px' }}>
              About Dr. Serena Blake
            </h3>
            
            <div className="text-[#7E7E6B] space-y-6 text-lg">
              <p style={{ lineHeight: '35px', fontSize: '19px' }}>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with over eight years of experience helping individuals navigate life's challenges. With more than 500 client sessions to her name, she specializes in treating anxiety, trauma, and relationship issues using a warm, evidence-based approach. By integrating cognitive-behavioral therapy (CBT), mindfulness practices, and tailored interventions, Dr. Blake supports each client in building emotional resilience and fostering long-term well-being.
              </p>
              
              <p style={{ lineHeight: '35px', fontSize: '19px', paddingBottom: '40px' }}>
                Whether you're facing daily stressors or working through deeper emotional wounds, Dr. Blake provides a safe, nonjudgmental environment where healing can begin. Sessions are available both in-person at her calming Maplewood Drive office and virtually via Zoom, offering flexibility to fit your lifestyle. Her practice is rooted in compassion, collaboration, and clinical expertise—empowering you to move forward with clarity, confidence, and purpose.
              </p>
            </div>
          </div>
          
    
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/about.jpg" 
                alt="Dr. Jennifer Hahm"
                width={450}
                height={550}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Separator className="pt-26"/>
    </div>
  );
}
