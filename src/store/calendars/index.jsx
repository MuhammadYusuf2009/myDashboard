import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plans: {},
};

const calendarSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    savePlan: (state, action) => {
      const { monthKey, date, text, startTime, endTime } = action.payload;

      if (!state.plans[monthKey]) {
        state.plans[monthKey] = {};
      }

      state.plans[monthKey][date] = {
        text,
        startTime,
        endTime,
      };
    },

    deletePlan: (state, action) => {
      const { monthKey, date } = action.payload;

      if (state.plans[monthKey] && state.plans[monthKey][date]) {
        delete state.plans[monthKey][date];
      }
    },
  },
});

export const { savePlan, deletePlan } = calendarSlice.actions;
export default calendarSlice.reducer;
