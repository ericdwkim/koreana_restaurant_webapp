import React from "react";
import {OthersHero} from "@/components/OthersHero";
import {MenuComponent} from "@/components/MenuComponent";


export default function Menu() {
  return (
    <div className="menu">
      <OthersHero
        heroTitle={"Menu"}
        heroDescription={`Menu prices and items availability are subject to change at any time without prior notice
For the latest and most accurate prices please call us at (210)-804-0019 during business hours
Lunch specials are only available from Monday to Friday 11am - 2:30pm excluding holidays.`}
      />
      <MenuComponent/>
    </div>
  );
};
