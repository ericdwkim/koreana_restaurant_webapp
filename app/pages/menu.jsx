import React from "react";
import OthersHero from "../components/OthersHero/OthersHero";
import MenuItem from "../components/Menu/Menu";
function Menu() {
  return (
    <div className="menu">
      <OthersHero
        heroTitle={"Menu"}
        heroDescription={
            <div>
                Menu prices and items availability are subject to change at any time without prior notice
                <br />
                For the latest and most accurate prices please call us at (210)-804-0019 during business hours
                <br />
                Lunch specials are only available from Monday to Friday 11am - 2:30pm excluding holidays.
            </div>
      }
      />
      <MenuItem/>
    </div>
  );
}

export default Menu;
