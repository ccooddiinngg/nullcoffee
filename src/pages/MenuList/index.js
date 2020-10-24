import React, { useContext, useEffect, useState } from "react";
import LeftNav from "../../components/LeftNav";
import MenuItem from "../../components/MenuItem";
import ProductContext from "../../context/ProductContext";
import "./index.css";

export default function MenuList() {
  const { Menu } = useContext(ProductContext);
  const [menu, setMenu] = useState(Menu);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filterMenu = () => {
      if (filter) {
        const newMenu = Menu.filter((item) => item.category === filter);
        setMenu(newMenu);
      }else {
        setMenu(Menu)
      }
    };
    filterMenu();
  }, [filter,Menu]);

  return (
    <div className="menu-list-container">
      <LeftNav setFilter={setFilter} />
      <div className="menu-category">
        {menu && menu.map((item, i) => <MenuItem item={item} key={i} />)}
      </div>
    </div>
  );
}
