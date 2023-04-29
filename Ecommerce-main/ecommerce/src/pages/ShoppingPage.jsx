import React from "react";
import Shop from "../components/Shop";
import Class from "../components/Class";
import Cart from "../components/Cart";
import { useLocation } from "react-router-dom";

function ShoppingPage({ tab, setTab }) {
  const location = useLocation()
  const navTab = location.state == null ? { id: 1 } : location.state.tabNumber;
  // setTab(navTab)
  return (
    <div className="my-4 mx-4 flex justify-center h-screen">
      <div className="md:space-x-12 md:w-[70%] md:flex md:justify-center">
        <div className="md:w-[70%]">
        <Class navTab = {navTab} tab={tab} setTab={setTab} />
        <Shop tab={tab} />
        </div>
        <div className="w-[30%] mt-[7%] invisible md:visible">
          <Cart/>
        </div>
      </div>


    </div>
  );
}

export default ShoppingPage;
