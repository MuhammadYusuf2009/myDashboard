import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: {},
};

const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    savePlan(state, action) {
      const { date, monthKey, text } = action.payload;
      if (!state.plans[monthKey]) {
        state.plans[monthKey] = {};
      }
      state.plans[monthKey][date] = text;
    },
  },
});

export const { savePlan } = planSlice.actions;
export default planSlice.reducer;
