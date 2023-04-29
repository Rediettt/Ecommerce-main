import React from "react";
import clothingItems from "../api/items";
import menClothingItems from "../api/men";
import childrenClothingItems from "../api/children";
import Card from "./Card";

function Shop({ tab}) {
  return (
    <div className="grid md:grid-cols-4 md:space-x-12 p-4 bg-slate-800 text-white h-[550px] md:h-[80%] overflow-scroll w-[400px] md:w-full justify-center">
      {tab == 1 ? (
        clothingItems.map((item) => {
          return (
            <Card image={item.img} type={item.type} designer={item.designer} />
          );
        })
      ) : (
        <></>
      )}

      {tab == 2 ? (
        menClothingItems.map((item) => {
          return (
            <Card image={item.img} type={item.type} designer={item.designer} />
          );
        })
      ) : (
        <></>
      )}

      {tab == 3 ? (
        childrenClothingItems.map((item) => {
          return (
            <Card image={item.img} type={item.type} designer={item.designer} />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default Shop;
