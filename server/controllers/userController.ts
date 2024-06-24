// import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/generateToken";
import asyncHandler from "../middlewares/asyncHandler";

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(200).json(users);
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userExists = await User.findById(userId).select('-password');
  if (userExists) {
    res.status(200).json(userExists);
  } else {
    res.status(400);
    throw new Error("Incorrect username or password.");
  }
};

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const user = req.body;
  const userExists = await User.findOne({ email: user.email });
  if (!userExists) {
    const newUser = await User.create(user);
    newUser.save();
    await generateToken(res, newUser._id);
    res.send(newUser);
  } else {
    res.status(400);
    throw new Error("This email is already registered.");
  }
});

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.json(user);
  } else {
    res.status(400);
    throw new Error("Invalid email or password.");
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req: Request, res: Response) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = req.user;

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.user!._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userExist = await User.findById(userId);
  if (!userExist) {
    res.status(400);
    throw new Error("This user does not exist");
  }
  if(userExist.isAdmin){
    res.status(400);
    throw new Error("Can't delete admin user.");
  }
  await User.deleteOne({ _id: userId });
  res.send(204);
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
