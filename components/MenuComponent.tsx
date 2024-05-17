'use client';

import React, { useState } from "react";
import menuData from "../data/menu.json"; // Make sure to import your JSON data

interface Category {
  type: string;
  items: MenuItem[];
}

export const MenuComponent = () => {
  const [activeType, setActiveType] = useState<string>("Meat Entrées");

  const handleTypeClick = (type: string) => {
    setActiveType(type === activeType ? activeType : type);
  };

  const renderMenuItems = (menuItems: MenuItem[]) => {
    return menuItems.map((item, index) => (
      <div key={index} className="flex justify-between items-center p-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>{item.shortdes}</p>
        </div>
        <span className="text-lg">{item.price}</span>
      </div>
    ));
  };

  const renderCategories = () => {
    return menuData.categories.map((category: Category, index: number) => (
      <div key={index} className={`p-2 ${category.type === activeType ? "bg-blue-500 text-white" : "bg-white text-gray-900"} cursor-pointer`}
           onClick={() => handleTypeClick(category.type)}>
        <h2 className="text-lg font-bold">{category.type}</h2>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center">
        Menu <span className="text-blue-500">Category</span>
      </h1>
      <p className="text-lg text-center my-4">Select a category to see the menu list</p>
      <div className="flex flex-wrap justify-center">
        {renderCategories()}
      </div>
      <div className="mt-4">
        {menuData.categories.map(
          (category: Category) =>
            category.type === activeType && renderMenuItems(category.items)
        )}
      </div>
    </div>
  );
};

export default MenuComponent;

