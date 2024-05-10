import React from "react";
import OthersHero from "../components/OthersHero/OthersHero";
import AboutContent from "../components/AboutContent/AboutContent";
import TableBook from "../components/TableBook/TableBook";
function About() {
  return (
    <div>
      <OthersHero
        heroTitle={"About"}
        heroDescription={
          "Family-owned Korean restaurant serving San Antonio for over 25 years"
        }
      />
      <AboutContent />
      <TableBook />
    </div>
  );
}

export default About;
