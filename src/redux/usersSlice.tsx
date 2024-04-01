import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiLink } from "../pages/api_Links";
import axios from "axios";
export interface userprops{
  Category:string;
  subCategory:string;
  priority:string;
  Agent:string;
  Requester:string;
  SRNumber:string;
}
interface userstate{
  users:userprops[];
}
//initialState
const initialState:userstate
 = {  users: [] };

//read
export let getuser = createAsyncThunk("user/get", async () => {
  let { data } = await axios.get(
    apiLink,
    );

  return data;
});
//delete
export let deluser = createAsyncThunk("user/delete", async (id:string|number) => {
  let { data } = await axios.delete(
    apiLink+`/${id}`,
  
  );
  return data;
});

export const usersSlice = createSlice(
  {
    name: "user",
    initialState,
    reducers:{},
    extraReducers: (bulider) => {
      bulider.addCase(deluser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
      bulider.addCase(getuser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
      // bulider.addCase(adduser.fulfilled, (state, action) => {
      //   state.users = action.payload;
      // });
    }
  }
);

export let userreducer = usersSlice.reducer;
