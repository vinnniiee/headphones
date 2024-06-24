import BookmarkIcon from "./assets/BookmarkIcon";
import Ratings from "./ui/Ratings";
import CartIcon from "./assets/CartIcon";
import { Image } from "react-bootstrap";
import { Product } from "../types/product";
import SelectQuantity from "./SelectQuantity";
import { useDispatch, useSelector } from "react-redux";
import { ICartItem, updateCart } from "../slices/cartSlice";
import { RootState } from "../store";
import Meta from "./Meta";
import { useNavigate } from "react-router-dom";

const ProductDescription = ({ p }: { p: Product }) => {
  const { cartItem }: { cartItem: ICartItem | undefined } = useSelector(
    (state: RootState) => {
      return {
        cartItem: state.cart.items.find((it) => it._id === p._id),
      };
    }
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-[1000px]">
      <Meta title={p.name} />
      <Image
        src={p.image}
        alt="product"
        fluid
        className="md:w-1/2 min-w-[300px] rounded shadow-sm"
      />
      <div className="relative min-w-1/2 md:w-1/2 justify-between rounded p-2 pb-5 overflow-hidden flex flex-col bg-white shadow-md ">
        <BookmarkIcon className="absolute right-2 top-2" />
        <div className="flex flex-col  p-2">
          <div className=" flex flex-col justify-center  text-black items-start ">
            <div className="flex flex-col justify-start items-start">
              <p className="text-black/40 text-sm">{p.brand}</p>
              <div className="overflow-hidden">
                <p className="text-black/75 text-lg leading-5 mt-1 mr-14 overflow-hidden">
                  {p.name}
                </p>
              </div>
              <div className="flex justify-center items-center gap-1 my-2">
                <Ratings rating={p.rating} />
                <p className="text-2xs text-black/70 flex h-4 mt-0.5 tracking-tighter">
                  {p.numReviews} reviews
                </p>
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="flex gap-1 my-2">
                  <img src="/rupee-icon.svg" alt="rupee" />
                  <p
                    className={`${
                      p.countInStock === 0 && "line-through text-black/50"
                    }`}
                  >
                    {p.price}
                  </p>
                </div>
                <div>
                  <p className="text-black/70">
                    {p.countInStock > 0 ? "In stock." : "Out of stock."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm my-4 text-black/80 leading-5 md:w-4/5">
            {p.description}
          </p>
          <div className="w-full flex flex-col md:flex-row  justify-between gap-2 items-center">
            {cartItem?.quantity! > 0 && (
              <button
                onClick={() => navigate("/shipping")}
                className={`flex justify-center items-center  h-16 text-white bg-black 
            w-full  rounded-sm uppercase disabled:${
              p.countInStock === 0 ? "line-through" : "bg-gray-700"
            }`}
              >
                <p className="h-8 -mb-0.5 leading-8">buy now</p>
              </button>
            )}

            <div className="relative w-full h-full  bg-black rounded-sm flex justify-center items-center">
              {!cartItem ? (
                <button
                  className="flex w-full uppercase justify-center  items-center text-sm gap-2
             text-white  h-16  rounded-sm disabled:line-through"
                  disabled={p.countInStock === 0}
                  onClick={() => dispatch(updateCart({ ...p, quantity: 1 }))}
                >
                  <CartIcon color="white" className="h-8" />
                  Add to Cart
                </button>
              ) : (
                <SelectQuantity
                  className="text-xl"
                  height={16}
                  cartItem={cartItem}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
