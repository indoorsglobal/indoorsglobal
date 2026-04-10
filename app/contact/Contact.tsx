"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-sans text-[#444]">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* --- LEFT: MAP --- */}
        <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-sm overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.96277647833!2d81.65327777596825!3d21.237397280362373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dddc1b3b46b9%3A0x6062612ffd911d4c!2sHorizon%20Hospital%20%7C%20Best%20Hospital%20in%20Raipur!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* --- RIGHT: INQUIRY FORM --- */}
        <div className="bg-[#f9f9f9] p-8 rounded-sm shadow-sm">
          <h2 className="text-3xl font-serif mb-2 text-[#222]">Get In Touch With Us</h2>
          <p className="text-sm text-gray-500 mb-8">If you wish to directly reach us, please fill out the form below -</p>

          <form className="space-y-5">
            <div className="grid grid-cols-3 items-center">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter Full Name"
                className="col-span-2 border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#a3a393] bg-white" 
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="text-sm font-medium text-gray-700">Email address</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="col-span-2 border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#a3a393] bg-white" 
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="text-sm font-medium text-gray-700">Inquiry Type</label>
              <select className="col-span-2 border border-gray-300 rounded p-2 text-sm focus:outline-none focus:border-[#a3a393] bg-white">
                <option value="" disabled selected>Select Category</option>
                <option value="Rice Husk">Rice Husk</option>
                <option value="Bamboo Essentials">Bamboo Essentials</option>
                <option value="Cane Baskets">Cane Baskets</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div className="grid grid-cols-3 items-start">
              <label className="text-sm font-medium mt-2 text-gray-700">Message</label>
              <textarea 
                rows={6}
                placeholder="How can we help?"
                className="col-span-2 border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#a3a393] bg-white"
              ></textarea>
            </div>

            <div className="grid grid-cols-3">
              <div className="col-start-2 col-span-2 flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-[#a3a393]" id="privacy" />
                <label htmlFor="privacy" className="text-xs text-gray-500 leading-tight">
                  I agree to the terms and conditions and the privacy policy
                </label>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button className="bg-[#c2c2b4] text-white px-10 py-3 rounded text-sm font-bold uppercase hover:bg-[#a3a393] transition-colors shadow-sm">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- BOTTOM INFO CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-[#f4f4f2]">
        <div className="flex items-center gap-4 p-8 border-r border-gray-200">
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
            <MapPin size={20} />
          </div>
          <div className="text-sm">
            <p className="text-gray-600 font-medium">Jalvihar Colony Rd</p>
            <p className="text-gray-600">Civil Lines, Raipur</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-8 border-r border-gray-200">
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
            <Phone size={20} />
          </div>
          <div className="text-sm">
            <p className="text-gray-400">Call us :</p>
            <p className="font-medium text-gray-700">+91 95899 08847</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-8 border-r border-gray-200">
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
            <Mail size={20} />
          </div>
          <div className="text-sm">
            <p className="text-gray-400">Mail us :</p>
            <p className="font-medium text-gray-700">contact@horizonhospital.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-8">
          <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
            <Clock size={20} />
          </div>
          <div className="text-sm">
            <p className="text-gray-400">Open time :</p>
            <p className="font-medium text-gray-700">Open 24 Hours</p>
          </div>
        </div>
      </div>

    </div>
  );
}