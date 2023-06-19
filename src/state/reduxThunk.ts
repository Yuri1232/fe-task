import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Email } from "./emailSlice";

export const fetchEmails = createAsyncThunk("emails/fetchEmails", async () => {
  try {
    const response: AxiosResponse<Email> = await axios.get(
      `${process.env.REACT_APP_BASE_URL}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const saveEmails = createAsyncThunk(
  "emails/fetchEmails",
  async (email: Email) => {
    try {
      await axios.put(`${process.env.REACT_APP_BASE_URL}`, email);
    } catch (error) {
      console.log(error);
    }
  }
);
