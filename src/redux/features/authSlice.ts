import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserData = {
  email: string;
  name: string;
};

type AuthState = {
  isAuthenticated: boolean;
  userData: UserData | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;