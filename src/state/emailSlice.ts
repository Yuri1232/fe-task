import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchEmails, saveEmails } from "./reduxThunk";
import { RootState } from "./store";

export interface Email {
  email: string;
}
interface EmailState {
  email: Email;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: EmailState = {
  email: { email: "" },
  loading: false,
  error: null,
  success: false,
};

export const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveEmails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(saveEmails.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(fetchEmails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch emails";
        state.success = false;
      });
  },
});

export const selectEmails = (state: RootState) => state.emails.email;
export const selectLoading = (state: RootState) => state.emails.loading;
export const selectError = (state: RootState) => state.emails.error;
export const selectSuccess = (state: RootState) => state.emails.success;
