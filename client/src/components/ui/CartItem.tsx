import React from "react";
import { ICartItem, updateCart } from "../../slices/cartSlice";
import { Image } from "react-bootstrap";
import SelectQuantity from "../SelectQuantity";
import TrashIcon from "../assets/TrashIcon";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between  items-center h-36  md:h-24 w-full shadow-b rounded overflow-hidden ">
      <div className="flex justify-center items-center gap-2 w-full">
        <div className="w-[100px] h-[100px] rounded">
          <Image
            src={cartItem.image}
            className="rounded min-w-[100px] min-h-[100px]"
          />
        </div>
        <div className="flex flex-col w-full md:flex-row justify-start pb-2 items-start md:items-center gap-2 overflow-hidden">
          <div className="flex flex-col w-full justify-center items-start overflow-hidden">
            <p className="text-xs text-black/60">{cartItem.brand}</p>
            <p className="text-sm tracking-tighter text-black/80 w-full whitespace-nowrap overflow-hidden text-ellipsis">
              {cartItem.name}
            </p>
            <p className="flex gap-0.5">
              <img src="rupee-icon.svg" alt="rupee" />
              {cartItem.price}
            </p>
          </div>
          <div className="flex  mb-1 justify-around  items-center w-full gap-4">
            <div className="w-full">
              <SelectQuantity
                className="w-16 lg:w-24 h-6 text-sm"
                iconSize="sm"
                height={6}
                cartItem={cartItem}
              />
            </div>
            <div className="w-full">
              <TrashIcon
                className="cursor-pointer"
                onClick={() =>
                  dispatch(updateCart({ ...cartItem, quantity: 0 }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
