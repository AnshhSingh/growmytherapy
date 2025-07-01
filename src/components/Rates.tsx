import React from 'react';
import Separator from './Separator';

export default function Rates() {
  return (
    <div className="w-full bg-[#94B0B0] md:py-24 text-center ">
      <div className="container mx-auto px-6 md:px-12">
        <h3 
          className="text-4xl md:text-5xl font-light text-center mb-8" 
          style={{ fontSize: '35px' }}
        >
          Rates and Insurance
        </h3>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <p 
            className="text-center font-light" 
            style={{ fontSize: '19px', lineHeight: '35px' }}
          >
            $200 / individual session
          </p>
          
          <p 
            className="text-center font-light" 
            style={{ fontSize: '19px', lineHeight: '30px' }}
          >
            $240 / couples session
          </p>
          
          <p 
            className="text-center font-light" 
            style={{ fontSize: '19px', lineHeight: '30px' }}
          >
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p>
          
          <p 
            className="text-center font-light" 
            style={{ fontSize: '19px', lineHeight: '30px' }}
          >
            For out-of-network plans, I've partnered with Mentaya using{' '}
            <a 
              href="#" 
              className="underline hover:text-[#4A4A40] transition-colors"
              style={{ color: '#000000' }}
            >
              this tool
            </a>{' '}
            to help you check your eligibility for reimbursement for my services.
          </p>
        </div>
      </div>
      {/* <Separator className="mt-16" /> */}
    </div>
  );
}
