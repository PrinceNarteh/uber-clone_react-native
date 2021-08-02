import { createSlice } from "@reduxjs/toolkit";

interface IState {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
}

const initialState: IState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {},
    setTravelTimeInformation: (state, action) => {},
  },
});
