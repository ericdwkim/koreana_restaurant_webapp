interface MenuItem {
    name: string;
    price: string;
    shortdes?: string;
}

interface MenuCategory {
    type: string;
    items: MenuItem[];
}

interface Menu {
    categories: MenuCategory[];
}

const menuData: Menu = {
    categories: [
        {
            type: "Alcoholic",
            items: [
                { name: "Miller Light", price: "$3.99" },
                { name: "Coors Light", price: "$3.99" },
                { name: "Terra", price: "$4.99" },
                { name: "Sake", price: "$6.99", shortdes: "A small bottle of Asian sake" },
                { name: "Cheongha (청하)", price: "$8.99" },
                { name: "Makgeolli (막걸리)", price: "$13.99" },
                { name: "Soju (소주)", price: "$13.99" }
            ]
        },

        {
            type: "Non-Alcoholic",
            items: [
                { name: "Tea (차)", price: "$1.99", shortdes: "Green, Jasmine, Sweetened/Unsweetened Iced Tea" },
                { name: "Aquafina", price: "$1.99" },
                { name: "Soda (음료수)", price: "$2.99", shortdes: "Coke, Coke Zero, Diet Coke, Sprite, Dr. Pepper, Diet Dr. Pepper, Pepsi, Pepsi Zero" }
            ]
        }
    ]
};

export default menuData;