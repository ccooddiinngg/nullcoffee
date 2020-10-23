import React from "react";
import MenuItem from "../../components/MenuItem";
import "./index.css";

const size = {
  Drinks: [
    "Short (8fl oz)",
    "Tall (12fl oz)",
    "Grande (16fl oz)",
    "Venti (20fl oz)",
  ],
  Tumbler: ["12 fl oz", "20fl oz"],
};

const menu = [
  {
    category: "Drinks",
    items: [
      {
        subCategory: "Hot Coffees",
        items: [
          {
            type: "Americanos",
            items: [
              {
                title: "Caffè Americano",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242",
              },
            ],
          },
          {
            type: "Brewed Coffees",
            items: [
              {
                title: "Blonde Roast",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/abb4f97948c948c28ea2dcaf933c4f6b.jpg?impolicy=1by1_wide_1242",
              },
              {
                title: "Caffè Misto",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/d668acbc691b47249548a3eeac449916.jpg?impolicy=1by1_wide_1242",
              },
              {
                title: "Dark Roast Coffee",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/0279f9c5fa5941d2a65dd183d7a0b386.jpg?impolicy=1by1_wide_1242",
              },
            ],
          },
          {
            type: "Cappuccinos",
            items: [
              {
                title: "Cappuccino",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",
              },
            ],
          },
          {
            type: "Espresso Shots",
            items: [
              {
                title: "Espresso",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_1242",
              },
              {
                title: "Espresso Con Panna",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_1242",
              },
            ],
          },
          {
            type: "Lattes",
            items: [
              {
                title: "Pumpkin Spice Latte",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/e208cdee37944828bc94e101c6ae1bbe.jpg?impolicy=1by1_wide_1242",
              },
              {
                title: "Blonde Espresso",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/9eb90cb6981d42f5859376c4be666060.jpg?impolicy=1by1_wide_1242",
              },
              {
                title: "Caffè Latte",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242",
              },
              {
                title: "Cinnamon Dolce Latte",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/9329c03ce24f4623be25dd24d7537db2.jpg?impolicy=1by1_wide_1242",
              },
            ],
          },
          {
            type: "Mochas",
            items: [
              {
                title: "Salted Caramel Mocha",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/da9f3c12cdba4abc913f4d8e294e7629.jpg",
              },
              {
                title: "Caffè Mocha",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/f4ec500b34624242b15c2d29e53f3c48.jpg?impolicy=1by1_wide_1242",
              },
              {
                title: "White Chocolate Mocha",
                size: size.Drinks,
                src:
                  "https://globalassets.starbucks.com/assets/4b621e63f6ba4c19a8618055284eca8d.jpg?impolicy=1by1_wide_1242",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Merchandise",
    items: [
      {
        subCategory: "Drinkware",
        items: [
          {
            type: "Tumbler",
            items: [
              {
                title: "Silver Vacuum Stainless Steel Tumbler - 12oz",
                size: size.Tumbler[0],
                src:
                  "https://globalassets.starbucks.com/assets/5b0b47d56d1e4b7b89d4bae6d8f458a7.jpg?impolicy=1by1_wide_1242",
              },
              {
                title: "Satin Black Stainless-Steel Tumbler - 20 fl oz",
                size: size.Tumbler[1],
                src:
                  "https://globalassets.starbucks.com/assets/6fe6d18b57c54db18c476a0fe9326bf1.jpg?impolicy=1by1_wide_1242",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function Menu({ handelOrders }) {
  return (
    <div className="menu">
      {menu.map((category, index) => (
        <Category category={category} key={index} />
      ))}
    </div>
  );
}

function Category({ category }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        {category.items.map((subCategory, index) => (
          <SubCategory subCategory={subCategory} key={index} />
        ))}
      </div>
    </div>
  );
}

function SubCategory({ subCategory }) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        {subCategory.items.map((type, index) => (
          <Type type={type} key={index} />
        ))}
      </div>
    </div>
  );
}

function Type({ type }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ fontSize: "1.2rem", padding: "10px", width: "150px" }}>
        {type.type}
      </div>
      <div className="menu-item-list">
        {type.items.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
