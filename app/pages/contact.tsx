import React from "react";
import {OthersHero} from "@/components/OthersHero";
import {ContactComponent} from "@/components/ContactComponent";

function Contact() {
  return (
    <div>
      <OthersHero
        heroTitle={"Contact Us"}
        heroDescription={"Get in Touch with Us"}
      />
      <ContactComponent />
    </div>
  );
}

export default Contact;
