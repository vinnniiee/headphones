import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

const initialState: { userInfo: User | null } = {
  userInfo:
    (localStorage.getItem("userInfo") &&
      JSON.parse(localStorage.getItem("userInfo")!)) ||
    null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      state.userInfo = userInfo;
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
