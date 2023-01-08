import { createSlice } from "@reduxjs/toolkit";
import users from "../utils/users";

const initialState = {
  users: users,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  }
})

export default userSlice.reducer;