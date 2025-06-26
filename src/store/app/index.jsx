import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
};

const { actions: appActions, reducer } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setIsAuth(state, { payload }) {
      state.isAuth = payload;
    },
    reset(state) {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export { appActions, reducer as default };
