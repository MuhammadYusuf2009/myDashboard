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
    deletePlan(state, action) {
      const { date, monthKey } = action.payload;
      if (state.plans[monthKey]) {
        delete state.plans[monthKey][date];
      }
    },
  },
});

export const { savePlan, deletePlan } = planSlice.actions;
export default planSlice.reducer;
