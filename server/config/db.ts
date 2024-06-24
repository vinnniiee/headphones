import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("MONGO_URI is not provided");
}
// console.log("######################################\n",MONGO_URI);

export const dbConnect = async () => {
  console.log("Connecting to database...")
  await mongoose
    .connect(MONGO_URI)
    .then((con) => {
      console.log("MongoDB connection established: ", con.connection.host);
    })
    .catch((e) => {
      console.log("Server stopped running!\n",e.message);
      throw new Error(e.message);
    });
};
