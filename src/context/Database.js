const size = {
  Drinks: [
    "Short (8fl oz)",
    "Tall (12fl oz)",
    "Grande (16fl oz)",
    "Venti (20fl oz)",
  ],
  Tumbler: ["S 12 fl oz", "L 20fl oz"],
};

const category = {
  AME: `Americanos`,
  BRE: "Brewed Coffees",
  CAP: `Cappuccinos`,
  ESP: "Espresso Shots",
  LAT: `Lattes`,
  MOC: `Mochas`,
  TUM: "Tumbler",
};

const MENU = [
  {
    title: "Caffè Americano",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242",
    category: category.AME,
    price: 299
  },

  {
    title: "Blonde Roast",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/abb4f97948c948c28ea2dcaf933c4f6b.jpg?impolicy=1by1_wide_1242",
    category: category.BRE,
    price: 299
  },
  {
    title: "Caffè Misto",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_1242",
    category: category.BRE,
    price: 299
  },
  {
    title: "Dark Roast Coffee",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/0279f9c5fa5941d2a65dd183d7a0b386.jpg?impolicy=1by1_wide_1242",
    category: category.BRE,
    price: 299
  },

  {
    title: "Cappuccino",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",
    category: category.CAP,
    price: 399
  },

  {
    title: "Espresso",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_1242",
    category: category.ESP,
    price: 299
  },
  {
    title: "Espresso Con Panna",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_1242",
    category: category.ESP,
    price: 299
  },

  {
    title: "Pumpkin Spice Latte",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/e208cdee37944828bc94e101c6ae1bbe.jpg?impolicy=1by1_wide_1242",
    category: category.LAT,
    price: 399
  },
  {
    title: "Blonde Espresso",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/9eb90cb6981d42f5859376c4be666060.jpg?impolicy=1by1_wide_1242",
    category: category.LAT,
    price: 399
  },
  {
    title: "Caffè Latte",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242",
    category: category.LAT,
    price: 399
  },
  {
    title: "Cinnamon Dolce Latte",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/9329c03ce24f4623be25dd24d7537db2.jpg?impolicy=1by1_wide_1242",
    category: category.LAT,
    price: 399
  },

  {
    title: "Salted Caramel Mocha",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/da9f3c12cdba4abc913f4d8e294e7629.jpg",
    category: category.MOC,
    price: 399
  },
  {
    title: "Caffè Mocha",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/f4ec500b34624242b15c2d29e53f3c48.jpg?impolicy=1by1_wide_1242",
    category: category.MOC,
    price: 399
  },
  {
    title: "White Chocolate Mocha",
    size: size.Drinks,
    src:
      "https://globalassets.starbucks.com/assets/4b621e63f6ba4c19a8618055284eca8d.jpg?impolicy=1by1_wide_1242",
    category: category.MOC,
    price: 399
  },

  {
    title: "Silver Vacuum Stainless Steel Tumbler - 12oz",
    size: size.Tumbler,
    src:
      "https://globalassets.starbucks.com/assets/5b0b47d56d1e4b7b89d4bae6d8f458a7.jpg?impolicy=1by1_wide_1242",
    category: category.TUM,
    price: 1099
  },
  {
    title: "Satin Black Stainless-Steel Tumbler - 20 fl oz",
    size: size.Tumbler,
    src:
      "https://globalassets.starbucks.com/assets/6fe6d18b57c54db18c476a0fe9326bf1.jpg?impolicy=1by1_wide_1242",
    category: category.TUM,
    price: 1299
  },
];

export default MENU;
