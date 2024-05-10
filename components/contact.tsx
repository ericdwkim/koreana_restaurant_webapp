import React from 'react';

export const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col p-4">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="border p-2" />
          <input type="email" placeholder="Your Email" className="border p-2" />
          <textarea placeholder="Your Message" className="border p-2 h-32"></textarea>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold">PHONE:</h2>
          <p>(210)-804-0019</p>
          <h2 className="text-lg font-bold">EMAIL:</h2>
          <p>contact@koreana.restaurant</p>
          <h2 className="text-lg font-bold">ADDRESS:</h2>
          <p>2458 Harry Wurzbach Rd</p>
          <p>San Antonio, TX 78209</p>

          <div className="flex items-center gap-2 mt-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Directions
          </div>
        </div>
        <div className="relative w-full h-64 mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.005482516287!2d-98.4314491853083!3d29.487037951643664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf4efffbb528b%3A0xaf5b3e1026c95676!2s2458%20Harry%20Wurzbach%20Rd%2C%20San%20Antonio%2C%20TX%2078218%2C%20USA!5e0!3m2!1sen!2sbd!4v1675784988834!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;