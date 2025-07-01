import React from 'react';
import Image from 'next/image';
import Separator from './Separator';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full overflow-hidden w-72 h-72 mb-6">
        <Image 
          src={imageSrc} 
          alt={title}
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-center font-light text-[#414140] mb-4" style={{ fontSize: '26px', lineHeight: '33px', fontWeight: 300 }}>{title}</h3>
      <p className="text-center text-base font-light text-[#414140] max-w-md mx-auto lg:max-w-[80%]" style={{ fontSize: '16px', lineHeight: '29px' }}>{description}</p>

    </div>
  );
};

export default function Services() {
  const services = [
    {
      imageSrc: "/images/service1.jpg",
      title: "Anxiety & Stress Management",
      description: "Navigate life's pressures with effective coping strategies tailored to your unique needs. Learn practical techniques to reduce anxiety, manage daily stressors, and cultivate a calmer mind. Together, we'll work toward building resilience and creating sustainable mental wellness practices for long-term emotional balance."
    },
    {
      imageSrc: "/images/service2.jpg",
      title: "Relationship Counseling",
      description: "Strengthen connections and improve communication in your most important relationships. Whether addressing conflicts with a partner, family dynamics, or friendship challenges, we'll explore patterns that may be hindering meaningful connection. Develop healthier boundaries, deeper understanding, and more fulfilling relationships through compassionate guidance."
    },
    {
      imageSrc: "/images/service3.jpg",
      title: "Trauma Recovery",
      description: "Heal from past experiences in a safe, supportive environment designed for your unique journey toward recovery. Using evidence-based approaches, we'll work through traumatic memories and their impact on your current life. Develop tools for processing difficult emotions, reclaiming your sense of safety, and moving forward with renewed strength and resilience."
    }
  ];

  return (
    
    <div className="w-full bg-[#F6F3EA] py-16 md:py-24">
    
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto mb-20">
          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-10 text-[#4A4A40]" 
            style={{ lineHeight: '1.3' }}
          >
            Therapy can be a space where you invest in yourself—
            <br/>one of the highest forms of self-care.
          </h3>
          
          <p 
            className="text-center font-light text-[#4A4A40] mx-auto"
            style={{ fontSize: '18px', lineHeight: '32px', maxWidth: '90%' }}
          >
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it 
            alone. Therapy offers you the time and space to work toward wellness and peace.
          </p>
        </div>
<Separator className='pb-12'/>
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#4A4A40] mb-16 font-cormorant">
          Areas of Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <Separator className="mt-16" />
    </div>
  );
}
