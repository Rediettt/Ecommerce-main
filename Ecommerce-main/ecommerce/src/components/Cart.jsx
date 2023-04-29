import React from "react";

function Cart({}) {
  return (
    <div className="h-[80%] w-full">
      <div className="w-full bg-black text-white h-[5%] flex justify-between">
        <p className="mx-4 my-2">CART</p>
        <div className="mx-4 my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
      <div className="w-full bg-slate-800 h-[95%] overflow-scroll flex justify-center">
        <div className="w-[96%]">
          <div className="h-[70%] flex items-center justify-center">
            <div className="w-[96%] py-6 px-8 bg-gray-200 text-center">Cart is currently in development</div>
          </div>
          <div className="w-full bg-white h-[2px]"></div>
          <div className="w-full h-[30%] text-white flex justify-center">
            <div className="w-[96%]">
              <button className="bg-gray-200 w-full h-[25%] text-black my-2">
                PURCHASE
              </button>
              <div className="my-3 flex justify-center">
                <div>
                  <div>Price: 800ETB</div>
                  <div>Coupons: NONE</div>
                  <div>VAT(15%): 100ETB </div>
                  <div>TOTAL: 900ETB </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
