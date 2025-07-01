'use client';
import React, { useState } from 'react';
import Separator from './Separator';
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-[#6E8C8C]">
      <button 
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span 
          className="font-light text-[#414140]" 
          style={{ fontSize: '20px', lineHeight: '30px' }}
        >
          {question}
        </span>
        <span className="text-[#414140] ml-2 transform transition-transform">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p 
          className="text-[#414140] font-light" 
          style={{ fontSize: '18px', lineHeight: '28px' }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqItems = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required."
    }
  ];

  return (
    <div className="w-full bg-[#F6F3EA] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h3 
          className="text-4xl md:text-5xl font-light text-center mb-12" 
          style={{ 
            fontSize: '35px',
            color: '#414140'
          }}
        >
          Frequently Asked Questions
        </h3>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>
      </div>

 
    </div>
  );
}
