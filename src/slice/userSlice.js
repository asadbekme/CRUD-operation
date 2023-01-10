import { createSlice } from "@reduxjs/toolkit";
import users from "../utils/users";

const initialState = {
  users: users,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => { 
      // console.log(action.payload);
      state.users = [ ...state.users, action.payload ];
    },
    editUser: (state, action) => {
      const { id, username, email } = action.payload;
      const existingUser = state.users.find((user) => user.id === Number(id));
      if (existingUser) {
        existingUser.username = username;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        return state.users.filter((user) => user.id !== id);
      }
    }
  }
})

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;