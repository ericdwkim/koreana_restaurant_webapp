import React from "react";
import Image from 'next/image';
import aboutContentImage from '../public/about-content.jpg';

export const About = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="text-center my-12">
                <Image
                    src={aboutContentImage}
                    alt="About content"
                    className="shadow-md rounded-lg mx-auto mb-5"
                    style={{ maxWidth: '100%' }} // Inline style for responsive image width
                />
                <p className="mx-0 my-5 text-base font-light">
                    Mira Kim, the proud new owner of Koreana, brings her entrepreneurial
                    spirit and passion for excellence to the Lone Star State.
                    Having successfully operated several nail salons in
                    Pennsylvania, she decided to embark on a new journey that aligns with
                    her love for authentic Korean cuisine. Her dedication to quality and
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    authenticity is reflected in every dish served at Koreana. Mira's
                    commitment to delivering the best authentic Korean food experience to
                    Texans resonates deeply with her customers. Come join us at Koreana,
                    where her vision comes to life, offering a taste of Korea that is
                    both genuine and delightful.
                </p>
            </div>
        </div>
    );
};

export default About;
