import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartItem from "../components/ui/CartItem";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  let itemsList;

  if (cart.items.length === 0) {
    itemsList = (
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="mt-16">Your cart is empty.</p>
        <Link to="/" className="p-2 bg-black text-white rounded-sm text-sm">
          Explore
        </Link>
      </div>
    );
  } else {
    itemsList = cart.items.map((it) => <CartItem cartItem={it} />);
  }
  return (
    <div className="w-full rounded shadow sm:px-4 py-8">
      <h2 className="text-5xl ml-4 mt-2  text-black w-full whitespace-nowrap mb-2">
        MY CART
      </h2>
      <div className="text-black flex-col md:flex-row flex justify-between items-start w-full  gap-4">
        <div className="flex w-full md:w-2/3 shadow rounded p-2  justify-center items-center">
          <div
            className="flex   flex-col justify-start gap-4 items-center w-full
          min-h-[200px] md:max-h-[300px] max-h-[600px]  overflow-y-auto scrollbar-thin"
          >
            {itemsList}
          </div>
        </div>
        <div className="w-full p-4 px-3 md:w-1/3 shadow flex flex-col justify-start items-start gap-4 rounded">
          <h2 className="uppercase w-full text-xl border-b-2">Order details</h2>
          <div className="w-full flex flex-col justify-start items-end gap-4">
            <div className="w-full flex justify-between items-center">
              <p>Subtotal</p>
              <p className="flex gap-0.5">
                <img src="rupee-icon.svg" alt="rupee" />
                {cart.itemsPrice}
              </p>
            </div>
            <Link to="/shipping">
              <Button className="w-full" disabled={cart.items.length === 0}>
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
