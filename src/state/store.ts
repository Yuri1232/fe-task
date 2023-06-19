import { configureStore } from "@reduxjs/toolkit";
import { emailSlice } from "./emailSlice";
import menuSlice from "./menuSlice";

const store = configureStore({
  reducer: {
    emails: emailSlice.reducer,
    menu: menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
