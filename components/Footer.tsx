'use client';

import React from 'react';
import { footerContent } from '@/lib/footerContent';
import { FacebookIcon, InstagramIcon, YelpIcon } from './SocialIcons';

export const Footer = () => {
  return (
      <div className="bg-blue-1001 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {footerContent.map((section, index) => (
                <div key={index}>
                  <h2 className="font-bold text-xl mb-6 pb-2 border-b-2 border-red-1001 w-fit">
                    {section.title.split(' ')[0]} <span className="text-red-1001">{section.title.split(' ')[1]}</span>
                  </h2>
                  <div>
                    {section.content.map((item, idx) => (
                        <p key={idx}>{item}</p>
                    ))}
                    {section.note && (
                        <p className="italic mt-2">{section.note}</p>
                    )}
                  </div>
                </div>
            ))}
            <div>
              <h2 className="font-bold text-xl mb-6 pb-2 border-b-2 border-red-1001 w-fit">
                Quick <span className="text-red-1001">Links</span>
              </h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/koreanasa/" target="_blank" rel="noreferrer">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/koreana_sa" target="_blank" rel="noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://www.yelp.com/biz/koreana-restaurant-san-antonio" target="_blank" rel="noreferrer">
                  <YelpIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
