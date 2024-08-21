'use client';

import React from 'react';

export const Footer = () => {
  return (
      <div className="bg-blue-1001 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h2 className="font-bold text-xl mb-4">
                About <span className="text-red-1001">Us</span>
              </h2>
              <p>
                For general comments or questions about catering needs,
                reservations, ordering, menu items, please call Koreana
                Restaurant directly during business hours. <br />
                For website related questions, please use the contact form.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-4">
                Contact <span className="text-red-1001">Us</span>
              </h2>
              <p>2458 Harry Wurzbach Rd</p>
              <p>San Antonio, TX 78209</p>
              <p>(210)-804-0019</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-4">
                Care<span className="text-red-1001">ers</span>
              </h2>
              <ul className="list-disc ml-4">
                <li>Cooks</li>
                <li>Servers</li>
                <li>Dishwashers</li>
              </ul>
              <p>Want to join the team or know someone who might? <br/> Call or inquire within.</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-4">
                Hours <span className="text-red-1001">of</span> Operation
              </h2>
              <p>Mon - Thurs 11am - 9pm</p>
              <p>Fri & Sat 11am - 10pm</p>
              <p>Sunday 12pm – 7pm</p>
              <p>*Closed on Wednesdays starting 9/04/24</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-4">
                Quick <span className="text-red-1001">Links</span>
              </h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/koreanasa/" target="_blank" rel="noreferrer">
                  {/* Facebook SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current text-white">
                    <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/koreana_sa" target="_blank" rel="noreferrer">
                  {/* Instagram SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 fill-current text-white">
                    <g>
                      <path
                          fillRule="evenodd"
                          d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z"
                          clipRule="evenodd"
                      ></path>
                      <path d="M18 5a1 1 0 100 2 1 1 0 000-2z"></path>
                      <path
                          fillRule="evenodd"
                          d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 002.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 002.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 00-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 00-2.622 2.622zM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 00-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 001.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 001.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 00-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3z"
                          clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </a>
                <a href="https://www.yelp.com/biz/koreana-restaurant-san-antonio" target="_blank" rel="noreferrer">
                  {/* Yelp SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 20 20" className="w-6 h-6 fill-current text-white">
                    <g>
                      <g fillRule="evenodd" stroke="none" strokeWidth="1">
                        <g transform="translate(-62 -7399)">
                          <g transform="translate(56 160)">
                            <path d="M12.041 7250.133l-5.565-2.029c-.604 1.623-.665 3.33 0 5.146l5.639-1.957c.384-.445.22-.81-.074-1.16zm.805 2.682l-3.734 4.204c1.138 1.59 2.818 2.104 4.834 1.957l-.184-5.799c-.122-.423-.505-.415-.916-.362zm3.186-.725c-.395.088-.604.323-.512.797l3.101 5.197c1.38-.626 2.757-2.088 3.379-4.254l-5.968-1.74zm5.95-3.085c-.405-2.32-1.833-3.898-3.109-4.686l-3.61 4.8c-.033.516.232.736.586.87l6.133-.984zm-8.774-.519l-5.562-7.465c1.588-1.407 3.405-2.396 6.436-1.885v9.061c0 .434-.557.531-.874.29z"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;