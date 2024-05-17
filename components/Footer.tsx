'use client';

import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-xl mb-2">About Us</h2>
            <p>
              For general comments or questions about catering needs,
              reservations, ordering, menu items etc., please call Koreana
              Restaurant directly during business hours. (210)-804-0019 For
              website related questions, please use the contact form.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Contact Us</h2>
            <p>2458 Harry Wurzbach Rd</p>
            <p>San Antonio, TX 78209</p>
            <p>(210)-804-0019</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Careers</h2>
            <ul>
              <li>Cooks</li>
              <li>Servers</li>
              <li>Dishwashers</li>
            </ul>
            <p>Call us for more details</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Hours of Operation</h2>
            <p>Mon - Thurs 11am - 9pm</p>
            <p>Fri & Sat 11am - 10pm</p>
            <p>Sunday 12pm – 7pm</p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Quick Links</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/koreanasa/" target="_blank" rel="noreferrer">
                {/* Facebook SVG */}
              </a>
              <a href="https://www.instagram.com/koreana_sa" target="_blank" rel="noreferrer">
                {/* Instagram SVG */}
              </a>
              <a href="https://www.yelp.com/biz/koreana-restaurant-san-antonio" target="_blank" rel="noreferrer">
                {/* Yelp SVG */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;