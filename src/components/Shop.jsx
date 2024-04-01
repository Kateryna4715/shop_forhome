import Category from "./Category";
import Item from "./Item";

import "./shop.css";
import { categoriesList, itemsList } from "../data/shopData";

function Shop() {
  return (
    <div className="shop">
      <aside>
        <ul>
          {categoriesList.map((cat, i) => (
            <Category category={cat.name} link={cat.link} key={i} />
          ))}
        </ul>
      </aside>
      <div className="items-list">
        {itemsList.map((item) => (
          <Item
            image={item.img}
            desc={item.title}
            price={item.price}
            shipping={item.shipping}
            key={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
