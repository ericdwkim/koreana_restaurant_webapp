import React from "react";
import {OthersHero} from "@/components/OthersHero";
import {GalleryComponent} from "@/components/GalleryComponent";

function Gallery() {
  return (
    <div>
      <OthersHero
        heroTitle={"Gallery"}
        heroDescription={
          "Family-owned Korean restaurant serving San Antonio for over 25 years"
        }
      />
      <GalleryComponent />
    </div>
  );
}

export default Gallery;
