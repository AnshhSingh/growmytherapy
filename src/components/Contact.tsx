'use client';

import React, { useState, FormEvent } from 'react';
import Separator from './Separator';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredTime: string;
  contactMethod: string;
  agreeToContact: boolean;
};


type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function Contact() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    contactMethod: '',
    agreeToContact: false,
  });


  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    

    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };


  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
    

    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

// would use zod  for production probabbly but does not really matter for such small app anyways
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Here we would typically send the data to the backend but i dont think we nee to do that for the assingment
        // For now, lets simulate a successful submission after a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          preferredTime: '',
          contactMethod: '',
          agreeToContact: false,
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="w-full bg-[#F6F3EA] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:space-x-8">

          <div className="md:w-3/5 mb-8 md:mb-0 order-2 md:order-1">
            <div className="bg-[#94B0B0] rounded-md p-6 md:p-10 shadow-sm h-full">
              <div className="flex flex-col md:flex-row gap-6">
 
                <div className="md:w-1/2 space-y-6">
   
                  <div>
                    <h4 className="text-2xl font-light text-[#1E3A33] mb-4">Our Office</h4>
                    <p className="text-[#1E3A33] font-light" style={{ fontSize: '17px', lineHeight: '28px' }}>
                      1287 Maplewood Drive<br />
                      Los Angeles, CA 90026
                    </p>
                  </div>
                
                  <div>
                    <h4 className="text-2xl font-light text-[#1E3A33] mb-4">Contact</h4>
                    <div className="space-y-3">
                      <p className="text-[#1E3A33] font-light flex items-center whitespace-nowrap" style={{ fontSize: '17px', lineHeight: '28px' }}>
                        <svg className="w-5 h-5 mr-2 inline-block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="inline-block">(323) 555-0192</span>
                      </p>
                      <p className="text-[#1E3A33] font-light flex items-center whitespace-nowrap" style={{ fontSize: '17px', lineHeight: '28px' }}>
                        <svg className="w-5 h-5 mr-2 inline-block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:serena@blakepsychology.com" className="hover:underline inline-block">
                          serena@blakepsychology.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
             
                  <div>
                    <h4 className="text-2xl font-light text-[#1E3A33] mb-4">Office Hours</h4>
                    <div className="space-y-2">
                      <div className="flex">
                        <div className="w-24 text-[#1E3A33] font-medium" style={{ fontSize: '17px' }}>In-person:</div>
                        <div className="text-[#1E3A33] font-light" style={{ fontSize: '17px' }}>Tue & Thu, 10 AM–6 PM</div>
                      </div>
                      <div className="flex">
                        <div className="w-24 text-[#1E3A33] font-medium" style={{ fontSize: '17px' }}>Virtual:</div>
                        <div className="text-[#1E3A33] font-light" style={{ fontSize: '17px' }}>Mon, Wed & Fri, 1 PM–5 PM <br /><span className="text-sm">(via Zoom)</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.google.com/?q=1287+Maplewood+Drive+Los+Angeles+CA+90026" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 bg-[#1E3A33] text-white text-sm px-4 py-2 rounded-md hover:bg-[#162B27] transition-colors"
                  >
                    Google Maps
                  </a>
                </div>

               
                <div className="md:w-1/2">
                  <div className="rounded-md overflow-hidden shadow-sm border border-[#1E3A33] bg-white h-1/2">
                    <iframe
                      title="Office Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.4557903780845!2d-118.26078708478173!3d34.083863880591454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75d4b12ab5b%3A0x71a9d18d8aaec66!2sLos%20Angeles%2C%20CA%2090026!5e0!3m2!1sen!2sus!4v1656687767599!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "240px" }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          <div className="md:w-2/5 order-1 md:order-2">
            <div className="bg-white rounded-md p-4 md:p-6 shadow-sm border border-gray-100">
              <h3 
                className="text-2xl font-light text-center mb-3 text-[#1E3A33]"
              >
                Get In Touch
              </h3>
              
              <p 
                className="text-center font-light mb-4 text-[#1E3A33]" 
                style={{ 
                  fontSize: '16px', 
                  lineHeight: '22px', 
                }}
              >
                Fill out the brief fields below and Dr. Serena will be in touch with you soon.
              </p>

              {submitSuccess ? (
                <div className="text-center p-3">
                  <svg className="w-10 h-10 mx-auto text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-lg font-light mb-2 text-[#1E3A33]">Thank You!</h4>
                  <p className="text-[#1E3A33] text-sm">Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-[#1E3A33] mb-1 text-sm font-light">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className={`w-full px-3 py-2 text-sm border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A2C4C4]`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#1E3A33] mb-1 text-sm font-light">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full px-3 py-2 text-sm border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A2C4C4]`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
             
                    <div>
                      <label htmlFor="phone" className="block text-[#1E3A33] mb-1 text-sm font-light">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 234-5678"
                        className={`w-full px-3 py-2 text-sm border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A2C4C4]`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs">{errors.phone}</p>
                      )}
                    </div>

                   
                    <div>
                      <label htmlFor="preferredTime" className="block text-[#1E3A33] mb-1 text-sm font-light">
                        Preferred Time
                      </label>
                      <input
                        type="text"
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        placeholder="e.g., Mornings, Evenings"
                        className={`w-full px-3 py-2 text-sm border ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A2C4C4]`}
                      />
                      {errors.preferredTime && (
                        <p className="text-red-500 text-xs">{errors.preferredTime}</p>
                      )}
                    </div>
                  </div>

                  
                  <div>
                    <label htmlFor="message" className="block text-[#1E3A33] mb-1 text-sm font-light">
                      What brings you here?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={2}
                      className={`w-full px-3 py-2 text-sm border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-[#A2C4C4]`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>

          
                  <div className="flex space-x-4 items-center">
                    <div className="w-1/2">
                      <label htmlFor="contactMethod" className="block text-[#1E3A33] mb-1 text-sm font-light">
                        Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A2C4C4]"
                      >
                        <option value="">Select method</option>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        <option value="text">Text</option>
                      </select>
                    </div>

            {/*we can use a simple checkbox for the reCAPTCHA */}
                    <div className="w-1/2">
                      <div className="border border-gray-300 rounded p-1 flex items-center justify-center">
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2 h-4 w-4 border-gray-300 rounded" />
                          <span className="text-xs text-gray-700">I'm not a robot</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-start mt-2">
                    <div className="flex items-center h-4">
                      <input
                        id="agreeToContact"
                        name="agreeToContact"
                        type="checkbox"
                        checked={formData.agreeToContact}
                        onChange={handleCheckboxChange}
                        className={`focus:ring-[#A2C4C4] h-3 w-3 text-[#A2C4C4] border ${errors.agreeToContact ? 'border-red-500' : 'border-gray-300'} rounded`}
                      />
                    </div>
                    <div className="ml-2">
                      <label htmlFor="agreeToContact" className="font-light text-[#1E3A33] text-xs">
                        By clicking submit you consent to receive texts and emails
                      </label>
                      {errors.agreeToContact && (
                        <p className="text-red-500 text-xs">{errors.agreeToContact}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-white bg-[#1E3A33] hover:bg-[#162B27] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A2C4C4]"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
           <Separator className='pt-6'/>
    </div>
  );
}
