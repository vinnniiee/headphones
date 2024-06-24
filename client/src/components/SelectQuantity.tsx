import { ICartItem, updateCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

type Size =
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

const SelectQuantity = ({
  cartItem,
  className,
  iconSize = "2xl",
  height=16
}: {
  cartItem: ICartItem;
  className?: string;
  iconSize?: Size;
  height?:number;
}) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`relative  flex justify-around w-full  items-center h-${height} rounded   shadow-sm ${className}`}
    >
      <button
        className={`h-full rounded-l bg-black w-full text-${iconSize}  text-white `}
        onClick={() =>
          dispatch(updateCart({ ...cartItem, quantity: cartItem.quantity - 1 }))
        }
      >
        -
      </button>
      <p className="bg-white h-full flex justify-center items-center w-full">
        {cartItem.quantity}
      </p>
      <button
        className={`h-full bg-black w-full rounded-r text-${iconSize}  ${
          cartItem.quantity >= cartItem.countInStock
            ? "text-gray-300/80"
            : "text-white"
        }`}
        onClick={() =>
          dispatch(updateCart({ ...cartItem, quantity: cartItem.quantity + 1 }))
        }
        disabled={cartItem.quantity >= cartItem.countInStock}
      >
        +
      </button>
      {cartItem?.quantity === cartItem?.countInStock && (
        <p className={`absolute  text-xs text-black/70 tracking-tighter`}
        style={{ top: `${4*height}px` }}>
          Max qty.
        </p>
      )}
    </div>
  );
};

export default SelectQuantity;
