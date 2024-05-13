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

export const menuData: Menu = {
  categories: [
    {
      type: "Alcoholic",
      items: [
        { name: "Miller Light", price: "$3.99" },
        { name: "Coors Light", price: "$3.99" },
        { name: "Terra", price: "$4.99" },
        {
          name: "Sake",
          price: "$6.99",
          shortdes: "A small bottle of Asian sake",
        },
        { name: "Cheongha (청하)", price: "$8.99" },
        { name: "Makgeolli (막걸리)", price: "$13.99" },
        { name: "Soju (소주)", price: "$13.99" },
      ],
    },
    {
      type: "Non-Alcoholic",
      items: [
        {
          name: "Tea (차)",
          price: "$1.99",
          shortdes: "Green, Jasmine, Sweetened/Unsweetened Iced Tea",
        },
        { name: "Aquafina", price: "$1.99" },
        {
          name: "Soda (음료수)",
          price: "$2.99",
          shortdes:
            "Coke, Coke Zero, Diet Coke, Sprite, Dr. Pepper, Diet Dr. Pepper, Pepsi, Pepsi Zero",
        },
      ],
    },
    {
      type: "Appetizers",
      items: [
        {
          name: "Egg Roll (에그롤)",
          price: "$5.99",
          shortdes:
            "(2) piece pork egg rolls with vegetables served with a side of spicy and sweet chili sauce",
        },
        {
          name: "Shrimp tempura (새우튀김)",
          price: "$9.99",
          shortdes:
            "(8) piece deep fried shrimp tempura served with a side of special soy sauce",
        },
        {
          name: "Yaki Mandu (야끼만두)",
          price: "$7.99",
          shortdes: "(12) piece deep fried vegetable dumplings",
        },
        {
          name: "Steam Mandu (스팀만두)",
          price: "$8.99",
          shortdes:
            "(10) piece steamed pork dumplings served with a side of special soy sauce",
        },
        {
          name: "Kimbap (김밥)",
          price: "$5.99",
          shortdes:
            "(1) roll of bulgogi beef with rice and vegetables served with a side of special soy sauce",
        },
        {
          name: "Tteokbokki (떡뽁이)",
          price: "$13.99",
          shortdes:
            "Classic spicy sliced rice cakes in traditional tteokbokki sauce. Add ramen noodles (+$2.99). Add cheese (+$2.99)",
        },
        {
          name: "Seafood Pancake (해물파전)",
          price: "$14.99",
          shortdes: "Classic Korean pancake with seafood mix and vegetables",
        },
        {
          name: "Kimchi Pancake (김치파전)",
          price: "$13.99",
          shortdes: "Classic Korean pancake with sliced kimchi and vegetables",
        },
        {
          name: "Vegetable Pancake (야채파전)",
          price: "$13.99",
          shortdes:
            "Classic Korean pancake with carrots, scallions, onions, and bell peppers",
        },
      ],
    },
    {
      type: "Lunch Specials",
      items: [
        {
          name: "LA Galbi (엘에이 갈비)",
          price: "$15.99",
          shortdes:
            "Classic sweet and savory bone-in beef short ribs marinated in Korean soy sauce",
        },
        {
          name: "Beef Bulgogi (불고기)",
          price: "$13.99",
          shortdes:
            "Classic sliced beef marinated in special bulgogi sauce and onions",
        },
        {
          name: "Spicy Pork Bulgogi (돼지 불고기)",
          price: "$12.99",
          shortdes:
            "Sliced boneless pork marinated in special spicy bulgogi sauce grilled with onions",
        },
        {
          name: "Chicken Bulgogi (치킨 불고기)",
          price: "$12.99",
          shortdes:
            "Sliced chicken marinated in special bulgogi sauce grilled with onions",
        },
      ],
    },
    {
      type: "Meat Entrées",
      items: [
        {
          name: "Fresh Galbi (생갈비)",
          price: "$35.99",
          shortdes:
            "Special fresh beef ribs grilled with mushrooms and onions served with a side of sliced garlic, green hot peppers, salted sesame oil sauce, soybean paste sauce, and fresh green lettuce",
        },
        {
          name: "LA Galbi (엘에이 갈비)",
          price: "$25.99",
          shortdes:
            "Classic sweet and savory bone-in beef short ribs marinated in Korean soy sauce",
        },
        {
          name: "Beef Bulgogi (소 불고기)",
          price: "$21.99",
          shortdes:
            "Classic sliced beef marinated in special bulgogi sauce and onions",
        },
        {
          name: "Spicy Pork Bulgogi (돼지 불고기)",
          price: "$19.99",
          shortdes:
            "Sliced boneless pork marinated in special spicy bulgogi sauce grilled with onions",
        },
        {
          name: "Ttukbaegi Bulgogi (뚝배기 불고기)",
          price: "$17.99",
          shortdes:
            "Sliced beef marinated in special bulgogi sauce grilled with onions and rice cake",
        },
        {
          name: "Chicken Bulgogi (치킨 불고기)",
          price: "$19.99",
          shortdes:
            "Sliced chicken marinated in special bulgogi sauce grilled with onions",
        },
        {
          name: "Beef Brisket BBQ (차돌박이)",
          price: "$28.99",
          shortdes:
            "Sliced beef brisket grilled with onions served with a side of sliced garlic, green hot peppers, salted sesame oil sauce, and fresh green lettuce (2 servings)",
        },
        {
          name: "Samgyeopsal (삼겹살)",
          price: "$35.99",
          shortdes:
            "Classic sliced pork belly grilled with onions served with a side of sliced garlic, green hot peppers, salted sesame oil sauce, and fresh green lettuce (2 servings)",
        },
        {
          name: "Suyuk Pork Belly (수육 삼겹살)",
          price: "$26.99",
          shortdes:
            "Steamed pork belly served with a side of sliced garlic, green hot peppers, salted shrimp, soybean paste sauce, and fresh green lettuce (2 servings)",
        },
      ],
    },
    {
      type: "Fish Entrées",
      items: [
        {
          name: "Godeungeo Gui (고등어 구이)",
          price: "$19.99",
          shortdes:
            "Grilled mackerel with onions seasoned with salt and soy sauce",
        },
        {
          name: "Imyeonsu Gui (임연수 구이)",
          price: "$19.99",
          shortdes:
            "Grilled Atka mackerel with green onions seasoned with salt and soy sauce",
        },
      ],
    },
    {
      type: "Rice / Stir Fried",
      items: [
        {
          name: "Bibimbap (비빔밥)",
          price: "$13.99",
          shortdes:
            "Rice combined with your choice of protein (beef / chicken / tofu), assorted vegetables, and (1) egg",
        },
        {
          name: "Stone Bowl Bibimbap (돌솥비빔밥)",
          price: "$15.99",
          shortdes:
            "Rice combined with your choice of protein (beef / chicken / tofu), assorted vegetables, (1) egg, and Korean chili paste served in a hot stone bowl",
        },
        {
          name: "Kimchi / Shrimp / Chicken Fried Rice (김치 / 새우 / 치킨 볶음밥)",
          price: "$14.99",
          shortdes:
            "Stir fried rice with onions, scallions, carrots, bell peppers with your choice of meat or kimchi",
        },
        {
          name: "Combo Fried Rice (콤보 볶음밥)",
          price: "$16.99",
          shortdes:
            "Stir fried rice with onions, scallions, carrots, bell peppers with assorted meats (shrimp, chicken, beef)",
        },
        {
          name: "Jhookoomi Bokkeum / Ohiinguh Bokkeum (쭈꾸미 / 오징어 볶음)",
          price: "$18.99",
          shortdes:
            "Spicy stir fried small or regular-sized octopus with green onions, zucchini, cabbage, onions, hot pepper powder",
        },
        {
          name: "Tofu Kimchi (두부 김치 볶음)",
          price: "$19.99",
          shortdes:
            "Stir fried kimchi with onion, scallions, hot pepper powder served with sliced boneless pork and tofu",
        },
        {
          name: "Japchae (잡채)",
          price: "$15.99",
          shortdes:
            "Stir fried glass noodles and vegetables with your choice of protein (chicken / beef / shrimp / tofu)",
        },
      ],
    },
    {
      type: "Soups & Stews",
      items: [
        {
          name: "Mandu Soup (만두국)",
          price: "$13.99",
          shortdes:
            "Dumpling soup with beef, eggs, scallions, and garnished with dry seaweed",
        },
        {
          name: "Duk Mandu Soup (떡만두국)",
          price: "$13.99",
          shortdes:
            "Dumpling soup with sliced rice cake, beef, eggs, scallions, and garnished with dry seaweed",
        },
        {
          name: "Special Ramen (스페셜라면)",
          price: "$9.99",
          shortdes:
            "Seafood mix, clams, green mussels, eggs, onions, hot pepper powder with ramen noodles",
        },
        {
          name: "Kimchi Jjigae (김치 찌개)",
          price: "$14.99",
          shortdes:
            "Classic spicy kimchi stew with pork, sliced tofu, onions, hot pepper powder, and glass noodles",
        },
        {
          name: "Soondubu Jjigae (순두부 찌개)",
          price: "$13.99",
          shortdes:
            "Classic spicy soft tofu stew with your choice of kimchi or beef and vegetables",
        },
        {
          name: "Seafood Soondubu Jjigae (해물 순두부 찌개)",
          price: "$15.99",
          shortdes:
            "Classic spicy soft tofu stew with seafood mix and vegetables",
        },
        {
          name: "Doenjang-jjigae (된장 찌개)",
          price: "$13.99",
          shortdes:
            "Classic umami-rich and savory stew made with fermented soybean paste and your choice of protein (pork / beef / clam)",
        },
        {
          name: "Samgye Tang (삼계탕)",
          price: "$25.99",
          shortdes:
            "Classic hearty whole chicken soup made with ginseng, jujubes, and glutinous sweet rice garnished with green onions",
        },
        {
          name: "Gom Tang (곰탕)",
          price: "$17.99",
          shortdes:
            "Hearty beef tripe intestine soup with glass noodles, green onions, and radish",
        },
        {
          name: "Jjamppong (짬뽕)",
          price: "$15.99",
          shortdes:
            "Classic spicy seafood noodle soup made with special seafood mix, onions, mushrooms, hot pepper powder, and thick noodles",
        },
        {
          name: "King Jjamppong (황제 짬뽕)",
          price: "$28.99",
          shortdes:
            "Koreana spin on the classic jjamppong with green mussels, shrimp, and your choice of octopus or lobster",
        },
        {
          name: "Pollock Fish Soup / Pollock Egg Soup  (동태탕 / 알탕)",
          price: "$18.99",
          shortdes:
            "Hearty dried fish or fish egg soup made with white clams, onions, radish, zucchini, tofu, hot pepper powder, and fish sauce",
        },
        {
          name: "Galbi Tang (갈비탕)",
          price: "$20.99",
          shortdes:
            "Classic hearty beef rib soup with assorted vegetables and glass noodles",
        },
        {
          name: "Ugeoji Galbi Tang (우거지 갈비탕)",
          price: "$22.99",
          shortdes:
            "Hearty beef rib soup with vegetable trimmings and glass noodles",
        },
        {
          name: "Yukgaejang (육개장)",
          price: "$14.99",
          shortdes:
            "Classic spicy sliced beef brisket soup with onions, glass noodles, fermented soybean paste, bean sprouts, and hot pepper powder",
        },
        {
          name: "Naengmyeon / Bibim Naengmyeon (물냉면 / 비빔냉면)",
          price: "$14.99",
          shortdes:
            "Classic Korean cold noodles soup with your choice of regular or spicy",
        },
        {
          name: "Haemul Jeongol (해물 전골)",
          price: "$38.99",
          shortdes:
            "Spicy seafood stew with assorted vegetables, seafood mix, shrimp, octopus, green onions, pollock, hot pepper paste, tofu, mushrooms, napa cabbage, and radish (2 servings)",
        },
        {
          name: "Budae Jjigae Jeongol (부대찌개 전골)",
          price: "$38.99",
          shortdes:
            "Classic spicy army stew consisting of sausages, spam, pork, kimchi, tofu, ramen noodles, eggs, and mushrooms (2 servings)",
        },
        {
          name: "Goat Meat Soup (흑염소 전골)",
          price: "$39.99",
          shortdes:
            "Spicy black goat stew with assorted vegetables (2 servings)",
        },
        {
          name: "Gopchang Jeongol (곱창 전골)",
          price: "$38.99",
          shortdes:
            "Beef tripe intestine stew with assorted vegetables, rice, onions, hot peppers, hot pepper powder, rice cake, and ramen noodles  (2 servings)",
        },
        {
          name: "Ahgu-Jjim (아구찜)",
          price: "$38.99",
          shortdes:
            "Spicy braised monkfish stew with assorted vegetables, bean sprouts, and sea squirt (2 servings)",
        },
        {
          name: "Haemul-Jjim (해물찜)",
          price: "$38.99",
          shortdes:
            "Spicy seafood stew braised with assorted vegetables, seafood mix, clams, mussels, shrimps, octopus, pollock, and onions (2 servings)",
        },
        {
          name: "Dakdoritang (닭도리탕)",
          price: "$38.99",
          shortdes:
            "Spicy chicken stew braised with potatoes, assorted vegetables, onions, and glass noodles (2 servings)",
        },
      ],
    },
  ],
};
