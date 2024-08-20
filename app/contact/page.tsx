import React from "react";
import {OthersHero} from "@/components/OthersHero";
import {ContactComponent} from "@/components/ContactComponent";

export default function Contact() {
  return (
    <div>
      <OthersHero
        heroTitle={"Contact Us"}
        heroDescription={"Get in Touch with Us"}
      />
      <ContactComponent />
    </div>
  );
};