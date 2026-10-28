import menu from "@/data/menu.json";

export interface MenuItem {
  code: string;
  name: string;
  price: string;
  shortdes?: string;
}

export interface MenuCategory {
  type: string;
  note?: string;
  items: MenuItem[];
}

export interface Menu {
  categories: MenuCategory[];
}

export const menuData: Menu = menu;
