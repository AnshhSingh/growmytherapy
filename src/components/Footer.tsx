import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F3EA] py-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="mb-2">
          <h4 className="text-xl font-medium text-[#1E3A33]">Dr. Serena Blake, Ph.D., Licensed Psychologist</h4>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[#1E3A33]">
          <p className="flex items-center">

            Phone: (323) 555-0192
          </p>
          <p className="flex items-center">

          
            Email: <a href="mailto:serena@blakepsychology.com" className="hover:underline ml-1">serena@blakepsychology.com</a>
          </p>
        </div>
        <div className="mt-6 text-sm text-[#1E3A33] opacity-70">
          © {new Date().getFullYear()} Serena Blake Psychology Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
