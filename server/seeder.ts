import dotenv from "dotenv";
dotenv.config();
import products from "./data/products";
import users from "./data/users";
import Product from "./models/productModel";
import User from "./models/userModel";
import Order from "./models/orderModel";
import { dbConnect } from "./config/db";

const run = async () => {
  await dbConnect();

  const populate = async () => {
    try {
      // Clear existing data
      await User.deleteMany();
      await Product.deleteMany();
      await Order.deleteMany();

      // Insert new data
      const savedUsers = await User.insertMany(users);
      const user = savedUsers[0]._id;
      const formattedProducts = products.map((p) => {
        return { ...p, user };
      });
      await Product.insertMany(formattedProducts);

      console.log("Data Populated!");

      process.exit(0);
    } catch (e) {
      console.log(`${e}`);
      process.exit(1);
    }
  };

  const destroy = async () => {
    try {
      // Ensure await is used with async operations
      await User.deleteMany();
      await Product.deleteMany();
      await Order.deleteMany();

      console.log("Data Erased!");

      process.exit(0);
    } catch (e) {
      console.log(`${e}`);
      process.exit(1);
    }
  };

  if (process.argv[2] === "-d") {
    destroy();
  } else {
    populate();
  }
};

run();
