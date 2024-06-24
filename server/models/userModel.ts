import mongoose, { Document, Schema, Model, model, ObjectId } from "mongoose";
import bcrypt from "bcryptjs";
// Interface for User
interface IUser extends Document {
  _id:ObjectId;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  matchPassword:(password:string)=>Promise<boolean>;
}

// Schema for User
const userSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password,this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

// Create User model
const User: Model<IUser> = model<IUser>("User", userSchema);

export default User;
export { IUser };
